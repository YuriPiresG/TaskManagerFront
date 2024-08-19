# Waterfy Frontend

Este é um projeto [Next.js](https://nextjs.org/) inicializado com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Estrutura do Projeto
```bash
📦app
 ┣ 📂components
 ┃ ┣ 📜ConfirmDelete.tsx
 ┃ ┣ 📜CreateUpdateBtn.tsx
 ┃ ┣ 📜CreateUpdateForm.tsx
 ┃ ┣ 📜DeleteTaskButton.tsx
 ┃ ┗ 📜TaskCard.tsx
 ┣ 📂enums
 ┃ ┗ 📜TaskStatus.ts
 ┣ 📂tasks
 ┃ ┣ 📂[id]
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┗ 📜page.tsx
 ┣ 📂types
 ┃ ┗ 📜Task.ts
 ┣ 📜favicon.ico
 ┣ 📜globals.css
 ┣ 📜layout.tsx
 ┗ 📜page.tsx
```

### Dependências de Desenvolvimento

- [`@types/node`](command:_github.copilot.openSymbolFromReferences?%5B%22%40types%2Fnode%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5CYuri%5C%5CDesktop%5C%5CCode%5C%5Cwaterfy-front%5C%5Cpackage.json%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2FYuri%2FDesktop%2FCode%2Fwaterfy-front%2Fpackage.json%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FYuri%2FDesktop%2FCode%2Fwaterfy-front%2Fpackage.json%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A18%2C%22character%22%3A5%7D%7D%5D%5D "Go to definition"): ^20
- [`@types/react`](command:_github.copilot.openSymbolFromReferences?%5B%22%40types%2Freact%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5CYuri%5C%5CDesktop%5C%5CCode%5C%5Cwaterfy-front%5C%5Cpackage.json%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2FYuri%2FDesktop%2FCode%2Fwaterfy-front%2Fpackage.json%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FYuri%2FDesktop%2FCode%2Fwaterfy-front%2Fpackage.json%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A19%2C%22character%22%3A5%7D%7D%5D%5D "Go to definition"): ^18
- [`@types/react-dom`](command:_github.copilot.openSymbolFromReferences?%5B%22%40types%2Freact-dom%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5CYuri%5C%5CDesktop%5C%5CCode%5C%5Cwaterfy-front%5C%5Cpackage.json%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2FYuri%2FDesktop%2FCode%2Fwaterfy-front%2Fpackage.json%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FYuri%2FDesktop%2FCode%2Fwaterfy-front%2Fpackage.json%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A20%2C%22character%22%3A5%7D%7D%5D%5D "Go to definition"): ^18
- [`eslint`](command:_github.copilot.openSymbolFromReferences?%5B%22eslint%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5CYuri%5C%5CDesktop%5C%5CCode%5C%5Cwaterfy-front%5C%5Cpackage.json%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2FYuri%2FDesktop%2FCode%2Fwaterfy-front%2Fpackage.json%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FYuri%2FDesktop%2FCode%2Fwaterfy-front%2Fpackage.json%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A21%2C%22character%22%3A5%7D%7D%5D%5D "Go to definition"): ^8
- [`eslint-config-next`](command:_github.copilot.openSymbolFromReferences?%5B%22eslint-config-next%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5CYuri%5C%5CDesktop%5C%5CCode%5C%5Cwaterfy-front%5C%5Cpackage.json%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2FYuri%2FDesktop%2FCode%2Fwaterfy-front%2Fpackage.json%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FYuri%2FDesktop%2FCode%2Fwaterfy-front%2Fpackage.json%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A22%2C%22character%22%3A5%7D%7D%5D%5D "Go to definition"): 14.2.5
- [`postcss`](command:_github.copilot.openSymbolFromReferences?%5B%22postcss%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5CYuri%5C%5CDesktop%5C%5CCode%5C%5Cwaterfy-front%5C%5Cpackage.json%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2FYuri%2FDesktop%2FCode%2Fwaterfy-front%2Fpackage.json%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FYuri%2FDesktop%2FCode%2Fwaterfy-front%2Fpackage.json%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A23%2C%22character%22%3A5%7D%7D%5D%5D "Go to definition"): ^8
- [`tailwindcss`](command:_github.copilot.openSymbolFromReferences?%5B%22tailwindcss%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5CYuri%5C%5CDesktop%5C%5CCode%5C%5Cwaterfy-front%5C%5Cpackage.json%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2FYuri%2FDesktop%2FCode%2Fwaterfy-front%2Fpackage.json%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FYuri%2FDesktop%2FCode%2Fwaterfy-front%2Fpackage.json%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A24%2C%22character%22%3A5%7D%7D%2C%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5CYuri%5C%5CDesktop%5C%5CCode%5C%5Cwaterfy-front%5C%5Ctailwind.config.ts%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2FYuri%2FDesktop%2FCode%2Fwaterfy-front%2Ftailwind.config.ts%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FYuri%2FDesktop%2FCode%2Fwaterfy-front%2Ftailwind.config.ts%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A0%2C%22character%22%3A29%7D%7D%5D%5D "Go to definition"): ^3.4.1
- [`typescript`](command:_github.copilot.openSymbolFromReferences?%5B%22typescript%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5CYuri%5C%5CDesktop%5C%5CCode%5C%5Cwaterfy-front%5C%5C.gitignore%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2FYuri%2FDesktop%2FCode%2Fwaterfy-front%2F.gitignore%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FYuri%2FDesktop%2FCode%2Fwaterfy-front%2F.gitignore%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A33%2C%22character%22%3A2%7D%7D%2C%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5CYuri%5C%5CDesktop%5C%5CCode%5C%5Cwaterfy-front%5C%5Cpackage.json%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2FYuri%2FDesktop%2FCode%2Fwaterfy-front%2Fpackage.json%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FYuri%2FDesktop%2FCode%2Fwaterfy-front%2Fpackage.json%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A25%2C%22character%22%3A5%7D%7D%5D%5D "Go to definition"): ^5

## Clonando o Projeto

```bash
git clone https://github.com/YuriPiresG/waterfy-front.git
```

## Inicializando o Projeto
Certifique-se de estar na pasta do projeto e execute o seguinte comando para instalar as dependências:
```bash
npm install
```

Em seguida, você pode executar:

```bash
npm run dev
```

Abra http://localhost:3000 no seu navegador para ver o resultado.
