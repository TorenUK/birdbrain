import styled from "styled-components";

// other
import { Button } from "@material-ui/core";

export const Form1Wrapper = styled.div`
  min-width: 350px;
  min-height: 300px;
  width: 40%;
  height: 40%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 1.2rem;

  background: white;
  border-radius: 5px;

  @media screen and (max-width: 1000px) {
    width: 100%;
    height: 50%;

    flex-direction: column;
  }
`;

export const FormSelect = styled.div`
  width: 200px;
  height: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1rem;
  font-weight: 700;
`;

export const FormLabelContainer = styled.div`
  width: 100%;
  height: 150px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 850px) {
  }
`;

export const FormLabel = styled.label`
  width: 80px;
  height: 65px;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 0.8rem;
  font-weight: 700;
  color: white;
  background: black;
  text-align: center;
  border-radius: 5px;

  @media screen and (max-width: 850px) {
    width: 60px;
    height: 40px;

    font-size: 0.5rem;
    font-weight: 600;
  }
`;

export const AddToBasket = styled(Button)`
  width: 150px !important;
  height: 40px !important;

  background: black !important;
  color: white !important;
  font-weight: 600 !important;

  @media screen and (max-width: 850px) {
    width: 120px !important;
    height: 30px !important;
    margin-bottom: 0.9rem !important;

    font-size: 0.7rem !important;
    font-weight: 500 !important;
  }
`;
