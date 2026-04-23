import Link from 'next/link';

interface LegalPageProps {
  title: string;
  children: React.ReactNode;
}

export default function LegalPage({ title, children }: LegalPageProps) {
  return (
    <div className="bg-background min-h-screen py-16 px-6">
      <div className="prose prose-gray max-w-3xl mx-auto">
        <Link 
          href="/" 
          className="inline-flex items-center text-sage hover:text-teal transition-colors mb-12 font-medium no-underline"
        >
          &larr; Back to Home
        </Link>
        
        <h1 className="font-playfair text-[32px] md:text-[40px] font-bold text-charcoal mb-12">
          {title}
        </h1>
        
        <div className="font-lato text-[16px] md:text-[18px] text-charcoal-light leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
