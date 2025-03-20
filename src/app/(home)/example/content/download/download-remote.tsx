"use client";

import { Button } from "@/components/ui/button";

export function DownloadRemote() {
  const handleDownload = async () => {
    const response = await fetch("/api/download");
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "test.svg";
    link.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full pb-6 border-b">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-6">
        Download remote
      </h3>
      <Button onClick={handleDownload}>Download</Button>
    </div>
  );
}
