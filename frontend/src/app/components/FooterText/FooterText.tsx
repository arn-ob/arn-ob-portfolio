import React, { useState } from 'react';
import './FooterText.css';
import firstFormationsLogo from '../../img/1stFormations_Member_Logo_Dark Background.png';
import Image from 'next/image';

import { useTheme } from '../../context/ThemeContext';

interface FooterTextProps {}

export const FooterText = ({ ...props }: FooterTextProps) => {
  const { activeTheme } = useTheme();

  const d = new Date();
  let year = d.getFullYear();

  const [currYear] = useState(year);

  return (
    <>
      <div className="footer-text">
        <div>
          <a href="https://www.1stformations.co.uk/" target="/">
            <Image
              src={firstFormationsLogo}
              alt="First Formations Logo"
              width={150}
              style={{ marginBottom: '1rem' }}
            />
          </a>
        </div>
        <p>
          Crafted in{' '}
          <a
            href="https://www.figma.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={
              activeTheme === 'light'
                ? 'footer-text-link-light-theme'
                : 'footer-text-link-dark-theme'
            }
          >
            Figma
          </a>
          {' '}
          and shipped with{' '}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className={
              activeTheme === 'light'
                ? 'footer-text-link-light-theme'
                : 'footer-text-link-dark-theme'
            }
          >
            Next.js
          </a>
          {' '}
          — Md Shajidur Rahman Almazee.
        </p>
        <p>
          &copy; {currYear} Md Shajidur Rahman Almazee. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default FooterText;
