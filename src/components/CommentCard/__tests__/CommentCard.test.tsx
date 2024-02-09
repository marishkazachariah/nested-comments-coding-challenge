import { fireEvent, render, screen } from '@testing-library/react';
import { CommentCard } from '..';
import Avatar from '../../Avatar';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: any) => key }),
}));

describe('CommentCardComponent', () => {
  test('clicking reply button calls onReply function with correct userId', () => {
    const comment = {
      commentId: 1,
      userId: 'user1',
      timestamp: '1 d',
      commentText: 'This is a test comment',
      replies: [],
    };

    const onReply = jest.fn();

    render(<CommentCard comment={comment} onReply={onReply} />);

    fireEvent.click(screen.getByTestId('Reply'));

    expect(onReply).toHaveBeenCalledWith('user1');
  });

  test('buttons have accessibility attributes', () => {
    const comment = {
      commentId: 1,
      userId: 'user1',
      timestamp: '1 d',
      commentText: 'This is a test comment',
      replies: [],
    };

    const onReply = jest.fn();

    render(<CommentCard comment={comment} onReply={onReply} />);

    const replyButton = screen.getByTestId('Reply');

    expect(replyButton).toHaveAttribute('data-testid');

    expect(replyButton).toHaveAttribute('aria-label', 'Reply to user');
  });

  test('renders nested comments with correct prop length', () => {
    const comment = {
      commentId: 1,
      userId: 'user1',
      timestamp: '2022-01-01',
      commentText: 'This is a test comment',
      replies: [
        {
          commentId: 2,
          userId: 'user2',
          timestamp: '2022-01-02',
          commentText: 'Nested comment 1',
          replies: [],
        },
        {
          commentId: 3,
          userId: 'user3',
          timestamp: '2022-01-03',
          commentText: 'Nested comment 2',
          replies: [],
        },
      ],
    };

    const onReply = jest.fn();

    render(<CommentCard comment={comment} onReply={onReply} />);

    expect(screen.getByText('This is a test comment')).toBeInTheDocument();

    expect(screen.getByText('Nested comment 1')).toBeInTheDocument();
    expect(screen.getByText('Nested comment 2')).toBeInTheDocument();

    expect(screen.getAllByTestId('Reply')).toHaveLength(3);
  });

  test('renders comment timestamps correctly', () => {
    const comment = {
      commentId: 1,
      userId: 'user1',
      timestamp: 'Today',
      commentText: 'This is a test comment',
      replies: [],
    };

    render(<CommentCard comment={comment} onReply={jest.fn()} />);

    expect(screen.getByText('Today')).toBeInTheDocument();
  });

  test('renders user avatar correctly', () => {
    render(<Avatar isUser={true} />);
    expect(screen.getByTestId('user-icon')).toBeInTheDocument();
  });

  test('handles empty comments and replies', () => {
    const comment = {
      commentId: 1,
      userId: 'user1',
      timestamp: 'Today',
      commentText: 'This is a test comment',
      replies: [],
    };
    render(<CommentCard comment={comment} onReply={jest.fn()} />);

    expect(screen.queryByTestId('button')).not.toBeInTheDocument();

    render(<CommentCard comment={comment} onReply={jest.fn()} />);

    expect(screen.queryByTestId('button')).not.toBeInTheDocument();
  });
});
