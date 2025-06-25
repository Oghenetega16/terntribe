import Button from "./button";

export default function CauseCard({ image, title, description }) {
    return (
        <div className="bg-cyan-100 rounded-lg my-6 font-overpass sm:w-[300px] flex flex-col">
            <img src={image} alt={title} className="rounded-t-lg h-40 w-full object-cover" />

            <div className="flex flex-col flex-1 p-5 justify-between">
                <div>
                    <h1 className="text-xl font-medium mb-2">{title}</h1>
                    <p className="text-black mb-4">{description}</p>
                </div>

                <div className="mt-auto flex justify-center">
                    <Button text="Learn More" position="" padding="px-5 py-2" />
                </div>
            </div>
        </div>
    )
}
