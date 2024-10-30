import React from 'react'
import Flight from '../smallComponents/Flight'
import { ScrollArea } from '../ui/scroll-area'

const List = () => {
    return (
        <ScrollArea className="h-full min-h-[100vh] xl:max-h-[110vh] w-full">
            <div className='w-full flex flex-col h-full gap-4'>
                {
                    Array.from({ length: 50 }).map((_, id) => {
                        return (
                            <Flight key={id}/>
                        )
                    })
                }
            </div>
        </ScrollArea>
    )
}

export default List