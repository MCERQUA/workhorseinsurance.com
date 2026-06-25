export const SITE = {
  name: "Workhorse Insurance",
  domain: "workhorseinsurance.com",
  url: "https://workhorseinsurance.com",
  tagline: "Insurance for Commercial Work Trucks & Fleets",
  description: "Specialty insurance for commercial work-truck and fleet operators — service trucks, utility and box trucks, contractor work trucks, and small commercial fleets. Commercial auto, hired & non-owned auto, general liability, motor truck cargo, physical damage, tools & equipment, and workers comp. Licensed in all 50 states. Same-day quotes.",
  phone: "844-967-5247",
  phoneHref: "tel:+18449675247",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  statesLicensed: "All 50 states",
} as const;

export const SERVICES = [
  {
    slug: "commercial-auto-insurance",
    title: "Commercial Auto Insurance",
    short: "The core policy for any work-truck business — covers your trucks, drivers, and on-road liability.",
    icon: "Truck",
    description:
      "Commercial auto is the foundation of work-truck and fleet coverage. It protects your vehicles, drivers, and your business against liability from at-fault accidents on the road.",
    longDescription: `## Commercial Auto for Work Trucks & Fleets

Your trucks are on the road every day — driving to job sites, hauling tools and materials, and representing your business. Commercial auto insurance covers the liability and physical risk that comes with operating work vehicles for business. A personal auto policy will not respond to a business-use accident, and using one is a coverage gap that can sink a company after a serious loss.

## What Commercial Auto Covers

- **Liability:** At-fault accidents causing injury or property damage to others
- **Medical payments / PIP:** Injuries to you and your occupants
- **Uninsured/underinsured motorist:** Protection when the at-fault driver lacks coverage
- **Fleet coverage:** Multiple trucks and drivers on one coordinated policy
- **Hired & non-owned options:** Extends to rented and employee-owned vehicles (see HNOA)

## Why Personal Auto Isn't Enough

Personal auto policies exclude regular business use, hauling for hire, and vehicles titled to a company. When a work truck is in an at-fault accident, a personal policy can deny the claim — leaving the business exposed to the full cost. Commercial auto is built for exactly this exposure.

## What Drives Your Premium

- **Driver records:** MVRs are a major rating factor; clean records lower cost
- **Radius of operation:** Local, intermediate, or long-haul changes the risk profile
- **Vehicle type and weight:** Light service trucks rate differently than heavy box trucks
- **Use and cargo:** What you haul and how far affects pricing

We shop specialty commercial auto markets and structure your fleet so you get the right limits at a competitive rate — plus the certificates your clients and contracts require.`,
    coverages: [
      "Auto liability",
      "Medical payments / PIP",
      "Uninsured/underinsured motorist",
      "Fleet & multi-vehicle",
      "Additional insured endorsements",
      "Certificates of insurance",
    ],
    faqs: [
      {
        q: "Can I just use personal auto for my work truck?",
        a: "No. Personal auto excludes regular business use and company-titled vehicles, and can deny a claim after a business-use accident. Work trucks need commercial auto.",
      },
      {
        q: "How is my commercial auto premium calculated?",
        a: "Primarily by driver records (MVRs), radius of operation, vehicle type and weight, and what you haul. Clean driving records and a defined operating radius help keep premiums down.",
      },
    ],
  },
  {
    slug: "hired-non-owned-auto-insurance",
    title: "Hired & Non-Owned Auto",
    short: "Covers the gap when employees drive their own or rented vehicles for your business.",
    icon: "Car",
    description:
      "Hired & non-owned auto (HNOA) covers liability when employees use personal or rented vehicles for business — a common and frequently overlooked gap in work-truck programs.",
    longDescription: `## Hired & Non-Owned Auto for Work-Truck Businesses

Even fleets that title every truck have a hidden exposure: the moment an employee runs to the supply house in their own car, picks up lunch for the crew, or drives a rented box truck, your business can be held liable for an accident. Hired & non-owned auto (HNOA) closes that gap.

## Two Exposures, One Coverage

- **Hired auto:** Vehicles your business rents, leases, or borrows — like a rented truck for a big job
- **Non-owned auto:** Vehicles your business doesn't own but that are used for business, primarily employees' personal cars

## Why It's So Commonly Missed

Owners assume their commercial auto policy or the employee's personal policy will respond. But commercial auto covers scheduled vehicles, and an employee's personal policy may exclude business use or carry low limits. When a serious accident happens during a business errand, the injured party sues the **business** — and without HNOA, you're exposed.

## Who Needs It

- Any business whose employees ever drive personal vehicles for work errands
- Companies that rent trucks or vans for overflow or seasonal work
- Contractors whose crews use their own trucks to get to job sites on the clock

HNOA is inexpensive relative to the protection it provides and is often added as an endorsement to your commercial auto or general liability program. We make sure it's in place so an employee's errand doesn't become an uninsured lawsuit.`,
    coverages: [
      "Non-owned auto liability",
      "Hired/rented vehicle liability",
      "Employee personal-vehicle exposure",
      "Excess over driver's personal policy",
      "Defense costs",
      "Endorsement to auto or GL",
    ],
    faqs: [
      {
        q: "My employee has their own car insurance — why do I need HNOA?",
        a: "Their personal policy may exclude business use or have low limits, and an injured party will sue your business, not just the driver. HNOA protects the company when a personal vehicle is used for work.",
      },
      {
        q: "Does HNOA cover damage to the employee's car?",
        a: "No — HNOA covers your business's liability, not physical damage to the non-owned vehicle. The vehicle owner's own policy handles their car. We explain exactly where the lines fall.",
      },
    ],
  },
  {
    slug: "general-liability-insurance",
    title: "General Liability Insurance",
    short: "Covers third-party injury and property damage claims at job sites and your premises.",
    icon: "Shield",
    description:
      "General liability protects your business against third-party claims of bodily injury or property damage that happen at job sites, customer locations, or your own premises — separate from auto exposure.",
    longDescription: `## General Liability for Work-Truck Businesses

Your trucks get you to the work, but the work itself creates its own liability. General liability (GL) responds when your operations cause third-party bodily injury or property damage away from the vehicle — a customer tripping over your equipment, accidental damage to a client's property, or a claim arising from completed work.

## What GL Covers

- **Bodily injury:** Third-party injuries at a job site or your premises
- **Property damage:** Damage your crew causes to a client's building or property
- **Products & completed operations:** Claims arising after a job is finished
- **Personal & advertising injury:** Libel, slander, and certain advertising claims
- **Defense costs:** Legal defense even when a claim is groundless

## Why Auto Isn't Enough

Commercial auto covers accidents involving your vehicles. GL covers everything else your business does — the work performed, the premises, and the operations. Most clients, GCs, and commercial contracts require proof of GL before you can start a job, commonly $1M per occurrence / $2M aggregate, naming them as additional insured.

## Certificates and Contracts

We issue certificates of insurance and additional insured endorsements quickly so you never lose a job over paperwork — and we coordinate your GL with your commercial auto so there are no gaps between "on the road" and "on the job."`,
    coverages: [
      "Bodily injury liability",
      "Property damage liability",
      "Products & completed operations",
      "Personal & advertising injury",
      "Additional insured endorsements",
      "Legal defense costs",
    ],
    faqs: [
      {
        q: "Doesn't commercial auto already cover my liability?",
        a: "Only for accidents involving your vehicles. General liability covers injury and property damage from your operations and completed work — a separate exposure that clients and contracts require you to insure.",
      },
      {
        q: "What GL limits do work-truck businesses need?",
        a: "$1M per occurrence / $2M aggregate is the common baseline required by clients and general contractors. We tailor limits to your contracts and add an umbrella when needed.",
      },
    ],
  },
  {
    slug: "motor-truck-cargo-insurance",
    title: "Motor Truck Cargo Insurance",
    short: "Protects the materials, goods, and equipment you haul against loss or damage in transit.",
    icon: "Package",
    description:
      "Motor truck cargo insurance covers the property you transport — materials, goods, and equipment — against loss or damage while in transit, a gap that auto and property policies leave open.",
    longDescription: `## Motor Truck Cargo for Work Trucks & Fleets

Your commercial auto policy covers the truck. Your property policy covers your premises. But the valuable load in transit — building materials, customer goods, equipment, or supplies — often falls between them. Motor truck cargo insurance covers that property while it's being hauled.

## What's Covered

- **Cargo in transit:** Materials and goods damaged or lost while being transported
- **Loading & unloading:** Many policies extend to loss during loading and unloading
- **Covered perils:** Collision, overturn, fire, theft, and more depending on the form
- **Customer goods:** Property of others in your care while you haul it

## Common Exclusions to Watch

- **Unattended-vehicle theft:** Some policies limit or exclude theft from an unattended truck — security matters
- **Certain commodities:** High-value, hazardous, or specialized cargo may need scheduling
- **Improper securement:** Damage from poorly secured loads can be contested

We help you read the fine print so a denied cargo claim doesn't surprise you.

## Limits That Match Your Loads

Cargo limits should reflect the maximum value you ever have on a truck at once — not your average load. We right-size your limit and coordinate cargo with your auto, physical damage, and tools coverage so the whole operation is protected from yard to job site.`,
    coverages: [
      "Cargo in transit",
      "Loading & unloading",
      "Theft & fire",
      "Customer goods in your care",
      "Collision & overturn",
      "Scheduled high-value commodities",
    ],
    faqs: [
      {
        q: "Doesn't my commercial auto cover the cargo in my truck?",
        a: "No. Commercial auto covers the vehicle and liability, not the value of the goods you haul. Motor truck cargo insurance covers the load itself while it's in transit.",
      },
      {
        q: "How much cargo coverage do I need?",
        a: "Enough to cover the maximum value you might have on a single truck at once, not your average. We help you set the right limit and watch for exclusions like unattended-vehicle theft.",
      },
    ],
  },
  {
    slug: "physical-damage-insurance",
    title: "Physical Damage Insurance",
    short: "Collision and comprehensive coverage for your own trucks — repairs and replacement after a loss.",
    icon: "Wrench",
    description:
      "Physical damage insurance covers your own trucks against collision, theft, fire, vandalism, and weather — paying to repair or replace your vehicles so a loss doesn't take a truck off the road for good.",
    longDescription: `## Physical Damage Coverage for Your Trucks

Commercial auto liability pays for damage you cause to others. Physical damage coverage pays for damage to **your own** trucks — and for a work-truck business, an out-of-service vehicle means lost revenue, not just a repair bill. Physical damage keeps your fleet earning.

## Collision and Comprehensive

- **Collision:** Damage from hitting another vehicle or object, or an overturn
- **Comprehensive (other than collision):** Theft, fire, vandalism, hail, flood, and animal strikes
- **Glass and towing:** Often included or available as add-ons
- **Rental reimbursement / downtime:** Helps cover a replacement vehicle while yours is repaired

## Valuation Matters

How a totaled truck is valued — actual cash value vs. stated amount vs. replacement cost — makes a big difference at claim time, especially for upfitted service trucks worth far more than a base model. We make sure your valuation reflects the real cost to put an equivalent, equipped truck back on the road.

## Upfit and Equipment

A service truck is more than a chassis — racks, lifts, toolboxes, and built-in equipment add real value. We coordinate physical damage with tools & equipment coverage so both the vehicle and what's built into it are properly insured.`,
    coverages: [
      "Collision coverage",
      "Comprehensive (theft, fire, weather)",
      "Vandalism & glass",
      "Towing & labor",
      "Rental / downtime reimbursement",
      "Stated-amount / replacement valuation",
    ],
    faqs: [
      {
        q: "Is physical damage the same as liability?",
        a: "No. Liability pays for damage you cause to others; physical damage pays to repair or replace your own trucks after a covered loss. Work-truck businesses need both.",
      },
      {
        q: "How is my truck valued if it's totaled?",
        a: "It depends on your policy's valuation basis — actual cash value, stated amount, or replacement cost. For upfitted service trucks, we set valuation to reflect the real cost of an equivalent equipped vehicle.",
      },
    ],
  },
  {
    slug: "tools-equipment-insurance",
    title: "Tools & Equipment Insurance",
    short: "Inland marine coverage for the tools and equipment in your trucks — on the job and in transit.",
    icon: "Hammer",
    description:
      "Tools & equipment insurance (inland marine) covers the tools, gear, and portable equipment your crews use — protecting them against theft and damage on the job site, in the truck, and in transit.",
    longDescription: `## Tools & Equipment for Work-Truck Crews

The tools in your trucks represent thousands of dollars and the ability to do the job. Theft from work vehicles is one of the most common losses in the trades, and standard auto and property policies won't fully cover tools that travel. Tools & equipment insurance — a form of inland marine — protects your gear wherever it goes.

## What's Covered

- **Theft:** Tools stolen from the truck, the job site, or a storage trailer
- **Damage:** Equipment damaged on the job or in transit
- **Owned and rented:** Your tools plus equipment you rent or borrow
- **Small tools and large equipment:** From hand tools to portable machinery

## Scheduled vs. Blanket

- **Scheduled:** High-value items listed individually by description and value
- **Blanket:** A pool limit for unscheduled small tools, with a per-item cap

We structure the right mix so your most valuable equipment is fully covered and your everyday small tools are protected without listing every screwdriver.

## Reducing Tool Losses

Carriers reward good controls — locked toolboxes, alarmed vehicles, serial-number records, and overnight storage practices. We help you put those in place to lower both claims and premiums, and coordinate tools coverage with your physical damage and cargo policies.`,
    coverages: [
      "Tool & equipment theft",
      "On-site & in-transit damage",
      "Owned, rented & borrowed gear",
      "Scheduled high-value items",
      "Blanket small-tools limit",
      "Replacement-cost options",
    ],
    faqs: [
      {
        q: "Aren't my tools covered by my auto or property policy?",
        a: "Usually not adequately. Auto covers the truck, and property policies focus on your premises. Tools that travel to job sites need inland marine tools & equipment coverage.",
      },
      {
        q: "What's the difference between scheduled and blanket coverage?",
        a: "Scheduled lists high-value items individually; blanket provides a pool limit for everyday small tools with a per-item cap. Most crews need a combination, which we structure for you.",
      },
    ],
  },
  {
    slug: "workers-compensation-insurance",
    title: "Workers Compensation Insurance",
    short: "Required when you have employees — covers medical bills and lost wages for on-the-job injuries.",
    icon: "HardHat",
    description:
      "Workers comp is legally required from your first employee in most states and provides medical and wage-replacement benefits to drivers and crew injured on the job.",
    longDescription: `## Workers Comp for Work-Truck Businesses

The moment you hire employees, most states require workers compensation insurance. It pays medical bills, partial lost wages, and rehabilitation for workers injured on the job — and shields you from most injury lawsuits in return. Your drivers, helpers, loaders, and field crews all have real on-the-job injury exposure.

## Where Your Crew Gets Hurt

- **Drivers:** Vehicle accidents, plus strains from long hours behind the wheel
- **Loading crews:** Lifting, loading, and unloading injuries — a leading claim type
- **Field workers:** Slips, falls, tool, and equipment injuries at job sites
- **Roadside exposure:** Injuries while working near traffic or on the shoulder

## Classification Matters

Premium is driven by payroll and class codes that reflect each role's risk. A driver or field laborer carries far more exposure than an office dispatcher, and miscoding staff can trigger a costly audit bill at renewal. We make sure your employees are classified correctly from the start.

## Controlling Cost

A clean claims history, documented safety training, return-to-work programs, and driver screening all help control your experience modifier and premium. We help you put those pieces in place and shop carriers that understand work-truck and fleet operations.`,
    coverages: [
      "Medical expense coverage",
      "Lost wage replacement",
      "Disability benefits",
      "Death benefits",
      "Employer's liability",
      "Return-to-work support",
    ],
    faqs: [
      {
        q: "Do work-truck businesses legally need workers comp?",
        a: "In most states, yes — coverage is generally required once you have employees, including part-time crew. Requirements vary by state, and we help you stay compliant.",
      },
      {
        q: "How is my premium calculated?",
        a: "By payroll and job classification codes that reflect each role's injury risk. Correct classification — drivers and field crew vs. office staff — keeps your premium accurate and prevents costly audit surprises.",
      },
    ],
  },
] as const;

export const STATS = [
  { value: 20, suffix: "+", label: "Years in Specialty Insurance" },
  { value: 50, suffix: " States", label: "Licensed Nationwide" },
  { value: 7, suffix: " Coverages", label: "Built for Work Trucks" },
  { value: 24, suffix: " Hours", label: "Quote Turnaround" },
] as const;

export const FAQS = [
  {
    q: "What insurance does a work-truck or fleet business need?",
    a: "At minimum: commercial auto and general liability. Most operators also need hired & non-owned auto, physical damage on their trucks, tools & equipment, and workers comp. Businesses that haul materials or goods add motor truck cargo. We build the right mix for your operation.",
  },
  {
    q: "Why can't I just use personal auto for my work truck?",
    a: "Personal auto policies exclude regular business use and company-titled vehicles, and can deny claims after a business-use accident. Work trucks and fleets need commercial auto coverage.",
  },
  {
    q: "What is hired & non-owned auto and do I need it?",
    a: "HNOA covers your liability when employees drive their own or rented vehicles for business. If your crew ever runs errands in personal cars or you rent trucks, you likely need it — it's an inexpensive, commonly missed coverage.",
  },
  {
    q: "Does commercial auto cover the cargo and tools in my truck?",
    a: "No. Commercial auto covers the vehicle and liability. The goods you haul need motor truck cargo coverage, and the tools your crews use need tools & equipment (inland marine) coverage. We coordinate all three.",
  },
  {
    q: "How much does work-truck insurance cost?",
    a: "It varies by your number of vehicles, driver records, radius of operation, what you haul, and payroll. A single service truck costs far less than a multi-truck fleet. We provide a tailored quote — usually within 24 hours.",
  },
  {
    q: "Can you issue certificates for my clients and contracts?",
    a: "Yes. We issue certificates of insurance and additional insured endorsements promptly so you can satisfy client, GC, and contract requirements without delay.",
  },
] as const;

export const CREDENTIALS = [
  "Licensed in All 50 States",
  "NPN #8608479",
  "Founded 2005",
  "A.M. Best A-Rated Carriers",
  "Commercial Fleet Specialists",
  "Same-Day Certificates",
] as const;

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
