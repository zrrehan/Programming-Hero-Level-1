export async function GET(req, params) {
    const p = await params;
    const data = [{
        message: "hello world",
        status: 200, 
        id: p.params.id
}]

    return Response.json({ data })
}

export async function POST(request) {
    const res = await request.json()
    return Response.json({ res }) 
}


export async function DELETE(req, {params}) {
    const p = await params;
    // p = {id : something}
    return Response.json({ params: p.id })
}

export async function PATCH(req, params) {
    const p = await params;

    return Response.json({ params: p })
}