import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/labelknot/Nav";
import { Hero } from "@/components/labelknot/Hero";
import { Philosophy } from "@/components/labelknot/Philosophy";
import { Gallery } from "@/components/labelknot/Gallery";
import { Reviews } from "@/components/labelknot/Reviews";

import { Awards } from "@/components/labelknot/Awards";
import { Interlude } from "@/components/labelknot/Interlude";
import { Founder } from "@/components/labelknot/Founder";
import { ClosingCTA } from "@/components/labelknot/ClosingCTA";
import { InstagramFooter } from "@/components/labelknot/InstagramFooter";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Label Knot — Premium Indian Wedding Photography & Films" },
      {
        name: "description",
        content:
          "Label Knot is an editorial wedding photography and film house for India's most considered weddings. Heirloom albums, cinematic films, archival stills.",
      },
      { property: "og:title", content: "Label Knot — Premium Indian Wedding Photography & Films" },
      {
        property: "og:description",
        content:
          "An editorial wedding photography and film house. Heirloom albums, cinematic films, archival stills.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content:
          "https://res.cloudinary.com/dtembvivw/image/upload/v1777608399/SnapInsta.to_590569291_18006699452824133_3848952403777069736_n_xseoti.jpg",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:image",
        content:
          "https://res.cloudinary.com/dtembvivw/image/upload/v1777608399/SnapInsta.to_590569291_18006699452824133_3848952403777069736_n_xseoti.jpg",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-[var(--milk)]">
      <Nav />
      <Hero />
      <Philosophy />
      <Gallery />
      <Reviews />
      <Awards />
      <Interlude />
      <Founder />
      <ClosingCTA />
      <InstagramFooter />
    </main>
  );
}
