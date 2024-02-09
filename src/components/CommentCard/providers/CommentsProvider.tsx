import React, { useState, ReactNode } from 'react';
import initialComments from '../../../assets/mockApi.json';
import CommentsContext from '../context/CommentsContextType';
import { addReply } from '../../../utils/addReply';
import { Comment } from '../types/types';

interface ProviderProps {
    children: ReactNode;
}

export const CommentsProvider: React.FC<ProviderProps> = ({ children }) => {
    const [comments, setComments] = useState<Comment[]>(initialComments.comments);

    const addComment = (newComment: Comment, parentId?: number) => {
        setComments(currentComments => addReply(currentComments, newComment, parentId));
    };

    return (
        <CommentsContext.Provider value={{ comments, addComment }}>
            {children}
        </CommentsContext.Provider>
    );
};
