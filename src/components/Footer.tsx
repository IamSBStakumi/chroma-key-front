"use client";

import styled from "styled-components";

const FooterComponent = styled.footer`
  margin-top: auto;
  padding: 0.4rem 0.1rem;
  text-align: center;
  background: #22cc22;
`;

const FooterText = styled.p`
  font-size: 1.3rem;
  color: #333;
`;

const Footer = () => {
  return (
    <FooterComponent>
      <FooterText>
        Greenback Movie Composer
        <br />
        Author: SBS_takumi
      </FooterText>
    </FooterComponent>
  );
};

export default Footer;
