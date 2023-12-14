import { CompleteOrderFormContainer, FormSectionContainer } from "./styles";
import { useTheme } from "styled-components";

import { TitleText } from "../../../../components/Typography";

import { SectionTitle } from "../SectionTitle";

import { AddressForm } from "./AddressForm";
import { PaymentMethodOptions } from "./PaymentMethodOptions";

import { MapPinLine, CurrencyDollar } from "phosphor-react";

export function CompleteOrderForm() {
  const { colors } = useTheme();

  return (
    <CompleteOrderFormContainer>
      <TitleText size="xs" color="subtitle">
        Complete seu pedido
      </TitleText>

      <FormSectionContainer>
        <SectionTitle
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido."
          icon={<MapPinLine color={colors["brand-yellow-dark"]} size={22} />}
        />
        <AddressForm />
      </FormSectionContainer>

      <FormSectionContainer>
        <SectionTitle
          title="Pagamento"
          subtitle="Escolha a forma que deseja pagar (o pagamento é feito na entrega)."
          icon={<CurrencyDollar color={colors["brand-purple"]} size={22} />}
        />
        <PaymentMethodOptions />
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  );
}
