import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { Card, CardContent } from '../ui/card'
import { Calendar } from 'lucide-react'
import { Button } from '../ui/button'
import { flight } from '@/assets/data'



const CarouselDates = () => {
    return (
        <div
            className='w-full flex  py-2 px-2 border rounded-sm bg-white gap-2 items-center'
        >
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full"
            >
                <CarouselContent>
                    {
                        flight.map((item, i) => {
                            return (
                                <CarouselItem className="xl:basis-1/5 px-0" key={i}>
                                    <div className="px-2 border-r">
                                        <Card className='shadow-none border-none'>
                                            <CardContent className="flex items-center flex-col justify-center py-4">
                                                <p className='text-xs font-semibold'>
                                                    {item.date}
                                                </p>
                                                <p className='text-xs text-gray-600'>
                                                    US {item.price}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            )
                        })
                    }
                </CarouselContent>
                <CarouselPrevious className='left-0' />
                <CarouselNext className='right-3' />
            </Carousel>
            <Button
                variant={"outline"}
                size={"sm"}
                className='rounded-full p-2 h-auto hidden xl:flex'
            >
                <Calendar className='h-4 w-4' color='#008CFF'/>
            </Button>
        </div>
    )
}

export default CarouselDates