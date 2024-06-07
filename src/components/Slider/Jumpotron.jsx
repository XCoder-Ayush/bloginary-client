import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const imagePaths = [
  './src/assets/Blog1.jpg',
  './src/assets/Blog2.jpg',
  './src/assets/Blog3.jpg',
  './src/assets/Blog4.jpg',
];
 
export function Jumpotron() {
  return (
    <center>
  <Carousel className="w-full max-w-4xl mx-auto relative">
    <CarouselContent className="h-[500px] ">
      {imagePaths.map((imagePath, index) => (
        <CarouselItem key={index} className="flex items-center justify-center h-full">
          <CardContent className="w-full h-full flex items-center justify-center p-6">
            <img src={imagePath} alt={`Blog ${index + 1}`} className="object-cover w-full h-full" />
          </CardContent>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg" />
    <CarouselNext className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg" />
  </Carousel>
    </center>
  )
}

export default Jumpotron;
