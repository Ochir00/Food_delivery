import * as React from "react";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Menucategory() {
  return (
    <div className="w-full pb-10 ">
      <h3 className="text-[30px] ml-10 pt-3 font-semibold">Categories</h3>

      <Carousel className="w-full max-w-7/8 m-auto mt-5">
        <CarouselContent className="-ml-1">
          {Array.from({ length: 100 }).map((_, index) => (
            <CarouselItem key={index} className="pl-1 md:basis-1/10">
              <div className="p-1">
                <Card className="w-auto p-0 px-1 flex justify-center">
                  <p className="flex">random</p>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
