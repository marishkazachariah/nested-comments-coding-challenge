import { UserIcon } from '../../ui/UserIcon';

interface AvatarProps {
    isUser?: boolean;
}

const Avatar = (props: AvatarProps) => {
    const { isUser: selfAvatar } = props;

    return (
        <div
            style={{
                backgroundColor: selfAvatar ? '#F0E4FF' : '#E4F0FF',
            }}
            className="h-8 w-8 rounded-full flex items-center justify-center"
        >
            <UserIcon />
        </div>
    );
};

export default Avatar;
