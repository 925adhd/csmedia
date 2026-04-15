import type { SVGProps } from "react";

const base: SVGProps<SVGSVGElement> = {
  width: 36,
  height: 36,
  viewBox: "0 0 40 40",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export function StampIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <g transform="rotate(-12 20 20)">
        {/* Outer ring */}
        <circle cx="20" cy="20" r="13" />
        {/* Inner ring */}
        <circle cx="20" cy="20" r="10" />
        {/* Checkmark */}
        <path d="M15 20.5 l3.2 3.2 l6.5 -6.5" />
      </g>
    </svg>
  );
}

export function DroneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={40}
      height={40}
      viewBox="0 0 100 100"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <path d="M19.53 28.49a3.852 3.852 0 0 0-3.533 2.343C6.706 31.364-.029 32.257 0 32.955c.027.693 6.712.997 15.928.724c.32.862.936 1.58 1.738 2.027H16.17v2.742h-1.83a.874.874 0 0 0-.875.874v1.954c0 .483.391.874.874.874h12.316c3.103.73 3.45 1.843 5.774 3.88c-.38 2.113-.94 4.42-1.378 6.414v16.973a2.092 2.092 0 1 0 4.185 0V61.21c-.048-6.9 1.066-9.69 4.905-15.031l.965-.448c0 4.146 2.866 4.395 6.908 5.32h-3.036c-.924 0-1.674.75-1.674 1.675v10c0 .924.75 1.674 1.674 1.674h10.044c.924 0 1.674-.75 1.674-1.674v-10c0-.925-.75-1.674-1.674-1.674h-3.033c4.041-.928 6.905-1.176 6.905-5.321l.965.448c4.857 5.026 4.905 8.447 4.905 15.03v8.207a2.092 2.092 0 0 0 4.185 0V52.444c-.513-2.191-1.062-4.487-1.58-6.762c2.199-2.155 3.101-2.64 5.956-3.532h12.336a.874.874 0 0 0 .874-.874v-1.954a.874.874 0 0 0-.874-.874H83.83v-2.742h-1.496a3.852 3.852 0 0 0 1.738-2.027c9.216.273 15.901-.031 15.928-.724c.029-.698-6.706-1.59-15.997-2.122a3.852 3.852 0 0 0-6.943-.302c-9.307-.283-16.103.018-16.142.716c-.029.693 6.615 1.58 15.827 2.112a3.852 3.852 0 0 0 1.839 2.347h-1.496v2.742C67.654 38.426 60.352 33.685 50 33.49c-10.003.212-18.38 4.958-27.088 4.958v-2.742h-1.496a3.852 3.852 0 0 0 1.839-2.347c9.212-.532 15.856-1.42 15.827-2.112c-.039-.698-6.835-1-16.142-.716a3.852 3.852 0 0 0-3.41-2.04zM50 53.503c2.347 0 4.276 1.929 4.276 4.276c0 2.347-1.929 4.277-4.276 4.277c-2.347 0-4.278-1.93-4.278-4.277c0-2.347 1.93-4.276 4.278-4.276zm0 2.51c-.99 0-1.767.776-1.767 1.766s.777 1.766 1.767 1.766c.99 0 1.765-.776 1.765-1.766S50.99 56.013 50 56.013z" />
    </svg>
  );
}

export function CameraIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      {/* Prism / viewfinder */}
      <path d="M15 12 l2.5 -2.5 h5 l2.5 2.5" />
      {/* Body */}
      <rect x="6" y="12" width="28" height="19" rx="2" />
      {/* Lens outer */}
      <circle cx="20" cy="22" r="5.5" />
      {/* Lens inner */}
      <circle cx="20" cy="22" r="2.4" />
      {/* Flash */}
      <circle cx="29" cy="16.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PolaroidIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <g transform="rotate(-6 20 22)">
        {/* Polaroid frame */}
        <rect x="9" y="7" width="22" height="26" rx="1" />
        {/* Photo area (smaller than frame, leaves wider bottom margin) */}
        <rect x="11" y="9" width="18" height="18" />
        {/* Horizon line in photo */}
        <path d="M11 22 l3 -3 l4 2 l4 -4 l3 2 l4 -1" />
        {/* Sun */}
        <circle cx="24" cy="13" r="1.3" />
      </g>
    </svg>
  );
}
