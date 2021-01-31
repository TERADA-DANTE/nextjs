import "../styles/globals.css";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <Component
      {...pageProps}
      className="flex flex-col items-center justify-center"
    />
  );
}

export default MyApp;
