import React from "react";
import Container from "react-bootstrap/Container";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import CarouselSection from "components/CarouselSection";
import ModalLauncher from "components/ModalLauncher";

function HeroSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className="text-center">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={1}
          spaced={true}
        />
        <CarouselSection
          items={[
            {
              image: "http://source.unsplash.com/7v_lSDRaOO0/1200x600",
              caption: "Caption for the first image",
            },
            {
              image: "http://source.unsplash.com/PvCO2IXlXBs/1200x600",
              caption: "Caption for the second image",
            },
            {
              image: "http://source.unsplash.com/A-wumu2cs0o/1200x600",
              caption: "Caption for the third image",
            },
          ]}
        />
        <ModalLauncher />
      </Container>
    </Section>
  );
}

export default HeroSection;
