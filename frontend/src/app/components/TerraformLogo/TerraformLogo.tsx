import React from 'react';

import { useTheme } from '../../context/ThemeContext';

export const TerraformLogo = () => {
  const { activeTheme } = useTheme();
  const fill = activeTheme === 'light' ? '#2F2F3A' : '#ffffff';
  return (
    <>
      <div className="logo-container">
        <svg
          width="100"
          height="100"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-hidden
        >
          <path
            fill={fill}
            d="M1.44 0v7.575l6.561 3.79V3.787zm21.12 4.227l-6.561 3.791v7.574l6.56-3.787zM8.72 4.23v7.575l6.561 3.787V8.018zm0 8.405v7.575L15.28 24v-7.578z"
          />
        </svg>
        <p style={{ color: activeTheme === 'light' ? '#2F2F3A' : '#ffffff' }}>
          Terraform
        </p>
      </div>
    </>
  );
};

export default TerraformLogo;
