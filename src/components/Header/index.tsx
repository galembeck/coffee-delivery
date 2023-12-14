import { NavLink } from "react-router-dom";

import {
  HeaderButton,
  HeaderButtonsContainer,
  HeaderContainer,
} from "./styles";

import coffeeDeliveryLogo from "../../assets/coffee-delivery-logo.svg";

import { useCart } from "../../hooks/useCart";

import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  const { cartQuantity } = useCart();

  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={coffeeDeliveryLogo} alt="Logo" />
        </NavLink>

        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Porto Alegre, RS
          </HeaderButton>
          <NavLink to="/complete-order">
            <HeaderButton variant="yellow">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  );
}
