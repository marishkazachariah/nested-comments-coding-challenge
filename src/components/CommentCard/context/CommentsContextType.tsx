import React from 'react';
import { Comment } from '../types/types';

interface CommentsContextType {
  comments: Comment[];
  addComment: (comment: Comment) => void;
}

const CommentsContext = React.createContext<CommentsContextType | undefined>(undefined);

export default CommentsContext;
