import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    const result = await prisma.courses.create({
        data:{
            name: "Angular",
            duration:100,
            description:"Formação em NodeJs"
        }
    })

    console.log(result)
    return result
}

main()