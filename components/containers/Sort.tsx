import React from 'react'
import { Card } from '../ui/card'
import { CgSortAz } from "react-icons/cg";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select';
import { SortList } from '@/assets/data';




const Sort = () => {
    return (
        <Card className='p-o w-full rounded-sm shadow-sm'>
            <div
                className='w-full border-b flex flex-row items-center gap-2 px-5 py-4'
            >
                <CgSortAz className='h-6 w-6' />
                <Select>
                    <div className='flex flex-col w-full'>
                        <p className='text-xs text-gray-600'>Sort by:</p>
                        <SelectTrigger className="w-full border-transparent focus:border-none shadow-none p-0 outline-none ring-0 focus:ring-0">
                            <SelectValue placeholder="Sort" className='text-xs'/>
                        </SelectTrigger>
                    </div>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Sort By:</SelectLabel>
                            {
                                SortList.map((item, id) => {
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

        </Card>
    )
}

export default Sort