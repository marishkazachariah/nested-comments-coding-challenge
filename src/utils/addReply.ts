import { Comment } from "../components/CommentCard/types/types";

export const addReply = (comments: Comment[], newComment: Comment, parentId?: number): Comment[] => {
    if (!parentId) {
        return [...comments, newComment];
    }

    return comments.map(comment => {
        if (comment.commentId === parentId) {
            const updatedReplies = comment.replies ? [...comment.replies, newComment] : [newComment];
            return { ...comment, replies: updatedReplies };
        } else if (comment.replies && comment.replies.length > 0) {
            return { ...comment, replies: addReply(comment.replies, newComment, parentId) };
        }
        return comment;
    });
};
