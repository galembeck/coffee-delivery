import { ReactNode } from "react";

import { InfoWithIconContainer, IconContainer } from "./styles";

interface InfoWithIconProps {
  icon: ReactNode;
  text: string | ReactNode;
  iconBg: string;
  weight?: string | number;
}

export function InfoWithIcon({
  icon,
  text,
  weight,
  iconBg,
}: InfoWithIconProps) {
  return (
    <InfoWithIconContainer weight={weight}>
      <IconContainer iconBg={iconBg}>{icon}</IconContainer>
      {typeof text === "string" ? <p>{text}</p> : text}
    </InfoWithIconContainer>
  );
}
