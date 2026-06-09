export const BRAND = {
  name: "THE FAMILIES",
  tagline: "Un guardarropa hecho de memoria.",
  est: "EST. — UN ARCHIVO FAMILIAR",
};

// Todas las fotografías optimizadas viven en /public/looks como look-01 … look-45
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
    title: "Parka Sudario de Piel",
    category: "Abrigos",
    price: "$1.680.000",
    edition: "Edición de 12",
    image: "/looks/look-01.jpg",
    gallery: ["/looks/look-01.jpg", "/looks/look-21.jpg", "/looks/look-15.jpg"],
    materials: ["Borrego sintético armado a mano", "Forro de satín con apliques de cruz", "Herraje: cremallera de níquel oxidado"],
    story:
      "Construida alrededor de una sola fotografía de la infancia: un abrigo demasiado grande para el cuerpo que lo habitaba. La parka conserva esa memoria de herencia: ropa heredada, en la que uno crece en vez de comprarla.",
    philosophy:
      "No diseñamos prendas. Armamos reliquias. Cada panel fue rescatado, lavado y reconstruido a mano para que ninguna pieza cargue la misma historia.",
  },
  {
    slug: "fam-23-varsity",
    title: "Varsity Fam 23",
    category: "Tejidos",
    price: "$820.000",
    edition: "Edición de 24",
    image: "/looks/look-44.jpg",
    gallery: ["/looks/look-44.jpg", "/looks/look-04.jpg", "/looks/look-19.jpg"],
    materials: ["Lana pata de gallo recuperada", "Letras varsity en fieltro", "Estampado flock de leopardo"],
    story:
      "El número veintitrés no pertenecía a ningún equipo. Estaba cosido en la chaqueta de un primo y nunca se explicó. Lo guardamos como una pregunta.",
    philosophy:
      "Ropa deportiva despojada de competencia y devuelta a la calle de la que vino: un uniforme para una familia que nunca jugó el mismo juego dos veces.",
  },
  {
    slug: "tartan-salvage-denim",
    title: "Denim Tartán Recuperado",
    category: "Pantalones",
    price: "$740.000",
    edition: "Edición de 30",
    image: "/looks/look-23.jpg",
    gallery: ["/looks/look-23.jpg", "/looks/look-14.jpg", "/looks/look-09.jpg"],
    materials: ["Denim índigo vintage", "Parches de tartán y cuadros", "Costura de cadeneta"],
    story:
      "Cortado ancho, y vuelto a cortar. Cada pierna carga una década distinta de denim: el lavado que recuerdas de un hermano mayor, los cuadros de la silla de un abuelo.",
    philosophy:
      "El volumen como protección. El cuerpo desaparece para que la historia hable.",
  },
  {
    slug: "leopard-trapper",
    title: "Máscara Trapper Leopardo",
    category: "Accesorios",
    price: "$450.000",
    edition: "Edición de 18",
    image: "/looks/look-34.jpg",
    gallery: ["/looks/look-34.jpg", "/looks/look-29.jpg", "/looks/look-38.jpg"],
    materials: ["Piel sintética de leopardo", "Panel facial tratado con foil", "Botones vintage colocados a mano"],
    story:
      "Un rostro que se niega a ser un rostro. La máscara protege a quien la lleva de ser leído: identidad retenida, pertenencia implícita.",
    philosophy:
      "El anonimato es lo más íntimo que hacemos.",
  },
  {
    slug: "green-cross-balaclava",
    title: "Balaclava Cruz Verde",
    category: "Accesorios",
    price: "$320.000",
    edition: "Edición de 40",
    image: "/looks/look-21.jpg",
    gallery: ["/looks/look-21.jpg", "/looks/look-01.jpg", "/looks/look-11.jpg"],
    materials: ["Algodón acanalado", "Aplique de cruz esmeralda", "Velo con flecos"],
    story:
      "Devoción sin iglesia. La cruz aquí es decoración y herencia a la vez: un símbolo conservado mucho después de perder su significado.",
    philosophy:
      "Llevamos nuestras preguntas sobre la fe como una familia lleva sus silencios.",
  },
  {
    slug: "families-track-short",
    title: "Short Track Families",
    category: "Pantalones",
    price: "$530.000",
    edition: "Edición de 30",
    image: "/looks/look-23.jpg",
    gallery: ["/looks/look-23.jpg", "/looks/look-08.jpg", "/looks/look-31.jpg"],
    materials: ["Denim lavado a la piedra", "Franja de tartán tipo racing", "Logo de cadeneta carmesí"],
    story:
      "El short largo: cortado a la pantorrilla, cargado de memoria. Usado sobre medias blancas como lo hacían los grandes.",
    philosophy:
      "La proporción es una forma de nostalgia. Hacemos la silueta de una foto que nadie tomó.",
  },
  {
    slug: "patchwork-cargo",
    title: "Cargo Patchwork",
    category: "Pantalones",
    price: "$790.000",
    edition: "Edición de 22",
    image: "/looks/look-09.jpg",
    gallery: ["/looks/look-09.jpg", "/looks/look-04.jpg", "/looks/look-14.jpg"],
    materials: ["Pata de gallo recuperada", "Paneles de leopardo en rodillas", "Herraje utilitario"],
    story:
      "Bolsillos que ya han sido vaciados mil veces. El cargo está hecho para vivirse hasta que se vuelve de alguien más.",
    philosophy:
      "La utilidad como sentimiento. La función cargada hasta volverse afecto.",
  },
  {
    slug: "studded-leather-harness",
    title: "Arnés de Cuero con Tachas",
    category: "Abrigos",
    price: "$990.000",
    edition: "Edición de 14",
    image: "/looks/look-15.jpg",
    gallery: ["/looks/look-15.jpg", "/looks/look-01.jpg", "/looks/look-21.jpg"],
    materials: ["Cuero curtido vegetal", "Ojales colocados a mano", "Fuelle de satín esmeralda"],
    story:
      "Armadura para lo blando. El arnés sostiene el cuerpo como un nombre sostiene a una persona: con fuerza, y sin preguntar.",
    philosophy:
      "Dureza al servicio de la ternura. Todo lo que protegemos es frágil.",
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
    title: "Santos del Hogar",
    season: "CAPÍTULO 01",
    cover: "/looks/look-04.jpg",
    intro:
      "El primer capítulo se lee como un álbum de fotos dejado bajo la lluvia: devoción, denim y las personas que nos dijeron que recordáramos.",
    looks: looks.slice(0, 16).map((l) => l.src),
  },
  {
    slug: "the-back-room",
    title: "El Cuarto de Atrás",
    season: "CAPÍTULO 02",
    cover: "/looks/look-29.jpg",
    intro:
      "Prendas fotografiadas como se recuerda a los parientes: de espaldas, a mitad de un gesto, negándose a la cámara.",
    looks: looks.slice(16, 32).map((l) => l.src),
  },
  {
    slug: "after-the-funeral",
    title: "Después del Funeral",
    season: "CAPÍTULO 03",
    cover: "/looks/look-40.jpg",
    intro:
      "Sastrería negra deshecha por la ternura. El capítulo que cierra el primer año.",
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
    title: "Sobre la Herencia",
    dek: "Por qué una marca construida sobre la memoria se niega a mirar hacia adelante.",
    category: "Ensayo",
    date: "MAYO 2026",
    cover: "/looks/look-26.jpg",
    body: [
      "Empezamos THE FAMILIES porque extrañábamos a personas que siguen vivas. La ropa es una excusa para conservar sus gestos: la forma en que un padre se subía la manga, la forma en que una hermana llevaba un abrigo que nunca fue suyo.",
      "La moda está obsesionada con lo nuevo. Nosotros estamos obsesionados con lo conservado. Cada prenda de la casa empieza como algo que alguien ya amó: una cortina, un uniforme, una manta de bautizo, una bandera.",
      "Heredar no es recibir. Es ser elegido por algo que no pediste. Hacemos prendas que eligen a quien las lleva de la misma manera.",
    ],
  },
  {
    slug: "studio-notes-chapter-one",
    title: "Notas de Estudio — Capítulo Uno",
    dek: "Por dentro de la creación de Santos del Hogar.",
    category: "Proceso",
    date: "ABRIL 2026",
    cover: "/looks/look-12.jpg",
    body: [
      "El primer capítulo se fotografió en una sola habitación durante tres días, sobre el mismo fondo gris que nuestro fotógrafo de referencia usaba para retratos de pasaporte. Queríamos la planitud institucional de un documento y la intimidad de una foto familiar, a la vez.",
      "Sin rostros. La decisión llegó temprano y se quedó. Una figura enmascarada pertenece a todos; una sin máscara pertenece solo a sí misma.",
      "Cada look se construyó sobre el cuerpo, nunca sobre un patrón. Rescatamos, prendimos con alfileres, cortamos y reconstruimos frente al lente.",
    ],
  },
  {
    slug: "the-grey-backdrop",
    title: "El Fondo Gris",
    dek: "Una nota sobre por qué nunca salimos del estudio.",
    category: "Fotografía",
    date: "MARZO 2026",
    cover: "/looks/look-37.jpg",
    body: [
      "Hay un gris específico: el color de un gimnasio de colegio, de una sala de espera, de una fotografía que perdió su color con el tiempo. Imprimimos todo contra él.",
      "El fondo no es neutral. Es un recuerdo de ser medido: para un uniforme, para un ataúd, para la foto del curso. Lo conservamos porque la ropa trata exactamente de eso.",
    ],
  },
];
