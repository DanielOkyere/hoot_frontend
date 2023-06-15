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
        <div className="px-2 mt-12">
            <div className="mx-auto max-w-screen-lg items-center flex flex-col">
                <div className="text-center text-gray-950 py-12 max-w-md">
                    <h2 className="text-2xl font-bold">Our Special <span className="text-emerald-600">Services</span> for you</h2>
                </div>
                <div className="flex md:flex-row lg:flex-row gap-4">
                    {
                        services.map((item) => <div key={item.name} className="flex flex-row xs:flex-col mx-auto text-gray-950" >
                            <Image src={item.img} height={0} width={0} alt={item.name} sizes='20vw' style={{ width: '35%', height: 'auto' }} className="mx-auto" />
                            <p className="text-center py-4">{item.desc}</p>
                            <a href={item.url} className="text-center underline py-2"> Learn More</a>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}