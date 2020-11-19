import React from 'react';

const Copyright = () => {
  const copyrightYear = 2018;
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p className="copyright">
        {`© ${copyrightYear} `}
        {currentYear > copyrightYear && `- ${currentYear} `}
        <a className="copyright__link" href="https://github.com/gunnarjohnson" target="_blank">
          Gunnar Johnson
        </a>
      </p>
    </footer>
  );
};

export default Copyright;
