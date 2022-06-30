import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";
import { QueryCache, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import React from "react";
import { useRouter } from "next/router";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const router = useRouter();

  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
          },
        },
        queryCache: new QueryCache({
          onError: async (error: any, query) => {
            if (error.request.status === 401) {
              router.push("/login");
            }
          },
        }),
      })
  );

  return (
    <>
      <Head>
        <title>Warspaces</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      <GoogleOAuthProvider clientId='577707062343-rodd59kma7o47rih3aube2360dpa0b2v.apps.googleusercontent.com'>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            colorScheme: "light",
          }}
        >
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </MantineProvider>
      </GoogleOAuthProvider>
    </>
  );
}
