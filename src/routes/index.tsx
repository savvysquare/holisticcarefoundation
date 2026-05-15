import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo_optimized.png";
import heroOptimized from "@/assets/hero_optimized.jpg";
import about1 from "@/assets/02_optimized.jpg";
import about2 from "@/assets/04_optimized.jpg";
import about3 from "@/assets/05_optimized.jpg";
import g1 from "@/assets/06_optimized.jpg";
import g2 from "@/assets/07_optimized.jpg";
import g3 from "@/assets/08_optimized.jpg";
import g4 from "@/assets/09_optimized.jpg";
import g5 from "@/assets/10_optimized.jpg";



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Holistic Care Foundation — Empowering Lives" },
      {
        name: "description",
        content:
          "How Holistic Care Foundation has touched 2,000+ lives across 8 countries through Healthcare, Education, Poverty Alleviation, and Environmental Sustainability.",
      },
    ],
  }),
  component: Index,
});

const IMG = {
  hero: heroOptimized,
  about1: about1,
  about2: about2,
  about3: about3,
  g1: g1,
  g2: g2,
  g3: g3,
  g4: g4,
  g5: g5,
};

function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-[var(--brand-cream)] text-[var(--brand-navy-deep)] font-sans antialiased">
      {/* Top nav + Hero (full-coloured navy band) */}
      <div className="bg-[var(--brand-navy)] text-white">
        <header className="relative border-b border-white/10">
          <div className="mx-auto flex max-w-[1180px] items-center justify-between px-6 py-4">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Holistic Care Foundation" className="h-8 w-auto" />
              <span className="text-[15px] font-semibold tracking-tight text-white">
                Holistic Care Foundation
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-7 text-[14px] text-white/80 md:flex">
              <a href="#about" className="hover:text-[var(--brand-red)]">About</a>
              <a href="#focus" className="hover:text-[var(--brand-red)]">Focus Areas</a>
              <a href="#gallery" className="hover:text-[var(--brand-red)]">Gallery</a>
              <a href="#contact" className="hover:text-[var(--brand-red)]">Contact</a>
            </nav>

            <div className="flex items-center gap-3">
              <a href="#volunteer" className="hidden text-[14px] text-white/80 hover:text-[var(--brand-red)] md:inline">
                Volunteer
              </a>
              <a
                href="#donate"
                className="hidden rounded-full bg-[var(--brand-red)] px-4 py-2 text-[13px] font-medium text-white hover:opacity-90 md:block"
              >
                Donate
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-white md:hidden"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Nav Overlay */}
          {isMenuOpen && (
            <div className="absolute inset-x-0 top-full z-50 border-b border-white/10 bg-[var(--brand-navy)] p-6 shadow-xl md:hidden">
              <nav className="flex flex-col gap-5 text-[16px] text-white/80">
                <a href="#about" onClick={toggleMenu} className="hover:text-[var(--brand-red)]">About</a>
                <a href="#focus" onClick={toggleMenu} className="hover:text-[var(--brand-red)]">Focus Areas</a>
                <a href="#gallery" onClick={toggleMenu} className="hover:text-[var(--brand-red)]">Gallery</a>
                <a href="#contact" onClick={toggleMenu} className="hover:text-[var(--brand-red)]">Contact</a>
                <a href="#volunteer" onClick={toggleMenu} className="hover:text-[var(--brand-red)]">Volunteer</a>
                <a
                  href="#donate"
                  onClick={toggleMenu}
                  className="mt-2 rounded-md bg-[var(--brand-red)] py-3 text-center text-[15px] font-medium text-white"
                >
                  Donate Now
                </a>
              </nav>
            </div>
          )}
        </header>

        {/* Hero */}
        <section className="mx-auto max-w-[1180px] px-8 py-20">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.15fr_1fr] md:gap-12">
            <div>
              <p className="font-mono text-[12px] uppercase tracking-wider text-white/60">
                Empowering Lives
              </p>
              <h1 className="mt-4 text-[42px] font-semibold leading-[1.1] tracking-tight text-white md:text-[52px]">
                How Holistic Care Foundation has touched 2,000+ lives across 8 countries in 10 years
              </h1>
              <p className="mt-6 max-w-md text-[15px] text-white/70">
                Healthcare, education, poverty alleviation, and environmental sustainability —
                an integrated approach to empowering communities.
              </p>
            </div>
            <div className="relative">
              <img
                src={IMG.hero}
                alt="Holistic Care Foundation outreach"
                className="aspect-[4/3] w-full rounded-md object-cover shadow-2xl"
              />
            </div>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            <StatCard tone="blue" big="2,000+" small="lives touched" sub="across healthcare, education and outreach programs" />
            <StatCard tone="green" big="8" small="countries" sub="active foundation programs and global partners" />
            <StatCard tone="blue" big="20+" small="volunteers" sub="powering on-the-ground delivery in local communities" />
            <StatCard tone="green" big="10" small="years of impact" sub="continuous community-based work since 2015" />
          </div>
        </section>

        <div className="bg-[var(--brand-red)]">
          <div className="mx-auto flex max-w-[1180px] items-center justify-between px-8 py-4 text-[14px] text-white">
            <span>Empowering lives across 8 countries</span>
            <a href="#volunteer" id="volunteer" className="rounded-full bg-white/15 px-4 py-1.5 text-[13px] hover:bg-white/25">
              Get involved
            </a>
          </div>
        </div>
      </div>

      {/* Outer dotted grid container */}
      <div className="mx-auto max-w-[1180px] border-x border-dashed border-[var(--brand-rule)]">

        {/* Body grid: sticky info card + content */}
        <section id="about" className="grid grid-cols-1 gap-10 px-8 py-14 md:grid-cols-[300px_1fr] md:gap-14">
          {/* Sticky info card */}
          <aside className="md:sticky md:top-8 md:self-start">
            <div className="rounded-md border border-[var(--brand-rule)] bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <img src={logo} alt="" className="h-6 w-auto" />
                <span className="text-[13px] font-semibold tracking-tight">
                  Holistic Care Foundation
                </span>
              </div>

              <InfoRow label="About">
                A nonprofit foundation operating across 8 countries to improve lives through
                Healthcare, Education, Poverty Alleviation, and Environmental Sustainability.
              </InfoRow>
              <InfoRow label="Focus">Healthcare · Education · Poverty · Environment</InfoRow>
              <InfoRow label="Team Size">20+ volunteers, 10 global partners</InfoRow>
              <InfoRow label="Founded">2015</InfoRow>
              <InfoRow label="Headquarters">Operating in 8 countries</InfoRow>

              <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-[var(--brand-rule)]">
                <div className="h-full w-0 bg-[var(--brand-red)]" />
              </div>
            </div>
          </aside>

          <div className="max-w-[680px]">
            {/* Pull quote */}
            <div className="rounded-md border border-[var(--brand-rule)] bg-white/60 p-8">
              <p className="text-[22px] font-medium leading-snug tracking-tight md:text-[26px]">
                “As a foundation, it is part of our responsibility to make the most of every
                opportunity to serve — and a holistic approach to care helps us do just that.”
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[var(--brand-navy)] text-[12px] font-semibold text-white">
                  HC
                </div>
                <div className="text-[13px]">
                  <div className="font-semibold">Holistic Care Foundation</div>
                  <div className="text-[var(--brand-navy)]/60">Founder & Board — Empowering Lives</div>
                </div>
              </div>
            </div>

            {/* Challenge */}
            <Section
              label="Challenge"
              title="The communities we serve face overlapping barriers to healthcare, education, and opportunity"
            >
              <p>
                What started as a personal initiative quickly grew into a comprehensive
                foundation addressing four key areas: Healthcare, Education, Poverty Alleviation,
                and Environmental Sustainability. Today, Holistic Care Foundation operates in
                8 countries, touching hundreds of lives annually.
              </p>
              <p>
                In every region we work, families navigate fragmented systems — clinics without
                supplies, classrooms without teachers, and economic shocks without a safety net.
                Tackling any one of these in isolation is rarely enough to break the cycle.
              </p>
              <Callout>
                “We wanted a model that could meet people where they are — addressing health,
                learning, livelihood, and environment together, not in silos.”
                <br />— Holistic Care Foundation
              </Callout>
            </Section>

            {/* Solution / Focus Areas */}
            <Section
              id="focus"
              label="Solution"
              title="An integrated approach across four interconnected focus areas"
            >
              <p>
                Our programs combine immediate relief with long-term capacity building. We
                partner with local clinics, schools, cooperatives, and environmental groups so
                that every initiative is rooted in the community it serves.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-[var(--brand-rule)] bg-[var(--brand-rule)] sm:grid-cols-2">
                <FocusItem
                  title="Healthcare"
                  body="Preventive and curative care, community-based health workers, and health education."
                />
                <FocusItem
                  title="Education"
                  body="From early childhood to adult learning — focused on quality, access, and local relevance."
                />
                <FocusItem
                  title="Poverty Alleviation"
                  body="Immediate assistance paired with long-term strategies for sustainable economic growth."
                />
                <FocusItem
                  title="Environmental Sustainability"
                  body="Climate-resilience initiatives that protect community health and livelihoods."
                />
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <img src={IMG.about1} alt="Healthcare outreach" loading="lazy" decoding="async" className="aspect-[4/3] w-full rounded-md object-cover" />
                <img src={IMG.about2} alt="Education program" loading="lazy" decoding="async" className="aspect-[4/3] w-full rounded-md object-cover" />
              </div>

              <Callout>
                “With a holistic model, we have no doubts that the right support reaches the
                right family — whether that is a clinic visit, a scholarship, or a season of
                food security.”
                <br />— Holistic Care Foundation
              </Callout>
            </Section>

            {/* Results */}
            <Section
              label="Results"
              title="A foundation turning consistent presence into measurable impact"
            >
              <p>
                With ten years of operating across multiple countries, we have moved from
                early pilot programs to durable partnerships. Our results so far have exceeded
                our own first-year expectations:
              </p>
              <ul className="mt-4 space-y-2 text-[15px]">
                <Bullet>2,000+ lives touched across our four focus areas</Bullet>
                <Bullet>Programs running in 8 countries with 10 global partners</Bullet>
                <Bullet>20+ active volunteers powering on-the-ground delivery</Bullet>
                <Bullet>10 years of continuous community-based work</Bullet>
              </ul>

              <p className="mt-6">
                As we look to the future, the part that excites us most is what comes next —
                more partners, deeper programs, and communities that own the change long after
                a single initiative ends.
              </p>

              <Callout>
                “As a foundation, not every organization can deliver what these communities
                need. A holistic, long-term partnership is what makes the difference.”
                <br />— Holistic Care Foundation
              </Callout>
            </Section>

            {/* Footnote */}
            <div className="mt-12 border-t border-dashed border-[var(--brand-rule)] pt-6 text-[11px] leading-relaxed text-[var(--brand-navy)]/60">
              Figures reflect cumulative reach from inception. Holistic Care Foundation is a
              registered nonprofit; all donations support the programs above.
            </div>
          </div>
        </section>

        <Divider />

        {/* Gallery */}
        <section id="gallery" className="px-8 py-14">
          <p className="font-mono text-[12px] uppercase tracking-wider text-[var(--brand-navy)]/60">
            Photo Gallery
          </p>
          <h2 className="mt-3 max-w-2xl text-[28px] font-semibold leading-tight tracking-tight md:text-[34px]">
            Our activities, in pictures
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-5">
            {[IMG.g1, IMG.g2, IMG.g3, IMG.g4, IMG.g5].map((src) => (
              <img
                key={src}
                src={src}
                alt="Foundation activity"
                loading="lazy"
                decoding="async"
                className="aspect-square w-full rounded-md object-cover"
              />
            ))}
          </div>
        </section>
      </div>

      {/* Dark CTA band */}
      <section id="donate" className="bg-[var(--brand-navy-deep)] text-white">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 px-8 py-20 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="font-mono text-[12px] uppercase tracking-wider text-white/60">
              Next steps
            </p>
            <h2 className="mt-3 text-[40px] font-semibold leading-[1.05] tracking-tight md:text-[52px]">
              The new way to <br /> empower lives.
            </h2>
            <p className="mt-6 max-w-md text-[15px] text-white/70">
              Support healthcare, education, poverty alleviation, and environmental
              sustainability across 8 countries — every contribution moves a community forward.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#donate"
                className="rounded-full bg-[var(--brand-red)] px-5 py-3 text-[14px] font-medium text-white hover:opacity-90"
              >
                Donate now
              </a>
              <a
                href="#volunteer"
                className="rounded-full border border-white/30 px-5 py-3 text-[14px] font-medium text-white hover:bg-white/10"
              >
                Join our volunteer team
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src={IMG.about3}
              alt="Foundation impact"
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full rounded-md object-cover shadow-2xl"
            />
          </div>
        </div>

        <div className="bg-[var(--brand-red)]">
          <div className="mx-auto flex max-w-[1180px] items-center justify-between px-8 py-4 text-[14px] text-white">
            <span>Make a donation</span>
            <a href="#donate" className="rounded-full bg-white/15 px-4 py-1.5 text-[13px] hover:bg-white/25">
              Give today
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[var(--brand-navy)] text-white">
        <div className="mx-auto grid max-w-[1180px] grid-cols-2 gap-8 px-8 py-14 md:grid-cols-4">
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              <img src={logo} alt="" className="h-8 w-auto" />
              <span className="text-[15px] font-semibold">Holistic Care Foundation</span>
            </div>
            <p className="mt-4 max-w-sm text-[13px] text-white/60">
              Updates and stories from our work across healthcare, education, poverty
              alleviation, and environmental sustainability.
            </p>
            <a
              href="#donate"
              className="mt-6 inline-block rounded-full bg-white px-4 py-2 text-[13px] font-medium text-[var(--brand-navy)]"
            >
              Donate
            </a>
          </div>
          <FooterCol
            title="Explore"
            items={[
              ["About", "#about"],
              ["Focus Areas", "#focus"],
              ["Gallery", "#gallery"],
            ]}
          />
          <FooterCol
            title="Get Involved"
            items={[
              ["Donate", "#donate"],
              ["Volunteer", "#volunteer"],
              ["Contact", "#contact"],
            ]}
          />
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-[1180px] items-center justify-between px-8 py-5 text-[12px] text-white/50">
            <span>© {new Date().getFullYear()} Holistic Care Foundation. All rights reserved.</span>
            <span>Empowering Lives</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function StatCard({
  tone,
  big,
  small,
  sub,
}: {
  tone: "blue" | "green";
  big: string;
  small: string;
  sub: string;
}) {
  const bg = tone === "blue" ? "bg-[var(--brand-blue-soft)]" : "bg-[var(--brand-green-soft)]";
  return (
    <div className={`flex h-full flex-col justify-between rounded-md ${bg} p-5`}>
      <div>
        <div className="text-[28px] font-semibold tracking-tight text-[var(--brand-navy-deep)]">
          {big}
        </div>
        <div className="mt-1 text-[15px] font-medium text-[var(--brand-navy-deep)]">
          {small}
        </div>
      </div>
      <div className="mt-6 text-[12px] text-[var(--brand-navy-deep)]/70">{sub}</div>
    </div>
  );
}

function InfoRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mt-5 border-t border-dashed border-[var(--brand-rule)] pt-4">
      <div className="font-mono text-[11px] uppercase tracking-wider text-[var(--brand-navy)]/60">
        {label}
      </div>
      <div className="mt-1 text-[13px] leading-relaxed text-[var(--brand-navy-deep)]">
        {children}
      </div>
    </div>
  );
}

function Divider() {
  return <div className="border-t border-dashed border-[var(--brand-rule)]" />;
}

function Section({
  id,
  label,
  title,
  children,
}: {
  id?: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-14" id={id}>
      <p className="font-mono text-[12px] uppercase tracking-wider text-[var(--brand-navy)]/60">
        {label}
      </p>
      <h2 className="mt-3 text-[24px] font-semibold leading-snug tracking-tight md:text-[28px]">
        {title}
      </h2>
      <div className="mt-5 space-y-4 text-[15px] leading-[1.7] text-[var(--brand-navy-deep)]/85">
        {children}
      </div>
    </div>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-6 rounded-md bg-[var(--brand-red-soft)] p-6 text-[15px] leading-[1.65] text-[var(--brand-navy-deep)]">
      <div className="mb-3 font-serif text-3xl leading-none text-[var(--brand-red)]">”</div>
      {children}
    </div>
  );
}

function FocusItem({ title, body }: { title: string; body: string }) {
  return (
    <div className="bg-white p-5">
      <div className="text-[14px] font-semibold text-[var(--brand-navy-deep)]">{title}</div>
      <div className="mt-1 text-[13px] leading-relaxed text-[var(--brand-navy)]/75">{body}</div>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-red)]" />
      <span>{children}</span>
    </li>
  );
}

function FooterCol({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div>
      <div className="font-mono text-[11px] uppercase tracking-wider text-white/50">{title}</div>
      <ul className="mt-4 space-y-2 text-[14px]">
        {items.map(([label, href]) => (
          <li key={label}>
            <a href={href} className="hover:text-[var(--brand-red)]">{label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
