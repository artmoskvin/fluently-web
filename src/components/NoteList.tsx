import {Note} from "@/models";
import NoteView from "@/components/NoteView";


export default function NoteList({notes}: { notes: Note[] }) {
    return (
        <div className="text-black mt-10 space-y-4">
            {notes.map(note => (
                <NoteView key = {note.id} note={note}/>
            ))}
        </div>
    )
}