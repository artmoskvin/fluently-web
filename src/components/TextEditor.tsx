'use client'

import {useEditor, EditorContent, BubbleMenu} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const TextEditor = () => {
    const editor = useEditor({
        extensions: [
            StarterKit,
        ],
        editorProps: {
            attributes: {
                class: 'prose m-5 focus:outline-none bg-white max-w-4xl ml-[8vw] mr-[2vw] min-h-[80vh] shadow-md shadow-gray-400/2 rounded-lg p-8',
            },
        },
    })

    let buttonStyle = "h-8 w-8 hover:bg-gray-300 active:bg-gray-400";

    return (
        <>
            {editor && <BubbleMenu editor={editor} tippyOptions={{duration: 100}}>
                <div className="h-8 w-24 bg-gray-200 rounded-lg flex justify-between items-center shadow-sm shadow-gray-400/75">
                    <button
                        onClick={() => editor.chain().focus().toggleBold().run()}
                        className={buttonStyle}
                    >
                        <svg className="ml-2" width="22px" height="20px" viewBox="0 0 22 20" version="1.1"
                             xmlns="http://www.w3.org/2000/svg">
                            <g id="Design-v2" stroke="none" fill="none">
                                <g id="Fluently-Web/Selection" transform="translate(-535, -275)" fill="#383838">
                                    <g id="Group-2-Copy" filter="url(#filter-ak28pq61a6-1)"
                                       transform="translate(525, 267)">
                                        <g id="Group" transform="translate(10, 8)">
                                            <path
                                                d="M11.87,13.07 L9.33,10.56 L9.36,10.53 C11.1,8.59 12.34,6.36 13.07,4 L16,4 L16,2 L9,2 L9,0 L7,0 L7,2 L0,2 L0,3.99 L11.17,3.99 C10.5,5.92 9.44,7.75 8,9.35 C7.07,8.32 6.3,7.19 5.69,6 L3.69,6 C4.42,7.63 5.42,9.17 6.67,10.56 L1.58,15.58 L3,17 L8,12 L11.11,15.11 L11.87,13.07 Z M17.5,8 L15.5,8 L11,20 L13,20 L14.12,17 L18.87,17 L20,20 L22,20 L17.5,8 Z M14.88,15 L16.5,10.67 L18.12,15 L14.88,15 L14.88,15 Z"
                                                id="Shape"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleItalic().run()}
                        className={buttonStyle}
                    >
                        <svg className="ml-1.5" width="22px" height="22px" viewBox="0 0 22 22" version="1.1"
                             xmlns="http://www.w3.org/2000/svg">
                            <g id="Design-v2" stroke="none" fill="none">
                                <g id="Fluently-Web/Selection" transform="translate(-566, -275)" fill="#383838">
                                    <g id="Group-2-Copy" filter="url(#filter-vi116mb28i-1)"
                                       transform="translate(525, 267)">
                                        <g id="Group" transform="translate(41, 8)">
                                            <path
                                                d="M18,8 L19.25,5.25 L22,4 L19.25,2.75 L18,0 L16.75,2.75 L14,4 L16.75,5.25 L18,8 Z M10.5,8.5 L8,3 L5.5,8.5 L0,11 L5.5,13.5 L8,19 L10.5,13.5 L16,11 L10.5,8.5 Z M18,14 L16.75,16.75 L14,18 L16.75,19.25 L18,22 L19.25,19.25 L22,18 L19.25,16.75 L18,14 Z"
                                                id="Shape"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleStrike().run()}
                        className={buttonStyle}
                    >
                        <svg className="p-1" focusable="false"
                             aria-hidden="true" viewBox="0 0 24 24" data-testid="AutoModeIcon">
                            <path
                                d="M19.03 3.56c-1.67-1.39-3.74-2.3-6.03-2.51v2.01c1.73.19 3.31.88 4.61 1.92l1.42-1.42zM11 3.06V1.05c-2.29.2-4.36 1.12-6.03 2.51l1.42 1.42C7.69 3.94 9.27 3.25 11 3.06zM4.98 6.39 3.56 4.97C2.17 6.64 1.26 8.71 1.05 11h2.01c.19-1.73.88-3.31 1.92-4.61zM20.94 11h2.01c-.21-2.29-1.12-4.36-2.51-6.03l-1.42 1.42c1.04 1.3 1.73 2.88 1.92 4.61zM7 12l3.44 1.56L12 17l1.56-3.44L17 12l-3.44-1.56L12 7l-1.56 3.44z"></path>
                            <path
                                d="M12 21c-3.11 0-5.85-1.59-7.46-4H7v-2H1v6h2v-2.7c1.99 2.84 5.27 4.7 9 4.7 4.87 0 9-3.17 10.44-7.56l-1.96-.45C19.25 18.48 15.92 21 12 21z"></path>
                        </svg>
                    </button>
                </div>
            </BubbleMenu>}
            <EditorContent editor={editor}/>
        </>
    )
}

export default TextEditor