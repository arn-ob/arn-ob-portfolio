import Typewriter from 'typewriter-effect';
import profilePictureHero from '../../img/arnob.jpg';
import './HeroProfile.css';
import Image from 'next/image';

import { useTheme } from '../../context/ThemeContext';

interface HeroProfileprops {}

export const HeroProfile = ({ ...props }: HeroProfileprops) => {
  const { activeTheme } = useTheme();
  return (
    <>
      <div className="hero-profile-container">
        <div className="hero-profile">
          <Image
            src={profilePictureHero}
            alt="Shajidur Rahman Profile"
            width={100}
            height={100}
          />
          <p>Hey there I'm,</p>
          <h1>Shajidur Rahman</h1>
          <Typewriter
            options={{
              strings: [
                'DevOps Engineer',
                'Site Reliability Engineer',
                'Software Developer',
                'Technical Writer',
                'Content Creator',
              ],
              autoStart: true,
              loop: true,
            }}
          />
          <p className="hero-profile-tagline">
            DevOps, SRE and SWE: cloud, Kubernetes, CI/CD—and clear writing on the
            stack.
          </p>
          {/* <a
            href="https://linktr.ee/shajidurrahman"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontWeight: 'bold' }}
            className={
              activeTheme === 'light'
                ? 'hero-profile-button-light-theme'
                : 'hero-profile-button-dark-theme'
            }
          >
            Find me on social media
          </a> */}
        </div>
      </div>
    </>
  );
};

export default HeroProfile;
