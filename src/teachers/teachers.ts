import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function main() {
    const result = await prisma.teacher.create({
        data:{
            name: "Edmilson de Oliveira",
            
        }
    })

    console.log(result)
    return result
}

main()
