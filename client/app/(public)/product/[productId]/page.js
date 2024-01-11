import ProductDetails from "@/components/Product/ProductDetails";
import React from "react";

import Head from "next/head";
const jsonLD = `
    {
      "@context": "https://schema.org/",
      "@type": "Product",
      "sku": "4121",
      "mpn": "4121",
      "image": [
        "https://zuricart.co.ke/upload/images/product/6527b1cd4b2f3.jpeg"
      ],
      "name": "TCL 58P635 58 inch price in Kenya - Price at Zuricart",
      "description": "TCL 58P635 58 inch online at best price in Kenya at Zuricart. TCL 58P635 58 inch features 3 HDMI inputs Google TV OS and 60Hz refresh rate ",
      "brand": {
        "@type": "Brand",
        "name": "TCL"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://zuricart.co.ke/product/tcl-58p635-58-inch-4k-hdr-google-tv",
        "itemCondition": "https://schema.org/NewCondition",
        "availability": "https://schema.org/InStock",
        "price": "67000.00",
        "priceCurrency": "KES",
        "priceValidUntil": "12/10/2023",
        "shippingDetails": {
          "@type": "OfferShippingDetails",
          "shippingRate": {
            "@type": "MonetaryAmount",
            "value": "3.49",
            "currency": "KES"
          },
          "shippingDestination": {
            "@type": "DefinedRegion",
            "addressCountry": "KE",
            "postalCodeRange": {
              "postalCodeBegin": "98100",
              "postalCodeEnd": "98199"
            }
          },
          "deliveryTime": {
            "@type": "ShippingDeliveryTime",
            "handlingTime": {
              "@type": "QuantitativeValue",
              "minValue": "0",
              "maxValue": "1"
            },
            "transitTime": {
              "@type": "QuantitativeValue",
              "minValue": "1",
              "maxValue": "5"
            },
            "cutOffTime": "19:30-08:00",
            "businessDays": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [ "https://schema.org/Monday", "https://schema.org/Tuesday", "https://schema.org/Wednesday", "https://schema.org/Thursday" ]
            }
          }
        }
      },
      "review": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "TCL official store"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.1",
        "reviewCount": "1093"
      }
    }
  `;
const page = ({ params }) => {
  return (
    <div>
      <Head>
        <title>TCL 58P635 58 inch price in Kenya - Price at Zuricart</title>
        <meta name="keywords" content="TCL 58P635 58 inch" />
        <meta name="rating" content="5" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        <meta
          name="title"
          content="TCL 58P635 58 inch price in Kenya - Price at Zuricart "
        />
        <meta
          name="description"
          content="TCL 58P635 58 inch online at best price in Kenya at Zuricart. TCL 58P635 58 inch features 3 HDMI inputs Google TV OS and 60Hz refresh rate"
        />
        <meta
          name="image"
          content="https://zuricart.co.ke/upload/images/product/6527b1cd4b2f3.jpeg"
        />
        <link
          rel="canonical"
          href="https://zuricart.co.ke/product/tcl-58p635-58-inch-4k-hdr-google-tv"
        />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="TCL 58P635 58 inch price in Kenya - Price at Zuricart"
        />
        <meta
          name="twitter:description"
          content="TCL 58P635 58 inch online at best price in Kenya at Zuricart. TCL 58P635 58 inch features 3 HDMI inputs Google TV OS and 60Hz refresh rate"
        />
        <meta
          name="twitter:site"
          content="https://zuricart.co.ke/product/tcl-58p635-58-inch-4k-hdr-google-tv"
        />
        <meta name="twitter:creator" content="@zuricart" />
        <meta
          name="twitter:image:src"
          content="https://zuricart.co.ke/upload/images/product/6527b1cd4b2f3.jpeg"
        />
        <meta name="twitter:player" content="#" />

        <meta
          property="og:title"
          content="TCL 58P635 58 inch price in Kenya - Price at Zuricart"
        />
        <meta
          property="og:description"
          content="TCL 58P635 58 inch online at best price in Kenya at Zuricart. TCL 58P635 58 inch features 3 HDMI inputs Google TV OS and 60Hz refresh rate"
        />
        <meta
          property="og:image"
          content="https://zuricart.co.ke/upload/images/product/6527b1cd4b2f3.jpeg"
        />
        <meta
          property="og:url"
          content="https://zuricart.co.ke/product/tcl-58p635-58-inch-4k-hdr-google-tv"
        />
        <meta property="og:site_name" content="Zuricart" />
        <meta property="og:locale" content="KE" />
        <meta property="og:type" content="product" />

        <meta itemprop="brand" content="TCL" />
        <meta
          itemprop="name"
          content="TCL 58P635 58 inch price in Kenya - Price at Zuricart"
        />
        <meta
          itemprop="description"
          content="TCL 58P635 58 inch online at best price in Kenya at Zuricart. TCL 58P635 58 inch features 3 HDMI inputs Google TV OS and 60Hz refresh rate"
        />
        <meta itemprop="productID" content="4121" />
        <meta
          itemprop="url"
          content="https://zuricart.co.ke/product/tcl-58p635-58-inch-4k-hdr-google-tv"
        />
        <meta
          itemprop="image"
          content="https://zuricart.co.ke/upload/images/product/6527b1cd4b2f3.jpeg"
        />
        <meta itemprop="value" content="4121" />
        <link itemprop="availability" href="https://schema.org/InStock" />
        <link itemprop="itemCondition" href="https://schema.org/NewCondition" />
        <meta itemprop="price" content="67000.00" />
        <meta itemprop="priceCurrency" content="KES" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLD }}
        />
      </Head>
      <ProductDetails params={params} />
    </div>
  );
};

export default page;
