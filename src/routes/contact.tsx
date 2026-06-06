import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/labelknot/Nav";
import { ClosingCTA } from "@/components/labelknot/ClosingCTA";
import { InstagramFooter } from "@/components/labelknot/InstagramFooter";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Label Knot" },
      {
        name: "description",
        content:
          "Request a consultation with Label Knot. We accept a measured number of weddings each season.",
      },
      { property: "og:title", content: "Contact — Label Knot" },
      {
        property: "og:description",
        content:
          "Request a consultation with Label Knot. We accept a measured number of weddings each season.",
      },
    ],
  }),
});

function ContactPage() {
  return (
    <main className="bg-[var(--milk)]">
      <Nav />
      <ClosingCTA />
      <InstagramFooter />
    </main>
  );
}
