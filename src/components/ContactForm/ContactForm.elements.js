import styled from "styled-components";

export const ContactFormContainer = styled.div`
  width: 100%;
  min-height: 500px;
`;

export const MyForm = styled.form`
  width: 100%;
  min-height: 300px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const MyTextArea = styled.textarea`
  width: 80%;
  max-width: 800px;
  height: 200px;

  resize: none;
`;
