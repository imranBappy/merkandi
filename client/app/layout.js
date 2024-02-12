import "./globals.css";
import Footer from "@/components/Footer";
import Script from "next/script";

import { Providers } from "@/redux/store/provider";
export const metadata = {
  title:
    "Wholesale joblot pallets and clearance sales from all over the world | Lot24 B2B",
  description:
    "Lot24 is a tool for international wholesale traders, with many surplus and bankrupt stock offers, liquidation stocks and wholesale clearance deals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#f7f7f7]">
        <Providers>
          {children}
          <Footer />
        </Providers>

        <Script src="/assets/scripts/lang-config.js" />
        {/* <Script src="/assets/scripts/chat-config.js" strategy="lazyOnload" /> */}
        <Script
          src="/assets/scripts/translation.js"
          strategy="beforeInteractive"
        />
        {process.env.GOOGLE_TRANSLATION_CONFIG && (
          <Script
            src="//translate.google.com/translate_a/element.js?cb=TranslateInit"
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
