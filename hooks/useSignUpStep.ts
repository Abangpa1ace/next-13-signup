import { SIGNUP_ORDER } from "@/constants/signup";
import { SignUpStep } from "@/types/signup";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const useSignUpStep = () => {
  const [step, setStep] = useState<SignUpStep>(SIGNUP_ORDER[0]);
  const pathname = usePathname()
  const router = useRouter();

  useEffect(() => {
    const paths = pathname.split('/');
    const step = paths[paths.indexOf('signup') + 1];
    
    setStep(step as SignUpStep)
  }, [pathname])

  const nextStep = SIGNUP_ORDER[SIGNUP_ORDER.indexOf(step) + 1];
  const isLastStep = !nextStep;

  const prevStep = SIGNUP_ORDER[SIGNUP_ORDER.indexOf(step) - 1];
  const isFirstStep = !prevStep;

  const routeNextStep = async () => {
    if (!nextStep) return;
    await router.push(`/signup/${nextStep}`);
  }

  const routePrevStep = async () => {
    if (!prevStep) return;
    await router.push(`/signup/${prevStep}`);
  }

  return {
    step,
    nextStep,
    isLastStep,
    prevStep,
    isFirstStep,
    routeNextStep,
    routePrevStep,
  }
}

export default useSignUpStep;