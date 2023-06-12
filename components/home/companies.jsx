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
        <div className='px-2 flex flex-col items-center'>
                <h2 className='text-center text-4xl font-semibold leading-8'>Our Clients</h2>
            <div className="mx-auto max-w-screen-lg flex flex-wrap sm:flex items-center justify-around text-gray-700 gap-8">
                {
                    companiesList.map((item) => <div key={item.name} className="">
                        <Image src={item.logo} width={120} height={120} alt={item.name} />
                    </div>)
                }
            </div>
        </div>
    )
}