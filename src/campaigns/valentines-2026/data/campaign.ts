import type { Campaign } from "@shared/types/campaign";

export const campaign: Campaign = {
  id: "valentines-2026",
  name: "Casa Nacoli - Dia dos Namorados 2026",
  season: "Dia dos Namorados",
  year: 2026,
  concept: "Presentes feitos com carinho e afeto",
  whatsappNumber: import.meta.env.PUBLIC_WHATSAPP_NUMBER || "5551999795488",
  instagramUrl: "https://www.instagram.com/casa_nacoli",
  seo: {
    title:
      "💝 Casa Nacoli | Cesta personalizada Dia dos Namorados 2026",
    description:
      "Monte uma cesta personalizada de Dia dos Namorados com vinho, doces, mimos e presentes artesanais da Casa Nacoli. Pedido direto pelo WhatsApp.",
    keywords: [
      "presentes personalizados Dia dos Namorados",
      "grafica personalizada",
      "presentes criativos para casal",
      "caneca personalizada",
      "cesta personalizada Dia dos Namorados",
      "cesta romantica personalizada",
    ],
    image: "/assets/casa-nacoli-og.svg",
  },
};
