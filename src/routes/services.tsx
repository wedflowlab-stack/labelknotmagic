import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/labelknot/Nav";
import { Offerings } from "@/components/labelknot/Offerings";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Label Knot" },
      {
        name: "description",
        content:
          "Explore Label Knot's wedding photography and film packages — heirloom albums, cinematic films, and archival stills.",
      },
      { property: "og:title", content: "Services — Label Knot" },
      {
        property: "og:description",
        content:
          "Explore Label Knot's wedding photography and film packages — heirloom albums, cinematic films, and archival stills.",
      },
    ],
  }),
});

const HERO_IMAGE =
  "https://res.cloudinary.com/dtembvivw/image/upload/v1778166004/SaveClip.App_656403465_18019254551824133_1727390248362862999_n_kamcvk.jpg";

function ServicesPage() {
  return (
    <main className="bg-[var(--milk)]">
      <Nav />
      <section className="relative h-[80vh] md:h-screen w-full overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="Label Knot services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <p className="eyebrow mb-6" style={{ color: "var(--milk)" }}>
            Services
          </p>
          <h1
            className="editorial-headline text-5xl md:text-7xl lg:text-8xl"
            style={{ color: "var(--milk)" }}
          >
            What We Deliver
          </h1>
          <p
            className="font-display italic text-lg md:text-2xl mt-6 max-w-2xl"
            style={{ color: "var(--milk)" }}
          >
            Explore what's in our packages.
          </p>
        </div>
      </section>
      <Offerings />
    </main>
  );
}
