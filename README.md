# Arlaine Braga · Notion Mindset — link-in-bio

Página estática (HTML + CSS + um pouco de JS) no estilo Linktree, com a identidade do canal Notion Mindset.

## Estrutura

```
index.html      # conteúdo e links
styles.css      # visual (paleta no topo, em :root)
script.js       # copiar e-mail, luz no hover, fallback do avatar, ano do rodapé
assets/avatar.png
```

## Como editar

- **Links e textos**: em `index.html`.
- **Cores**: no bloco `:root` no topo de `styles.css` (`--bg`, `--card`, `--purple` etc.).
- **Foto**: substitua `assets/avatar.png`. Se a nova foto já for quadrada e centrada no rosto, remova o `transform: scale(...)` de `.avatar img` em `styles.css`.

## Rodar localmente

Abra `index.html` no navegador.

## Publicar (GitHub Pages)

1. Suba o repositório no GitHub.
2. Em **Settings → Pages**, escolha a branch `main` e a pasta `/ (root)`.
3. A página fica disponível em `https://<usuario>.github.io/<repositorio>/`.
