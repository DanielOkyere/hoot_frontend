import Image from 'next/image'
import Kane from '../../public/kane.png'
import kwabena from '../../public/kwabena.png'
const Team = [
    {
        name: "Kane Mani",
        role: "Co-founder",
        imageUrl: Kane,
    },
    {
        name: "Kwabena Okyere",
        role: "Co-founder & CEO",
        imageUrl: kwabena,
    },
];
export default function TeamComponent() {
    return (
        <div className="bg-white py-24 sm:py-32 max-w-screen-lg mx-auto">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-emerald-900 sm:text-4xl">
                        Message from Co-founders
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Welcome to Hoot Secure. We are excited to provide you with safe and secure money transfers and payment with current anti fraud protection strategies. 
                        Our real time safety features ensure your transactions are safe and your transfers arrive to your desired destination.
                    </p>

                </div>
                <ul
                    role="list"
                    className="grid gap-x-6 gap-y-4 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
                >
                    {Team.map((person) => (
                        <li key={person.name}>
                            <div className="flex flex-col items-center gap-x-6">
                            <Image src={person.imageUrl} alt={person.name} className='rounded-full h-100 w-80 shadow-2xl team_image' />
                                <div className="mt-2 py-2">
                                    <h3 className="font-semibold leading-7 tracking-tight text-emerald-900 team-name text-2xl">
                                        {person.name}
                                    </h3>
                                    <p className="text-sm font-semibold leading-6 text-gray-900 mb-4">
                                        {person.role}
                                    </p>
                                    <a href="/team" className='p-3 mt-4 rounded-lg bg-emerald-600 text-center text-white'>learn more</a>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
