import { Input } from '@/components/ui/input';
import Image from 'next/image';
import React from 'react';

type Props = {
   route: string;
   iconPosition: string;
   imgSrc: string;
   placeholder: string;
   otherClasses?: string;
};

const LocalSearchBar = ({
   iconPosition,
   imgSrc,
   placeholder,
   route,
   otherClasses,
}: Props) => {
   return (
      <div
         className={`${otherClasses} background-light800_darkgradient relative flex min-h-[56px] grow items-center  gap-4 rounded-[10px] px-4`}
      >
         {iconPosition === 'left' && (
            <Image
               src={imgSrc}
               width={24}
               height={24}
               alt='search'
               className='cursor-pointer'
            />
         )}
         <Input
            type='text'
            placeholder={placeholder}
            value=''
            onChange={() => {}}
            className='paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none'
         />
         {iconPosition === 'right' && (
            <Image
               src={imgSrc}
               width={24}
               height={24}
               alt='search'
               className='cursor-pointer'
            />
         )}
      </div>
   );
};

export default LocalSearchBar;
