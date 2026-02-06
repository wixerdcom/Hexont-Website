import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex flex-col bg-[#010D12] text-white overflow-hidden font-sans">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/assets/Asset 2.png"
          alt="Background"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-16 sm:w-24 md:w-40 lg:w-56 z-0 pointer-events-none">
        <Image
          src="/assets/bgcorner.png"
          alt="Decorative Corner"
          width={500}
          height={500}
          className="w-full h-auto object-contain object-bottom-left"
        />
      </div>

      <header className="relative z-10 w-full p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-4 md:gap-6">
        <div className="w-40 sm:w-48 md:w-64">
          <Image
            src="/assets/hexontLogo.png"
            alt="HEXONT Logo"
            width={300}
            height={100}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        <div className="text-center md:text-right">
          <h2 className="text-xs sm:text-sm md:text-base font-bold tracking-wider uppercase mb-1">
            HONEY STRUCTURE GENERAL CONTRACTING CO. L.L.C
          </h2>
          <p className="text-xs sm:text-sm md:text-lg font-arabic" dir="rtl">
            شركة هيكلة العسل للمقاولات العامة ذ.م.م
          </p>
        </div>
      </header>

      <main className="relative z-10 grow flex flex-col items-center justify-center text-center px-4 pb-10">
        <h1 className="text-lg sm:text-xl md:text-3xl font-bold mb-6 sm:mb-8 md:mb-12">
          Under development, coming soon!
        </h1>

        <div className="relative w-32 sm:w-40 md:w-48 lg:w-64 shadow-2xl mb-8 sm:mb-12">
          <Image
            src="/assets/Asset 4.png"
            alt="Business Profile"
            width={400}
            height={600}
            className="w-full h-auto rounded-sm"
            priority
          />
        </div>

        <Link
          href="mailto:info@hexont.com"
          className="group flex items-center justify-between gap-3 bg-[#B0B0B0] hover:bg-[#c0c0c0] text-black font-bold py-3 px-6 sm:px-8 rounded-full transition-all w-60 sm:w-64 md:w-80 mb-6"
        >
          <span className="grow text-center text-base sm:text-lg">Send Inquiry</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform group-hover:translate-x-1 w-5 h-5 sm:w-6 sm:h-6"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </main>

      <footer className="relative z-10 w-full flex flex-col items-center pb-6 sm:pb-8 gap-4 sm:gap-6 text-center">
        <a
          href="mailto:info@hexont.com"
          className="text-base sm:text-lg md:text-xl font-medium hover:underline"
        >
          info@hexont.com
        </a>

        <div className="flex items-center gap-4 sm:gap-6">
          <Link href="#" className="hover:opacity-80 transition-opacity">
             <Image src="/assets/Asset 10.png" alt="LinkedIn" width={24} height={24} className="h-5 w-auto sm:h-6" />
          </Link>
          <Link href="#" className="hover:opacity-80 transition-opacity">
             <Image src="/assets/Asset 9.png" alt="Facebook" width={24} height={24} className="h-5 w-auto sm:h-6" />
          </Link>
          <Link href="#" className="hover:opacity-80 transition-opacity">
             <Image src="/assets/Asset 8.png" alt="Instagram" width={24} height={24} className="h-5 w-auto sm:h-6" />
          </Link>
          <Link href="#" className="hover:opacity-80 transition-opacity">
             <Image src="/assets/Asset 7.png" alt="X / Twitter" width={24} height={24} className="h-5 w-auto sm:h-6" /> 
          </Link>
        </div>

        <div className="text-[10px] sm:text-xs md:text-sm text-gray-300 mt-2 sm:mt-4">
          copyright@hexont.com - Kingdom of Saudi Arabia
        </div>
      </footer>
    </div>
  );
}
