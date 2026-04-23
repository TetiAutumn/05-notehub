export interface Note {
    id: number;
    title: string;
    content: string;
    createdAt: number;
    updatedAt: number;
    tag: NoteTag;
}

export type NoteTag = "Work" | "Personal" | "Meeting" | "Shopping" | "Todo";
