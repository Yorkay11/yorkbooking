import { MdFlag, MdOutlineAirlineSeatLegroomReduced, MdWindow } from 'react-icons/md'
import { BiBlanket } from "react-icons/bi";
import { BriefcaseBusiness, Ham, Headphones, PawPrint, RockingChair, SquarePlay, Usb, Wifi } from 'lucide-react'
import { PiCurrencyDollarSimpleFill } from 'react-icons/pi'
import { TbCoinEuroFilled, TbCoinPoundFilled } from 'react-icons/tb'


export const SortList = [
    "Direct Flight First",
    "Direct Flight Last",
    "Step Flight First",
    "Step Flight Last",
]

export const items = [
    {
        id: "direct",
        label: "Direct Flight",
        price: '200.67'
    },
    {
        id: "1transit",
        label: "1 transit",
        price: '170.30'
    },
    {
        id: "2transit",
        label: "2+ transits",
        price: '150.80'
    },
]

export const facilities = [
    {
        id: "bagage",
        label: "Bagage",
        icon: <BriefcaseBusiness className='h-4 w-4' color='gray' />
    },
    {
        id: "in-flight-meal",
        label: "In-flight meal",
        icon: <Ham className='h-4 w-4' color='gray' />
    },
    {
        id: "in-flight-entertainment",
        label: "In-flight entertainment",
        icon: <SquarePlay className='h-4 w-4' color='gray' />
    },
    {
        id: "wifi",
        label: "Wifi",
        icon: <Wifi className='h-4 w-4' color='gray' />
    },
    {
        id: "power",
        label: "Power/USB port",
        icon: <Usb className='h-4 w-4' color='gray' />
    },
    {
        id: "seat-recliner",
        label: "Reclining seat",
        icon: <RockingChair className='h-4 w-4' color='gray' />
    },
    {
        id: "legroom",
        label: "Extra legroom",
        icon: <MdOutlineAirlineSeatLegroomReduced className='h-4 w-4' color='gray' />
    },
    {
        id: "priority-boarding",
        label: "Priority boarding",
        icon: <MdFlag className='h-4 w-4' color='gray' />
    },
    {
        id: "window-seat",
        label: "Window seat",
        icon: <MdWindow className='h-4 w-4' color='gray' />
    },
    {
        id: "blanket",
        label: "Blanket",
        icon: <BiBlanket className='h-4 w-4' color='gray' />
    },
    {
        id: "headphones",
        label: "Headphones",
        icon: <Headphones className='h-4 w-4' color='gray' />
    },
    {
        id: "pet-friendly",
        label: "Pet-friendly",
        icon: <PawPrint className='h-4 w-4' color='gray' />
    }
]

export const tabs = [
    "Flight",
    "Car Rental",
    "Train",
    "Hotel",
    "Attraction",
    "Event",
]

export const devise = [
    {
        name: "Dollard",
        slug: "usd",
        icon: <PiCurrencyDollarSimpleFill className='h-6 w-6' color='orange' />
    },
    {
        name: "Euro",
        slug: "eur",
        icon: <TbCoinEuroFilled className='h-6 w-6' color='green' />
    },
    {
        name: "Pound",
        slug: "pound",
        icon: <TbCoinPoundFilled className='h-6 w-6' color='blue' />
    },
]

export const flight = [
    {
        date: "October 11th, 2024",
        price: "300"
    },
    {
        date: "October 11th, 2024",
        price: "300"
    },
    {
        date: "October 11th, 2024",
        price: "300"
    },
    {
        date: "October 11th, 2024",
        price: "300"
    },
    {
        date: "October 11th, 2024",
        price: "300"
    },
    {
        date: "October 11th, 2024",
        price: "300"
    },
    {
        date: "October 11th, 2024",
        price: "300"
    },
    {
        date: "October 11th, 2024",
        price: "300"
    },
    {
        date: "October 11th, 2024",
        price: "300"
    },
]

export const cabin = [
    "1 Passenger, First",
    "2 Passengers, First",
    "3 Passengers, First",
    "1 Passenger, Eco",
    "2 Passengers, Eco",
    "3 Passengers, Eco",
]

export const cities = [
    {
        value: "lome",
        label: "Lome",
    },
    {
        value: "kara",
        label: "Kara",
    },
    {
        value: "paris",
        label: "Paris",
    },
    {
        value: "new_york",
        label: "New York",
    },
    {
        value: "tokyo",
        label: "Tokyo",
    },
    {
        value: "berlin",
        label: "Berlin",
    },
    {
        value: "nairobi",
        label: "Nairobi",
    },
    {
        value: "sydney",
        label: "Sydney",
    },
    {
        value: "cape_town",
        label: "Cape Town",
    },
    {
        value: "dubai",
        label: "Dubai",
    },
    {
        value: "moscow",
        label: "Moscow",
    },
    {
        value: "madrid",
        label: "Madrid",
    },
    {
        value: "los_angeles",
        label: "Los Angeles",
    },
    {
        value: "lagos",
        label: "Lagos",
    },
    {
        value: "bangkok",
        label: "Bangkok",
    },
    {
        value: "mexico_city",
        label: "Mexico City",
    },
    {
        value: "toronto",
        label: "Toronto",
    },
    {
        value: "rome",
        label: "Rome",
    },
    {
        value: "sao_paulo",
        label: "São Paulo",
    },
    {
        value: "london",
        label: "London",
    },
    {
        value: "cairo",
        label: "Cairo",
    },
]
