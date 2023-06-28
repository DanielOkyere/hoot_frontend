import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/home/footer";
import Image from "next/image";
import Kane from "../../public/kane.png";
import Kwabena from "../../public/kwabena.png";

export default function TeamBio() {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col sm:flex-row md:flex-row mx-auto max-w-screen-2xl items-center">
                <div className="pt-16 lg:w-1/2 w-full bg-white">
                    <div className="w-full  px-4 mx-auto">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                            <div className="px-6">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full px-4 flex justify-center">
                                        <div className="relative justify-center w-20">
                                            <div className="shadow-xl rounded-full  align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px">
                                                <Image
                                                    src={Kane}
                                                    alt="kane"
                                                    className="team_image"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    &nbsp;
                                    <div className="w-full px-4 text-center mt-24 mb-18"></div>
                                </div>
                                <div className="text-center mt-28">
                                    <h3 className="text-xl font-semibold leading-normal mb-2 text-emerald-900  ">
                                        Kane Mani
                                    </h3>
                                    <div className="text-sm leading-normal mt-0 mb-2 text-emerald-600 font-bold uppercase">
                                        Accra, Ghana
                                    </div>
                                    <div className="mb-2 text-emerald-600 mt-10">
                                        Technology Entrepreneur
                                    </div>
                                </div>
                                <div className="mt-10 py-10 border-t border-emerald-200 text-center">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full lg:w-9/12 px-4">
                                            <p className="mb-4 text-lg leading-relaxed text-gray-700">
                                                Kane Mani is a technology
                                                entrepreneur who has co-founded
                                                and run technology companies in
                                                the areas of energy, games and
                                                social media. <br />   Kane
                                                co-founded Origgin in 2010 and
                                                has served as it’s CEO since.
                                                Kane has steered the company
                                                from a mobile app development
                                                company since its inception to
                                                presently as an electric utility
                                                company. <br />
                                                In 2023, Kane added up the CTO
                                                role to lead the company’s
                                                development in advanced
                                                electricity technologies. Kane
                                                also serves as the Co-founder,
                                                CEO and CTO of Gudu Studios, a
                                                video game company on a mission
                                                to democratize games across
                                                Africa. <br /> Kane is also the
                                                Co-founder and CEO of Cast
                                                Social, a social media
                                                technology company.

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-16 lg:w-1/2 w-full bg-white">
                    <div className="w-full  px-4 mx-auto">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                            <div className="px-6">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full px-4 flex justify-center">
                                        <div className="relative w-20">
                                            <div className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px">
                                                <Image
                                                    src={Kwabena}
                                                    alt="Kwabena"
                                                    className="team_image"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full px-4 text-center mt-20 mb-20"></div>
                                </div>
                                <div className="text-center mt-12">
                                    <h3 className="text-xl font-semibold leading-normal mb-2 text-emerald-900 ">
                                        Kwabena Okyere
                                    </h3>
                                    <div className="text-sm leading-normal mt-0 mb-2 text-emerald-600 font-bold uppercase">
                                        Accra, Ghana
                                    </div>
                                    <div className="mb-2 text-emerald-600 mt-10">
                                        Technology Entrepreneur
                                    </div>
                                </div>
                                <div className="mt-10 py-10 border-t border-emerald-200 text-center">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full lg:w-9/12 px-2">
                                            <p className="mb-4 text-lg leading-relaxed text-gray-700">
                                                Kwabena Okyere is a serial
                                                entrepreneur and VC with a focus
                                                on disrupting industries and
                                                collaborating with like-minded
                                                people. <br /> He attended J Mac
                                                Robinson College of Business in
                                                Atlanta, Georgia with a major in
                                                finance. He is amongst the
                                                pioneers of the e-cigarette
                                                industry with his own brand
                                                Treasure Hookah distributed
                                                internationally. <br />He is the
                                                founder of a supplies and
                                                services company to oil and gas,
                                                mining, shipping and government
                                                institutions called Treasure
                                                Island Logics Enterprises
                                                Limited. His interest in cyber
                                                security is adumbrated by the
                                                current rise in financial fraud
                                                in the continent and to redirect
                                                the African youth in solving
                                                problems in the financial space
                                                via tech.  We are very excited
                                                about HOOT, and look forward to
                                                the contribution of reliable
                                                payment security and the
                                                inclusion of African men and
                                                women in Tech.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
