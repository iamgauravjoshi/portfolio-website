import * as React from "react";

export interface IPrimaryButtonProps {
  type?: "submit" | "reset" | "button" | undefined;
  text: string;
  icon?: React.ReactElement | string;
  classname?: string;
  onclick?: () => void;
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
  download?: boolean | string;
}

function PrimaryButton(props: IPrimaryButtonProps) {
  const {
    type = "button",
    text,
    icon,
    classname = "",
    onclick,
    href,
    target,
    rel,
    download,
  } = props;

  const buttonClasses = `relative inline-flex w-fit items-center justify-center overflow-hidden rounded-full border border-[#ffb400] px-7 py-[18px] text-sm uppercase text-white cursor-pointer group sm:text-base ${icon ? "pr-16" : ""} ${classname}`;

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2 whitespace-nowrap font-semibold uppercase leading-none text-white transition-colors duration-300">
        {text}
      </span>
      {icon && (
        <span className="flex items-center text-white rounded-full bg-[#ffb400] absolute top-0 bottom-0 right-0 p-[14px] z-1">
          {icon}
        </span>
      )}
      <span className="absolute inset-0 bg-[#ffb400] transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
    </>
  );

  if (href) {
    return (
      <a
        type={type}
        href={href}
        target={target}
        rel={rel}
        download={download}
        className={buttonClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onclick} className={buttonClasses}>
      {content}
    </button>
  );
}

export { PrimaryButton };
