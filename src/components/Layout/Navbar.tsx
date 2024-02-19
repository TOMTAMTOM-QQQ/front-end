import Link from 'next/link';
import { Logo } from '../common/Logo';
import { Button } from '../common/Button';

export const Navbar = () => {
  return (
    <>
      <div className="p-24 pt-6 pb-6 fixed top-0 w-full">
        <div className="flex justify-between items-center h-full">
          <Logo />
          <ul className="hidden tablet:flex gap-x-6">
            <li>
              <Link href="/quant">Quant1</Link>
            </li>
            <li>
              <Link href="/quant">Quant2</Link>
            </li>
          </ul>
          <Button name="My" href="/dd" />
        </div>
      </div>
    </>
  );
};
