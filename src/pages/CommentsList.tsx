import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import CommentsContext from '../components/CommentCard/context/CommentsContextType';
import { CommentCard } from '../components/CommentCard';
import { CommentSubmissionForm } from '../components/CommentSubmissionForm';

export const ComponentsList = () => {
  const { t } = useTranslation();
  const context = useContext(CommentsContext);

  if (!context) {
    return <div>{t('noContextProvided')}</div>;
  }

  const { comments, addComment } = context;
  const [newComment, setNewComment] = useState('');
  const [replyUserId, setReplyUserId] = useState('');

  const handleNewCommentChange = (event: {
    target: {
      value: React.SetStateAction<string>;
    };
  }) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim() !== '') {
      const userId = 'user';
      addComment({
        userId,
        commentText: newComment,
        timestamp: 'today',
        replies: [],
        commentId: Math.floor(Math.random() * 1000)
      });
      setNewComment('');
      setReplyUserId('');
    }
  };

  const handleCancel = () => {
    setReplyUserId('');
  };

  const handleReply = (userId: string) => {
    setReplyUserId(userId);
  };

  return (
    <div className="mt-8 md:mt-16 mb-0 md:mb-16 px-8 md:px-16">
      <ul>
        {comments.map((comment) => (
          <CommentCard
            key={comment.commentId}
            comment={comment}
            onReply={handleReply} />
        ))}
      </ul>
      <CommentSubmissionForm
        userId={replyUserId}
        handleChange={handleNewCommentChange}
        placeholderText={t('placeholder')}
        onSubmit={handleCommentSubmit}
        onCancel={handleCancel}
        value={newComment}
      />
    </div>
  );
};
