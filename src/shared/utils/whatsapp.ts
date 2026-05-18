import type { CartBasketItem, CartProductItem } from "@shared/types/campaign";

type OrderMessageInput = {
  customerName: string;
  notes: string;
  products: CartProductItem[];
  basketItems: CartBasketItem[];
};

const emptyLine = "";

export function formatOrderMessage({
  customerName,
  notes,
  products,
  basketItems,
}: OrderMessageInput) {
  const productLines = products.length
    ? products.map((item) => {
        const option = item.option ? ` (${item.option})` : "";
        return `- ${item.quantity}x ${item.name}${option}`;
      })
    : ["- Nenhum produto selecionado"];

  const getBasketNoteLabel = (id: string) => {
    if (["vinho", "cerveja", "bombons", "caneca-personalizada"].includes(id)) return "tipo";
    if (id === "nutella") return "tamanho";
    return "obs.";
  };

  const basketLines = basketItems.length
    ? basketItems.map((item) => {
        const noteLabel = getBasketNoteLabel(item.id);
        const note = item.note ? ` - ${noteLabel}: ${item.note}` : "";
        return `- ${item.quantity}x ${item.name}${note}`;
      })
    : ["- Nenhum item de cesta selecionado"];

  return [
    "Olá, Casa Nacoli! Quero fazer um pedido especial de Dia dos Namorados.",
    emptyLine,
    `Meu nome: ${customerName || "Não informado"}`,
    emptyLine,
    "Produtos escolhidos:",
    ...productLines,
    emptyLine,
    "Cesta personalizada:",
    ...basketLines,
    emptyLine,
    "Observações:",
    notes || "Sem observações por enquanto.",
    emptyLine,
    "Pode me passar os detalhes para finalizar?",
  ].join("\n");
}

export function createWhatsAppLink(phoneNumber: string, message: string) {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}
