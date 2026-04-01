import CloseButton from "./close-button";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="relative bg-white size-[200px] flex justify-center items-center p-8 rounded-lg">
        <h1>{id}</h1>
        <CloseButton />
      </div>
    </div>
  );
}
