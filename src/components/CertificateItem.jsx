import React from "react";

function CertificateItem({ title, imgUrl, source}) {
  return (
    <div className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden">
      <img
        src={imgUrl}
        alt="contribution-item"
        className="w-full h-24 md:h-36 object-fill"
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl dark:text-white mb-1 md:mb-2 font-semibold">
          {title}
        </h3>
        <p>
        {source}
        </p>
      </div>
    </div>
  );
}

export default CertificateItem;