import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { photoCategories } from "../data";

export function generateStaticParams() {
  return photoCategories.map((cat) => ({ slug: cat.slug }));
}

export default function PhotoCategoryPage({ params }: { params: { slug: string } }) {
  const category = photoCategories.find((c) => c.slug === params.slug);
  if (!category) notFound();

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <Link href="/photography" className="text-sm underline">← Back to Photography</Link>
      <h1 className="text-4xl font-light mt-6 mb-12">{category.title}</h1>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {category.photos.map((photo) => (
          <div key={photo.src} className="mb-4 break-inside-avoid">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
