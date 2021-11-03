import React from "react";
import Meta from "components/Meta";
import NavbarCustom from "components/NavbarCustom";
import Footer from "components/Footer";

function FaqPage(props) {
  return (
    <>
      <Meta title="Faq" />
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

export default FaqPage;
