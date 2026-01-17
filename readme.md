# Proyecto Fullstack Clean Architecture

Proyecto fullstack con **Node.js (Clean Architecture)** + **React** + **PostgreSQL + MongoDB** + **JWT + Emails + WebSockets + GraphQL**.

---

## 📁 Estructura de carpetas

```txt
root/
├── backend/
│   ├── src/
│   │   ├── application/            # Casos de uso (Use Cases)
│   │   │   └── useCases/
│   │   ├── domain/                 # Entidades, reglas de negocio, interfaces
│   │   │   └── errors/
│   │   ├── infrastructure/         # Implementaciones concretas
│   │   │   ├── database/
│   │   │   │   ├── mongo/
│   │   │   │   └── postgres/
│   │   │   ├── auth/               # JWT, OAuth, bcrypt
│   │   │   ├── graphql/            # TypeDefs y resolvers
│   │   │   ├── http/               # REST controllers, middlewares, validators
│   │   │   ├── websocket/          # Socket.io server
│   │   │   └── services/           # Emails, APIs externas
│   │   ├── shared/                 # Tipos, errores genéricos, utils
│   │   └── main.ts                 # Punto de entrada del backend
│   └── package.json
└── frontend/
    ├── src/
    │   ├── api/                    # Funciones para llamadas a backend (REST / GraphQL)
    │   ├── components/             # Componentes reutilizables
    │   ├── pages/                  # Páginas
    │   ├── hooks/                  # Hooks personalizados
    │   ├── context/                # Contextos (Auth, UI, etc.)
    │   └── routes/                 # Rutas
    └── package.json


##  Comandos


```bash
npm install
npm run dev

cd backend
npm install
npm run dev
 

 cd frontend
npm install
npm run dev

```