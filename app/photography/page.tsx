import Link from 'next/link';
import Image from 'next/image';
import { photographyData, photoCategories } from '@/lib/photography';

export default function PhotographyPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="p-6 md:p-8">
        <Link href="/" className="text-xs font-bold text-gray-400 uppercase tracking-widest hover:text-gray-900 transition-colors">
          &larr; Back to Portfolio
        </Link>
      </header>
    
    <main className="max-w-4xl mx-auto px-6 pb-20 mt-10 md:mt-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
        {photographyData.title}
      </h1>
      <p className="text-lg leading-relaxed text-gray-700 mb-12">
        {photographyData.description}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {photoCategories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/photography/${cat.slug}`}
            className="group relative block overflow-hidden aspect-[4/3] bg-gray-100"
          >
            <Image
              src={cat.cover}
              alt={cat.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
            <h2 className="absolute bottom-4 left-4 text-white text-xl font-bold tracking-tight">
              {cat.title}
            </h2>
          </Link>
        ))}
      </div>
    </main>
  );
}
