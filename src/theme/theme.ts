import { ButtonType } from '../components/Button/types';
import { TextType } from '../components/Text/types';
import { colors } from './colors';

export const getButtonClassNames = (type: ButtonType): string => {
  switch (type) {
    case ButtonType.Primary:
      return 'bg-[#6941C6] text-white font-bold py-2 px-4 rounded-lg';
    case ButtonType.Secondary:
      return 'bg-[#F4EBFF] text-[#6941C6] font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-x-2';
    case ButtonType.Tertiary:
      return 'bg-transparent text-[#6941C6] font-semibold p-1 border border-[#D0D5DD] rounded-lg flex items-center justify-center gap-x-1 text-xs';
    default:
      return 'bg-[#6941C6] text-white font-bold py-2 px-4 rounded-lg';
  }
};

export const getTextColor = (type: TextType) => {
  switch (type) {
    case TextType.User:
      return colors.text.darkGrey;
    case TextType.MentionUser:
      return colors.text.blue;
    case TextType.Time:
      return colors.text.lightGrey;
    default:
      return colors.text.grey;
  }
};

export const getTextClassName = (type: TextType) => {
  switch (type) {
    case TextType.User:
      return 'font-bold';
    default:
      return 'text-grey mr-4';
  }
};
