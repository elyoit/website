import Link from "next/link";
import Image from "next/image";
import { photoCategories } from "./data";

export default function PhotographyPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <Link href="/" className="text-sm underline">← Back to Portfolio</Link>
      <h1 className="text-4xl font-light mt-6 mb-2">Photography</h1>
      <p className="text-neutral-500 mb-12">
        A collection of architectural and experimental photography exploring light, space, and material.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {photoCategories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/photography/${cat.slug}`}
            className="group relative block overflow-hidden aspect-[4/3]"
          >
            <Image
              src={cat.cover}
              alt={cat.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            <h2 className="absolute bottom-4 left-4 text-white text-xl font-light">
              {cat.title}
            </h2>
          </Link>
        ))}
      </div>
    </main>
  );
}
