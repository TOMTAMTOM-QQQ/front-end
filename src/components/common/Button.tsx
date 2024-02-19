import { useRouter } from 'next/router';
import { MouseEventHandler } from 'react';

export const Button = ({ name, href }: { name: string; href: string }) => {
  const router = useRouter();
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    console.log('ddd');
    router.push(`${href}`);
  };
  return <button onClick={handleClick}>{name}</button>;
};
