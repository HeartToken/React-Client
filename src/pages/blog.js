import React from "react";
import Meta from "components/Meta";
import NavbarCustom from "components/NavbarCustom";
import Footer from "components/Footer";

function BlogPage(props) {
  return (
    <>
      <Meta title="Blog" />
      <NavbarCustom
        bg="white"
        variant="light"
        expand="md"
        logo="https://uploads.divjoy.com/logo.svg"
      />
      <Footer
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        copyright={`© ${new Date().getFullYear()} Company`}
        logo="https://uploads.divjoy.com/logo.svg"
      />
    </>
  );
}

export default BlogPage;
