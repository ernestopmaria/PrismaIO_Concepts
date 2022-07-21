import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function index() {
    const result = await prisma.courses.findMany({
        include:{
            teacher:true
        },
        orderBy:{
            name: 'desc'
        }
    })

    console.log(result)
    return result
    
}
index()
