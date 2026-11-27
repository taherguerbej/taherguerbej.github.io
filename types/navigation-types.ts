export interface NavLinkProps {
  href: string;
  label: string;
  active: boolean;
  onClick?: () => void;
}

export interface CvButtonProps {
  onClick?: () => void;
  full?: boolean;
}
