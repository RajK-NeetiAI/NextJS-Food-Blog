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
        <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-xs">
            <CarouselContent>
                {Array.from(images).map((image, index) => (
                    <CarouselItem key={index}>
                        <Card className="border-slate-300">
                            <CardContent className="bg-slate-300 flex aspect-square items-center justify-center">
                                <Image className="rounded-lg" src={image} alt="" width={512} height={512}></Image>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious></CarouselPrevious>
            <CarouselNext></CarouselNext>
        </Carousel>
    );
};