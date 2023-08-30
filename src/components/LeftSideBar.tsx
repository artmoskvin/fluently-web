import NoteList from "@/components/NoteList";
import {Note} from "@/models";
import Logo from "@/components/Logo";

const NOTES: Note[] = [
  {id: "1", title: "How to Become a Better Conversationalist", text: "", ts: Date.now()},
  {id: "2", title: "Hack Your Focus With Body Doubling", text: "", ts: Date.now()},
  {id: "3", title: "A TikTok Competitor Is About to IPO", text: "", ts: Date.now()},
  {id: "4", title: "We Are Entering a Maker Renaissance", text: "", ts: Date.now()},
  {id: "5", title: "How We Became Every", text: "", ts: Date.now()},
]

export default function LeftSideBar() {
  return <div className="col-span-1 bg-white flex flex-col items-center">
    <button className="mt-10 bg-gray-200 text-black shadow-sm shadow-gray-400 min-w-max max-w-full w-3/4 text-left pl-3 rounded-lg h-8" type="button">+ New Note</button>
    <NoteList notes={NOTES}/>
    <Logo/>
  </div>
}