"use client";

import { useState, Fragment } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import HootLogo from "../../public/hootlogo.jpeg";

const navigation = [
    {
        name: "Why Hoot",
        href: "#",
    },
    {
        name: "Features",
        href: "#",
    },
    {
        name: "Pricing",
        href: "#",
    },
    {
        name: "Developers",
        href: "#",
        submenu: [
            {
                name: "Docs",
                href: "#",
            },
            {
                name: "Libraries and SDK",
                href: "#",
            },
            {
                name: "Samples",
                href: "#",
            },
        ],
    },
    { name: "Contact Us", href: "/reachus" },

];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropMenu, setDropMenu] = useState(false);
    const [dropLogin, setLoginDrop] = useState(false);

    return (
        <div className="bg-white">
            <header className="relative inset-x-0 top-0 z-50">
                <nav className="flex items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1">
                        <a
                            href="/"
                            className="-m-1.5 p-1.5 text-lg font-extrabold"
                        >
                            <span className="sr-only ">HOOT</span>
                            <Image
                                src={HootLogo}
                                height={0}
                                width={0}
                                alt="Hero Image"
                                sizes="10vw"
                                style={{ width: "75%", height: "auto" }}
                            />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open Menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>

                    <div className="hidden lg:flex lg:gap-x-12 relative ">
                        {navigation.map((item) =>
                            item.submenu ? (
                                <div
                                    onMouseEnter={() =>
                                        setTimeout(() => setDropMenu(true), 500)
                                    }
                                    onMouseLeave={() =>
                                        setTimeout(
                                            () => setDropMenu(false),
                                            500,
                                        )
                                    }
                                    className="items-center text-gray-800"
                                    key={item.name}
                                >
                                    <button
                                        className="text-gray flex items-center text-sm font-semibold leading-6"
                                        type="button"
                                    >
                                        {item.name}{" "}
                                        <svg
                                            className="w-4 h-4 ml-2"
                                            aria-hidden="true"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            ></path>
                                        </svg>
                                    </button>
                                    <div
                                        className={
                                            dropMenu
                                                ? "flex " +
                                                  `z-20 flex-col absolute bg-white divide-gray-100 rounded-lg shadow w-1/2 dark:bg-gray-700 mt-4`
                                                : "hidden"
                                        }
                                    >
                                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 w-full ">
                                            {dropMenu &&
                                                item.submenu?.map((menu) => (
                                                    <li key={menu.name}>
                                                        <a
                                                            href={menu.href}
                                                            className="px-4 py-2 block hover:bg-emerald-900 hover:text-white"
                                                        >
                                                            {menu.name}
                                                        </a>
                                                    </li>
                                                ))}
                                        </ul>
                                    </div>
                                </div>
                            ) : (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-sm font-semibold leadin-6 text-gray-900"
                                >
                                    {item.name}
                                </a>
                            ),
                        )}
                    </div>

                    <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4 relative">
                        <a
                            href="/login"
                            className="rounded-lg px-3 py-3  text-sm font-semibold leading-6 text-gray-600"
                            onMouseOver={() =>
                                setTimeout(() => setLoginDrop(true), 500)
                            }
                            onMouseOut={() =>
                                setTimeout(() => setLoginDrop(false), 3000)
                            }
                        >
                            Sign In
                            {dropLogin && (
                                <div
                                    className={
                                        dropLogin
                                            ? " flex flex-col absolute bg-white divide-gray-300 rounded-lg shadow w-1/3 py-4 dark:bg-gray-700 mt-8"
                                            : "hidden"
                                    }
                                >
                                    <a
                                        href="/login"
                                        className="px-4 py-2  hover:bg-emerald-900 hover:text-white flex flex-row items-center"
                                        onMouseOver={() =>
                                            setTimeout(
                                                () => setLoginDrop(true),
                                                500,
                                            )
                                        }
                                    >
                                        <svg
                                            className="px-2 hover:fill-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="40"
                                            height="40"
                                            viewBox="0 0 256 256"
                                        >
                                            <path
                                                fill="#065f46"
                                                d="M234.38 210a123.36 123.36 0 0 0-60.78-53.23a76 76 0 1 0-91.2 0A123.36 123.36 0 0 0 21.62 210a12 12 0 1 0 20.77 12c18.12-31.32 50.12-50 85.61-50s67.49 18.69 85.61 50a12 12 0 0 0 20.77-12ZM76 96a52 52 0 1 1 52 52a52.06 52.06 0 0 1-52-52Z"
                                            />
                                        </svg>
                                        Individual
                                    </a>
                                    <a
                                        href="/login"
                                        className="px-4 py-2 flex flex-row items-center hover:bg-emerald-900 hover:text-white"
                                        onMouseOver={() =>
                                            setTimeout(
                                                () => setLoginDrop(true),
                                                500,
                                            )
                                        }
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="40"
                                            height="40"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="#065f46"
                                                d="M18 15h-2v2h2m0-6h-2v2h2m2 6h-8v-2h2v-2h-2v-2h2v-2h-2V9h8M10 7H8V5h2m0 6H8V9h2m0 6H8v-2h2m0 6H8v-2h2M6 7H4V5h2m0 6H4V9h2m0 6H4v-2h2m0 6H4v-2h2m6-10V3H2v18h20V7H12Z"
                                            />
                                        </svg>{" "}
                                        Company
                                    </a>
                                </div>
                            )}
                        </a>
                        <a
                            href="/login"
                            className="rounded-lg px-3 py-3  text-sm font-semibold leading-6 bg-emerald-900 text-white hover:bg-emerald-600"
                        >
                            Create Account
                        </a>
                    </div>
                </nav>
                {/* Mobile Menu */}
                <Dialog
                    as="div"
                    className="lg:hidden"
                    open={mobileMenuOpen}
                    onClose={setMobileMenuOpen}
                >
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">HOOT</span>
                                <Image
                                    src={HootLogo}
                                    height={0}
                                    width={0}
                                    alt="Hero Image"
                                    sizes="10vw"
                                    style={{ width: "75%", height: "auto" }}
                                />
                            </a>
                            <button
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close Menu</span>
                                <XMarkIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) =>
                                        item.submenu ? (
                                            <div
                                                onMouseEnter={() =>
                                                    setTimeout(
                                                        () => setDropMenu(true),
                                                        500,
                                                    )
                                                }
                                                onMouseLeave={() =>
                                                    setTimeout(
                                                        () =>
                                                            setDropMenu(false),
                                                        500,
                                                    )
                                                }
                                                className="items-center text-gray-800"
                                                key={item.name}
                                            >
                                                <button
                                                    className="text-gray flex items-center text-sm font-semibold leading-6"
                                                    type="button"
                                                >
                                                    {item.name}{" "}
                                                    <svg
                                                        className="w-4 h-4 ml-2"
                                                        aria-hidden="true"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M19 9l-7 7-7-7"
                                                        ></path>
                                                    </svg>
                                                </button>
                                                <div
                                                    className={
                                                        dropMenu
                                                            ? "flex " +
                                                              `z-20 flex-col absolute bg-white divide-gray-100 rounded-lg shadow w-1/2 dark:bg-gray-700 mt-4`
                                                            : "hidden"
                                                    }
                                                >
                                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 w-full ">
                                                        {dropMenu &&
                                                            item.submenu?.map(
                                                                (menu) => (
                                                                    <li
                                                                        key={
                                                                            menu.name
                                                                        }
                                                                    >
                                                                        <a
                                                                            href={
                                                                                menu.href
                                                                            }
                                                                            className="px-4 py-2 block hover:bg-emerald-900 hover:text-white"
                                                                        >
                                                                            {
                                                                                menu.name
                                                                            }
                                                                        </a>
                                                                    </li>
                                                                ),
                                                            )}
                                                    </ul>
                                                </div>
                                            </div>
                                        ) : (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </a>
                                        ),
                                    )}
                                </div>
                                <div className="flex py-6 flex-col gap-4">
                                    <a
                                        href="/login"
                                        className="-mx-3 block   rounded-lg px-3 py-2 5 text-gray-800 font-semibold leading-7"
                                    >
                                        Sign In
                                    </a>
                                    <a
                                        href="/login"
                                        className="-mx-3 block  bg-emerald-900 rounded-lg px-3 py-2 5 text-white font-semibold leading-7  hover:bg-emerald-600"
                                    >
                                        Create Account
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </div>
    );
}
