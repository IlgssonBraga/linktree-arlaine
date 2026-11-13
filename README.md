# Arlaine Braga · Notion Mindset — link-in-bio

Página estática (HTML + CSS + um pouco de JS) no estilo Linktree, com a identidade do canal Notion Mindset.

## Estrutura

```
index.html      # conteúdo e links
styles.css      # visual (paleta no topo, em :root)
script.js       # copiar e-mail, luz no hover, fallback do avatar, ano do rodapé
assets/avatar.jpg     # foto (384×384, recortada no rosto)
assets/og.jpg         # prévia ao compartilhar o link (1200×630)
assets/favicon-*.png  # ícones da aba / tela inicial
```

## Como editar

- **Links e textos**: em `index.html`.
- **Cores**: no bloco `:root` no topo de `styles.css` (`--bg`, `--card`, `--purple` etc.).
- **Foto**: substitua `assets/avatar.jpg` por uma imagem quadrada já recortada no rosto (384×384 é suficiente).

## Rodar localmente

Abra `index.html` no navegador.

## Publicar (GitHub Pages)

1. Suba o repositório no GitHub.
2. Em **Settings → Pages**, escolha a branch `main` e a pasta `/ (root)`.
3. A página fica disponível em `https://<usuario>.github.io/<repositorio>/`.

## Domínio próprio (notionmindset.com.br)

O arquivo `CNAME` na raiz informa ao GitHub Pages o domínio a ser servido.

Registros DNS (Registro.br → DNS → editar zona). **Não altere os registros MX/TXT do Google Workspace.**

| Tipo  | Nome | Valor                  |
|-------|------|------------------------|
| A     | @    | 185.199.108.153        |
| A     | @    | 185.199.109.153        |
| A     | @    | 185.199.110.153        |
| A     | @    | 185.199.111.153        |
| AAAA  | @    | 2606:50c0:8000::153    |
| AAAA  | @    | 2606:50c0:8001::153    |
| AAAA  | @    | 2606:50c0:8002::153    |
| AAAA  | @    | 2606:50c0:8003::153    |
| CNAME | www  | ilgssonbraga.github.io |

Depois que o DNS propagar, marque **Enforce HTTPS** em Settings → Pages.
