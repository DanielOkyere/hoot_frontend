const footerlist = [
    {
        'name': 'Why Hoot',
        'url':'#',
        'desc':'Why Hoot'
    },
    {
        'name': 'Features',
        'url':'#',
        'desc':'Features'
    },
    {
        'name': 'Pricing',
        'url':'#',
        'desc':'Pricing'
    },
    {
        'name': 'Developers',
        'url':'#',
        'desc':'Developers'
    },
    {
        'name': 'Contact Us',
        'url':'/reachus',
        'desc':'Contact Us'
    }
]

export default function FooterComponent() {
    return (
        <footer class="bg-white">
            <div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <nav class="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer" >
                   
                {
                    footerlist.map((item)=>
                    <div class="px-5 py-2" key={item.name}>
                    <a  href={item.url} class="text-base text-gray-500 hover:text-emerald-600">
                        {item.desc}
                    </a>
                </div>)
                }
                </nav>
                <p class="mt-8 text-center text-base text-gray-400">
                    &copy; 2023 Hoot Secure Limited.  All rights reserved.
                </p>
            </div>
        </footer>

    )
}