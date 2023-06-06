import Image from 'next/image'
import heroImage from '../../public/hero_crop.png'
export default function Hero() {
    return (
            <div className="relative isolate px-6 pt-1 lg:px-8  bg-white">
                <div className="mx-auto max-w-screen-lg lg:py-32 xs:py-40 md:py-40 text-left flex md:flex-row flex-col gap-8 items-center">
                    <div className="flex flex-row gap-4 ">
                        <div className='mx-auto  xs:w-.5 max-w-md'>
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                                The Best Security Provider In the Country
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600 text-justify ">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus voluptatibus officia tempore debitis, omnis expedita. Ducimus facere nobis modi nisi quo debitis distinctio maiores, quam aliquam quos nostrum sunt est.
                            </p>
                            <div className="mt-4 flex items-center justify-left gap-6">
                                <a href="" className="rounded-md bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700" >Start Now</a>
                                <a href="" className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700" >Request A Demo</a>
                            </div>
                        </div>
                    </div>
                    <div className='items-center'>
                        <Image src={heroImage} height={0} width={0} alt='Hero Image' sizes='100vw' style={{ width: '75%', height: 'auto' }} />
                    </div>
                </div>

            </div>
    )
}