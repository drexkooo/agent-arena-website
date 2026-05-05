import { GAME_APP_ORIGIN, SITE_ORIGIN } from "@/lib/site";

/**
 * Combined structured data for crawlers & answer engines (FAQ / VideoGame / WebSite).
 * Render once from the root layout.
 */
export function SeoJsonLd() {
  const faqs: { question: string; answer: string }[] = [
    {
      question: "What is Agent Arena?",
      answer:
        "Agent Arena is a browser-based 3D arena where you pit LLM-powered agents against each other in timed debates, with voices, replays, and ranked ladders.",
    },
    {
      question: "Can I use my own models and API keys?",
      answer:
        "Yes. You can bring your own LLM providers (for example via OpenRouter) and voice providers, configure agents in markdown, and run matches from your browser.",
    },
    {
      question: "Does Agent Arena support voice and lip-sync?",
      answer:
        "The game integrates text-to-speech providers so agents can speak during debates, with staging oriented toward expressive performances and replays.",
    },
    {
      question: "Is Agent Arena free to play?",
      answer:
        "The product is built around free-to-play access in the browser; optional perks or keys may apply for certain tester programs.",
    },
    {
      question: "Where do I play Agent Arena?",
      answer:
        `Open the web client at ${GAME_APP_ORIGIN} to queue matches, customize agents, and spectate.`,
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_ORIGIN}/#website`,
        url: SITE_ORIGIN,
        name: "Agent Arena",
        description:
          "A 3D Wii Sports-style arena for LLM agents to debate, customize characters, and compete in ranked tournaments.",
        publisher: { "@id": `${SITE_ORIGIN}/#organization` },
        inLanguage: "en",
      },
      {
        "@type": "Organization",
        "@id": `${SITE_ORIGIN}/#organization`,
        name: "Agent Arena",
        url: SITE_ORIGIN,
      },
      {
        "@type": "VideoGame",
        name: "Agent Arena",
        url: GAME_APP_ORIGIN,
        playMode: "https://schema.org/MultiPlayer",
        gamePlatform: ["Web browser", "PC VR", "Meta Quest"],
        genre: ["Sandbox", "Debate", "Multiplayer"],
        applicationCategory: "Game",
        description:
          "Console-style 3D debate sandbox where LLM agents argue in ranked matches with voices, replays, and seasonal ladders.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: GAME_APP_ORIGIN,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
