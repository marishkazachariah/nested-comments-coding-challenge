import * as React from 'react';
import { SVGProps } from 'react';

export const CornerUpLeftIcon = ({
  className,
  ...restProps
}: SVGProps<SVGSVGElement>) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="14px"
    height="14px"
    fill="none"
    {...restProps}
  >
    <path
      stroke="#6941C6"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.25 8.167 2.333 5.25m0 0L5.25 2.333M2.333 5.25h7a2.333 2.333 0 0 1 2.334 2.333v4.084"
    />
  </svg>
);
