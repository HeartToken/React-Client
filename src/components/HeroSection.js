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
              image: "https://www.teahub.io/photos/full/366-3666848_back-ground-image-nature.jpg",
             
            },
            {
              image: "https://www.teahub.io/photos/full/2-29565_nature-wallpaper-hd-for-tablet-photography-of-download.jpg",
              
            },
            {
              image: "https://i.pinimg.com/originals/73/9d/94/739d941e9feb6aede4c986981f4c10f7.jpg",
              
            },
          ]}
        />
        <ModalLauncher />
      </Container>
    </Section>
  );
}

export default HeroSection;
