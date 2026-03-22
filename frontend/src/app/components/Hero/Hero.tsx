import Image from 'next/image';
import './Hero.css';

import heroCover from '../../img/hero-cover.jpg';

export const Hero = () => {
  return (
    <div className="hero-cover">
      <Image
        src={heroCover}
        alt="Mountain valley with forested slopes and clouds"
        fill
        priority
        sizes="100vw"
        className="hero-cover-image"
      />
    </div>
  );
};

export default Hero;
