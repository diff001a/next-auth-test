// @ts-nocheck
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"

import { ThemeProvider } from "@mui/material/styles";
import theme from "@/styles/theme";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "@/styles/createEmotionCache";
const clientSideEmotionCache = createEmotionCache();

import GlobalStyle from '@/styles/Global'

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps: { session, ...pageProps },
}: AppProps) {

  return (
    <>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <SessionProvider session={session}>
            <Component {...pageProps} />
            <GlobalStyle />
          </SessionProvider>
        </ThemeProvider>
      </CacheProvider>
    </>
  )
}

export default MyApp

