import styled from "styled-components";

// other
import { Button } from "@material-ui/core";

export const Form1Wrapper = styled.div`
  width: 50%;
  height: 60%;

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
  height: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.1rem;
  font-weight: 700;
`;

export const FormLabelContainer = styled.div`
  width: 100%;
  height: 200px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
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
    width: 80px;
    height: 60px;

    font-size: 0.9rem;
    font-weight: 600;
    font-size: 0.8rem;
  }
`;

export const AddToBasket = styled(Button)`
  width: 150px !important;
  height: 40px !important;
  margin-bottom: 1rem !important;

  background: black !important;
  color: white !important;
  font-weight: 600 !important;

  @media screen and (max-width: 850px) {
    width: 100px !important;
    height: 45px !important;
    margin-bottom: 0.9rem !important;

    font-size: 0.7rem !important;
  }
`;
