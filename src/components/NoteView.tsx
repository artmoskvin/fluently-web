import {Note} from "@/models";


export default function NoteView({note}: { note: Note }) {
    return <div>{note.title}</div>
}