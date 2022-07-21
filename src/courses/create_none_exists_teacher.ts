import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function main() {
    const result = await prisma.courses.create({
        data:{
            name: "Elixir",
            duration:100,
            description:"Formação em Elixir",
            teacher:{
                create:{
                    name:"Rafa Camarda"
                }
            }
            
        }
        
    })

    console.log(result)
    return result
}

main()
