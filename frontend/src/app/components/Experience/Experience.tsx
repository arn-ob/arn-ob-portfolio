import './Experience.css';
import { useTheme } from '../../context/ThemeContext';

function ExperienceSkills({ skills }: { skills: string }) {
  const tags = skills.split(',').map((s) => s.trim()).filter(Boolean);
  return (
    <div className="experience-skills">
      <span className="experience-skills-label">Skills:</span>
      <span className="experience-skill-tags">
        {tags.map((tag, i) => (
          <span key={`${tag}-${i}`} className="experience-skill-tag">
            {tag}
          </span>
        ))}
      </span>
    </div>
  );
}

const Experience = () => {
  const { activeTheme } = useTheme();
  const titleClass =
    activeTheme === 'light' ? 'header-title-light' : 'header-title-dark';

  return (
    <div className="experience-wrapper" id="experience">
      <section className="header-section">
        <a href="/#experience" rel="noopener noreferrer" className={titleClass}>
          Experience
        </a>
      </section>
      <section className="experience-section" aria-label="Work experience">
        <article className="experience-card">
          <header className="experience-card-header">
            <h2 className="experience-role">DevOps Engineer</h2>
            <p className="experience-company">Geonode</p>
            <p className="experience-meta">
              Full-time · Dec 2023 – Present · Remote
            </p>
          </header>
          <ul className="experience-bullets">
            <li>
              Managing Kubernetes-based infrastructure and deployment
              automation.
            </li>
            <li>
              Ensuring high availability and performance optimization of
              production services.
            </li>
            <li>
              Managing Kubernetes production clusters and CI/CD workflows.
            </li>
            <li>
              Improving deployment automation and system reliability.
            </li>
            <li>
              Supporting high-traffic microservices environments.
            </li>
          </ul>
          <ExperienceSkills skills="HAProxy, kubespray, Kubernetes, Helm Charts" />
        </article>

        <article className="experience-card">
          <header className="experience-card-header">
            <h2 className="experience-role">DevOps Engineer</h2>
            <p className="experience-company">Repocket</p>
            <p className="experience-meta">
              Full-time · Jul 2023 – Nov 2023 · Singapore – Remote
            </p>
          </header>
          <ul className="experience-bullets">
            <li>
              Spearheaded management of multiple Kubernetes clusters using
              ArgoCD, enhancing deployment efficiency and centralized control.
            </li>
            <li>
              Optimized load balancing and high availability through effective
              management of VMs and Kubernetes clusters with HAProxy.
            </li>
            <li>
              Implemented secure environment secrets management using Kubernetes
              Vault, ensuring data integrity and compliance.
            </li>
          </ul>
          <ExperienceSkills skills="HAProxy, Nginx Proxy Manager, Next.js, Terraform, Kubernetes, fingerprint.js" />
        </article>

        <article className="experience-card experience-card-nested">
          <header className="experience-card-header">
            <h2 className="experience-role">10 Minute School</h2>
            <p className="experience-meta">
              2 yrs 9 mos · Dhaka, Bangladesh – Hybrid
            </p>
          </header>

          <div className="experience-subrole">
            <h3 className="experience-subrole-title">
              Site Reliability Engineer II
            </h3>
            <p className="experience-meta">Feb 2023 – Jun 2023</p>
            <ul className="experience-bullets">
              <li>
                Developed a Python-based ETL pipeline to extract, transform, and
                load data into BigQuery for analytics and reporting.
              </li>
              <li>
                Configured a Proxmox cluster and migrated GCP VMs and GKE
                workloads to Proxmox.
              </li>
              <li>
                Deployed a multi-node K3s cluster with master and worker nodes on
                Proxmox.
              </li>
              <li>
                Deployed health status monitoring for microservices and web
                services.
              </li>
              <li>
                Implemented n8n on virtual machines and Kubernetes, and scaled
                machine learning services for performance and reliability.
              </li>
              <li>
                Implemented Kubernetes logging with the ELK stack, monitoring with
                Grafana and Prometheus, and distributed tracing using SigNoz.
              </li>
            </ul>
            <ExperienceSkills skills="Azure Kubernetes Service (AKS), Azure SQL, Azure Redis" />
          </div>

          <div className="experience-subrole">
            <h3 className="experience-subrole-title">
              Site Reliability Engineer
            </h3>
            <p className="experience-meta">Oct 2022 – Jun 2023</p>
            <ul className="experience-bullets">
              <li>
                Designed and implemented an AWS Lambda-based image resizer with
                support for multiple S3 buckets.
              </li>
              <li>Events dashboard setup in AWS CloudWatch.</li>
              <li>
                Deployed a health status monitoring service for microservices and
                web applications.
              </li>
              <li>
                Implemented ArgoCD and deployed services to Development and
                Staging environments.
              </li>
              <li>
                Provisioned infrastructure using Terraform and configured
                Kubernetes RBAC to manage service access permissions.
              </li>
            </ul>
            <ExperienceSkills skills="Google Kubernetes Engine (GKE), AWS Lambda, Go, PostgreSQL, Node.js, Kubernetes, CI, AWS, Terraform, Next.js, NestJS" />
          </div>
        </article>

        <article className="experience-card">
          <header className="experience-card-header">
            <h2 className="experience-role">Software Engineer</h2>
            <p className="experience-company">ThemeXpert</p>
            <p className="experience-meta">
              Full-time · Jun 2021 – Sep 2022 · Dhaka, Bangladesh
            </p>
          </header>
          <ul className="experience-bullets">
            <li>Designed and built the mobile application for ThriveDesk.</li>
            <li>
              Focused on customer support workflows and application stability.
            </li>
          </ul>
          <ExperienceSkills skills="React Native, React.js, Node.js" />
        </article>

        <article className="experience-card">
          <header className="experience-card-header">
            <h2 className="experience-role">Full Stack Engineer</h2>
            <p className="experience-company">Flight Expert</p>
            <p className="experience-meta">
              Full-time · Mar 2020 – May 2021 · Dhaka, Bangladesh – On-site
            </p>
          </header>
          <ul className="experience-bullets">
            <li>
              Built a parser for multiple sites and managed analysis of ticket
              prices.
            </li>
            <li>
              Developed a Facebook bot for customer support and ticket purchase
              (R&amp;D).
            </li>
          </ul>
          <ExperienceSkills skills="React Native, React.js, Node.js, Next.js, NestJS" />
        </article>

        <article className="experience-card">
          <header className="experience-card-header">
            <h2 className="experience-role">Software Engineer</h2>
            <p className="experience-company">Everexpert Info System</p>
            <p className="experience-meta">
              Full-time · Feb 2019 – Feb 2020 · Dhaka, Bangladesh – On-site
            </p>
          </header>
          <ul className="experience-bullets">
            <li>
              Designed a school management application and managed multiple
              providers.
            </li>
            <li>Payment gateway integration.</li>
            <li>Built the mobile application with React Native.</li>
          </ul>
          <ExperienceSkills skills="React Native, React.js, Node.js, Next.js, Express.js, Ant Design, Umi" />
        </article>
      </section>
    </div>
  );
};

export default Experience;
