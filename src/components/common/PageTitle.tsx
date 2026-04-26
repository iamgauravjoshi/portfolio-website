import * as React from "react";

interface IPageTitleProps {
  mainTitle?: string;
  heighlitedTitle: string;
  backgroundTitle: string;
}

const PageTitle: React.FC<IPageTitleProps> = ({
  mainTitle,
  heighlitedTitle,
  backgroundTitle,
}) => {
  return (
    <div className="relative px-4 py-14 text-center sm:py-16 lg:py-20">
      <h1 className="relative z-10 m-0 text-4xl font-[900] uppercase leading-none text-white sm:text-5xl lg:text-[56px]">
        {mainTitle} <span className="text-[#ffb400]">{heighlitedTitle}</span>
      </h1>

      <span className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 text-[42px] font-extrabold uppercase leading-[0.8] tracking-[4px] text-[rgba(255,255,255,0.06)] sm:text-[72px] sm:tracking-[6px] lg:text-[110px] lg:tracking-[10px]">
        {backgroundTitle}
      </span>
    </div>
  );
};

export default PageTitle;
