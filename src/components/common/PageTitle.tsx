import * as React from "react";

interface IPageTitleProps {
  mainTitle?: string;
  heighlitedTitle: string;
  backgroundTitle: string;
}

const PageTitle: React.FC<IPageTitleProps> = ({ mainTitle, heighlitedTitle, backgroundTitle }) => {
  return (
    <div className="title-section text-center relative py-20">
      {/* Main Title */}
      <h1 className="text-[56px] font-[900] leading-none text-white uppercase m-0">
        {mainTitle}{" "}
        <span className="text-[#ffb400]">{heighlitedTitle}</span>
      </h1>
      
      {/* Background Title (extra large, faded) */}
      <span className="title-bg text-[110px] absolute left-0 right-0 top-1/2 -translate-y-1/2 uppercase font-extrabold text-[rgba(255,255,255,0.07)] tracking-[10px] leading-[0.7]">
        {backgroundTitle}
      </span>
    </div>
  );
}

export default PageTitle;