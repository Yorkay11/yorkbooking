import React from 'react'
import { Card } from '../ui/card'
import { PlaneLanding, PlaneTakeoff } from 'lucide-react'
import { facilities } from '@/assets/data'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import { Separator } from '../ui/separator'
import { Button } from '../ui/button'


const Flight = () => {
    return (
        <Card className='flex w-full flex-col rounded-sm shadow-none '>
            <div className='flex w-full flex-col xl:flex-row items-start xl:items-center justify-between gap-8 xl:gap-0 p-4'>
                <div className='flex flex-row gap-2 items-center'>
                    <div className='h-auto flex justify-center items-center bg-gray-200 rounded-full p-2'>
                        <img
                            src="https://th.bing.com/th/id/R.2253afde00eeaf3e20ec9add84af4f96?rik=kJzCTzdBvAd5iA&pid=ImgRaw&r=0"
                            alt="QA"
                            className='h-8 w-8 rounded-full object-cover bg-white'
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-xs font-semibold'>Qatar Airways</p>
                        <p className='text-xs text-gray-600'>QA-875 - First Class</p>
                    </div>
                </div>

                <div className='flex flex-row gap-4 items-center w-full xl:w-auto justify-between'>
                    <div className='flex flex-col gap-1 items-end'>
                        <p className='text-xs font-semibold'>05:45</p>
                        <p className='text-xs text-gray-600'>Oct 11th</p>
                    </div>
                    <div className='flex flex-row items-center '>
                        <div className='flex flex-col items-start gap-1'>
                            <PlaneTakeoff className='h-4 w-4' color='gray' />
                            <div className='h-1 w-full bg-[#008CFF] min-w-8 xl:min-w-24' />
                            <p className='text-xs text-gray-600'>JKT</p>
                        </div>
                        <div className='flex flex-col items-center gap-1'>
                            <p className='text-xs font-semibold'>
                                <span className='font-normal'>Duration: </span>
                                5h 20m
                            </p>
                            <div className='h-1 w-full bg-[#008CFF]/25 min-w-28 xl:min-w-60' />
                            <p className='text-xs text-gray-600'>Direct</p>
                        </div>
                        <div className='flex flex-col items-end gap-1'>
                            <PlaneLanding className='h-4 w-4' color='gray' />
                            <div className='h-1 w-full bg-[#008CFF] min-w-8 xl:min-w-24' />
                            <p className='text-xs text-gray-600'>LOM</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1 items-start'>
                        <p className='text-xs font-semibold'>11:05</p>
                        <p className='text-xs text-gray-600'>Oct 11th</p>
                    </div>
                </div>

                <div className='flex flex-row w-full xl:w-auto items-center justify-between xl:gap-12'>
                    <div className='flex flex-row gap-4 items-center'>
                        {
                            facilities.slice(0, 5).map((item, i) => {
                                return (
                                    <TooltipProvider key={i}>
                                        <Tooltip>
                                            <TooltipTrigger asChild className='cursor-pointer'>
                                                {item.icon}
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>{item.label}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                )
                            })
                        }
                    </div>

                    <div className='flex flex-row gap-1 items-center'>
                        <p className='text-sm font-semibold text-orange-500'>US$ 983.00</p>
                        <p className='text-xs'>/passenger</p>
                    </div>
                </div>
            </div>

            <Separator className='w-full' />

            <div className='flex flex-col gap-4 xl:flex-row justify-between items-end xl:items-center p-4'>
                <div
                    className='flex flex-row gap-4'
                >
                    <Button variant={"ghost"} className='hover:bg-transparent text-[#008CFF]/90 text-xs'>
                        Flight Details
                    </Button>
                    <Button variant={"ghost"} className='hover:bg-transparent text-[#008CFF]/90 text-xs'>
                        Price Details
                    </Button>
                    <Button variant={"ghost"} className='hover:bg-transparent text-[#008CFF]/90 text-xs'>
                        Refund
                    </Button>
                    <Button variant={"ghost"} className='hover:bg-transparent text-[#008CFF]/90 text-xs'>
                        Reschedule
                    </Button>
                    <Button variant={"ghost"} className='hover:bg-transparent text-[#008CFF]/90 text-xs'>
                        Promos
                    </Button>
                </div>
                <Button variant={"default"} className='text-xs'>
                    Select Flight
                </Button>
            </div>
        </Card>
    )
}

export default Flight