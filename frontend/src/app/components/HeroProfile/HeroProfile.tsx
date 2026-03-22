import Typewriter from 'typewriter-effect';
import profilePictureHero from '../../img/arnob.jpg';
import './HeroProfile.css';
import Image from 'next/image';

export const HeroProfile = () => {
  return (
    <div className="hero-profile-container">
      <div className="hero-profile">
        <div className="hero-profile-panel">
          <div className="hero-profile-avatar-wrap">
            <Image
              className="hero-profile-avatar"
              src={profilePictureHero}
              alt="Shajidur Rahman Profile"
              width={100}
              height={100}
              sizes="(max-width: 480px) 76px, 100px"
            />
          </div>
          <div className="hero-profile-text">
            <p className="hero-profile-greeting">Hey there I&apos;m,</p>
            <h1>Shajidur Rahman</h1>
            <div className="hero-profile-typewriter">
              <Typewriter
                options={{
                  strings: [
                    'Platform Engineer',
                    'Linux Administrator',
                    'Network Administrator',
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
            </div>
            <p className="hero-profile-tagline">
              DevOps, SRE and SWE: Cloud, Kubernetes, CI/CD and clear writing on
              the stack.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroProfile;
