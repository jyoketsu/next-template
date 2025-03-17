import { DownloadRemote } from "./download-remote";
import { DownloadZip } from "./download-zip";

export default function Page() {
  return (
    <div className="w-full space-y-6">
      <DownloadRemote />
      <DownloadZip />
    </div>
  );
}
