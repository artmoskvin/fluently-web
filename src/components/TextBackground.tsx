import TextEditor from "@/components/TextEditor";

export default function TextBackground() {
    return <div className="col-span-3 bg-gray-200 flex flex-col shadow-sm shadow-gray-400">
        <h1 className="text-black text-4xl mt-12 ml-[8vw] mb-8 w-fit h-fit" contentEditable={true}>The Internet Is Still Early</h1>
        <TextEditor />
    </div>
}