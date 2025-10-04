
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function AboutSection() {
  const portraitImage = PlaceHolderImages.find(p => p.id === 'about-portrait');

  return (
    <section id="about" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-gray-800 mb-8">
          About Me
        </h2>
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2">
            <div className="space-y-4 text-lg text-foreground/80">
              <p>
                With over a decade of experience in the world's most renowned kitchens, I have cultivated a deep passion for the art of gastronomy. My journey began in a small family-owned bakery, where I learned the fundamentals of pastry, and has since taken me across continents to master both sweet and savory disciplines.
              </p>
              <p>
                I believe that food is a universal language, a medium for storytelling, and a celebration of culture. My culinary philosophy centers on using high-quality, seasonal ingredients to create dishes that are both innovative and comforting. Each plate is a canvas, and every flavor is a brushstroke in a masterpiece of taste and texture.
              </p>
            </div>
          </div>
          <div className="md:col-span-1 flex justify-center md:justify-end">
            {portraitImage && (
              <Image
                src={portraitImage.imageUrl}
                alt={portraitImage.description}
                width={portraitImage.width}
                height={portraitImage.height}
                className="rounded-lg object-cover shadow-lg border-4 border-background"
                data-ai-hint={portraitImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
