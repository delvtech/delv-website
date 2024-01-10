import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";

export function MenuLink({
  to,
  href,
  children,
  onClick,
}: {
  to?: string;
  href?: string;
  children: string;
  onClick?: () => void;
} & (
  | {
      to: string;
    }
  | {
      href: string;
    }
)) {
  const { pathname } = useLocation();

  const className = classNames(
    "h-20 border-b border-b-white/50 border-dashed text-3xl flex items-center px-8 hover:px-14 w-full hover:bg-gradient-to-r from-white/10 to-white/5 hover:text-[#71F8F8] transition-all duration-300 relative",
    {
      "!bg-gradient-to-br !from-[#9F79FF]/20 !to-[#10F9B1]/10 !border-solid !border-b-[#14D7D9]/50 !text-[#58D1B0] !px-14 before:content=['*'] before:absolute before:top-1/2 before:-translate-y-1/2 before:left-8 before:w-2 before:h-2 before:rounded-full before:bg-[#58D1B0]":
        pathname === to,
    },
  );

  if (to) {
    return (
      <Link to={to} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  } else if (href) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }
}
