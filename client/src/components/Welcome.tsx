import astroLogo from '../assets/astro.svg';
import background from '../assets/background.svg';

export default function Welcome() {
  return (
    <div className="h-full font-sans">
      <img 
        className="fixed top-0 left-0 w-full h-full -z-10 blur-[100px]" 
        src={background.src} 
        alt="" 
        fetchPriority="high" 
      />
      <main className="h-full flex justify-center">
        <section className="flex items-start flex-col justify-center p-4 md:pt-[10%]">
          <a href="https://astro.build">
            <img src={astroLogo.src} width="115" height="48" alt="Astro Homepage" />
          </a>
          <h1 className="text-[22px] mt-1 leading-normal md:leading-[1.5]">
            To get started, open the{' '}
            <code className="inline-block bg-gradient-to-br from-pink-200 via-pink-100 to-pink-100 border border-transparent rounded-lg px-2 py-1.5 [background-clip:padding-box] [border-image:linear-gradient(155deg,#d83333_0%,#f041ff_18%,#f5cee7_45%)_1]">
              <pre className="font-mono font-normal bg-gradient-to-br from-[#d83333] to-[#f041ff] bg-clip-text text-transparent m-0">
                src/pages
              </pre>
            </code>{' '}
            directory in your project.
          </h1>
          <section className="flex gap-4 flex-wrap">
            <a 
              className="flex items-center px-3 py-2.5 md:px-[18px] md:py-3.5 text-white no-underline transition-colors duration-200 hover:text-gray-200 bg-gradient-to-r from-[#3245ff] to-[#bc52ee] rounded-[10px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12),inset_0_-2px_0_rgba(0,0,0,0.24)] hover:shadow-none" 
              href="https://docs.astro.build"
            >
              Read our docs
            </a>
            <a 
              className="flex items-center px-3 py-2.5 text-gray-900 no-underline transition-colors duration-200 hover:text-gray-600" 
              href="https://astro.build/chat"
            >
              Join our Discord 
              <svg className="h-[1em] ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36">
                <path
                  fill="currentColor"
                  d="M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.06 72.06 0 0 0-3.36 6.83 97.68 97.68 0 0 0-29.11 0A72.37 72.37 0 0 0 45.64 0a105.89 105.89 0 0 0-26.25 8.09C2.79 32.65-1.71 56.6.54 80.21a105.73 105.73 0 0 0 32.17 16.15 77.7 77.7 0 0 0 6.89-11.11 68.42 68.42 0 0 1-10.85-5.18c.91-.66 1.8-1.34 2.66-2a75.57 75.57 0 0 0 64.32 0c.87.71 1.76 1.39 2.66 2a68.68 68.68 0 0 1-10.87 5.19 77 77 0 0 0 6.89 11.1 105.25 105.25 0 0 0 32.19-16.14c2.64-27.38-4.51-51.11-18.9-72.15ZM42.45 65.69C36.18 65.69 31 60 31 53s5-12.74 11.43-12.74S54 46 53.89 53s-5.05 12.69-11.44 12.69Zm42.24 0C78.41 65.69 73.25 60 73.25 53s5-12.74 11.44-12.74S96.23 46 96.12 53s-5.04 12.69-11.43 12.69Z"
                />
              </svg>
            </a>
          </section>
        </section>
      </main>

    </div>
  );
}