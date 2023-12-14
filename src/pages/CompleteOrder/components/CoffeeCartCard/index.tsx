import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from "./styles";

import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";

import { Trash } from "phosphor-react";

export function CoffeeCartCard() {
  return (
    <CoffeeCartCardContainer>
      <div>
        <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1703462400&Signature=jWpqx~nhrfcZqWiUv7W~5cpJZdQo4~SFhmnpztxD2YfpXwRmPpv6Dmp7meITM5YsYCl4Y8rY5GcZl0IpU84mFwTPiVlWHO93nfvtcsiFvaf3OPeLO5XjQC9LVEV4V8GatiTMir2UbLs3jvEjl-wJMyYxSmgI17-l0rEvdHxNytyc7ze-CSUsho-t23hYIlyl502oYy7tBLGNj~BYJjZ80PcaTxH8TkskhSmILDCOYgInhNuCErJWa44eGjtlVezltvECruV-yyjvYyx3~4mYqpp4xPffvWXLoG8Xh5Bsf5Bh8zgBN68AZQ5c51ur8BFSxKm3P7ibTbpnMAuMafKyuw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
        <div>
          <RegularText color="subtitle">Expresso Tradicional</RegularText>
          <ActionsContainer>
            <QuantityInput size="small" />
            <RemoveButton>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ 9,90</p>
    </CoffeeCartCardContainer>
  );
}
