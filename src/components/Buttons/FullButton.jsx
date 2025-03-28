import React from "react";
import styled from "styled-components";

export default function FullButton({ title, action, border }) {
  return (
    <Wrapper
      className="animate pointer radius8"
      onClick={action ? () => action() : null}
      border={border}
    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: 1px solid ${(props) => (props.border ? "#E52F8A" : "#E52F8A")};
  background-color: ${(props) => (props.border ? "transparent" : "#E52F8A")};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${(props) => (props.border ? "rgb(49, 33, 68)" : " #fff")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "rgb(210, 12, 167)")};
    border: 1px solid #7620ff;
    color: ${(props) => (props.border ? "#7620ff" : "#fff")};
  }
`;

