import Image from 'next/image'
import couch2 from '../../public/couch2.png'
export default function Section2() {
    return (
        <div className='px-4'>
        <div className="flex md:flex-row flex-col items-center mx-auto max-w-screen-lg mt-12 py-8">
            <div className="image pl-2">
                <Image src={couch2} height={0} width={0} alt='Couch Image' sizes='100vw' style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className='items-center text-left max-w-md'>
                <h2 className='text-xl font-bold tracking-tight text-gray-900 sm:text-3xl'> <span className='text-orange-400'>Find</span> out our Latest Security Product</h2>
                <p className='text-center text-gray-500 p-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit optio recusandae eveniet illo! Quis, ducimus laborum illum quo minima, magni veniam asperiores vel, perferendis dignissimos accusantium deleniti recusandae adipisci consequatur?</p>
                <ul className='list-inside'>
                    <li>
                        <h3 className='text-2xl font-bold py-2'>Secured Payment</h3>
                        <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, quod praesentium quis reiciendis repellendus vel non voluptatem molestias odio nemo assumenda quam hic a ipsum, laudantium dignissimos exercitationem rem. Reiciendis!</p>
                    </li>
                    <li>
                        <h3 className='text-2xl font-bold py-2'>Detection of fraudulent Behavior</h3>
                        <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quos, rem quisquam amet autem doloribus, voluptatibus qui alias illo fuga debitis nam praesentium impedit voluptas esse pariatur numquam repellat ipsa.</p>
                    </li>
                    <li>
                        <h3 className='text-2xl font-bold py-2'>
                            Seemless Integration with other parties
                        </h3>
                        <p className='text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, dicta totam sint inventore ut cupiditate. Repellat voluptatem ad aliquid illo magnam placeat officia! Quibusdam iste odit, maxime consequatur voluptas natus.</p>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    )
}