import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";

function FaqSection(props) {
  const items = [
    {
      question: "What is a FAQ page?",
      answer:
        "In contrast to a landing page, where the goal is to convert buyers, the Frequently Asked Questions (FAQ) section is a part of your website where you address common concerns, questions, and objections that customers have.",
    },
    {
      question: "When is a FAQ page appropriate?",
      answer:
        "An FAQ page can be a distraction or an asset, depending on how you execute it.",
    },
    {
      question: "Where do I look for “Frequently Asked” Questions?",
      answer:
        "Your inbox and customer support tickets will likely be the first places to look. But you should also anticipate objections that you can turn into questions, especially if the answer will put your customer’s mind at ease",
    },
    {
      question: "How should I answer my FAQs?",
      answer:
        "How you position your answers is key. Even if the question is about a potential shortcoming in your product or business, put on your PR hat and put a positive spin on your answer.",
    },
  ];

  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      id="faq"
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="text-center"
        />
        <Row className="pt-4">
          {items.map((item, index) => (
            <Col xs={12} md={6} key={index}>
              <article className="FaqSection__faq-item">
                <h4>{item.question}</h4>
                <p>{item.answer}</p>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
}

export default FaqSection;
