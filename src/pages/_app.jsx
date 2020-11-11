import { AksaraProvider, GlobalStyles } from "@aksara-ui/core";

export default function App({ Component, pageProps }) {
  return (
    <AksaraProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </AksaraProvider>
  );
}
