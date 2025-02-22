'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ComponentProps } from 'react';

export const ActiveLink = (props: ComponentProps<typeof Link>) => {
  const pathname = usePathname();
  const isActive = pathname === props.href;

  const { className = 'underline' } = props;
  const activeClassName = isActive ? 'text-cyan-400 decoration-cyan-400 ' + className : className;

  return <Link {...props} className={activeClassName} />;
};
