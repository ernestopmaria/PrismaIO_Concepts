import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function main() {
    const result = await prisma.courses.create({
        data:{
            name: "DBeaver",
            duration:100,
            description:"Formação em Prisma",
             fk_id_teacher:"a8a2a864-ca18-4a0a-bf3b-9022e2f94650"        
            
            
        }
        
    })

    console.log(result)
    return result
}
main()