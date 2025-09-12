export default async function GET() {
    return Response.json({
      status: 200,
      body: {
        name: "john doe"
      },
    });
  }