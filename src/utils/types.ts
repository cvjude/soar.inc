export interface IconProps {
  className?: string;
}

export interface Ilinks {
  icon?: any;
  title: string;
  href: string;
  sub?: Array<Ilinks>;
  className?: string;
}
