
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export function GallerySection() {
  const pastryImages = PlaceHolderImages.filter(p => p.id.startsWith('gallery-pastry'));
  const cuisineImages = PlaceHolderImages.filter(p => p.id.startsWith('gallery-cuisine'));
  const [selectedImage, setSelectedImage] = useState<ImagePlaceholder | null>(null);

  const openLightbox = (image: ImagePlaceholder) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const ImageGrid = ({ images }: { images: ImagePlaceholder[] }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {images.map((image) => (
        <button
          key={image.id}
          onClick={() => openLightbox(image)}
          className="group relative block w-full overflow-hidden rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label={`View image of ${image.description}`}
        >
          <Image
            src={image.imageUrl}
            alt={image.description}
            width={image.width}
            height={image.height}
            className="object-cover transition-opacity duration-300 group-hover:opacity-90 w-full h-auto"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            data-ai-hint={image.imageHint}
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
            <p className="text-white text-center font-medium whitespace-pre-line">{image.description}</p>
          </div>
        </button>
      ))}
    </div>
  );

  return (
    <section id="gallery" className="py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-gray-800">
            My Creations
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated collection of my work, from delicate pastries to hearty cuisine. Each dish tells a story of passion and precision.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-headline font-bold text-gray-800 mb-8 text-center">Cuisine</h3>
          <ImageGrid images={cuisineImages} />
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-headline font-bold text-gray-800 mb-8 text-center">Pâtisserie</h3>
          <ImageGrid images={pastryImages} />
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={(isOpen) => !isOpen && closeLightbox()}>
        <DialogContent className="max-w-4xl p-0 border-0">
          {selectedImage && (
            <>
              <DialogHeader className="sr-only">
                <DialogTitle>{selectedImage.description}</DialogTitle>
                <DialogDescription>A larger view of the selected dish.</DialogDescription>
              </DialogHeader>
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={selectedImage.imageUrl}
                  alt={selectedImage.description}
                  fill
                  className="object-contain"
                  data-ai-hint={selectedImage.imageHint}
                />
              </div>
              <p className="p-4 text-center text-sm text-muted-foreground bg-background whitespace-pre-line">{selectedImage.description}</p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
