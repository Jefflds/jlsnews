import { styled } from "styled-components";
import { transparentize } from 'polished';

type DisabledStyle = {
  background: string;
  color?: string;
};

type ThemeVariant = {
  bg: string;
  color: string;
  bs: string;
  onHover: string;
  onDisabled: DisabledStyle;
};

const COLORS = {
  Danger: "#F84735",
  Primary: "#0099FF",
  text: "#508AC9"
}

const THEME: Record<"Danger" | "Primary" | "text", ThemeVariant> = {
  Danger: {
    bg: "#F84735",
    color: "#fff",
    bs: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    onHover: `
        box-shadow: 0px 0px 20px 0px rgba(255, 109, 109, 0.34), 0px 4px 4px 0px rgba(0, 0, 0, 0.20);      
        `,
    onDisabled: {
        background: transparentize(0.75, COLORS.Danger),
        color: COLORS.Danger,
      
    },
  },
  Primary: {
    bg: "#09F",
    color: "#FFF",
    bs: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    onHover: `
        box-shadow: 0px 0px 5px 0px #09F;
        `,
    onDisabled: {
        background: transparentize(0.44, COLORS.Primary),
        color: '#fff',
       
    },
  },
  text: {
    bg: "transparent",
    color: "#274060",
    bs: "none",
    onHover: `
        border: 1px solid #274060;
        `,
    onDisabled: {
      background: transparentize(0.44, COLORS.text),
      color: COLORS.text,
    
    },
  },
};

export const Wrapper = styled.button<{
  Variant: "Danger" | "text" | "Primary";
}>`
  padding: 4px 8px;
  border: 1px solid ${(p) => THEME[p.Variant].bg};

  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  color: ${(p) => THEME[p.Variant].color};
  background-color: ${(p) => THEME[p.Variant].bg};
  box-shadow: ${(p) => THEME[p.Variant].bs};

  &:hover,
  &:focus {
    ${(p) => THEME[p.Variant].onHover};
  }

  &:disabled {
    background-color: ${p => THEME[p.Variant].onDisabled.background};
    color: ${p => THEME[p.Variant].onDisabled.color};

    pointer-events: none;
    border-color: transparent;
  }
`;
