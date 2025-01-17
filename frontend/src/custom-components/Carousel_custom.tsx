'use client';
import { Carousel, CarouselPrevious, CarouselItem,CarouselContent,CarouselNext } from '../components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const Carousel_custom = () => {
  return (
    <Carousel className="w-full md:w-3/2 mb-8 mr-10 relative"
      plugins={[Autoplay({delay: 3000})]}
    >
      <CarouselPrevious className="absolute left-0 z-10 ml-4" />
      <CarouselContent>
        <CarouselItem className="rounded-2xl">
          <div className="relative">
            <img className="rounded-2xl w-full" src="/captain_banner.jpg" height="400px" width="400px" />
            <div className="absolute inset-0 overlay h-full bg-black opacity-20"></div>
            <span className="absolute inset-0 text-white h-fit w-full font-semibold text-2xl p-4">
              <p className="w-1/2 font-mono overlay text-4xl text-start">A new chapter and a more new beginning of Steve Rogers.</p>
            </span>
          </div>
        </CarouselItem>
        <CarouselItem className="rounded-2xl">
          <div className="relative">
            <img className="rounded-2xl w-full h-full" src="/moana_banner.jpg" />
            <div className="absolute inset-0 overlay h-full bg-black opacity-20"></div>
            <span className="absolute inset-0 text-white font-semibold text-2xl flex items-end">
              <p className="w-1/2 font-mono overlay-text-size text-4xl p-4">Set Sail for a New Adventure with Maui!</p>
            </span>
          </div>
        </CarouselItem>
        <CarouselItem className="rounded-2xl">
          <div className="relative">
            <img className="rounded-2xl w-full h-full" src="/mufasa_banner.jpg" height="400px" width="400px" />
            <div className="absolute inset-0 overlay h-full bg-black opacity-20"></div>
            <span className="absolute inset-0 text-white font-semibold flex items-end">
              <p className="w-1/2 font-mono overlay-text-size text-4xl p-4">The Legend Returns to Roar Again!</p>
            </span>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselNext className="absolute right-0 z-10 mr-4" />
    </Carousel>
  );
}

export default Carousel_custom;
