import * as React from 'react';
import { SVGProps } from 'react';

export const UserIcon = ({
  className,
  ...restProps
}: SVGProps<SVGSVGElement>) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    fill="none"
    data-testid="user-icon"
    {...restProps}
  >
    <path
      stroke="#567BD9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      d="M16.667 17.5v-1.667a3.333 3.333 0 0 0-3.334-3.333H6.667a3.333 3.333 0 0 0-3.334 3.333V17.5m10-11.667a3.333 3.333 0 1 1-6.666 0 3.333 3.333 0 0 1 6.666 0Z"
    />
  </svg>
);
