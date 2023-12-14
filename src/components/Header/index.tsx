import {
  HeaderButton,
  HeaderButtonsContainer,
  HeaderContainer,
} from "./styles";

import coffeeDeliveryLogo from "../../assets/coffee-delivery-logo.svg";

import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <img src={coffeeDeliveryLogo} alt="Logo" />

        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Campinas, SP
          </HeaderButton>
          <HeaderButton variant="yellow">
            <ShoppingCart size={20} weight="fill" />
          </HeaderButton>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  );
}
