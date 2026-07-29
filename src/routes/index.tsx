import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Onecall Solution | Enterprise IT Infrastructure & Technology Partner" },
      {
        name: "description",
        content:
          "Onecall Solution delivers enterprise IT infrastructure, networking, cyber security, cloud and managed services across India — 16,000+ pin codes.",
      },
      {
        property: "og:title",
        content: "Onecall Solution | Enterprise IT Infrastructure & Technology Partner",
      },
      {
        property: "og:description",
        content:
          "End-to-end IT products, solutions and managed services for enterprises, government, education, healthcare and SMEs across India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

// The deliverable is a static HTML/CSS/JS site in public/site (shared-hosting ready).
// The app root simply hands off to it.
function Index() {
  useEffect(() => {
    window.location.replace("/site/index.html");
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <p className="text-sm text-muted-foreground">
        Loading Onecall Solution… <a className="underline" href="/site/index.html">Continue</a>
      </p>
    </div>
  );
}
