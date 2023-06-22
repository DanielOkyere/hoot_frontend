import gmoney from '../../public/gmoney.png'
import interpay from '../../public/interpay.svg'
import korba from '../../public/korbalogo.svg'
import slydepay from '../../public/slydpay.png'
import zeepay from '../../public/zeepay.svg'
import Image from 'next/image'

const companiesList = [
    {
        'name': 'gmoney',
        'logo': gmoney
    },
    {
        'name': 'interpay',
        'logo': interpay
    },
    {
        'name': 'korba',
        'logo': korba
    },
    {
        'name': 'slydpay',
        'logo': slydepay
    },
    {
        'name': 'zeepay',
        'logo': zeepay
    }
]
export default function Companies() {
    return (
        <div className='px-2 flex flex-col items-center mb-6 '>
            <h2 className='text-center text-2xl font-bold leading-8 text-gray-900'>Our <span className='text-emerald-600'>Customers</span></h2>
            <div
                className="h-1 mx-auto bg-emerald-800 w-36 opacity-75 mt-2 rounded"
            ></div>
            <div className="mx-auto w-full flex flex-wrap sm:flex items-center justify-around text-gray-700 gap-8 max-w-screen-xl">
                {
                    companiesList.map((item) => <div key={item.name} className="">
                        <Image src={item.logo} width={120} height={120} alt={item.name} />
                    </div>)
                }
            </div>
        </div>
    )
}