import { SignUpStep } from "@/types/signup";

export const SIGNUP_ORDER: SignUpStep[] = ['occupation', 'organization', 'license', 'email', 'password', 'complete'];

export const SIGNUP_TITLE_MAP: Record<SignUpStep, string> = {
  occupation: '해당하는 직무를 선택하세요.',
  organization: '소속된 기관을 입력하세요.',
  license: '면허 번호를 입력하세요.',
  email: '계정을 입력하세요.',
  password: '비밀번호를 입력하세요.',
  complete: '조금만 기다려주세요.\n마지막으로 내부 승인 절차를 진행하고 있습니다.'
}