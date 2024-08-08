'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import style from './Header.module.scss';

export function Header() {
  const pathname = usePathname();
  return (
    <div className={style.header}>
      <Link href="/" className={`${style.link} ${pathname === '/' ? style.active : ''}`}>Home</Link>
      <Link href="/users" className={`${style.link} ${pathname === '/users' ? style.active : ''}`}>Users</Link>
    </div>
  );
}
