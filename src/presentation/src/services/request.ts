import axios from "axios";
import { useAuthStore } from "../store/auth.store";


export type TRequestMethod = "GET" | "POST" | "PUT" | "DELETE";


const API_BASE_URL = /* import.meta.env.VITE_API_URL ||  */"http://localhost:2567/api";



const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


api.interceptors.request.use(
  (config) => {
    
    
    const token = useAuthStore.getState().token;
   // console.log(token)

    if (token) {  
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);



api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (!error.response) return Promise.reject(error);

    const data = error.response.data;

   // console.log(data,"intercepto")
  
     if (data.errors.session || data?.errors?.token === "expired" ) {
      const { setToken, logout } = useAuthStore.getState();

      try {
       
        const refreshRes = await api.get("/auth/refresh",);

        console.log(refreshRes,"refreshRes")

        const newAccess = refreshRes.data.token;
        //const newRefresh = refreshRes.data.data.refreshToken;

        
        setToken(newAccess);

       
        error.config.headers.Authorization = `Bearer ${newAccess}`;
       
        return api(error.config);

      } catch (refreshErr) {
        console.log("Refresh token inválido → logout forzado");

        logout();
        //window.location.href = "/login";

        return Promise.reject(refreshErr);
      }
    } 

    return Promise.reject(error);
  }
);




interface RequestOptions<T = any> {
  method?:TRequestMethod 
  url: string;
  data?: T;
  params?: Record<string, any>;
  onSuccess?: (data:any)=>void;
  onError?:(data:any)=>void;
}

interface ApiResponse<T = any> {
  
};

export async function request<T = any>(options: RequestOptions): Promise<any> {
    const res = await api({
      method: options.method || "GET",
      url: options.url,
      data: options.data,
      params: options.params,
    });

    console.log(res)

    return res.data
  
}
