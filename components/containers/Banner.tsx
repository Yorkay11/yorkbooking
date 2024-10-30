"use client"

import React, { useState } from 'react'
import { Button } from '../ui/button'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select'
import { Separator } from '../ui/separator'
import Link from 'next/link'
import { devise, tabs } from '@/assets/data'



const Banner = () => {
    const [selected, setSelected] = useState(0);

    return (
        <nav className="w-full border-b">
            <div className="container mx-auto px-4 flex flex-col xl:flex-row justify-between gap-8 xl:gap-0 items-start xl:items-center pt-4">
                <div
                    className='pb-4'
                >
                    <RadioGroup defaultValue="oneway" className='flex flex-row gap-4'>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="oneway" id="r1" className='' />
                            <Label htmlFor="r1" className='text-xs'>One Way</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="roundtrip" id="r2" />
                            <Label htmlFor="r2" className='text-xs'>Round Trip</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="multicity" id="r3" />
                            <Label htmlFor="r3" className='text-xs'>Multi-City</Label>
                        </div>
                    </RadioGroup>
                </div>
                <div
                    className='flex flex-row gap-4 flex-wrap'
                >
                    {
                        tabs.map((tab, i) => {
                            return (
                                <div
                                    className='w-auto flex-col flex justify-between items-center'
                                    key={i}
                                >
                                    <Button
                                        variant={"ghost"}
                                        className={` text-xs ${selected == i ? 'bg-[#008CFF] xl:bg-transparent hover:bg-[#008CFF] xl:hover:bg-transparent hover:text-white xl:hover:text-black text-white xl:text-black ' :  'hover:bg-transparent'}`}
                                        onClick={() => setSelected(i)}
                                    >
                                        {tab}
                                    </Button>
                                    <div
                                        className={`hidden xl:flex h-1 w-20 w-full ${selected == i ? 'bg-[#008CFF]' : ''} bottom-0 rounded-full mt-4`}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
                <div
                    className='flex flex-row gap-2 pb-4 items-center'
                >
                    <Select>
                        <SelectTrigger className="w-[120px] border-transparent focus:border-none focus:ring-0 shadow-none">
                            <SelectValue defaultValue={"dollard"} placeholder="Devise"/>
                        </SelectTrigger>
                        <SelectContent >
                            <SelectGroup>
                                <SelectLabel>Devise</SelectLabel>
                                {
                                    devise.map((item, id) => {
                                        return (
                                            <SelectItem value={item.slug} key={id} >
                                                <div
                                                    className="flex flex-row w-full gap-1 items-center"
                                                >
                                                    {item.icon}
                                                    <p className='text-xs'>{item.name}</p>
                                                </div>
                                            </SelectItem>
                                        )
                                    })
                                }
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Separator orientation='vertical' className='h-8 mx-4'/>
                    <Link
                        className='text-black hover:bg-transparent hover:text-[#008CFF] text-xs'
                        href={"#"}
                    >
                        Support
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Banner