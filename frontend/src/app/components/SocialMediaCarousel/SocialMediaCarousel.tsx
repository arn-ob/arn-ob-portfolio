import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import './SocialMediaCarousel.css';
import XIcon from '../../img/x-social-media-icon.svg';
import LinkedInIcon from '../../img/linkedin-icon.svg';
import DevIcon from '../../img/dev-icon.svg';
import MediumIcon from '../../img/medium-icon.svg';
import GitHubIcon from '../../img/github-icon.svg';

import { useTheme } from '../../context/ThemeContext';

interface SocialMediaCarouselProps {}

export const SocialMediaCarousel = ({ ...props }: SocialMediaCarouselProps) => {
  const { activeTheme } = useTheme();

  return (
    <>
      <Carousel
        showArrows={false}
        autoPlay={true}
        infiniteLoop={true}
        swipeable={true}
        emulateTouch={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        thumbWidth={100}
        width={'100%'}
      >
        {/* Carousel Slide 1 */}
        <div
          className={
            activeTheme === 'light'
              ? 'social-media-carousel-slide-light-theme'
              : 'social-media-carousel-slide-dark-theme'
          }
        >
          <Image
            className="social-media-carousel-slide-logo"
            src={XIcon}
            alt="X Social Media formerly Twitter"
          />
          <div className="social-media-carousel-slide-content">
            <h1>X (Twitter)</h1>

            <p>
              Short posts on the same themes as this site DevOps, Kubernetes,
              cloud and reliability, tooling, and shipping software plus the
              occasional life snapshot. That’s where I share what I’m learning
              and building.
            </p>
            <a
              href="https://x.com/_arn_ob"
              rel="noopener noreferrer"
              target="_blank"
              className={
                activeTheme === 'light'
                  ? 'carousel-button-light-theme'
                  : 'carousel-button-dark-theme'
              }
            >
              View Profile
            </a>
          </div>
        </div>
        {/* Carousel Slide 1 */}

        {/* Carousel Slide 2 */}
        <div
          className={
            activeTheme === 'light'
              ? 'social-media-carousel-slide-light-theme'
              : 'social-media-carousel-slide-dark-theme'
          }
        >
          <Image
            className="social-media-carousel-slide-logo"
            src={LinkedInIcon}
            alt="LinkedIn"
          />
          <div className="social-media-carousel-slide-content">
            <h1>LinkedIn</h1>

            <p>
              Lets connect and grow our networks. Business and personal
              connections open up so many career doors.
            </p>
            <a
              href="https://www.linkedin.com/in/arnob-almazee"
              rel="noopener noreferrer"
              target="_blank"
              className={
                activeTheme === 'light'
                  ? 'carousel-button-light-theme'
                  : 'carousel-button-dark-theme'
              }
            >
              View Profile
            </a>
          </div>
          
        </div>
        {/* Carousel Slide 2 */}

        {/* Carousel Slide 3 */}
        <div
          className={
            activeTheme === 'light'
              ? 'social-media-carousel-slide-light-theme'
              : 'social-media-carousel-slide-dark-theme'
          }
        >
          <Image
            className="social-media-carousel-slide-logo"
            src={DevIcon}
            alt="DEV"
          />
          <div className="social-media-carousel-slide-content">
            <h1>DEV</h1>

            <p>
              DevOps and site reliability,
              Kubernetes and cloud infrastructure, CI/CD, observability, and the
              backend and tooling work that keeps production systems running—plus
              programming practice and career notes along the way.
            </p>
            <a
              href="https://dev.to/arn-ob"
              rel="noopener noreferrer"
              target="_blank"
              className={
                activeTheme === 'light'
                  ? 'carousel-button-light-theme'
                  : 'carousel-button-dark-theme'
              }
            >
              View Profile
            </a>
          </div>
          
        </div>
        {/* Carousel Slide 6 */}

        {/* Carousel Slide 8 */}
        <div
          className={
            activeTheme === 'light'
              ? 'social-media-carousel-slide-light-theme'
              : 'social-media-carousel-slide-dark-theme'
          }
        >
          <Image
            className="social-media-carousel-slide-logo"
            src={MediumIcon}
            alt="Medium"
          />
          <div className="social-media-carousel-slide-content">
            <h1>Medium</h1>

            <p>
              Medium is one of the best platforms for finding publications. Some
              of them average around 1 million user views in a month so its a
              really good place to post your articles.
            </p>
            <a
              href="https://arn-ob.medium.com/"
              rel="noopener noreferrer"
              target="_blank"
              className={
                activeTheme === 'light'
                  ? 'carousel-button-light-theme'
                  : 'carousel-button-dark-theme'
              }
            >
              View Profile
            </a>
          </div>
        </div>
        {/* Carousel Slide 8 */}

        {/* Carousel Slide 9 */}
        <div
          className={
            activeTheme === 'light'
              ? 'social-media-carousel-slide-light-theme'
              : 'social-media-carousel-slide-dark-theme'
          }
        >
          <Image
            className="social-media-carousel-slide-logo"
            src={GitHubIcon}
            alt="GitHub"
          />
          <div className="social-media-carousel-slide-content">
            <h1>GitHub</h1>

            <p>
              GitHub is the place where I store all of my programming related
              projects. It is an online repository where us developers store our
              codebases. Check out my projects.
            </p>
            <a
              href="https://github.com/arn-ob"
              rel="noopener noreferrer"
              target="_blank"
              className={
                activeTheme === 'light'
                  ? 'carousel-button-light-theme'
                  : 'carousel-button-dark-theme'
              }
            >
              View Profile
            </a>
          </div>
        </div>
        {/* Carousel Slide 9 */}
      </Carousel>
    </>
  );
};

export default SocialMediaCarousel;
