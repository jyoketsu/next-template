import Link from "next/link";

export default function Page() {
  let photos = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <section className="cards-container grid grid-cols-[repeat(3,200px)] gap-[16px]">
      {photos.map((id) => (
        <Link
          className="flex justify-center items-center h-[200px] bg-gray-200 rounded-md"
          key={id}
          href={`/example/intercepting-routes-demo/photos/${id}`}
          passHref
        >
          {id}
        </Link>
      ))}
    </section>
  );
}
