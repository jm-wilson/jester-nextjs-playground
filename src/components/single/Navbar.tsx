import { storeItemCategories } from '@/types/types';
import { ActiveLink } from '../common/ActiveLink';
import { Cart } from './Cart';
import Image from 'next/image';

export const Navbar = () => {
  return (
    <nav className="w-full p-4 flex justify-end items-center bg-slate-900 rounded-b-lg">
      <ul className="bg-slate-900 w-full grid grid-cols-3 gap-4">
        <div className="col-start-1 flex gap-4">
          {Object.entries(storeItemCategories).map((category) => (
            <li key={category[0]}>
              <ActiveLink href={`/${category[0]}`}>{category[1]}</ActiveLink>
            </li>
          ))}
        </div>
        <div className="col-start-2 justify-self-center text-center relative w-28">
          <li className='absolute bg-slate-900 rounded-b-xl px-4 group'>
            <ActiveLink href="/">
              <Image src="/jester.png" alt="JESTER store logo" width={112} height={112} />
              <div className='py-2 overflow-clip h-0 invisible group-hover:h-auto group-hover:visible transition-[height]'>Home</div>
            </ActiveLink>
          </li>
        </div>
        <div className="col-start-3 text-right">
          <li>
            <Cart />
          </li>
        </div>
      </ul>
    </nav>
  );
};
