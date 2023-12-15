import {
  BenefitsContainer,
  IntroContainer,
  IntroContent,
  IntroTitle,
} from "./styles";

import { useTheme } from "styled-components";

import { RegularText } from "../../../../components/Typography";
import { InfoWithIcon } from "../../../../components/InfoWithIcon";

import introImg from "../../../../assets/intro-img.png";

import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";

export function Intro() {
  const { colors } = useTheme();

  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitle size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </IntroTitle>
            <RegularText size="m" color="subtitle" as="h3">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora do dia com um simples pedido.
              <br />
              <br />
              Confira os produtos disponíveis abaixo, selecione-o clicando no
              ícone do carrinho.
              <br />
              Para finalizar sua compra, dirija-se à página do carrinho, informe
              o endereço de entrega e selecione o método de pagamento (feito na
              entrega).
              <br />
              <br />
              Pronto! Basta aguardar seu café fresquinho chegar até você.
            </RegularText>
          </section>

          <BenefitsContainer>
            <InfoWithIcon
              icon={<ShoppingCart weight="fill" />}
              iconBg={colors["brand-yellow-dark"]}
              text="Compra simples e segura"
              weight="600"
            />
            <InfoWithIcon
              icon={<Package weight="fill" />}
              iconBg={colors["base-text"]}
              text="Embalagem mantém o produto intacto"
              weight="600"
            />
            <InfoWithIcon
              icon={<Timer weight="fill" />}
              iconBg={colors["brand-yellow"]}
              text="Entrega rápida e rastreada"
              weight="600"
            />
            <InfoWithIcon
              icon={<Coffee weight="fill" />}
              iconBg={colors["brand-purple"]}
              text="O café chega fresquinho até você"
              weight="600"
            />
          </BenefitsContainer>
        </div>

        <img src={introImg} alt="Coffee" />
      </IntroContent>
    </IntroContainer>
  );
}
