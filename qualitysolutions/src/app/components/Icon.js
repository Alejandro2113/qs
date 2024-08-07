import { 
  SiJavascript, SiReact, SiNodedotjs, SiFirebase, 
  SiWebflow, SiGoogleanalytics, SiFacebook, SiAdobexd, 
  SiLinux, SiVisualstudiocode, SiTailwindcss, SiBootstrap, 
  SiNextdotjs, SiWordpress
} from 'react-icons/si';
import { FaHeadphones } from 'react-icons/fa';

const iconStyles = {
  large: { fontSize: '4rem', display: 'block', margin: '0 auto' }
};

const icons = {
  javascript: <SiJavascript style={{ ...iconStyles.large, color: '#F7E018' }} />,
  react: <SiReact style={{ ...iconStyles.large, color: '#61DAFB' }} />,
  nodejs: <SiNodedotjs style={{ ...iconStyles.large, color: '#8CC84B' }} />,
  nextjs: <SiNextdotjs style={{ ...iconStyles.large, color: '#000000' }} />,
  tailwindcss: <SiTailwindcss style={{ ...iconStyles.large, color: '#38BDF8' }} />,
  bootstrap: <SiBootstrap style={{ ...iconStyles.large, color: '#563D7C' }} />,
  firebase: <SiFirebase style={{ ...iconStyles.large, color: '#FFCB2C' }} />,
  webdesign: <SiWebflow style={{ ...iconStyles.large, color: '#4353FF' }} />,
  itsolutions: <SiLinux style={{ ...iconStyles.large, color: '#FCC624' }} />,
  seo: <SiGoogleanalytics style={{ ...iconStyles.large, color: '#EA4335' }} />,
  digitalmarketing: <SiFacebook style={{ ...iconStyles.large, color: '#4267B2' }} />,
  innovativedesign: <SiAdobexd style={{ ...iconStyles.large, color: '#FF61F6' }} />,
  dedicatedsupport: <SiAdobexd style={{ ...iconStyles.large, color: '#FF61F6' }} />,
  cuttingedgetechnology: <SiReact style={{ ...iconStyles.large, color: '#61DAFB' }} />,
  developer: <SiVisualstudiocode style={{ ...iconStyles.large, color: '#0078d7' }} />,
  customersupport: <FaHeadphones style={{ ...iconStyles.large, color: '#03363D' }} />,
  wordpress: <SiWordpress style={{ ...iconStyles.large, color: '#21759B' }} /> // Agregado el ícono de WordPress
};

const Icon = ({ name }) => {
  const IconComponent = icons[name];
  return IconComponent ? (
    <div>
      {IconComponent}
    </div>
  ) : null;
};

export default Icon;
