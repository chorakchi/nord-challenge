import "tailwindcss/dist/tailwind.css";
import "styles/styles.css";
import { AppWrapper } from "context";

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}

export default MyApp;
