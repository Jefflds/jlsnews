import { styled } from "styled-components";

const THEME = {
  Danger: {
    bg: "#F84735",
    color: "#fff",
    bs: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    onHover: `
        box-shadow: 0px 0px 20px 0px rgba(255, 109, 109, 0.34), 0px 4px 4px 0px rgba(0, 0, 0, 0.20);      
        `,
    onDisabled: `
        background: rgba(248, 71, 53, 0.25);
    `,
  },
  Primary: {
    bg: "#09F",
    color: "#fff",
    bs: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    onHover: `
        box-shadow: 0px 0px 5px 0px #09F;
        `,
    onDisabled: `
        background: rgba(0, 153, 255, 0.56);
    `,
  },
  text: {
    bg: "transparent",
    color: "#274060",
    bs: "none",
    onHover: `
        border: 1px solid #274060;
        `,
    onDisabled: `
        background: rgba(80, 138, 201, 0.56);
    `
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
`;
