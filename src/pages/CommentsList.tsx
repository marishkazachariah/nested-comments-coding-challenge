import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { CornerUpLeftIcon } from '../ui/CornerUpLeftIcon';
import { HeartIcon } from '../ui/HeartIcon';
import { UserIcon } from '../ui/UserIcon';

export const ComponentsList = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('comments-list:reply')}</h1>
      <HeartIcon />
      <CornerUpLeftIcon />
      <UserIcon />
    </div>
  );
};
