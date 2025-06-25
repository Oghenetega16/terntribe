import Button from "./button";
import { Link } from "react-router-dom";

export default function HeroSection() {
    return (
        <section className="font-poppins">
            <div className="lg:flex lg:flex-row-reverse lg:p-5 xl:items-end">
                <img src="/assets/images/hero-image-one.jpg" alt="" className="w-full lg:w-1/2" />
                <div className="text-center p-10 text-cyan-950 lg:w-1/2 lg:text-left">
                    <h1 className="font-bold text-2xl sm:w-90 sm:mx-auto md:text-3xl md:w-120 lg:mx-0 capitalize">Build the community where everything is possible</h1>
                    <p className="my-6 text-sm leading-6">Together, we can make a difference in the world. Join
                    thousands of changemakers creating positive impact in communities
                    worldwide. Whether you're passionate about education, sustainability,
                    healthcare, or social justice, your voice and actions matter. Be part
                    of a global movement driving change, uplifting lives, and building a better
                    future - one cause at a time. Get involved today and help shape a world
                    we're all proud to live in.</p>
                    <Link to="/get-involved"><Button text="Join the Cause" padding="px-8 py-3" position="mx-auto lg:mx-0" /></Link>
                </div>
            </div>
        </section>
    )
}