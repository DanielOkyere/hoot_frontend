const Team = [
    {
        name: "Test",
        role: "chief officer",
        imageUrl: "https://picsum.photos/200/300",
    },
];
export default function TeamComponent() {
    return (
        <div className="bg-white py-24 sm:py-32 max-w-screen-lg mx-auto">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-emerald-900 sm:text-4xl">
                        Message from founder
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Libero fames augue nisl porttitor nisi, quis. Id ac elit
                        odio vitae elementum enim vitae ullamcorper suspendisse.
                    </p>

                </div>
                <ul
                    role="list"
                    className="grid gap-x-6 gap-y-4 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
                >
                    {Team.map((person) => (
                        <li key={person.name}>
                            <div className="flex flex-col items-center gap-x-6">
                                <img
                                    className="h-40 w-40 rounded-lg"
                                    src={person.imageUrl}
                                    alt={person.name}
                                />
                                <div className="mt-2 py-2">
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-emerald-900">
                                        {person.name}
                                    </h3>
                                    <p className="text-sm font-semibold leading-6 text-gray-900">
                                        {person.role}
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
