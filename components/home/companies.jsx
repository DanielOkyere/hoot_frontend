import paystack from '../../public/paystack.svg'
import stripe from '../../public/stripe.svg'
import Image from 'next/image'
export default function Companies() {
    return (
        <div className="mx-auto  flex sm:flex-col flex-row items-center justify-around text-gray-700 gap-2">
            <div className="px-2 py-2">
                <Image src={paystack} width={200} height={200} /></div>
            <div className="px-4 py-2">
                <Image src={stripe} width={200} height={200} /></div>
            <div className="px-2 py-2">Disney</div>
            <div className="px-2 py-2">microsoft</div>
        </div>
    )
}