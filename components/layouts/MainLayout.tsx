"use client";

import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import GlobalStyle from "@/styles/GlobalStyle";
import defaultTheme from "@/styles/theme";
import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import styled, { ThemeProvider } from "styled-components";

const queryClient = new QueryClient();

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <Main>
            <Header />
            {children}
            <Footer />
          </Main>
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  )
}

export const Main = styled.div`
  position: relative;
  min-height: 100vh;
`;