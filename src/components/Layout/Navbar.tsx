import Link from 'next/link';
import { Logo } from '../common/Logo';
import { Button } from '../common/Button';
import { usePathname } from 'next/navigation';
import { SignInBtn } from '../auth/SignInBtn';

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="p-2 px-16 fixed top-0 w-full bg-orange-900	">
        <div className="flex justify-between items-center h-full">
          <Logo />
          <ul className="hidden tablet:flex gap-x-6">
            <li>
              <Link
                href="/quant"
                className={`${
                  pathname == '/quant'
                    ? 'text-orange-300	underline'
                    : 'hover:underline'
                }`}
              >
                Quant1
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className={`${
                  pathname == '/'
                    ? 'text-orange-300	underline'
                    : 'hover:underline'
                }`}
              >
                Quant1
              </Link>
            </li>
          </ul>
          <SignInBtn />
        </div>
      </div>
    </>
  );
};
