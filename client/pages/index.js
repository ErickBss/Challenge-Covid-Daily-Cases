import PreferencesProvider from "../components/context";

import { QueryClientProvider } from "react-query";

import Head from "next/head";
import SelectionBox from "../components/selectionHeader/index";
import { queryClient } from "../services/queryClient";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Covid Daily Cases</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <PreferencesProvider>
          <SelectionBox />
        </PreferencesProvider>
      </QueryClientProvider>
    </div>
  );
}
