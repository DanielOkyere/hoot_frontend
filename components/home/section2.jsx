import Image from 'next/image'
import couch2 from '../../public/hero.png'

const details = [
    {
        'title': 'Continuous R&D',
        'content': `We provide a continued investigative research for future
        protection of your online financial transactions and assets.`,
        'order': 1
    },
    {
        'title': 'Fraud Detection & Prevention',
        'content': `We specialize in cybersecurity threat management with advance application 
        of robust technology for fraudulent activity detection.`,
        'order': 2
    },
    {
        'title': 'Premium Cybersecurity Services',
        'content': `Our customers enjoy top notch bespoke security services to fit your individual needs`,
        'order': 3
    },
]

export default function Section2() {
    return (
        <div className='px-4'>
            <div className="flex md:flex-row flex-col items-center mx-auto max-w-screen-lg mt-12 py-8">
                <div className="image pl-2">
                    <Image src={couch2} height={0} width={0} alt='Couch Image' sizes='60vw' style={{ width: '100%', height: 'auto' }} />
                </div>
                <div className='items-center text-left max-w-md'>
                    <h2 className='text-xl font-bold tracking-tight text-gray-900 sm:text-3xl'> <span className='text-emerald-600'>Find</span> top notch security services like:</h2>
                    <p className='text-center text-gray-500 p-4'> </p>
                    <ul className='list-inside'>
                        {details.map((items) => 
                         <li key={items.order}>
                         <h3 className='text-2xl font-bold py-2 text-gray-900'>{items.title}</h3>
                         <p className='text-gray-500'>
                            {items.content}
                        </p>
                     </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}