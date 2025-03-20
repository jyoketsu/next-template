"use client";

import { Button } from "@/components/ui/button";
import JSZip from "jszip";

export function DownloadZip() {
  const handleDownload = async () => {
    const zip = new JSZip();

    try {
      // 并行获取所有文件
      const promises = [1, 2].map(async (file, index) => {
        const response = await fetch("/api/download");
        const blob = await response.blob();
        zip.file(`test${index + 1}.svg`, blob);
      });

      await Promise.all(promises);

      // 生成压缩包
      const content = await zip.generateAsync({ type: "blob" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(content);
      link.download = "download_zip.zip";
      link.click();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full pb-6 border-b">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-6">
        Download zip
      </h3>
      <Button onClick={handleDownload}>Download</Button>
    </div>
  );
}
