import { getTextClassName, getTextColor } from '../../theme';
import { TextType } from './types';

interface TextProps {
  content: string;
  type?: TextType;
  fontSize?: number;
  className?: string;
}

const Text = ({
  content,
  type = TextType.Default,
  fontSize,
  className,
}: TextProps) => {
  const color = getTextColor(type);
  const textClassName = getTextClassName(type);

  return (
    <div
      className={`${textClassName} ${className}`}
      style={{ fontSize: fontSize ? `${fontSize}px` : 'inherit', color }}
    >
      {content}
    </div>
  );
};

export default Text;
