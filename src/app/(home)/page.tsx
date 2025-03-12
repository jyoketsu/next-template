export default function Home() {
  return (
    <div className="w-full p-5">
      <div className="w-full my-20">
        {/* 
          bg-clip-text：将背景（如渐变、图片等）裁剪到文字的形状上，从而实现文字背景效果。
          text-transparent：使文字透明，以显示背景渐变。 
        */}
        <h1 className="text-6xl text-center font-bold tracking-tighter bg-gradient-to-r from-primary to-primary/20 bg-clip-text text-transparent">
          Next.js Template
        </h1>
      </div>
    </div>
  );
}
