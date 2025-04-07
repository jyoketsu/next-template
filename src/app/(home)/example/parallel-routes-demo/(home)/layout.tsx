export default function Layout({
  children,
  slot1,
  slot2,
}: Readonly<{
  children: React.ReactNode;
  slot1?: React.ReactNode;
  slot2?: React.ReactNode;
}>) {
  return (
    <div className="w-full h-50 md:h-100 grid grid-cols-3 gap-3">
      <div className="border rounded-md flex justify-center items-center">
        {children}
      </div>
      <div className="border rounded-md flex justify-center items-center">
        {slot1}
      </div>
      <div className="border rounded-md flex justify-center items-center">
        {slot2}
      </div>
    </div>
  );
}
