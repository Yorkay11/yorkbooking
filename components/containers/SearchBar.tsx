"use client"

import { CalendarIcon, PlaneLanding, PlaneTakeoff, RockingChair } from 'lucide-react'
import React, { useState } from 'react'
import { format } from "date-fns"
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Calendar } from '../ui/calendar'
import { cn } from '@/lib/utils'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select'
import Search from '../smallComponents/Search'
import { cabin } from '@/assets/data'
import { CountrySelect } from '../smallComponents/CountrySelect'




const SearchBar = () => {
    const [departureDate, setDepartureDate] = useState<Date>();
    const [returnDate, setReturnDate] = useState<Date>();
    
  

    return (
        <nav className="sticky top-0 z-50 bg-transparent border-b backdrop-blur hidden xl:flex">
            <div className="container mx-auto px-4 flex flex-row justify-between items-center ">
                <div
                    className='py-4 flex flex-col'
                >
                    <p className='text-xs text-gray-600'>From</p>
                    <div className='flex flex-row items-center gap-2 my-2'>
                        <PlaneTakeoff className='h-4 w-4' color='#008CFF' />
                        <CountrySelect 
                        
                        />
                    </div>
                </div>
                <Separator className='h-8' orientation='vertical' />
                <div
                    className='py-4 flex flex-col'
                >
                    <p className='text-xs text-gray-600'>To</p>
                    <div className='flex flex-row items-center gap-2 my-2'>
                        <PlaneLanding className='h-4 w-4' color='#008CFF' />
                        <CountrySelect 
                        
                        />
                    </div>
                </div>
                <Separator className='h-8' orientation='vertical' />
                <div
                    className='py-4 flex flex-col'
                >
                    <p className='text-xs text-gray-600'>Departure</p>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"ghost"}
                                className={cn(
                                    "pl-0 w-auto justify-start text-left font-normal hover:bg-transparent",
                                    !departureDate && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" color='#008CFF' />
                                {departureDate ? format(departureDate, "PPP") : <span className='font-semibold text-black text-sm'>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={departureDate}
                                onSelect={setDepartureDate}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </div>
                <Separator className='h-8' orientation='vertical' />
                <div
                    className='py-4 flex flex-col'
                >
                    <p className='text-xs text-gray-600'>Return</p>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"ghost"}
                                className={cn(
                                    "pl-0 w-auto justify-start text-left font-normal hover:bg-transparent",
                                    !returnDate && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" color='#008CFF' />
                                {returnDate ? format(returnDate, "PPP") : <span className='font-semibold text-black text-sm'>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={returnDate}
                                onSelect={setReturnDate}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </div>
                <Separator className='h-8' orientation='vertical' />
                <div
                    className='py-4 flex flex-col'
                >
                    <p className='text-xs text-gray-600'>Passenger & Cabin Class</p>
                    <div className='flex flex-row items-center gap-2'>
                        <RockingChair className='h-4 w-4' color='#008CFF' />
                        <Select>
                            <SelectTrigger className="w-[150px] border-transparent focus:border-none shadow-none pl-0 outline-none ring-0 focus:ring-0">
                                <SelectValue placeholder="Cabin" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Devise</SelectLabel>
                                    {
                                        cabin.map((item, id) => {
                                            return (
                                                <SelectItem value={item} key={id} >
                                                    <div
                                                        className="flex flex-row w-full gap-1 items-center"
                                                    >
                                                        <p className='text-xs text-black font-semibold'>{item}</p>
                                                    </div>
                                                </SelectItem>
                                            )
                                        })
                                    }
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <Separator className='h-8' orientation='vertical' />
                <div
                    className='py-4'
                >
                    <Search />
                </div>
            </div>
        </nav>
    )
}

export default SearchBar