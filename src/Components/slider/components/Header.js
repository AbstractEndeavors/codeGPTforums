import React from 'react';
import { Helmet } from 'react-helmet';

const Header = () => {
  return (
    <Helmet>
      <link
        media="all"
        href="https://webdeveloper.com/wp-content/cache/autoptimize/css/autoptimize_4fb30bbe8d2032e72703c853a7601bea.css"
        rel="stylesheet"
      />
      <script
        async=""
        src="https://static.hotjar.com/c/hotjar-2850239.js?sv=6"
      ></script>
      <meta name="robots" content="max-image-preview:large" />
      <script
        defer=""
        src="https://webdeveloper.com/wp-includes/js/jquery/jquery.min.js"
        id="jquery-core-js"
      ></script>
    </Helmet>
  );
};

export default Header;

