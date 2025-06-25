export default function Button({ padding, text, position }) {
    return (
        <button className={`flex ${position} bg-pink-500 text-white text-sm ${padding} rounded-full shadow-lg hover:bg-pink-600 cursor-pointer`}>{text}</button>
    )
}