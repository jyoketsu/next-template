"use server";

export async function postFormData(formData: FormData) {
  try {
    // 处理业务逻辑
    console.log("FormData contents:");
    formData.forEach((value, key) => console.log(key, value));

    // 或者调用外部后端接口
    const response = await fetch("http://47.102.193.24/:18887/v1/upload", {
      method: "POST",
      body: formData,
    });

    const json = await response.json();

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return json;
  } catch (error) {
    console.error("Error processing form data:", error);
    throw new Error("Failed to process form data");
  }
}

export async function createPost(prevState: any, formData: FormData) {
  const title = formData.get("title");
  const content = formData.get("content");

  try {
    const res = await fetch("https://api.vercel.app/posts", {
      method: "POST",
      // @ts-ignore
      body: JSON.stringify({ title, content }),
    });
    const json = await res.json();

    if (!res.ok) {
      return { message: "Failed to create post" };
    }
  } catch (error) {
    return { message: "Failed to create post" };
  }
}
