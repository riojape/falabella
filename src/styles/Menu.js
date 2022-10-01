import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";

export const BoxMenu = styled.div`
  width: 240px;
  border-radius: 3px;
  padding: 24px 0px;
  box-shadow: 0 5px 5px 5px rgba(0, 0, 0, 0.5);
  margin: 20px;
  position: relative;
  background-color: #fff;

  ::before {
    content: "";
    width: 0;
    height: 0;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 12px solid #fff;
    position: absolute;
    top: -12px;
    ${({ before }) => {
      switch (before) {
        case "center":
          return css`
            right: calc(50% - 12px);
          `;
        case "right":
          return css`
            right: calc(50% - 48px);
          `;
        case "left":
          return css`
            right: calc(50% + 36px);
          `;
        default:
          return css`
            rigth: calc(50% + 36px);
          `;
      }
    }}
`;
export const Item = styled.li`
  width: 100%;
  font-size: 1.4rem;
  line-height: 40px;
  color: #495867;
  letter-spacing: 0;
  list-style: none;
  height: 40px;
  padding: 0 24px;
  cursor: pointer;
  :hover {
    background-color: #e8e8ff;
  }
`;
