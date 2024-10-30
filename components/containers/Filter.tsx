"use client"

import React, { useState } from 'react'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible'
import { Checkbox } from '../ui/checkbox'
import { Label } from '../ui/label'
import { Separator } from '../ui/separator'
import { RangeSlider } from '../ui/slider'
import { ChevronsUpDown } from 'lucide-react'
import { facilities, items } from '@/assets/data'




const Filter = () => {
    const [range, setRange] = useState([0, 1000])

    return (
        <div className='w-full flex flex-col gap-2 h-auto'>
            <div className='flex flex-row justify-between items-center'>
                <p className='text-xs'>Filter</p>
                <Button
                    variant={"ghost"}
                    className='text-[#008CFF] text-xs p-0'
                >
                    Reset
                </Button>
            </div>
            <Card className='p-o w-full h-full rounded-sm shadow-sm flex flex-col gap-2'>
                <Collapsible>
                    <div
                        className='w-full flex flex-row items-center justify-between gap-2 px-4 pt-4'
                    >
                        <p className='text-xs'>No. of Transit</p>
                        <CollapsibleTrigger className='py-0'>
                            <Button className='p-0 flex h-auto hover:bg-transparent' size={"sm"} variant={"ghost"}>
                                <ChevronsUpDown className='h-1 w-1' />
                            </Button>
                        </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent className='flex flex-col gap-4 px-4 py-4'>
                        {
                            items.map((item, id) => {
                                return (
                                    <div className='flex flex-row justify-start items-center w-full gap-2' key={id}>
                                        <Checkbox
                                            id={item.id}
                                        />
                                        <div className='flex flex-row justify-between items-center w-full'>
                                            <Label htmlFor={item.id} className='text-xs'>
                                                {item.label}
                                            </Label>
                                            <p className='text-xs text-gray-600'>{item.price}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </CollapsibleContent>
                </Collapsible>

                <Separator />

                <Collapsible>
                    <div
                        className='w-full flex flex-row items-center justify-between gap-2 px-4 pt-4'
                    >
                        <p className='text-xs'>Price/passenger</p>
                        <CollapsibleTrigger>
                            <Button className='p-0 flex h-auto hover:bg-transparent' size={"sm"} variant={"ghost"}>
                                <ChevronsUpDown className='h-1 w-1' />
                            </Button>
                        </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent className='flex flex-col gap-2 px-4 py-2'>
                        <div className='flex flex-col gap-4'>
                            <p className='text-xs font-semibold'>US$ {range[0]} - US$ {range[1]}</p>
                            <div className='flex flex-row justify-start '>
                                <RangeSlider
                                    value={range}
                                    onValueChange={(value) => setRange(value)}
                                    min={0}
                                    max={1000}
                                    step={.1}
                                    className={"w-[100%] left-0"}
                                />
                            </div>
                        </div>

                    </CollapsibleContent>
                </Collapsible>

                <Separator />

                <Collapsible>
                    <div
                        className='w-full flex flex-row items-center justify-between gap-2 px-4 pt-4'
                    >
                        <p className='text-xs'>Facility</p>
                        <CollapsibleTrigger>
                            <Button className='p-0 flex h-auto hover:bg-transparent' size={"sm"} variant={"ghost"}>
                                <ChevronsUpDown className='h-1 w-1' />
                            </Button>
                        </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent className='flex flex-col gap-4 px-4 py-4'>
                        {
                            facilities.map((item, id) => {
                                return (
                                    <div className='flex flex-row justify-start items-center w-full gap-2' key={id}>
                                        <Checkbox
                                            id={item.id}
                                        />
                                        <div className='flex flex-row justify-between items-center w-full'>
                                            <Label htmlFor={item.id} className='text-xs'>
                                                {item.label}
                                            </Label>
                                            {item.icon}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </CollapsibleContent>
                </Collapsible>
            </Card>
        </div>
    )
}

export default Filter