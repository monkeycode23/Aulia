import { PrismaClient } from '../generated/prisma/client';

import {prisma} from "../src/infrastructure/database/ps/prisma"
 

async function main() {
  // Crear roles
  const roles = await prisma.role.createMany({
    data: [
      { name: "USER" },
      { name: "ADMIN" },
      { name: "MOD" },
       { name: "SECRETARY" },
       { name: "CONSUL" },
       { name: "DIRECTIVE_ADMIN" },
       { name: "SCHOOL_ADMIN" },
       { name: "PARENT" },
    ],
    skipDuplicates: true,
  });

  // Crear permisos
  const permissions = await prisma.permission.createMany({
    data: [
      { name: "USER_CREATE" },
      { name: "USER_EDIT" },
      { name: "USER_GET" },
      { name: "USER_DELETE" },

      { name: "GROUP_DELETE" },
      { name: "GROUP_CREATE" },
      { name: "GROUP_EDIT" },
      { name: "GROUP_GET" },

      { name: "TEACHER_DELETE" },
      { name: "TEACHER_CREATE" },
      { name: "TEACHER_EDIT" },
      { name: "TEACHER_GET" },

      { name: "STUDENT_DELETE" },
      { name: "STUDENT_CREATE" },
      { name: "STUDENT_EDIT" },
      { name: "STUDENT_GET" },

      { name: "SCHEDULE_DELETE" },
      { name: "SCHEDULE_CREATE" },
      { name: "SCHEDULE_EDIT" },
      { name: "SCHEDULE_GET" },

      { name: "SUBJECT_DELETE" },
      { name: "SUBJECT_CREATE" },
      { name: "SUBJECT_EDIT" },
      { name: "SUBJECT_GET" },

      { name: "EVENT_DELETE" },
      { name: "EVENT_CREATE" },
      { name: "EVENT_EDIT" },
      { name: "EVENT_GET" },


      { name: "PARENT_DELETE" },
      { name: "PARENT_CREATE" },
      { name: "PARENT_EDIT" },
      { name: "PARENT_GET" },

      

    ],
    skipDuplicates: true,
  });

  console.log("Base de datos inicializada!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect()); 
