
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
                I bring a unique blend of culinary expertise and a deep understanding of medical nutrition. With a degree in Biomedical Sciences, I am able to create tailored meals that not only delight the palate but also support health and wellness. I prioritise the use of high-quality, nutrient-dense ingredients, ensuring that every dish is crafted to promote optimal health outcomes. This integrated approach allows me to cater to clients’ individual preferences while enhancing their overall well-being.
              </p>
              <p>
                Having a family background rooted in the restaurant industry, I developed a deep appreciation for the culinary arts and the importance of creating memorable dining experiences. This upbringing instilled in me a strong work ethic and a commitment to quality, as I witnessed firsthand the passion and dedication required to succeed in the hospitality industry. My time at Le Cordon Bleu provided me with a solid foundation in both classical and contemporary culinary techniques, enabling me to create dishes that are both innovative and grounded in tradition.
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
