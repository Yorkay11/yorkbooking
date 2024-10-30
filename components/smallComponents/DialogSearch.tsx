import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Button } from '../ui/button'
import { Search } from 'lucide-react'
import SearchBarMobile from '../containers/SearchBarMobile'


const DialogSearch = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={"default"} size={"sm"} className='hidden md:flex xl:hidden'>
                    <Search className='h-4 w-4' />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Search</DialogTitle>
                    <DialogDescription>Search a flight</DialogDescription>
                    <SearchBarMobile />
                </DialogHeader>
                <DialogFooter>
                    <Button>Search Flight</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default DialogSearch