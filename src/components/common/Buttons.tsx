import * as React from "react";

export interface IPrimaryButtonProps {
   type?: "submit" | "reset" | "button" | undefined;
   text: string;
   icon?: React.ReactElement | string;
   classname?: string;
   onclick?: () => void;
}

function PrimaryButton (props: IPrimaryButtonProps) {
   const { type = 'button', text, icon, classname = '', onclick } = props;

   return (
      <button type={type} onClick={onclick} className={`relative group overflow-hidden px-7 py-[18px] border border-[#ffb400] text-white uppercase rounded-full cursor-pointer ${icon && 'pr-16'} ${classname}`}>
         <span className='flex items-center font-semibold relative z-10 uppercase gap-2 text-white transition-colors duration-300 leading-none'>
            {text}
         </span>
         {/* {text} */}
         {icon && <span className='flex items-center text-white rounded-full bg-[#ffb400] absolute top-0 bottom-0 right-0 p-[14px] z-1'>{icon}</span>}
         <span className='absolute inset-0 bg-[#ffb400] transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out' />
      </button>
   );
};

export { PrimaryButton };
