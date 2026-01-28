# 🎬 Dev-Flix

![GitHub repo size](https://img.shields.io/github/repo-size/Ricardocrvg19/dev-flix?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/Ricardocrvg19/dev-flix?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/Ricardocrvg19/dev-flix?style=for-the-badge)

O **Dev-Flix** é uma plataforma de streaming moderna, construída para explorar o melhor do ecossistema React. Consumindo a API do **The Movie Database (TMDB)**, o projeto entrega uma experiência fluida de navegação entre filmes, séries, trailers e detalhes técnicos com um design inspirado na Netflix.

---

## 🚀 Funcionalidades

- **Exploração Dinâmica**: Listagem de filmes e séries populares, top rated e no ar.
- **Detalhes Profundos**: Página de detalhes com sinopse, gêneros, número de temporadas e elenco principal.
- **Player de Trailer**: Integração com YouTube para assistir trailers diretamente via Modal.
- **Interface Fluida**: Transições suaves entre conteúdos e background dinâmico com efeito de fade.
- **Responsividade**: Layout adaptado para diferentes tamanhos de tela.

---

## 🛠️ Tech Stack

O projeto utiliza o que há de mais atual no desenvolvimento front-end:

* **React.js** (Vite)
* **Styled Components** (CSS-in-JS)
* **Axios** (Consumo de API)
* **React Hooks** (`useState`, `useEffect`, `useCallback`)
* **React Router Dom** (Navegação)
* **FontAwesome** (Ícones)

---

## 📸 Screenshots

> **Dica:** Adicione aqui imagens ou GIFs do seu projeto rodando!

<div align="center">
  <img src="./src/assets/preview-1.png" width="400px" alt="Preview Home">
  <img src="./src/assets/preview-2.png" width="400px" alt="Preview Series">
</div>

---

## 🔧 Instalação e Execução

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/Ricardocrvg19/dev-flix.git](https://github.com/Ricardocrvg19/dev-flix.git)
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure sua API Key:**
    No arquivo `src/services/api.js`, insira sua chave do TMDB:
    ```javascript
    const api = axios.create({
      baseURL: '[https://api.themoviedb.org/3/](https://api.themoviedb.org/3/)',
      params: {
        api_key: 'SUA_CHAVE_AQUI',
        language: 'pt-BR'
      }
    });
    ```

4.  **Rode o projeto:**
    ```bash
    npm run dev
    ```

---

## 🧠 Aprendizados

Durante o desenvolvimento, foram aplicados conceitos avançados como:
- **Otimização de Performance**: Uso de `useCallback` para evitar re-renders desnecessários.
- **Clean Code**: Separação de serviços (`getAllData.js`) da lógica de componentes.
- **UX/UI**: Criação de transições suaves e tratamento de erros (fallback) para trailers não encontrados.

---

## 🤝 Contribuição

Sinta-se à vontade para abrir uma **Issue** ou enviar um **Pull Request**. Toda ajuda é bem-vinda!

Projeto em ANDAMENTO

---

<div align="center">
  <sub>Feito com ❤️ por <a href="https://github.com/Ricardocrvg19">Ricardo</a></sub>
</div>
