export default function TextBackground() {
    return <div className="col-span-3 bg-gray-200 flex flex-col shadow-sm shadow-gray-400">
        <h1 className="text-black text-4xl mt-12 ml-[8vw] mb-8 w-fit h-fit" contentEditable={true}>The Internet Is Still Early</h1>
        <textarea className="text-black bg-white max-w-4xl ml-[8vw] mr-[2vw] h-[80vh] shadow-md shadow-gray-400 rounded-lg p-8">The internet is a seething mass of humanity: all of our knowledge and stupidity and joy and hatred shoved
            into pixels. Our early oracles predicted that the internet would become a digital savior—it would spread
            democracy and science throughout the world. That, well, that was wrong. What it did instead was spread us,
            in our excess and folly, everywhere, instantly.

            It is tempting to dismiss the internet as yesterday’s revolution. Surely, after 30 years of pop-ups and
            porn, we would’ve figured it out. The opposite is true. We haven’t even gotten everyone online yet.
        </textarea>
    </div>
}