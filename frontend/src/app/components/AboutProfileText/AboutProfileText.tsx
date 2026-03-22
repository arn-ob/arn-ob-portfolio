import './AboutProfileText.css';

interface AboutProfileTextProps {}

export const AboutProfileText = ({ ...props }: AboutProfileTextProps) => {
  return (
    <>
      <article className="about-profile-text">
        <p>Hello! 👋</p>
        <p>
          I&apos;m <strong>Md Shajidur Rahman Almazee</strong>. I&apos;ve spent
          about five years in DevOps engineering and four years in software
          engineering helping teams ship reliably, automate confidently, and
          keep production systems observable and healthy.
        </p>
        <p>
          On AWS, I work with EC2, RDS, VPC, IAM, Lambda, SNS, SES, and load
          balancers. I&apos;m at home with containerization and orchestration
          using Docker, Docker Compose, and Kubernetes, and CI/CD with GitHub
          Actions and Jenkins. I also bring strong Linux administration and
          infrastructure fundamentals: networking, DNS, VPN, and load balancing.
        </p>
        <p>
          Day to day, I work with web servers and backends such as Nginx,
          Apache, PHP, and Node.js (NestJS, Express, Sails.js), alongside
          JavaScript and TypeScript. For data, I use MySQL/MariaDB, AWS RDS, and
          Typesense. I rely on monitoring and observability tooling like Sentry
          and CloudWatch, and I&apos;ve built and maintained environments on
          virtualization and storage platforms including Proxmox and TrueNAS.
        </p>
        <p>
          I&apos;m also comfortable on the frontend with React and Tailwind
          CSS when the work calls for it whether that&apos;s shipping features,
          supporting internal tools, or bridging the gap between UI and
          infrastructure.
        </p>
        <p>
          Thank you for stopping by. If you&apos;d like to connect, reach out
          below I&apos;d love to hear from you.
        </p>
      </article>
    </>
  );
};

export default AboutProfileText;
