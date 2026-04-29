import axios from "axios";
import type { Note, NoteTag } from "../types/note";

export interface FetchNotesResponse {
    notes: Note[];
    totalPages: number;
}

export interface createNoteOptions {
    title: string;
    content: string;
    tag: NoteTag
}

const headers = {
    'Authorization': `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`,
}

export const fetchNotes = async (search: string = '', page: number = 1) => {
    try {
        const response = await axios.get<FetchNotesResponse>(
            `https://notehub-public.goit.study/api/notes?search=${search}&page=${page}`,
            { headers }
        );
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

export const createNote = async ({ title, content, tag }: createNoteOptions) => {
    try {
        const response = await axios.post<Note>(
            `https://notehub-public.goit.study/api/notes`,
            {
                title,
                content,
                tag,
            },
            { headers }
        );
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

export const deleteNote = async (id:number) => {
    try {
        const response = await axios.delete<Note>(
            `https://notehub-public.goit.study/api/notes/${id}`,
            { headers }
        );
        return response.data;
    } catch (e) {
        console.log(e);
    }
}
