
import Slideshow from '@/components/ui/slideshow';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {

  return (
    <section className="relative h-screen w-full">
      <Slideshow />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-headline font-bold drop-shadow-lg">
          Paula Rebollar
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-primary-foreground/80 drop-shadow-md">
          Cuisine & Pâtisserie
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" variant="default">
            <Link href="#gallery">View My Work</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="#about">About Me</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
