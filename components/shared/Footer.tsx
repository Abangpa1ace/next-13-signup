"use client";

import useValidatorForm from "@/hooks/shared/validator/useValidatorForm";
import useSignUpStep from "@/hooks/useSignUpStep";
import { validatorValueIds } from "@/recoil/shared/validator";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

export default function Footer() {
  const { isFirstStep, isLastStep, routePrevStep, routeNextStep } = useSignUpStep();
  const { startValidate } = useValidatorForm();
  const ids = useRecoilValue(validatorValueIds);

  const handleClickNext = () => {
    console.log('ids', ids);
    startValidate();
    // routeNextStep();
  }

  return (
    <FooterContainer>
      {!isFirstStep && <FooterButton onClick={routePrevStep}>이전</FooterButton>}
      {!isLastStep && <FooterButton onClick={handleClickNext}>다음</FooterButton>}
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 24px;
  width: 100%;
  padding: 15px 10px 48px;
`;

const FooterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 304px;
  height: 48px;
  border-radius: 51px;

  &:nth-of-type(1) {
    background-color: ${({ theme }) => theme.action.light};
    color: ${({ theme }) => theme.text.primary};
  }

  &:nth-of-type(2) {
    background-color: ${({ theme }) => theme["3billion"]["blue-light-900"]};
    color: ${({ theme }) => theme.accent.contrast};
  }
`;