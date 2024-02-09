import { fireEvent, render, screen } from '@testing-library/react';
import { CommentSubmissionForm } from '..';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: any) => key }),
}));

describe('CommentSubmissionForm Component', () => {
  test('renders form with correct elements', () => {
    render(
      <CommentSubmissionForm
        placeholderText="Write a comment..."
        onSubmit={jest.fn()}
        onCancel={jest.fn()}
      />,
    );
    expect(screen.getByTestId('Send')).toBeInTheDocument();
    expect(screen.queryByTestId('Cancel')).not.toBeInTheDocument();
  });

  test('handles input change correctly', () => {
    render(
      <CommentSubmissionForm
        placeholderText="Write a comment..."
        onSubmit={jest.fn()}
        onCancel={jest.fn()}
      />,
    );

    const inputElement = screen.getByLabelText('Type your comment here');
    inputElement.focus();
    fireEvent.input(inputElement, { target: { innerHTML: 'Test comment' } });

    expect(inputElement.innerHTML).toBe('Test comment');
  });

  test('submits form on button click', () => {
    const onSubmit = jest.fn();
    render(
      <CommentSubmissionForm
        placeholderText="Write a comment..."
        onSubmit={onSubmit}
        onCancel={jest.fn()}
      />,
    );

    const inputElement = screen.getByLabelText('Type your comment here');
    inputElement.focus();
    fireEvent.input(inputElement, { target: { innerHTML: 'Test comment' } });

    fireEvent.click(screen.getByTestId('Reply'));

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  test('calls onCancel when cancel button is clicked', () => {
    const onCancel = jest.fn();
    render(
      <CommentSubmissionForm
        userId="user1"
        placeholderText="Write a comment..."
        onSubmit={jest.fn()}
        onCancel={onCancel}
      />,
    );

    fireEvent.click(screen.getByTestId('Cancel'));

    expect(onCancel).toHaveBeenCalledTimes(1);
  });
});
