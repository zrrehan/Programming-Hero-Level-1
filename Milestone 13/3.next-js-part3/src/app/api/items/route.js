export async function GET() {
    const data = {
        message: "hello world", 
        status: 200
    }

    return Response.json({ data })
}
