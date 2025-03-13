export async function POST(request: Request) {
  const { query } = await request.json();

  // 调用内部服务
  const internalRes = await fetch("http://47.116.36.142:18887/v1/chat_stream", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });

  return new Response(internalRes.body, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
    },
  });
}
