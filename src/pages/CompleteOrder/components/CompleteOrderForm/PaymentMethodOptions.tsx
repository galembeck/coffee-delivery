import { PaymentMethodOptionsContainer } from "./styles";

import { PaymentMethodInput } from "../PaymentMethodInput";

export function PaymentMethodOptions() {
  return (
    <PaymentMethodOptionsContainer>
      <PaymentMethodInput />
      <PaymentMethodInput />
      <PaymentMethodInput />
    </PaymentMethodOptionsContainer>
  );
}
