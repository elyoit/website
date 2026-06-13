import Image from "next/image";
import Link from "next/link";
import { photographyData } from "@/lib/photography";

export default function PhotographyPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">

      <header className="p-6 md:p-8">
        <Link
          href="/"
          className="text-xs font-bold text-gray-400 uppercase tracking-widest hover:text-gray-900 transition-colors"
        >
          ← Back to Portfolio
        </Link>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-20 mt-10 md:mt-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {photographyData.title}
        </h1>

        <p className="text-gray-600 mb-12 max-w-2xl">
          {photographyData.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {photographyData.images.map((img, index) => (
            <div key={index} className="relative aspect-[4/5] bg-gray-100">
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}