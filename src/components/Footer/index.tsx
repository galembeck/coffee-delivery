import { FooterContainer, FooterButton } from "./styles";

import { Link } from "react-router-dom";

import { FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <FooterContainer>
      <p>Made with 💜 by Pedro Galembeck</p>
      <div>
        <Link to="https://www.github.com/LDNzera" target="_blank">
          <FooterButton variant="purple">
            <FaGithub size={40} />
            Github
          </FooterButton>
        </Link>
      </div>
    </FooterContainer>
  );
}
