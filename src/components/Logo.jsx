export default function Logo({ fontSize }) {
    return (
        <div className="flex gap-2">
            <img src="/assets/icons/hashtag-solid.svg" alt="Logo" className="w-5" />
            <p className={`font-poppins ${fontSize} text-white`}>Social Cause</p>
        </div>
    )
}