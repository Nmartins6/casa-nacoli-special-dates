import type { Product } from "@shared/types/campaign";

const productImage = "/assets/product-placeholder.svg";

export const products: Product[] = [
  {
    id: "caneca-personalizada-individual",
    name: "Caneca personalizada individual",
    category: "Canecas",
    description:
      "Uma caneca com foto, frase ou arte pensada para lembrar o seu amor todos os dias, no café da manhã ou naquele chá no fim da noite.",
    price: "sob consulta",
    image: productImage,
    imageAlt: "Caneca personalizada artesanal da Casa Nacoli",
    options: ["Foto", "Frase", "Arte personalizada"],
    featured: true,
  },
  {
    id: "caneca-personalizada-casal",
    name: "Caneca personalizada casal",
    category: "Canecas",
    description:
      "Par de canecas para combinar histórias, datas, apelidos e pequenos detalhes que só o casal entende.",
    price: "sob consulta",
    image: productImage,
    imageAlt: "Par de canecas personalizadas para casal",
    options: ["Par romântico", "Arte espelhada", "Nomes e data"],
    featured: true,
  },
  {
    id: "caneca-branca",
    name: "Caneca branca",
    category: "Canecas",
    description:
      "Clássica, delicada e versátil. Ideal para uma arte limpa, uma declaração curta ou uma lembrança cheia de significado.",
    price: "sob consulta",
    image: productImage,
    imageAlt: "Caneca branca personalizada",
    options: ["Arte simples", "Foto", "Frase"],
  },
  {
    id: "caneca-magica",
    name: "Caneca mágica",
    category: "Canecas",
    description:
      "A surpresa aparece com o calor da bebida. Uma escolha charmosa para revelar foto, frase ou pedido especial.",
    price: "sob consulta",
    image: productImage,
    imageAlt: "Caneca mágica personalizada",
    options: ["Foto surpresa", "Mensagem surpresa"],
    featured: true,
  },
  {
    id: "caneca-colorida",
    name: "Caneca com alça e interior colorido",
    category: "Canecas",
    description:
      "Um toque de cor para deixar o presente mais alegre, combinando a arte com o estilo de quem vai receber.",
    price: "sob consulta",
    image: productImage,
    imageAlt: "Caneca com alça e interior colorido",
    options: ["Vermelha", "Azul", "Amarela", "Preta"],
  },
  {
    id: "caneca-coracao",
    name: "Caneca com alça de coração",
    category: "Canecas",
    description:
      "Uma caneca romântica na medida, com alça em formato de coração e personalização feita sob encomenda.",
    price: "sob consulta",
    image: productImage,
    imageAlt: "Caneca personalizada com alça de coração",
    options: ["Foto", "Nomes", "Frase curta"],
  },
  {
    id: "azulejo-15x15",
    name: "Azulejo personalizado 15x15 com suporte",
    category: "Decoração",
    description:
      "Uma lembrança para ficar à vista: foto, arte ou frase em azulejo 15x15 com suporte para decorar com afeto.",
    price: "sob consulta",
    image: productImage,
    imageAlt: "Azulejo personalizado 15x15 com suporte",
    options: ["Foto", "Colagem", "Mensagem"],
    featured: true,
  },
  {
    id: "ima-mdf-5x5",
    name: "Imã de geladeira em MDF 5cm x 5cm",
    category: "Lembranças",
    description:
      "Pequeno no tamanho, grande na memória. Perfeito para eternizar uma foto, uma data ou uma frase carinhosa.",
    price: "sob consulta",
    image: productImage,
    imageAlt: "Imã de geladeira em MDF personalizado",
    options: ["Foto", "Logo", "Frase"],
  },
  {
    id: "placa-mdf-sublimada",
    name: "Placa MDF sublimada",
    category: "Decoração",
    description:
      "Uma placa personalizada para transformar declaração em peça decorativa, com acabamento artesanal e presença bonita.",
    price: "sob consulta",
    image: productImage,
    imageAlt: "Placa MDF sublimada personalizada",
    options: ["Foto", "Mensagem", "Arte decorativa"],
  },
  {
    id: "quebra-cabeca-personalizado",
    name: "Quebra-cabeça personalizado",
    category: "Presentes criativos",
    description:
      "Para montar juntinhos: uma foto especial vira um presente interativo, divertido e cheio de significado.",
    price: "sob consulta",
    image: productImage,
    imageAlt: "Quebra-cabeça personalizado com foto",
    options: ["Foto do casal", "Mensagem", "Arte surpresa"],
  },
  {
    id: "vinho-rotulo-personalizado",
    name: "Vinho com rótulo personalizado",
    category: "Cesta personalizada",
    description:
      "Um brinde com a cara do casal. O rótulo personalizado deixa o vinho pronto para virar momento especial.",
    price: "sob consulta",
    image: productImage,
    imageAlt: "Vinho com rótulo personalizado",
    options: ["Rótulo romântico", "Nomes e data", "Mensagem curta"],
    featured: true,
  },
  {
    id: "chaveiro-mdf-personalizado",
    name: "Chaveiro MDF personalizado",
    category: "Lembranças",
    description:
      "Uma lembrança prática para carregar por perto, personalizada com foto, nome, frase ou desenho.",
    price: "sob consulta",
    image: productImage,
    imageAlt: "Chaveiro MDF personalizado",
    options: ["Foto", "Nome", "Frase"],
  },
  {
    id: "impressoes-personalizadas",
    name: "Impressões personalizadas",
    category: "Papelaria afetiva",
    description:
      "Cartões, bilhetes, artes e detalhes impressos para completar o presente com aquela camada de cuidado.",
    price: "sob consulta",
    image: productImage,
    imageAlt: "Impressões personalizadas para presentes",
    options: ["Cartão", "Tag", "Arte impressa"],
  },
  {
    id: "camiseta-personalizada",
    name: "Camiseta personalizada",
    category: "Vestuário",
    description:
      "Uma camiseta feita para vestir memória: frase interna do casal, foto, ilustração ou arte especial.",
    price: "sob consulta",
    image: productImage,
    imageAlt: "Camiseta personalizada",
    options: ["P", "M", "G", "GG"],
  },
  {
    id: "ecobag-personalizada",
    name: "Ecobag personalizada",
    category: "Vestuário",
    description:
      "Útil, bonita e afetiva. Uma ecobag personalizada para acompanhar a rotina com um detalhe só de vocês.",
    price: "sob consulta",
    image: productImage,
    imageAlt: "Ecobag personalizada",
    options: ["Frase", "Ilustração", "Nome"],
  },
];
