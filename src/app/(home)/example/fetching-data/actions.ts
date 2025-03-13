"use server";

export async function serverActionsExample(formData: FormData) {
  try {
    // 处理业务逻辑
    console.log("FormData contents:");
    formData.forEach((value, key) => console.log(key, value));

    // 或者调用外部后端接口
    // const response = await fetch("http://47.116.36.142:18887/v1/upload", {
    //   method: "POST",
    //   body: formData,
    // });

    // if (!response.ok) {
    //   throw new Error(`error: ${response.statusText}`);
    // }

    // return await response.json();
  } catch (error) {
    throw new Error("error");
  }
}
