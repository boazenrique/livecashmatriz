import { createFileRoute, notFound } from "@tanstack/react-router";

import presentesAsset from "@/assets/presentes.png.asset.json";
import { LandingPage, pageDescription, pageTitle } from "@/components/landing-page";
import { influencerOffers } from "@/lib/offers";

export const Route = createFileRoute("/$slug")({
  loader: ({ params }) => {
    const offer = influencerOffers[params.slug];
    if (!offer) throw notFound();
    return offer;
  },
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://id-preview--c2324dcd-d51c-4ba0-b5b2-0e86ba825941.lovable.app" + presentesAsset.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://id-preview--c2324dcd-d51c-4ba0-b5b2-0e86ba825941.lovable.app" + presentesAsset.url },
    ],
  }),
  component: SlugLandingPage,
});

function SlugLandingPage() {
  const offer = Route.useLoaderData();
  return <LandingPage offers={offer} />;
}
