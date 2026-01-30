# Requerimientos de la App de Gestión Escolar

## 1️⃣ Gestión de Usuarios
- Registro y login de usuarios (docentes, administrativos, directores)  
- Roles y permisos:
  - Administrador / Director
  - Docente
  - Estudiante (opcional para portal de estudiante)
  - Staff administrativo  
- Cada usuario debe estar asociado a una **persona** (datos personales)  
- Usuarios con rol director pueden crear y administrar la **escuela**  

## 2️⃣ Gestión de Escuelas
- Crear y editar información de la escuela:
  - Nombre, código, dirección, contacto, ciudad, país  
  - Logo, tipo de escuela  
- Cada escuela tiene:
  - **Grados**
  - **Grupos**
  - **Aulas**
  - **Materias**
  - **Usuarios asociados** (docentes, staff, director)  

## 3️⃣ Gestión de Estudiantes
- Crear, editar y eliminar estudiantes  
- Matrícula por año lectivo:
  - Asociada a **escuela** y **grupo**
  - Estado de matrícula: activa, suspendida, retirada, graduada  
- Datos del estudiante:
  - Nombre, correo, fecha de nacimiento, dirección  
  - Historial académico (matrículas, notas, asistencia)  

## 4️⃣ Gestión de Maestros / Docentes
- Crear, editar y eliminar docentes  
- Asociar docentes a materias y grupos por año lectivo  
- Guardar historial de materias impartidas  
- Datos del docente:
  - Especialidad
  - Fecha de contratación / término  
  - Estado activo/inactivo  

## 5️⃣ Gestión de Materias
- Crear, editar y eliminar materias  
- Asociar materias a **grados** y **grupos**  
- Asignar docentes a materias por grupo y año lectivo  
- Definir códigos y descripciones de materia  

## 6️⃣ Gestión de Grupos y Grados
- Crear, editar y eliminar **grados**  
- Crear, editar y eliminar **grupos** dentro de cada grado (ej: 3A, 3B)  
- Asociar estudiantes y docentes a los grupos  
- Cada grupo tiene:
  - Materias asignadas
  - Aulas asignadas
  - Docentes responsables  

## 7️⃣ Gestión de Aulas
- Crear, editar y eliminar aulas  
- Asociar aulas a grupos y materias  
- Opcional: capacidad y recursos del aula  

## 8️⃣ Staff Administrativo
- Crear y gestionar staff administrativo  
- Asignar permisos según funciones: registro de estudiantes, gestión de notas, reportes, horarios  

## 9️⃣ Programación de Clases / Horarios
- Crear horarios de clases para cada grupo y materia  
- Asociar docente, aula y grupo a cada horario  
- Evitar conflictos de horario (misma aula o docente)  

## 🔟 Notas y Evaluaciones
- Registrar notas por materia y estudiante  
- Registrar asistencia  
- Definir tipo de evaluación (examen, tarea, participación)  
- Calcular promedio por materia y promedio general  

## 1️⃣1️⃣ Reportes y Estadísticas
- Reportes de estudiantes:
  - Listado por grupo, grado o escuela
  - Historial académico
  - Promedios y notas
  - Asistencia  
- Reportes de docentes:
  - Materias impartidas
  - Horario
- Reportes de grupo/grado:
  - Promedios generales
  - Horarios de clase  
- Exportar reportes en PDF o Excel  

## 1️⃣2️⃣ Funcionalidades Adicionales
- Dashboard central con resumen de:
  - Cantidad de estudiantes, docentes, materias, grupos  
  - Próximas clases
  - Alertas de tareas pendientes o notas sin registrar  
- Validaciones y alertas para:
  - Matrículas duplicadas
  - Conflictos de horarios
  - Materias sin docente asignado  

## 2️⃣ Requerimientos No Funcionales
- Multi-tenant: cada escuela con sus propios datos  
- Seguridad: roles y permisos bien definidos  
- Registro de auditoría: historial de cambios en estudiantes, notas y materias  
- Escalable: poder agregar nuevas escuelas y usuarios sin conflictos  
- Accesible desde web y dispositivos móviles (responsive)  
- Rendimiento: consultas rápidas de estudiantes, notas y reportes  
