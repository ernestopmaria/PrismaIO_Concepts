import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


async function update() {
   const course= await prisma.courses.update({
        where:{
            id:"30063136-4c9c-45da-928f-5f7dc1d61c9c"
        },
        data:{
            name:"React",
            description:"Curso de React",
            duration:250
        }
    })
    console.log(course)
    return course
}

update()