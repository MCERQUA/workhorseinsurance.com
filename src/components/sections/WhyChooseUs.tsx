import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

const REASONS = [
  { title: "Commercial Fleet Specialists", desc: "We understand driver records, radius of operation, cargo and tools exposure, and how carriers rate work-truck and fleet risk." },
  { title: "We Shop Specialty Markets", desc: "Access to commercial auto and fleet carriers — not general business carriers that overprice work-truck risk or exclude it outright." },
  { title: "Same-Day Certificates", desc: "Need a certificate and additional insured for a client or contract by tomorrow? We process certificates and endorsements same-day." },
  { title: "Licensed in All 50 States", desc: "Whether you run one service truck or a multi-state fleet, we can bind coverage where you need it." },
  { title: "Founded in 2005", desc: "20+ years in specialty insurance. We know which carriers understand fleet operations and which ones pay their claims." },
  { title: "Claims Advocacy", desc: "When a truck goes down or a claim hits, we're in your corner — not hiding behind a carrier call center. Direct advocate support." },
];

export function WhyChooseUs() {
  return (
    <section className="section-pad bg-warm-white">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/fleet-lineup.jpg"
                alt="Lineup of commercial work trucks in a fleet"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-forest-green/20 to-transparent" />
            </div>
          </FadeIn>

          <div>
            <FadeIn>
              <p className="font-body text-sm font-bold text-ember-orange uppercase tracking-widest mb-3">Why Choose Us</p>
              <h2 className="font-heading text-3xl sm:text-4xl text-bark font-bold mb-4">
                Why Fleet Owners Choose Us
              </h2>
              <p className="font-body text-muted leading-relaxed mb-8">
                We specialize in commercial work-truck and fleet insurance. That means we know how carriers rate drivers and vehicles, the cargo and tools exposures you carry, and what your contracts require.
              </p>
            </FadeIn>

            <div className="space-y-5">
              {REASONS.map((r, i) => (
                <FadeIn key={r.title} delay={i * 0.05}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-forest-green rounded-full flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div>
                      <p className="font-body font-bold text-bark text-sm mb-0.5">{r.title}</p>
                      <p className="font-body text-sm text-muted leading-relaxed">{r.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
