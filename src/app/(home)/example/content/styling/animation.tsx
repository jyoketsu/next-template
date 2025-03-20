import { LoaderCircle, ArrowDownCircle } from "lucide-react";

export function Animation() {
  return (
    <div className="w-full pb-6 border-b space-y-6">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Animation
      </h3>
      
      <LoaderCircle className="animate-spin text-sky-500" />

      <ArrowDownCircle className="animate-bounce text-sky-500" />

      <span className="relative flex size-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
      </span>
    </div>
  );
}
