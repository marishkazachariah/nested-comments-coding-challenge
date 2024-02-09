import { useState } from 'react';
import { HeartIcon } from '../../ui/HeartIcon';

const HeartButton = () => {
  const [isFilled, setIsFilled] = useState(false);

  const handleClick = () => {
    setIsFilled(!isFilled);
  };

  return (
    <button
      onClick={handleClick}
      style={{ background: 'none', border: 'none', cursor: 'pointer' }}
    >
      {isFilled ? <HeartIcon filled={true} /> : <HeartIcon />}
    </button>
  );
};

export default HeartButton;
