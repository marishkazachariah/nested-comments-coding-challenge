import React from 'react';
import { useTranslation } from 'react-i18next';
import { CornerUpLeftIcon } from '../../ui/CornerUpLeftIcon';
import { HeartIcon } from '../../ui/HeartIcon';
import Avatar from '../Avatar';
import Button from '../Button';
import { ButtonType } from '../Button/types';
import { Comment } from '../CommentCard/types/types';
import Text from '../Text';
import { TextType } from '../Text/types';

interface CommentCardComponentProps {
  comment: Comment;
  nestingLevel?: number;
  onReply: (userId: string) => void;
}

export const CommentCard: React.FC<CommentCardComponentProps> = ({
  comment,
  nestingLevel = 0,
  onReply,
}) => {
  const { t } = useTranslation();

  const marginValue = nestingLevel > 0 ? 22 : 0;

  const handleReplyClick = () => {
    onReply(comment.userId);
  };

  return (
    <div style={{ marginLeft: marginValue + 'px' }}>
      <div className="flex items-center justify-start gap-x-[10px] mb-4">
        <Avatar />
        <Text content={comment.userId} type={TextType.User} />
        <Text content={comment.timestamp} type={TextType.Time} />
      </div>
      <Text content={comment.commentText} type={TextType.Default} />
      <div className="flex items-center justify-end gap-x-5">
        <HeartIcon />
        <Button
          icon={<CornerUpLeftIcon />}
          label={t('Reply')}
          onClick={handleReplyClick}
          buttonType={ButtonType.Tertiary}
          ariaLabel="Reply to user"
          data-testid="button"
        />
      </div>
      {comment.replies && comment.replies.length > 0 && (
        <div>
          {comment.replies.map((reply) => (
            <CommentCard
              key={reply.commentId}
              comment={reply}
              nestingLevel={nestingLevel + 1}
              onReply={onReply}
            />
          ))}
        </div>
      )}
    </div>
  );
};
