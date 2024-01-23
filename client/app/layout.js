"use client";

import "./globals.css";
import Footer from "@/components/Footer";
import Script from "next/script";
import { useEffect } from "react";

import { Providers } from "@/redux/store/provider";
// export const metadata = {
//   title:
//     "Wholesale joblot pallets and clearance sales from all over the world | Lot24 B2B",
//   description:
//     "Lot24 is a tool for international wholesale traders, with many surplus and bankrupt stock offers, liquidation stocks and wholesale clearance deals.",
// };

export default function RootLayout({ children }) {
  useEffect(() => {
    window.__lc = window.__lc || {};
    window.__lc.license = 16974474;
    (function (n, t, c) {
      function i(n) {
        return e._h ? e._h.apply(null, n) : e._q.push(n);
      }
      var e = {
        _q: [],
        _h: null,
        _v: "2.0",
        on: function () {
          i(["on", c.call(arguments)]);
        },
        once: function () {
          i(["once", c.call(arguments)]);
        },
        off: function () {
          i(["off", c.call(arguments)]);
        },
        get: function () {
          if (!e._h)
            throw new Error(
              "[LiveChatWidget] You can't use getters before load."
            );
          return i(["get", c.call(arguments)]);
        },
        call: function () {
          i(["call", c.call(arguments)]);
        },
        init: function () {
          var n = t.createElement("script");
          n.async = !0;
          n.type = "text/javascript";
          n.src = "https://cdn.livechatinc.com/tracking.js";
          t.head.appendChild(n);
        },
      };
      !n.__lc.asyncInit && e.init();
      n.LiveChatWidget = n.LiveChatWidget || e;
    })(window, document, [].slice);
  }, []);
  return (
    <html lang="en">
      <body className="bg-[#f7f7f7]">
        <Providers>
          {/* <Header /> */}
          {children}
          <Footer />
        </Providers>

        <Script src="/assets/scripts/lang-config.js" />
        {/* <Script src="/assets/scripts/chat-config.js" strategy="lazyOnload" /> */}

        <noscript>
          <a href="https://www.livechat.com/chat-with/16974474/" rel="nofollow">
            Chat with us
          </a>
          , powered by{" "}
          <a
            href="https://www.livechat.com/?welcome"
            rel="noopener nofollow"
            target="_blank"
          >
            LiveChat
          </a>
        </noscript>
      </body>
    </html>
  );
}
