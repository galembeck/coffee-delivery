import { Button } from "../../../../components/Button";
import { RegularText } from "../../../../components/Typography";

import { useCart } from "../../../../hooks/useCart";

import { formatPrice } from "../../../../utils/formatPrice";

import { ConfirmationSectionContainer } from "./styles";

const DELIVERY_PRICE = 3.5;

export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useCart();

  const cartTotal = DELIVERY_PRICE + cartItemsTotal;
  const formattedItemsTotal = formatPrice(cartItemsTotal);
  const formattedCartTotal = formatPrice(cartTotal);
  const formatDeliveryPrice = formatPrice(DELIVERY_PRICE);

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R$ {formattedItemsTotal}</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ {formatDeliveryPrice}</RegularText>
      </div>
      <div>
        <RegularText weight="700" color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle" size="l">
          R$ {formattedCartTotal}
        </RegularText>
      </div>

      <Button text="Confirmar pedido" disabled={cartQuantity <= 0} />
    </ConfirmationSectionContainer>
  );
}
