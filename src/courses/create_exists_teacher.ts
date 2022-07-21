import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function main() {
    const result = await prisma.courses.create({
        data:{
            name: "Adonis 5",
            duration:100,
            description:"Formação em Adonis",
            teacher:{
                connect:{       
                 id:"649d4206-288b-4845-a141-d6da6e6a5476"
                }
            }
            
        }
        
    })

    console.log(result)
    return result
}

main()
