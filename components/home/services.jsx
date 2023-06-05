import Image from "next/image"
import house from '../../public/house.svg'
import office from '../../public/office.svg'
import shield from '../../public/shield.svg'

const services = [
    {
        'name': 'Home',
        'img': shield,
        'desc': 'Valuable protection 24/7',
        'url': ''
    },
    {
        'name': 'Home',
        'img': office,
        'desc': 'Protection for your business transactions',
        'url': ''
    },
    {
        'name': 'Home',
        'img': house,
        'desc': 'Personalised protection and detection of fraudulent activities',
        'url': ''
    }
]
export default function OurServices() {
    return (
        <div className="">
            <div className="mx-auto max-w-screen-lg items-center flex flex-col">
                <div className="text-center text-gray-950 py-12 max-w-md">
                    <h2 className="text-2xl font-bold">Our Special <span className="text-orange-400">Services</span> for you</h2>
                    <p className="text-center">Package euro flying. Package diary city trip booking budget frequent flyer outdoor
                        tour operator New York City China wellness Asia
                    </p>
                </div>
                <div className="flex flex-row ">
                    {
                        services.map((item) => <a key={item.name} href={item.url} className="flex flex-col mx-auto text-gray-950" >
                            <Image src={item.img} height={0} width={0} alt={item.name} sizes='20vw' style={{ width: '35%', height: 'auto' }} className="mx-auto" />
                            <p className="text-center py-2">{item.desc}</p>
                        </a>
                        )
                    }
                </div>
            </div>
        </div>
    )
}