import Image from "next/image";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

import imageOne from "@/assets/burger.jpg";
import imageTwo from "@/assets/curry.jpg";
import imageThree from "@/assets/dumplings.jpg";
import imageFour from "@/assets/macncheese.jpg";
import imageFive from "@/assets/pizza.jpg";
import imageSix from "@/assets/schnitzel.jpg";
import imageSeven from "@/assets/tomato-salad.jpg";

const images = [imageOne, imageTwo, imageThree, imageFour, imageFive, imageSix, imageSeven];

export default function ImageSlideShow() {
    return (
        <>
            <Carousel opts={{ align: "start", loop: true }} className="flex w-full max-w-xs" >
                <CarouselContent>
                    {Array.from(images).map((image, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <span className="text-4xl font-semibold">
                                            <Image src={image} alt="" width={256} height={256}></Image>
                                        </span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious></CarouselPrevious>
                <CarouselNext></CarouselNext>
            </Carousel>
        </>
    );
};