import React from 'react';

interface IconProps {
  className?: string;
}

export const GoArrowUpRightIcon: React.FC<IconProps> = ({ className }) => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className={className} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"></path>
    </svg>
);

export const VCardIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
);


export const ArrowRightIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

export const ArrowUpIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
    </svg>
);

export const DownloadIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
);

export const MenuIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

export const CloseIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);


export const ReactIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" className={className}>
    <circle cx="0" cy="0" r="2.05" fill="currentColor"></circle>
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"></ellipse>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse>
    </g>
  </svg>
);

export const AIIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V8.25a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 8.25v10.5A2.25 2.25 0 0 0 6.75 21Z" />
    </svg>
);

export const DevIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 12" />
    </svg>
);

export const TwitterIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
  </svg>
);

export const LinkedInIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93-.94 0-1.62.68-1.62 1.93V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.38.99 3.38 3.54z" />
    </svg>
);

export const GithubIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={className}>
        <path d="M8 0a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38l-.01-1.49c-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48l-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8a8 8 0 0 0-8-8z" />
    </svg>
);

export const FacebookIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
);

export const LinkIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
    </svg>
);

export const ShareIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.186 2.25 2.25 0 0 0-3.933 2.186Z" />
    </svg>
);

export const TypeScriptIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 128 128" className={className}>
    <rect width="128" height="128" rx="32" fill="#3178c6"></rect>
    <path fill="#fff" d="M93.32 69.54v-5.26h-34.7V31.25h32.3v5.26h-27.04v10.33h24.89v5.26h-24.89v12.18h29.29zM53.48 31.25h5.26v38.29h-5.26z"></path>
  </svg>
);

export const NodeJSIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 256 256" className={className}>
    <path fill="#68a063" d="M128 0 0 221.705h256z"></path>
    <path fill="#303030" d="m64 96l64-37.01L192 96v74l-64 37.01L64 170z"></path>
    <path fill="#fff" d="M110.033 131.643L94.02 119.53v-2.115l23.94-13.821v3.25l-17.927 10.35v1.27l17.927 10.35zM128.455 129.528l-5.694 3.287V96.634l5.694 3.287zM147.29 104.417l-12.28 7.09v1.27l12.28 7.09v-2.115l-10.165-5.87 10.165-5.87z"></path>
  </svg>
);

export const PythonIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 256 256" className={className}>
        <path fill="#306998" d="M128 0C57.309 0 0 57.309 0 128s57.309 128 128 128V0z" />
        <path fill="#FFD43B" d="M128 256c70.691 0 128-57.309 128-128S198.691 0 128 0v256z" />
        <circle fill="#306998" cx="128" cy="192" r="16" />
        <circle fill="#FFD43B" cx="128" cy="64" r="16" />
    </svg>
);

export const DockerIcon: React.FC<IconProps> = ({ className }) => (
    <svg fill="#0db7ed" viewBox="0 0 256 256" className={className}>
        <path d="M211.53,92.49a42.34,42.34,0,0,0-36.88-21.7,5,5,0,0,0-4.87,1.57,63,63,0,0,0-120.35,0,5,5,0,0,0-4.87-1.57A42.36,42.36,0,0,0,19.2,112.9a42.16,42.16,0,0,0,.35,5.3,42.37,42.37,0,0,0,79.4,16.48,5.06,5.06,0,0,0,1.38-.1,62.59,62.59,0,0,0,2.69,0,63,63,0,0,0,53.28,0,5.31,5.31,0,0,0,1.13,.1,42.36,42.36,0,0,0,54.1-42.19ZM81.24,63.15h16.29v16.3H81.24Zm32.58,0H130.1v16.3H113.82Zm32.58,0h16.29v16.3H146.4Z" />
    </svg>
);

export const FigmaIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 256 256" className={className}>
        <path fill="#f24e1e" d="M128 0h-42.667C38.252 0 0 38.252 0 85.333c0 47.082 38.252 85.334 85.333 85.334H128V0z" />
        <path fill="#ff7262" d="M0 85.333C0 38.252 38.252 0 85.333 0V170.667C38.252 170.667 0 132.415 0 85.333" />
        <path fill="#a259ff" d="M128 0v170.667h42.667c47.081 0 85.333-38.252 85.333-85.334C256 38.252 217.748 0 170.667 0H128z" />
        <path fill="#1abcfe" d="M128 256c47.081 0 85.333-38.252 85.333-85.333S175.081 85.333 128 85.333v170.667z" />
        <path fill="#0acf83" d="M0 170.667c0 47.081 38.252 85.333 85.333 85.333s85.334-38.252 85.334-85.333S132.415 85.333 85.333 85.333H0v85.334z" />
    </svg>
);

export const NextJSIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 128 128" className={className}>
        <circle cx="64" cy="64" r="64" fill="#000"></circle>
        <path fill="url(#a)" d="M106.33 103.84L52.88 39.54H38.5v49.07h8.22v-38.9l44.3 56.46c2.5 3.12 5.92 4.67 9.27 4.67 5.93 0 10.38-4.45 10.38-11.43V39.53h-8.22v53.1c0 3.33-1.66 4.6-3.86 2.21z"></path>
        <defs>
            <linearGradient id="a" x1="68.25" x2="108" y1="39.5" y2="101" gradientUnits="userSpaceOnUse">
                <stop stop-color="#fff"></stop>
                <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
            </linearGradient>
        </defs>
    </svg>
);

export const GraphQLIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 400 400" className={className}>
        <path fill="#E10098" d="M200,400 L44.5,300 L44.5,100 L200,0 L355.5,100 L355.5,300z M200,380 L345,295 L345,105 L200,20 L55,105 L55,295z" />
        <circle fill="#E10098" cx="200" cy="200" r="40" />
        <path fill="#E10098" d="M50,100 L200,200 L50,300 M350,100 L200,200 L350,300 M110,54 L200,200 L290,54" />
        <circle fill="#E10098" cx="44.5" cy="100" r="20" />
        <circle fill="#E10098" cx="200" cy="0" r="20" />
        <circle fill="#E10098" cx="355.5" cy="100" r="20" />
        <circle fill="#E10098" cx="44.5" cy="300" r="20" />
        <circle fill="#E10098" cx="200" cy="400" r="20" />
        <circle fill="#E10098" cx="355.5" cy="300" r="20" />
    </svg>
);

export const TensorFlowIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 256 256" className={className}>
        <path fill="#FF6F00" d="M128 0L0 64v128l128 64 128-64V64L128 0z" />
        <path fill="#FFA000" d="M128 25.6L25.6 76.8v102.4L128 230.4l102.4-51.2V76.8L128 25.6z" />
        <path fill="#FFFFFF" d="M128 40l-80 40v80l80 40 80-40v-80L128 40zM104 184h-16V72h64v16h-48v32h32v16h-32v32h48v16h-64v-16z" />
    </svg>
);

export const JavaScriptIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" rx="32" fill="#f7df1e"></rect>
        <path d="M64 100.3c-13.5 0-22-6.2-22-15.4 0-8.3 7.8-13.8 17.8-13.8 6.2 0 11.3 2.2 14.3 5.4l-6.8 4.3c-1.8-1.8-4.3-3.3-7.5-3.3-4.5 0-8 2.8-8 6.8 0 4.8 4.2 7.3 10.3 7.3 5.7 0 9.3-2.3 9.3-5.8 0-3-2.2-4.5-6.3-4.5-2.5 0-4.3.8-5.3 1.8l-7-4.3c3.2-4.3 9-6.3 15.3-6.3 9.5 0 16.3 5.2 16.3 13.5 0 10.2-9.2 15.8-22.5 15.8zm-1.2-48c-8.5 0-14.8 5.7-14.8 13s6.3 13 14.8 13 14.8-5.7 14.8-13-6.3-13-14.8-13z"></path>
    </svg>
);

export const HtmlIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 128 128" className={className}>
        <path fill="#E44D26" d="M20 112l-8-90h96l-8 90-40 12z"></path>
        <path fill="#F16529" d="M64 106V29h40l-7 81z"></path>
        <path fill="#EBEBEB" d="M64 42v19h32l2-19zm0 50v19l26-7 2-23H64z"></path>
        <path fill="#FFFFFF" d="M64 42H34l1 19h29zm0 26H40l2 23 22 7v-19l-17-4z"></path>
    </svg>
);

export const CssIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 128 128" className={className}>
        <path fill="#264DE4" d="M20 112l-8-90h96l-8 90-40 12z"></path>
        <path fill="#2965F1" d="M64 106V29h40l-7 81z"></path>
        <path fill="#EBEBEB" d="M64 42v19h32l2-19zm0 50v19l26-7 2-23H64z"></path>
        <path fill="#FFFFFF" d="M64 42H34l1 19h29zm0 26H40l2 23 22 7v-19l-17-4z"></path>
    </svg>
);

export const JavaIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 256 256" className={className}>
        <path fill="#5382a1" d="M0 0h256v256H0z" />
        <path fill="#fff" d="M83.5 63.8c-7.3 0-13.3 1.8-18 5.3s-7 8.3-7 14.2c0 5.7 2.2 10.7 6.5 15 4.3 4.3 9.7 6.5 16 6.5 7.3 0 13.3-2.5 18-7.3s7-11 7-18.5c0-14-6.8-21.2-20.5-21.2zm-2.5 53.5c-10.7 0-19.3 4-26 12s-10 18.2-10 30.5c0 12.3 3.3 22.5 10 30.5s15.3 12 26 12c10.7 0 19.3-4 26-12s10-18.2 10-30.5c0-12.3-3.3-22.5-10-30.5s-15.3-12-26-12zm93.8-53.5c-4.3 0-8.2 1-11.5 3s-5.8 4.8-7.5 8.3c-1.7 3.5-2.5 7.7-2.5 12.5v68.2h-27V93c0-11.7-3.7-21.2-11-28.7S100.8 53 88 53c-11.7 0-21.3 4.3-29 13s-11.5 20-11.5 34v82h120v-98c0-8.7-2.3-16-7-22s-11-9-19-9z" />
    </svg>
);

export const DjangoIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 256 256" className={className}>
        <path fill="#092E20" d="M0 0h256v256H0z" />
        <path fill="#fff" d="M60.6 69.2c-5.7 0-10.4 4.7-10.4 10.4s4.7 10.4 10.4 10.4 10.4-4.7 10.4-10.4-4.7-10.4-10.4-10.4zm10.7 25.4c-4.2-2.1-9.1-3.3-14.3-3.3-15.8 0-28.6 12.8-28.6 28.6s12.8 28.6 28.6 28.6 28.6-12.8 28.6-28.6v-25.3zm120.3-11.9c-10.1 0-19.3 3.1-26.9 8.4l-12.7-10.9-10.6-9.1-26.6-22.9-38.6-33.2h-35.1v172.8h28.6v-53.2c12 10.7 27.6 17.2 44.5 17.2 38.6 0 70-31.3 70-70s-31.4-70-70-70z" />
    </svg>
);

export const PostgresqlIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 256 256" className={className}>
        <path fill="#336791" d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0zm-20 192V64h40c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8v64h-32zm20-80h-20v48h20c17.7 0 32-14.3 32-32s-14.3-16-32-16z" />
    </svg>
);

export const MongoDbIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 256 256" className={className}>
        <path fill="#4DB33D" d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0zm-20 192V64h40c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-40z" />
        <path fill="#fff" d="M128 80c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm0 80c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" />
    </svg>
);

export const AwsIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 256 256" className={className}>
        <path fill="#FF9900" d="M0 0h256v256H0z" />
        <path fill="#232F3E" d="M84.2 165.2c-5.8 0-11-1.3-15.5-4-4.5-2.7-8-6.8-10.5-12s-3.8-11-3.8-17.5c0-6.5 1.3-12.2 4-17.2s6.3-9 10.8-11.8c4.5-2.8 9.8-4.2 16-4.2s11.5 1.4 16 4.2c4.5 2.8 8.2 6.8 11 11.8s4.2 10.7 4.2 17.2c0 6.5-1.3 12.3-3.8 17.5s-6 9.3-10.5 12c-4.5 2.7-9.7 4-15.5 4zm0-16c2.8 0 5.3-.7 7.5-2s4-3.3 5-6 1.5-5.8 1.5-9.5c0-3.7-.5-7-1.5-9.8s-2.8-5-5-6.5-4.7-2.2-7.5-2.2-5.3.7-7.5 2.2-4 3.5-5 6.5-1.5 6-1.5 9.8c0 3.7.5 7 1.5 9.5s2.8 4.7 5 6c2.2 1.3 4.7 2 7.5 2zm87.5 16h-18l-24-38-24 38h-18l33-51-33-51h18l24 38 24-38h18l-33 51z" />
    </svg>
);

export const GitIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 256 256" className={className}>
        <path fill="#F05032" d="M256 128c0 70.7-57.3 128-128 128S0 198.7 0 128 57.3 0 128 0s128 57.3 128 128z" />
        <path fill="#fff" d="M196.2 111.4l-38.8-38.8c-2.3-2.3-6.1-2.3-8.5 0l-16.3 16.3c-2.3 2.3-2.3 6.1 0 8.5l16.8 16.8-40.4 40.4-19-19c-2.3-2.3-6.1-2.3-8.5 0l-16.3 16.3c-2.3 2.3-2.3 6.1 0 8.5l38.8 38.8c2.3 2.3 6.1 2.3 8.5 0l16.3-16.3c2.3-2.3 2.3-6.1 0-8.5l-16.8-16.8 40.4-40.4 19 19c2.3 2.3 6.1 2.3 8.5 0l16.3-16.3c2.3-2.4 2.3-6.2 0-8.5zm-62.9 62.9c-11.7 0-21.2-9.5-21.2-21.2s9.5-21.2 21.2-21.2 21.2 9.5 21.2 21.2-9.5 21.2-21.2 21.2z" />
    </svg>
);

export const KubernetesIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 256 256" className={className}>
        <path fill="#326CE5" d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0z" />
        <path fill="#fff" d="M128 24.3l74.6 42.1v85.2l-74.6 42.1-74.6-42.1V66.4L128 24.3zm0 13.5l-63.4 35.8v72.8l63.4 35.8 63.4-35.8V73.6L128 37.8zm-29.4 61.8c-3.1 0-5.6 2.5-5.6 5.6s2.5 5.6 5.6 5.6 5.6-2.5 5.6-5.6-2.5-5.6-5.6-5.6zm14.7 0c-3.1 0-5.6 2.5-5.6 5.6s2.5 5.6 5.6 5.6 5.6-2.5 5.6-5.6-2.5-5.6-5.6-5.6zm14.7 0c-3.1 0-5.6 2.5-5.6 5.6s2.5 5.6 5.6 5.6 5.6-2.5 5.6-5.6-2.5-5.6-5.6-5.6zm14.7 0c-3.1 0-5.6 2.5-5.6 5.6s2.5 5.6 5.6 5.6 5.6-2.5 5.6-5.6-2.5-5.6-5.6-5.6zm14.6 0c-3.1 0-5.6 2.5-5.6 5.6s2.5 5.6 5.6 5.6 5.6-2.5 5.6-5.6-2.5-5.6-5.6-5.6zm14.7 0c-3.1 0-5.6 2.5-5.6 5.6s2.5 5.6 5.6 5.6 5.6-2.5 5.6-5.6-2.5-5.6-5.6-5.6zm-58.8 29.4c-3.1 0-5.6 2.5-5.6 5.6s2.5 5.6 5.6 5.6 5.6-2.5 5.6-5.6-2.5-5.6-5.6-5.6zm14.7 0c-3.1 0-5.6 2.5-5.6 5.6s2.5 5.6 5.6 5.6 5.6-2.5 5.6-5.6-2.5-5.6-5.6-5.6zm14.7 0c-3.1 0-5.6 2.5-5.6 5.6s2.5 5.6 5.6 5.6 5.6-2.5 5.6-5.6-2.5-5.6-5.6-5.6z" />
    </svg>
);

export const UserIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
);

export const GridIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 .89-1.335A11.954 11.954 0 0 1 12 6c1.332 0 2.618.21 3.856.611l.89 1.335M11.96 18.337A11.954 11.954 0 0 0 12 18c-1.332 0-2.618-.21-3.856-.611l-.89-1.335M21.75 12l-.89-1.335A11.954 11.954 0 0 0 12 6c-1.332 0-2.618.21-3.856.611l-.89 1.335M3.25 12l.89 1.335A11.954 11.954 0 0 0 12 18c1.332 0 2.618.21 3.856.611l.89-1.335" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
    </svg>
);

export const MailIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
);