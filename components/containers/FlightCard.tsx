import React from 'react'
import { Card } from '../ui/card'
import { MoveRight, Plane, PlaneLanding, PlaneTakeoff } from 'lucide-react'

const FlightCard = () => {
    return (
        <Card className='p-o w-auto rounded-sm shadow-sm'>
            <div
                className='w-full border-b flex flex-row items-center gap-2 px-6 py-6'
            >
                <Plane className='h-4 w-4'/>
                <p className='text-xs'>Your Flight</p>
            </div>
            <div
                className='w-full border-l-2 border-l-[#008CFF] bg-[#008CFF]/5 flex flex-row items-center gap-2 px-4 py-6'
            >
                <div className='p-2 bg-black rounded-sm'>
                    <PlaneTakeoff className='h-4 w-4' color='white'/>
                </div>
                <div className='flex-col flex gap-1'>
                    <p className='text-xs'>October 11th, 2024</p>
                    <div className='flex flex-row items-center gap-2'>
                        <p className='text-xs'>Jakarta</p>
                        <MoveRight className='h-4 w-4'/>
                        <p className='text-xs'>Lome</p>
                    </div>
                </div>
            </div>
            <div
                className='w-full border-t flex flex-row items-center gap-2 px-5 py-6'
            >
                <div className='p-2 bg-gray-100 rounded-sm'>
                    <PlaneLanding className='h-4 w-4'/>
                </div>
                <div className='flex-col flex gap-1'>
                    <p className='text-xs'>October 11th, 2024</p>
                    <div className='flex flex-row items-center gap-2'>
                        <p className='text-xs'>Lome</p>
                        <MoveRight className='h-4 w-4'/>
                        <p className='text-xs'>Jakarta</p>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default FlightCard