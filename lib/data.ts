export const BRAND = {
  name: "THE FAMILIES",
  tagline: "A wardrobe assembled from memory.",
  est: "EST. — A FAMILY ARCHIVE",
};

// All optimized photographs live in /public/looks as look-01 … look-45
export const looks = Array.from({ length: 45 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return { src: `/looks/look-${n}.jpg`, id: `FAM-${n}` };
});

export type Product = {
  slug: string;
  title: string;
  category: string;
  price: string;
  edition: string;
  image: string;
  gallery: string[];
  materials: string[];
  story: string;
  philosophy: string;
};

export const products: Product[] = [
  {
    slug: "shroud-fur-parka",
    title: "Shroud Fur Parka",
    category: "Outerwear",
    price: "€1,480",
    edition: "Edition of 12",
    image: "/looks/look-01.jpg",
    gallery: ["/looks/look-01.jpg", "/looks/look-21.jpg", "/looks/look-15.jpg"],
    materials: ["Hand-laid faux shearling", "Cross-appliqué satin lining", "Hardware: oxidised nickel zip"],
    story:
      "Built around a single childhood photograph — a coat too large for the body inside it. The parka keeps that memory of inheritance: clothes handed down, grown into rather than bought.",
    philosophy:
      "We do not design garments. We assemble relics. Every panel was salvaged, washed, and rebuilt by hand so that no two pieces carry the same history.",
  },
  {
    slug: "fam-23-varsity",
    title: "Fam 23 Varsity",
    category: "Knitwear",
    price: "€720",
    edition: "Edition of 24",
    image: "/looks/look-44.jpg",
    gallery: ["/looks/look-44.jpg", "/looks/look-04.jpg", "/looks/look-19.jpg"],
    materials: ["Reclaimed houndstooth wool", "Felt varsity lettering", "Leopard flock print"],
    story:
      "The number twenty-three belonged to no team. It was stitched onto a cousin's jacket and never explained. We kept it as a question.",
    philosophy:
      "Sportswear stripped of competition and returned to the street it came from — a uniform for a family that never played the same game twice.",
  },
  {
    slug: "tartan-salvage-denim",
    title: "Tartan Salvage Denim",
    category: "Trousers",
    price: "€640",
    edition: "Edition of 30",
    image: "/looks/look-23.jpg",
    gallery: ["/looks/look-23.jpg", "/looks/look-14.jpg", "/looks/look-09.jpg"],
    materials: ["Vintage indigo denim", "Tartan & plaid patch inlay", "Chain-stitch script"],
    story:
      "Cut wide, then cut again. Each leg carries a different decade of denim — the wash you remember from an older sibling, the plaid from a grandparent's chair.",
    philosophy:
      "Volume as protection. The body disappears so the history can speak.",
  },
  {
    slug: "leopard-trapper",
    title: "Leopard Trapper Mask",
    category: "Accessories",
    price: "€390",
    edition: "Edition of 18",
    image: "/looks/look-34.jpg",
    gallery: ["/looks/look-34.jpg", "/looks/look-29.jpg", "/looks/look-38.jpg"],
    materials: ["Faux leopard fur", "Foil-treated face panel", "Hand-set vintage buttons"],
    story:
      "A face that refuses to be a face. The mask protects the wearer from being read — identity withheld, belonging implied.",
    philosophy:
      "Anonymity is the most intimate thing we make.",
  },
  {
    slug: "green-cross-balaclava",
    title: "Green Cross Balaclava",
    category: "Accessories",
    price: "€280",
    edition: "Edition of 40",
    image: "/looks/look-21.jpg",
    gallery: ["/looks/look-21.jpg", "/looks/look-01.jpg", "/looks/look-11.jpg"],
    materials: ["Ribbed cotton", "Emerald cross appliqué", "Fringed veil"],
    story:
      "Devotion without a church. The cross here is decoration and inheritance at once — a symbol kept long after its meaning was lost.",
    philosophy:
      "We wear our questions about faith the way a family wears its silences.",
  },
  {
    slug: "families-track-short",
    title: "Families Track Short",
    category: "Trousers",
    price: "€460",
    edition: "Edition of 30",
    image: "/looks/look-23.jpg",
    gallery: ["/looks/look-23.jpg", "/looks/look-08.jpg", "/looks/look-31.jpg"],
    materials: ["Stonewashed denim", "Tartan racing stripe", "Crimson chain-stitch logo"],
    story:
      "The long short — cropped at the calf, weighted by memory. Worn over white socks the way the older kids did.",
    philosophy:
      "Proportion is a form of nostalgia. We make the silhouette of a photograph nobody took.",
  },
  {
    slug: "patchwork-cargo",
    title: "Patchwork Cargo",
    category: "Trousers",
    price: "€690",
    edition: "Edition of 22",
    image: "/looks/look-09.jpg",
    gallery: ["/looks/look-09.jpg", "/looks/look-04.jpg", "/looks/look-14.jpg"],
    materials: ["Reclaimed houndstooth", "Leopard knee panels", "Utility hardware"],
    story:
      "Pockets that have already been emptied a thousand times. The cargo is built to be lived in until it becomes someone else's.",
    philosophy:
      "Utility as sentiment. Function carried until it turns into feeling.",
  },
  {
    slug: "studded-leather-harness",
    title: "Studded Leather Harness",
    category: "Outerwear",
    price: "€880",
    edition: "Edition of 14",
    image: "/looks/look-15.jpg",
    gallery: ["/looks/look-15.jpg", "/looks/look-01.jpg", "/looks/look-21.jpg"],
    materials: ["Vegetable-tanned leather", "Hand-set eyelets", "Emerald satin gusset"],
    story:
      "Armour for the soft. The harness holds the body the way a name holds a person — tightly, and without asking.",
    philosophy:
      "Hardness in service of tenderness. Everything we protect is fragile.",
  },
];

export type Collection = {
  slug: string;
  title: string;
  season: string;
  cover: string;
  looks: string[];
  intro: string;
};

export const collections: Collection[] = [
  {
    slug: "household-saints",
    title: "Household Saints",
    season: "CHAPTER 01",
    cover: "/looks/look-04.jpg",
    intro:
      "The first chapter reads like a photo album left in the rain — devotion, denim and the people we were told to remember.",
    looks: looks.slice(0, 16).map((l) => l.src),
  },
  {
    slug: "the-back-room",
    title: "The Back Room",
    season: "CHAPTER 02",
    cover: "/looks/look-29.jpg",
    intro:
      "Garments photographed the way relatives are: from behind, mid-gesture, refusing the camera.",
    looks: looks.slice(16, 32).map((l) => l.src),
  },
  {
    slug: "after-the-funeral",
    title: "After the Funeral",
    season: "CHAPTER 03",
    cover: "/looks/look-40.jpg",
    intro:
      "Black tailoring undone by tenderness. The closing chapter of the first year.",
    looks: looks.slice(32, 45).map((l) => l.src),
  },
];

export type JournalEntry = {
  slug: string;
  title: string;
  dek: string;
  category: string;
  date: string;
  cover: string;
  body: string[];
};

export const journal: JournalEntry[] = [
  {
    slug: "on-inheritance",
    title: "On Inheritance",
    dek: "Why a brand built on memory refuses to look forward.",
    category: "Essay",
    date: "MAY 2026",
    cover: "/looks/look-26.jpg",
    body: [
      "We started THE FAMILIES because we missed people who are still alive. The clothes are an excuse to keep their gestures — the way a father rolled a sleeve, the way a sister wore a coat that was never hers.",
      "Fashion is obsessed with the new. We are obsessed with the kept. Every garment in the house begins as something somebody already loved: a curtain, a uniform, a christening blanket, a flag.",
      "To inherit is not to receive. It is to be chosen by something you did not ask for. We make garments that choose their wearer the same way.",
    ],
  },
  {
    slug: "studio-notes-chapter-one",
    title: "Studio Notes — Chapter One",
    dek: "Inside the making of Household Saints.",
    category: "Process",
    date: "APRIL 2026",
    cover: "/looks/look-12.jpg",
    body: [
      "The first chapter was shot in a single room over three days, on the same grey backdrop our reference photographer used for passport portraits. We wanted the institutional flatness of a document, and the intimacy of a family snapshot, at once.",
      "No faces. The decision came early and stayed. A masked figure belongs to everyone; an unmasked one belongs only to themselves.",
      "Every look was built on the body, never on a pattern. We salvaged, pinned, cut and rebuilt in front of the lens.",
    ],
  },
  {
    slug: "the-grey-backdrop",
    title: "The Grey Backdrop",
    dek: "A note on why we never leave the studio.",
    category: "Photography",
    date: "MARCH 2026",
    cover: "/looks/look-37.jpg",
    body: [
      "There is a specific grey — the colour of a school gymnasium, of a waiting room, of a photograph that has lost its colour to time. We print everything against it.",
      "The backdrop is not neutral. It is a memory of being measured: for a uniform, for a coffin, for a class photo. We keep it because the clothes are about exactly that.",
    ],
  },
];

export const looksWithFallback = looks;
