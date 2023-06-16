'use client'

import Image from 'next/image'
import heroImage from '../../public/couple2.png'
import { Transition } from '@headlessui/react'

export default function Hero() {
    return (
        <div className="relative isolate px-6 pt-1 lg:px-8 bg-white">
            <div className="mx-auto max-w-screen-lg lg:py-32 xs:py-20 md:py-32 text-left flex md:flex-row flex-col gap-8 items-center">
                <div className="flex flex-row gap-4 ">
                    <div className='mx-auto p-6  xs:w-.5 max-w-lg'>
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                            We safegaurd your digital nest
                        </h1>
                        <p className="mt-6 text-lg leading-10 text-gray-600 ">
                            We safegaurd electronic transfers to support Fintech, banks, and all
                            electronic payment platforms.
                        </p>
                        <div className="mt-4 flex items-center justify-left gap-6">
                            <a href="" className="rounded-md bg-emerald-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700" >Request A Demo</a>
                        </div>
                    </div>
                </div>
                <Transition
                    appear={true}
                    show={true}
                    enter='transition-opacity duration-75'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                >
                    <div className='flex items-right max-w-sm mx-auto'>
                        <Image src={heroImage} height={0} width={0} alt='Hero Image' sizes='100vw' style={{ width: '100%', height: 'auto' }} />
                    </div>
                </Transition>
            </div>

        </div>
    )
}