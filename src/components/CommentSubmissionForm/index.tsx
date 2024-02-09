import React, { TextareaHTMLAttributes, useState, useRef, useEffect } from 'react';
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable';
import { colors } from '../../theme';
import Avatar from '../Avatar';
import Button from '../Button';
import { ButtonType } from '../Button/types';
import { useTranslation } from 'react-i18next';

interface CommentSubmissionFormProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    userId?: string;
    placeholderText: string;
    handleChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onSubmit: () => void;
    onCancel: () => void;
}

export const CommentSubmissionForm: React.FC<CommentSubmissionFormProps> = ({ 
    userId, placeholderText, handleChange, onSubmit, onCancel }) => {
    const [value, setValue] = useState('');
    const [prefixAdded, setPrefixAdded] = useState(false);
    const [newComment, setNewComment] = useState('');
    const contentEditableRef = useRef<HTMLDivElement>(null);
    const { t } = useTranslation();

    useEffect(() => {
        if (prefixAdded && contentEditableRef.current && userId) {
            const html = contentEditableRef.current.innerHTML;
            contentEditableRef.current.innerHTML = `<span style="color: ${colors.text.blue}; font-weight: bold">@${userId}</span>&nbsp;` + html;
        }
    }, [prefixAdded, userId]);

    const handleBlur = () => {
        if (value.trim() === '') {
            setPrefixAdded(false);
        }
    };

    const handleFocus = () => {
        if (!prefixAdded && userId) {
            setPrefixAdded(true);
        } else if (prefixAdded && contentEditableRef.current) {
            const html = contentEditableRef.current.innerHTML;
            if (!html.endsWith("&nbsp;")) {
                contentEditableRef.current.innerHTML = html + "&nbsp;";
            }
        }
    };

    const handleContentChange = (e: ContentEditableEvent) => {
        const newValue = e.currentTarget.textContent || '';
        setValue(newValue);
        setNewComment(newValue);

        if (!prefixAdded && userId && !newValue.startsWith(`@${userId}`)) {
            setPrefixAdded(true);
        }

        if (handleChange) {
            handleChange({
                target: {
                    value: newValue,
                },
            } as React.ChangeEvent<HTMLTextAreaElement>);
        }
    };

    const handleSubmit = () => {
        setValue('');
        setNewComment('');
        setPrefixAdded(false);

        if (onSubmit) {
            onSubmit();
        }
    };

    const handleCancel = () => {
        if (contentEditableRef.current) {
            contentEditableRef.current.innerHTML = '';
        }
        setValue('');
        setNewComment('');
        setPrefixAdded(false);
        if (onCancel) {
            onCancel();
        }
    };

    return (
        <>
            <ContentEditable
                innerRef={contentEditableRef}
                html={!prefixAdded && userId ? `<span style="color: ${colors.text.blue}; font-weight: bold">@${userId}</span>&nbsp;${value}` : value}
                onChange={handleContentChange}
                onBlur={handleBlur}
                tagName="div"
                aria-placeholder={placeholderText}
                className="block w-full mb-4 mt-4 p-4 text-gray-700 rounded-lg bg-gray-100 sm:text-md dark:bg-gray-100 dark:border-gray-600 dark:text-gray-700 overflow-y-hidden break-words"
                style={{ outline: 'none' }}
                onFocus={handleFocus}
                aria-label="Type your comment here"
            />
            <div className="flex flex-row justify-between items-center mb-4">
                <Avatar isUser />
                <div className="flex flex-row justify-end space-x-2">
                    {(newComment.trim() || userId) && (
                        <Button
                            label="Cancel"
                            onClick={handleCancel}
                            buttonType={ButtonType.Secondary}
                            ariaLabel="Cancel Button"
                        />
                    )}
                    <Button
                        label={newComment ? t('Reply') : t('Send')}
                        onClick={handleSubmit}
                        disabled={!newComment}
                        buttonType={ButtonType.Primary}
                        ariaLabel="Submit Button"
                    />
                </div>
            </div >
        </>
    );
};
