'use client'

import { useState } from "react"
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import HootLogo from '../../public/Hoot Icon.jpeg'

const navigation = [
	{
		name: 'Why Hoot', href: '#'
	},
	{
		name: 'Features', href: '#'
	},
	{
		name: 'Pricing', href: '#'
	},
	{
		name: 'Developers', href: '#', 'submenu': [
			{
				name: 'Hoot', href: '#'
			},
			{
				name: 'Features_01', href: '#'
			},
			{
				name: 'Pricing_01', href: '#'
			},
		]
	}
]
export default function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const [dropMenu, setDropMenu] = useState(false)

	return (<div className='bg-white'>
		<header className='relative inset-x-0 top-0 z-50'>
			<nav className='flex items-center justify-between p-6 lg:px-8'>
				<div className='flex lg:flex-1'>
					<a href="/" className='-m-1.5 p-1.5 text-lg font-extrabold'>
						<span className='sr-only '>HOOT</span>
						<Image src={HootLogo} height={0} width={0} alt='Hero Image' sizes='10vw' style={{ width: '75%', height: 'auto' }} />
					</a>
				</div>
				<div className="flex lg:hidden">
					<button type='button' className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className="sr-only">Open Menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<div className="hidden lg:flex lg:gap-x-12 ">
					{
						navigation.map((item) =>
							item.submenu ? <div onMouseEnter={() => setTimeout(() => setDropMenu(true), 500)} onMouseLeave={() => setTimeout(() => setDropMenu(false), 500)} className="items-center" key={item.name}>
								<button className="text-gray flex items-center text-sm font-semibold leading-6" type="button">{item.name} <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
								<div className={dropMenu ? 'flex '+`z-20 flex-col bg-white divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 `: 'hidden'}>
									<ul className="py-2 text-sm text-gray-700 dark:text-gray-200 ">
										{dropMenu && item.submenu?.map((menu) =>
											<li key={menu.name}>
												<a href={menu.href} className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{menu.name}</a>
											</li>
										)}
									</ul>
								</div>
							</div> : <a key={item.name} href={item.href} className="text-sm font-semibold leadin-6 text-gray-900">
								{item.name}
							</a>
						)
					}
				</div>


				<div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
					<a href="/login" className="rounded-lg px-3 py-3 bg-emerald-900 text-sm font-semibold leading-6 text-white">
						Create Account
					</a>
					<a href="/login" className="rounded-lg px-3 py-3 bg-emerald-900 text-sm font-semibold leading-6 text-white">
						Sign In
					</a>
				</div>

			</nav>
			{/* Mobile Menu */}
			<Dialog as='div' className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
				<div className="fixed inset-0 z-50" />
				<Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<a href="/" className="-m-1.5 p-1.5">
							<span className="sr-only">HOOT</span>
							<Image src={HootLogo} height={0} width={0} alt='Hero Image' sizes='10vw' style={{ width: '75%', height: 'auto' }} />
						</a>
						<button className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
							<span className="sr-only">Close Menu</span>
							<XMarkIcon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								{
									navigation.map((item) =>
									(<a key={item.name} href={item.href} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
										{item.name}
									</a>)
									)
								}
							</div>
							<div className="flex py-6 flex-col gap-4" >
								<a href="*" className="-mx-3 block  bg-emerald-900 rounded-lg px-3 py-2 5 text-white font-semibold leading-7  hover:bg-emerald-600">Create Account</a>
								<a href="*" className="-mx-3 block  bg-emerald-900 rounded-lg px-3 py-2 5 text-white font-semibold leading-7  hover:bg-emerald-600">Sign Up</a>
							</div>
						</div>

					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	</div>)
}
