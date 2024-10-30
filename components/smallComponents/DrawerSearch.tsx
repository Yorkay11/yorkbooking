import React from 'react'
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '../ui/drawer'
import { Button } from '../ui/button'
import { Search } from 'lucide-react'
import SearchBarMobile from '../containers/SearchBarMobile'

const DrawerSearch = () => {
    return (
        <Drawer>
            <DrawerTrigger>
                <Button variant={"default"} size={"sm"} className='md:hidden'>
                    <Search className='h-4 w-4' />
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Search</DrawerTitle>
                    <DrawerDescription>Search a flight</DrawerDescription>
                </DrawerHeader>
                <SearchBarMobile />
                <DrawerFooter>
                    <Button>Search Flight</Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default DrawerSearch