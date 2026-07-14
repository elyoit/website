import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { photoCategories } from '@/lib/photography';

export function generateStaticParams() {
  return photoCategories.map((cat) => ({ slug: cat.slug }));
}

const NUM_COLUMNS = 3;

function distributeIntoColumns<T extends { width: number; height: number }>(
  photos: T[],
  numColumns: number
) {
  const columns: T[][] = Array.from({ length: numColumns }, () => []);
  const columnHeights = new Array(numColumns).fill(0);

  for (const photo of photos) {
    const shortestIndex = columnHeights.indexOf(Math.min(...columnHeights));
    columns[shortestIndex].push(photo);
    // track height as if column width were fixed (aspect ratio driven)
    columnHeights[shortestIndex] += photo.height / photo.width;
  }

  return columns;
}

export default async function PhotoCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = photoCategories.find((c) => c.slug === slug);
  if (!category) notFound();

  const columns = distributeIntoColumns(category.photos, NUM_COLUMNS);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="p-6 md:p-8">
        <Link href="/" className="text-xs font-bold text-gray-400 uppercase tracking-widest hover:text-gray-900 transition-colors">
          &larr; Back to Portfolio
        </Link>
      </header>

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

        <div className="flex gap-4">
          {columns.map((col, i) => (
            <div key={i} className="flex flex-col gap-4 flex-1">
              {col.map((photo) => (
                <Image
                  key={photo.src}
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-auto"
                />
              ))}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
