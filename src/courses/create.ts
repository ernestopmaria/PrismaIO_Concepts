import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function main() {
    const result = await prisma.courses.create({
        data:{
            name: "SQL",
            duration:100,
            description:"Formação em SQL e PHP",
            teacher:{
                connectOrCreate:{
                    where:{
                        name:"Anderson"
                    },
                    create:{
                        name:"Anderson"
                    }
                }
            }
            
        }
        
    })

    console.log(result)
    return result
}

main()
