# Sistchê — homepage institucional inspirada em estúdios digitais

## Instalação sobre o projeto atual

1. No computador local, entre em `~/projetos/sistche/sistche-web`.
2. Extraia o ZIP **dentro da raiz do projeto**, preservando as pastas `src/app/` e `public/`.
3. Os arquivos substituídos são: `src/app/page.tsx`, `src/app/globals.css` e `src/app/layout.tsx`. O logo será salvo em `public/sistche-logo.png`.
4. Execute `npm run dev` e acesse `http://localhost:3000`.
5. Valide com `npm run build`, faça commit e push para publicar com o GitHub Actions já configurado.

## Antes de publicar definitivamente

**ATENÇÃO — contato:** `src/app/page.tsx` usa, provisoriamente, `mailto:contato@sistche.com.br`. Confirme que essa caixa de e-mail existe e pode receber mensagens, ou substitua pelo e-mail/WhatsApp oficial da empresa.

Os quadros de soluções são **ilustrações conceituais**, não projetos de clientes. Não substitua por cases reais sem autorização.

## Arquitetura

- Compatível com Next.js 16 App Router e Tailwind CSS 4.
- Exportação estática (`output: "export"`), sem dependência de servidor Node na VPS.
- Totalmente responsivo, links âncora e navegação mobile com `<details>`.
- Logo fornecido pela marca, preparado com fundo transparente a partir da imagem enviada.
- Sem dependências novas.
