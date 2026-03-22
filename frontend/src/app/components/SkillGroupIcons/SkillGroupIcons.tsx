import { useState, ReactNode } from 'react';
import './SkillGroupIcons.css';
import KubernetesLogo from '../KubernetesLogo/KubernetesLogo';
import TerraformLogo from '../TerraformLogo/TerraformLogo';
import DockerLogo from '../DockerLogo/DockerLogo';
import AWSLogo from '../AWSLogo/AWSLogo';
import NextJSLogo from '../NextJSLogo/NextJSLogo';
import ReactLogo from '../ReactLogo/ReactLogo';
import NodeJSLogo from '../NodeJSLogo/NodeJSLogo';
import TypeScriptLogo from '../TypeScriptLogo/TypeScriptLogo';
import JavaScriptLogo from '../JavaScriptLogo/JavaScriptLogo';
import PythonLogo from '../PythonLogo/PythonLogo';
import SQLLogo from '../SQLLogo/SQLLogo';

interface SkillGroupIconsProps {}

export const SkillGroupIcons = ({ ...props }: SkillGroupIconsProps) => {
  const [technicalStack] = useState<{ id: string; image: ReactNode }[]>([
    { id: 'kubernetes', image: <KubernetesLogo /> },
    { id: 'terraform', image: <TerraformLogo /> },
    { id: 'docker', image: <DockerLogo /> },
    { id: 'aws', image: <AWSLogo /> },
    { id: 'nextjs', image: <NextJSLogo /> },
    { id: 'react', image: <ReactLogo /> },
    { id: 'nodejs', image: <NodeJSLogo /> },
    { id: 'typescript', image: <TypeScriptLogo /> },
    { id: 'javascript', image: <JavaScriptLogo /> },
    { id: 'python', image: <PythonLogo /> },
    { id: 'sql', image: <SQLLogo /> },
  ]);

  return (
    <>
      <div className="tech-stack-container">
        {technicalStack.map((skill) => (
          <div className="tech-stack" key={skill.id}>
            {skill.image}
          </div>
        ))}
      </div>
    </>
  );
};

export default SkillGroupIcons;
