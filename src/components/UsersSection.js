import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import AspectRatio from "components/AspectRatio";
import Avatar from "components/Avatar";

function UsersSection(props) {
  const items = [
    {
      headerImage: "https://source.unsplash.com/pe_R74hldW4/1080x360",
      avatarImage: "https://uploads.divjoy.com/pravatar-150x-68.jpeg",
      name: "John Smith",
      username: "johnsmith",
    },
    {
      headerImage: "https://source.unsplash.com/uwPBAlQyIag/1080x360",
      avatarImage: "https://uploads.divjoy.com/pravatar-150x-35.jpeg",
      name: "Lisa Zinn",
      username: "lisazinn",
    },
    {
      headerImage: "https://source.unsplash.com/pJ_DCj9KswI/1080x360",
      avatarImage: "https://uploads.divjoy.com/pravatar-150x-16.jpeg",
      name: "Diana Low",
      username: "dianalow",
    },
    {
      headerImage: "https://source.unsplash.com/2mjl2uvz9ic/1080x360",
      avatarImage: "https://i.pravatar.cc/150?img=7",
      name: "Shawn David",
      username: "shawndavid",
    },
    {
      headerImage: "https://source.unsplash.com/GJ8ZQV7eGmU/1080x360",
      avatarImage: "https://i.pravatar.cc/150?img=8",
      name: "Ian Gold",
      username: "iangold",
    },
    {
      headerImage: "https://source.unsplash.com/CSs8aiN_LkI/1080x360",
      avatarImage: "https://i.pravatar.cc/150?img=10",
      name: "Ali Pine",
      username: "alipine",
    },
  ];

  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="text-center"
        />
        <Row className="justify-content-center">
          {items.map((item, index) => (
            <Col xs={12} md={6} lg={4} className="py-3" key={index}>
              <Card>
                <AspectRatio ratio={4 / 1}>
                  <Image src={item.headerImage} fluid={true} />
                </AspectRatio>
                <Card.Body className="d-flex flex-column text-center align-items-center p-4">
                  <div className="UsersSection__avatar-wrapper">
                    <Avatar
                      src={item.avatarImage}
                      alt={item.name}
                      size="96px"
                    />
                  </div>
                  <h6 className="font-weight-bold mb-0 mt-3">{item.name}</h6>
                  <small className="text-muted">@{item.username}</small>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
}

export default UsersSection;
