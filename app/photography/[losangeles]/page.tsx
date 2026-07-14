import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { photoCategories } from '@/lib/photography';

export function generateStaticParams() {
  return photoCategories.map((cat) => ({ slug: cat.slug }));
}

export default async function PhotoCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = photoCategories.find((c) => c.slug === slug);
  if (!category) notFound();

  return (
    <main className="max-w-6xl mx-auto px-6 pb-20 mt-10 md:mt-20">
      <Link
        href="/photography"
        className="text-xs font-bold text-gray-400 uppercase tracking-widest hover:text-gray-900 transition-colors"
      >
        &larr; Back to Photography
      </Link>
      <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-12 tracking-tight">
        {category.title}
      </h1>

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
