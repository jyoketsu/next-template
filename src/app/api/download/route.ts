export async function GET() {
  try {
    // 修复1：使用fetch获取远程文件内容
    const response = await fetch(
      "https://element-plus.org/images/element-plus-logo.svg"
    );
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    // 修复2：转换响应为Buffer
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const headers = new Headers();
    headers.append("Content-Disposition", 'attachment; filename="test.svg"');
    headers.append("Content-Type", "image/svg+xml"); // 修复3：修正MIME类型

    return new Response(buffer, { headers });
  } catch (error) {
    console.error("下载失败:", error);
    return new Response(JSON.stringify({ error: "文件下载失败" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
