import paystack from '../../public/paystack.svg'
import stripe from '../../public/stripe.svg'
import gpay from '../../public/Google_Pay_Logo.svg'
import applepay from '../../public/Apple_Pay_logo.svg'
import Image from 'next/image'
export default function Companies() {
    return (
        <div className='bg-orange-400'>
            <div className="mx-auto max-w-screen-lg grid sm:flex items-center justify-around text-gray-700 gap-2">
                <div className="">
                    <Image src={paystack} width={120} height={120} alt='' />
                </div>
                <div className="">
                    <Image src={stripe} width={120} height={120} alt='' />
                </div>
                <div className="">
                    <Image src={gpay} width={120} height={120} alt='' />
                </div>
                <div className="">
                    <Image src={applepay} width={120} height={120} alt='' />
                </div>
            </div>
        </div>
    )
}