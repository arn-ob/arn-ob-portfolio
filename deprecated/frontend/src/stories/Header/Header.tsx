import React from 'react';
import Logo from '../../img/logo.svg';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Header.css';

interface Headerprops {
  homeRef: any;
  aboutRef: any;
  socialMediaRef: any;
  skillsRef: any;
  contactRef: any;
}

export const Header = ({
  aboutRef,
  socialMediaRef,
  skillsRef,
  contactRef,
  homeRef,
  ...props
}: Headerprops) => {
  const handleScroll = (el: HTMLElement | null): void => {
    if (!el) return;
    window.scrollTo({
      top: el.offsetTop,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className="header-desktop">
        <section>
          <div>
            <a
              href="#home"
              rel="noopener noreferrer"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                handleScroll(homeRef.current);
              }}
            >
              <img src={Logo} alt="Shajidur Rahman Logo" />
            </a>
          </div>
          <div className="navigation">
            <nav>
              <a
                href="#home"
                rel="noopener noreferrer"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  handleScroll(homeRef.current);
                }}
              >
                Home
              </a>
              <a
                href="#about"
                rel="noopener noreferrer"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  handleScroll(aboutRef.current);
                }}
              >
                About
              </a>
              <a
                href="#socialmedia"
                rel="noopener noreferrer"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  handleScroll(socialMediaRef.current);
                }}
              >
                Social Media
              </a>
              <a
                href="#skills"
                rel="noopener noreferrer"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  handleScroll(skillsRef.current);
                }}
              >
                Skills
              </a>
              <a
                href="#contact"
                rel="noopener noreferrer"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  handleScroll(contactRef.current);
                }}
              >
                Contact
              </a>
            </nav>
            <div>
              <ThemeToggle />
            </div>
          </div>
        </section>
      </div>
      <div className="header-mobile-no-menu">
        <div className="logo-theme-toggle">
          <a
            href="#home"
            rel="noopener noreferrer"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              handleScroll(homeRef.current);
            }}
          >
            <img src={Logo} alt="Shajidur Rahman Logo" />
          </a>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </>
  );
};

export default Header;
