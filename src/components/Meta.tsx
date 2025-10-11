import React, { useEffect } from "react";

type MetaProps = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  twitterHandle?: string;
};

const upsertMeta = (attrName: string, attrValue: string, content: string) => {
  const selector = `meta[${attrName}="${attrValue}"]`;
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const setLinkRel = (rel: string, href: string) => {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

const Meta: React.FC<MetaProps> = ({
  title = "Erel Production Ltd. - Electrical, Lighting, Solar",
  description = "Kıbrıs'ın en büyük elektrik, aydınlatma ve solar malzemeleri distribütörü. 70 yıllık deneyim, kaliteli ürünler ve profesyonel hizmet.",
  image = "/assets/logo.png",
  url = "https://erelelectrical.com/",
  twitterHandle = "@erelelectrical",
}) => {
  useEffect(() => {
    if (title) document.title = title;

    upsertMeta("name", "description", description);

    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:image", image);
    upsertMeta("property", "og:url", url);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:site", twitterHandle);
    upsertMeta("name", "twitter:image", image);

    setLinkRel("canonical", url);

    // JSON-LD Organization structured data
    const ldId = "meta-jsonld-org";
    let ldEl = document.getElementById(ldId) as HTMLScriptElement | null;
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Erel Production Ltd.",
      url,
      logo: image,
      sameAs: ["https://facebook.com/erelelectric", "https://instagram.com/erel_lighting"],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+90 392 223 87 21",
          contactType: "customer service",
          areaServed: "CY",
        },
      ],
    };

    if (!ldEl) {
      ldEl = document.createElement("script");
      ldEl.id = ldId;
      ldEl.type = "application/ld+json";
      document.head.appendChild(ldEl);
    }
    ldEl.text = JSON.stringify(jsonLd);

    return () => {
      // keep tags (we don't remove to avoid flicker between SPA routes)
    };
  }, [title, description, image, url, twitterHandle]);

  return null;
};

export default Meta;
