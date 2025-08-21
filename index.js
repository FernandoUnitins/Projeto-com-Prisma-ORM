import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Criar um curso
  const course = await prisma.courses.create({
    data: {
      name: 'Programação Web II',
      description: 'Curso de Node.js + Prisma + PostgreSQL',
      duration: 40,
    },
  });

  console.log('Novo curso:', course);

  // Buscar todos os cursos
  const allCourses = await prisma.courses.findMany();
  console.log('Todos os cursos:', allCourses);
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
