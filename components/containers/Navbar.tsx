import { Menu, TicketMinus } from 'lucide-react'
import React from 'react'
import { IoReceiptOutline } from 'react-icons/io5'
import { MdOutlineEventNote } from 'react-icons/md'
import { Button } from '../ui/button'
import { VscSaveAll } from 'react-icons/vsc'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import DialogSearch from '../smallComponents/DialogSearch'
import DrawerSearch from '../smallComponents/DrawerSearch'


const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-transparent border-b backdrop-blur w-full">
            <div className="container mx-auto px-4 flex flex-row justify-between items-center py-4">
                <div
                    className='flex flex-row gap-1 items-center'
                >
                    <img
                        src='/logo.png'
                        alt='logo'
                        className='h-8 w-8'
                    />
                    <p className='text-xl font-extrabold'>YorkBooking</p>
                </div>
                <div
                    className='hidden xl:flex flex-row gap-4'
                >
                    <div
                        className='flex flex-row gap-1 items-center'
                    >
                        <TicketMinus className="h-4 w-4" color='gray' />
                        <p className='text-xs font-medium'>Tickets & Rewards</p>
                    </div>
                    <div
                        className='flex flex-row gap-1 items-center'
                    >
                        <IoReceiptOutline className="h-4 w-4" color='gray' />
                        <p className='text-xs font-medium'>Bills & Top-up</p>
                    </div>
                    <div
                        className='flex flex-row gap-1 items-center'
                    >
                        <VscSaveAll className="h-4 w-4" color='gray' />
                        <p className='text-xs font-medium'>Saved</p>
                    </div>
                    <div
                        className='flex flex-row gap-1 items-center'
                    >
                        <MdOutlineEventNote className="h-4 w-4" color='gray' />
                        <p className='text-xs font-medium'>My Booking</p>
                    </div>
                </div>
                <div
                    className='hidden xl:flex flex-row gap-2'
                >
                    <Button
                        variant={"ghost"}
                        className='text-[#008CFF] hover:bg-[#008CFF] hover:bg-[#C0E3FF]/25 hover:text-[#008CFF] text-xs'
                    >
                        Log in
                    </Button>
                    <Button
                        variant={"outline"}
                        className='text-[#008CFF] border-[#008CFF] hover:bg-[#C0E3FF]/25 hover:text-[#008CFF] text-xs'
                    >
                        Sign Up
                    </Button>
                </div>

                <div className='flex xl:hidden flex-row gap-2'>
                    <DialogSearch />
                    <DrawerSearch />
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant={"outline"} size={"sm"} className='xl:hidden'>
                                <Menu className='h-4 w-4' />
                            </Button>
                        </SheetTrigger>
                        <SheetContent>
                            <div className='flex flex-col gap-4 justify-between h-full py-8'>
                                <div
                                    className='flex xl:hidden flex-col gap-8'
                                >
                                    <div
                                        className='flex flex-row gap-1 items-center'
                                    >
                                        <TicketMinus className="h-4 w-4" color='gray' />
                                        <p className='text-xs font-medium'>Tickets & Rewards</p>
                                    </div>
                                    <div
                                        className='flex flex-row gap-1 items-center'
                                    >
                                        <IoReceiptOutline className="h-4 w-4" color='gray' />
                                        <p className='text-xs font-medium'>Bills & Top-up</p>
                                    </div>
                                    <div
                                        className='flex flex-row gap-1 items-center'
                                    >
                                        <VscSaveAll className="h-4 w-4" color='gray' />
                                        <p className='text-xs font-medium'>Saved</p>
                                    </div>
                                    <div
                                        className='flex flex-row gap-1 items-center'
                                    >
                                        <MdOutlineEventNote className="h-4 w-4" color='gray' />
                                        <p className='text-xs font-medium'>My Booking</p>
                                    </div>
                                </div>
                                <div
                                    className='flex xl:hidden flex-col gap-4'
                                >
                                    <Button
                                        variant={"ghost"}
                                        className='text-[#008CFF] hover:bg-[#008CFF] hover:bg-[#C0E3FF]/25 hover:text-[#008CFF] text-xs'
                                    >
                                        Log in
                                    </Button>
                                    <Button
                                        variant={"outline"}
                                        className='text-[#008CFF] border-[#008CFF] hover:bg-[#C0E3FF]/25 hover:text-[#008CFF] text-xs'
                                    >
                                        Sign Up
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    )
}

export default Navbar