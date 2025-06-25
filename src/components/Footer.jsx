import Logo from "./Logo"

export default function Footer() {
    return (
        <footer className="bg-cyan-950 font-overpass text-white px-10 py-12">
            <Logo textColor="text-white" fontSize="text-3xl" />
            <section aria-labelledby="footer-links" className="mt-10 lg:flex lg:gap-20">
                <div className="mb-10 text-sm space-y-4 lg:w-100">
                    <div className="flex items-center gap-5">
                        <img src="/assets/icons/location-dot-solid.svg" alt="location icon" className="w-3" />
                        <span>Plot 21/24A Herbert Macaulay Way, MaryLand Estate, Victoria Island, Lagos, Nigeria</span>
                    </div>
                    <div className="flex items-center gap-5">
                        <img src="/assets/icons/phone-volume-solid.svg" alt="phone icon" className="w-3" />
                        <span>(+234)814-568-9342</span>
                    </div>
                    <div className="flex items-center gap-5">
                        <img src="/assets/icons/envelope-solid.svg" alt="envelope icon" className="w-3" />
                        <span>socialcause@gmail.com</span>
                    </div>
                </div>
                
                <div className="sm:flex sm:gap-30 sm:items-start lg:gap-20">
                    <div className="space-y-2 sm:flex sm:gap-30 lg:gap-20">
                        <ul className="space-y-2 cursor-pointer">
                            <li className="hover:text-cyan-100">About Us</li>
                            <li className="hover:text-cyan-100">What We Do</li>
                            <li className="hover:text-cyan-100">FAQ</li>
                        </ul>

                        <ul className="space-y-2 cursor-pointer">
                            <li className="hover:text-cyan-100">Career</li>
                            <li className="hover:text-cyan-100">Blog</li>
                            <li className="hover:text-cyan-100">Contact</li>
                        </ul>
                    </div>

                    <div className="flex justify-center items-center gap-2 mt-10 sm:mt-0">
                        <div className="w-6 h-6 flex justify-center rounded-full border-1 border-white cursor-pointer transition-transform duration-300 hover:scale-105"><img src="/assets/icons/facebook-f-brands.svg" alt="facebook logo" className="w-2" /></div>
                        <div className="w-6 h-6 flex justify-center rounded-full border-1 border-white cursor-pointer transition-transform duration-300 hover:scale-105"><img src="/assets/icons/x-twitter-brands.svg" alt="twitter logo" className="w-2" /></div>
                        <div className="w-6 h-6 flex justify-center rounded-full border-1 border-white cursor-pointer transition-transform duration-300 hover:scale-105"><img src="/assets/icons/instagram-brands.svg" alt="instagram logo" className="w-2" /></div>
                    </div>
                </div>
            </section>
            <p className="text-center text-xs mt-6 sm:text-right">&copy; Copyright {new Date().getFullYear()} Social Cause. All rights reserved.</p>
        </footer>
    )
}