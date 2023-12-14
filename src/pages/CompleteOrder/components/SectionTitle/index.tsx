import { ReactNode } from "react";

import { SectionTitleContainer } from "./styles";
import { TitleText, RegularText } from "../../../../components/Typography";

interface SectionTitleProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
}

export function SectionTitle({ title, subtitle, icon }: SectionTitleProps) {
  return (
    <SectionTitleContainer>
      {icon}
      <div>
        <TitleText size="xs" color="subtitle">
          {title}
        </TitleText>
        <RegularText color="text" size="s">
          {subtitle}
        </RegularText>
      </div>
    </SectionTitleContainer>
  );
}
