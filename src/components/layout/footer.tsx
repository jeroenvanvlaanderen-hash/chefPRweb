
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card">
      <div className="container mx-auto max-w-7xl px-6 py-8">
        <div className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Paula Rebollar. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
