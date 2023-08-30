export default function RightSideBar() {
    return <div className="col-span-1 bg-gray-200 flex flex-col items-end">
        <div className="flex items-center mt-5 mr-10 gap-2">
            <span className="text-black text-sm">John Wilson</span>
            <div className="flex justify-center items-center bg-indigo-600 rounded-full w-6 h-6 text-xs">JW</div>
        </div>
        <div
            className="flex justify-center items-center mt-auto mb-10 mr-10 text-black font-bold rounded-full border-black border-2 w-6 h-6 text-md">?
        </div>
    </div>
}