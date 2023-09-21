import Image from "next/image";

export default async function Home() {
  const res = await fetch("https://api.unsplash.com/photos/", {
    method: "GET",
    headers: {
      Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
    },
  });

  const data = await res.json();

  return (
    <main>
      <div className="grid grid-cols-3 gap-5 p-5">
        {data.map((image) => (
          <div key={image.id} className="relative w-full h-96 max-w-md">
            <Image
              alt={image.alt_description}
              src={image.urls.regular}
              fill
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
