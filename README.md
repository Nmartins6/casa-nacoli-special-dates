# Casa Nacoli Special Dates

Site sazonal de vendas para a Casa Nacoli, uma gráfica artesanal de presentes personalizados. A primeira campanha implementada é o Dia dos Namorados 2026, com catálogo de produtos, montagem de cesta personalizada, carrinho simples e envio do pedido pelo WhatsApp.

## Objetivo da campanha

Criar uma landing page mobile first para reduzir atrito no pedido e destacar presentes personalizados para casal: canecas, azulejos, rótulos, camisetas, ecobags, papelaria afetiva e cesta personalizada de Dia dos Namorados.

## Stack

- Astro
- TypeScript
- Tailwind CSS 4
- Dados por campanha
- Carrinho em `localStorage`
- SEO básico com Open Graph, Twitter Cards, sitemap, robots e JSON-LD
- Deploy preparado para Vercel

## Como rodar localmente

```bash
yarn install
yarn dev
```

Build de produção:

```bash
yarn build
```

Preview local do build:

```bash
yarn preview
```

Se o comando `yarn` não estiver disponível, ative o Corepack:

```bash
corepack enable
```

## Configurar WhatsApp

O número fica em:

```ts
src/campaigns/valentines-2026/data/campaign.ts
```

Altere `whatsappNumber` para o telefone real no formato internacional, sem espaços:

```ts
whatsappNumber: "5511999999999"
```

O link final é gerado por:

```ts
src/shared/utils/whatsapp.ts
```

## Adicionar novos produtos

Edite:

```ts
src/campaigns/valentines-2026/data/products.ts
```

Cada produto segue o tipo `Product`, com `id`, `name`, `category`, `description`, `price`, `image`, `imageAlt`, `options` e `featured`.

## Editar itens da cesta

Edite:

```ts
src/campaigns/valentines-2026/data/basketItems.ts
```

Os itens usam o tipo `BasketItem` e aparecem automaticamente na seção de cesta personalizada.

## Criar uma nova campanha

1. Crie uma nova pasta em `src/campaigns`, por exemplo `christmas-2026`.
2. Copie a estrutura de `valentines-2026`.
3. Atualize `data/campaign.ts`, `products.ts` e `basketItems.ts`.
4. Aponte `src/pages/index.astro` para a nova landing ou crie uma rota dedicada.
5. Ajuste textos, SEO e assets conforme a data sazonal.

## Deploy na Vercel

O projeto já inclui `vercel.json` com comandos padrão:

- Install: `yarn install`
- Build: `yarn build`
- Dev: `yarn dev`

Na Vercel, importe o repositório, confirme o framework Astro e publique. Antes do deploy final, configure o número real do WhatsApp.

## Próximos passos sugeridos

- Substituir placeholders por fotos reais dos produtos.
- Configurar domínio definitivo e atualizar `site` em `astro.config.mjs`.
- Adicionar valores quando a tabela de preços estiver fechada.
- Medir cliques no WhatsApp com analytics.
- Criar campanhas futuras para Natal, Páscoa, Dia das Mães, Dia dos Pais e datas corporativas.
