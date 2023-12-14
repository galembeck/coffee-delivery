import {
  CoffeeCardContainer,
  CoffeeDescription,
  CoffeeName,
  CoffeeTags,
  CardFooter,
  AddCartWrapper,
} from "./styles";

import { RegularText, TitleText } from "../../../../components/Typography";

import { QuantityInput } from "../../../../components/QuantityInput";

import { formatPrice } from "../../../../utils/formatPrice";

import { ShoppingCart } from "phosphor-react";

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CoffeeProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const formatedPrice = formatPrice(coffee.price);

  return (
    <CoffeeCardContainer>
      <img src={`/coffees/${coffee.photo}`} />

      <CoffeeTags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </CoffeeTags>

      <CoffeeName>{coffee.name}</CoffeeName>
      <CoffeeDescription>{coffee.description}</CoffeeDescription>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            {formatedPrice}
          </TitleText>
        </div>

        <AddCartWrapper>
          <QuantityInput />
          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  );
}
