import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function IconBase({ children, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...props}>
      {children}
    </svg>
  );
}

export const BookIcon = (props: IconProps) => <IconBase {...props}><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v17H6.5A2.5 2.5 0 0 0 4 22Z"/><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v17h4.5A2.5 2.5 0 0 1 20 22Z"/></IconBase>;
export const HandIcon = (props: IconProps) => <IconBase {...props}><path d="M7 11V6.5a1.5 1.5 0 0 1 3 0V10"/><path d="M10 10V5.5a1.5 1.5 0 0 1 3 0V10"/><path d="M13 10V6.5a1.5 1.5 0 0 1 3 0V11"/><path d="M16 11V9.5a1.5 1.5 0 0 1 3 0V14c0 4-2.5 7-6.5 7H11c-2.2 0-3.7-1-5-2.8L3.5 15a1.6 1.6 0 0 1 2.4-2.1L7 14Z"/></IconBase>;
export const BuildingIcon = (props: IconProps) => <IconBase {...props}><path d="M4 21V5l8-3 8 3v16"/><path d="M9 21v-4h6v4M8 8h.01M12 8h.01M16 8h.01M8 12h.01M12 12h.01M16 12h.01"/></IconBase>;
export const MapPinIcon = (props: IconProps) => <IconBase {...props}><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></IconBase>;
export const MessageIcon = (props: IconProps) => <IconBase {...props}><path d="M21 12a8 8 0 0 1-9 8 9 9 0 0 1-4-.9L3 21l1.8-4A8 8 0 1 1 21 12Z"/><path d="M8 12h.01M12 12h.01M16 12h.01"/></IconBase>;
export const UsersIcon = (props: IconProps) => <IconBase {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></IconBase>;
export const ClockIcon = (props: IconProps) => <IconBase {...props}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></IconBase>;
export const CalendarIcon = (props: IconProps) => <IconBase {...props}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18M8 15l2 2 5-5"/></IconBase>;
export const SmartphoneIcon = (props: IconProps) => <IconBase {...props}><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M10 18h4"/></IconBase>;
export const CarIcon = (props: IconProps) => <IconBase {...props}><path d="m5 11 1.5-4h11l1.5 4M3 14a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v4H3Z"/><path d="M5 18v2M19 18v2M7 15h.01M17 15h.01"/></IconBase>;
export const PhoneIcon = (props: IconProps) => <IconBase {...props}><path d="M4 5a1 1 0 0 1 1-1h2.5a1 1 0 0 1 1 .8l.7 3.2a1 1 0 0 1-.5 1.1L7 10c.9 2.6 3 4.7 5.6 5.6l1-1.7a1 1 0 0 1 1.1-.5l3.2.7a1 1 0 0 1 .8 1V18a1 1 0 0 1-1 1h-1C9.6 19 5 14.4 5 8V6Z"/></IconBase>;
