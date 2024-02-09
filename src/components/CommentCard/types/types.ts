export interface Comment {
    commentId: number;
    userId: string;
    timestamp: string;
    commentText: string;
    replies: Comment[];
    parentId?: number | null;
}