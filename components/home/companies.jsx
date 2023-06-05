import paystack from '../../public/paystack.svg'
import stripe from '../../public/stripe.svg'
import gpay from '../../public/Google_Pay_Logo.svg'
import applepay from '../../public/Apple_Pay_logo.svg'
import Image from 'next/image'
export default function Companies() {
    return (
        <div className="mx-auto max-w-screen-lg flex  flex-row items-center justify-around text-gray-700 gap-2">
            <div className="">
                <Image src={paystack} width={200} height={200} alt='' />
            </div>
            <div className="">
                <Image src={stripe} width={200} height={200} alt='' />
            </div>
            <div className="">
                <Image src={gpay} width={200} height={200} alt='' />
            </div>
            <div className="">
                <Image src={applepay} width={200} height={200} alt='' />
            </div>
        </div>
    )
}