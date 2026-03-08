import {db} from '@lib/db'

export async function  GET() {
    const resume=await db.resume.findMany()
    return new Response(JSON.stringify(resume))
}