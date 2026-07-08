# Página de download — X8 16-bit

Site estático pronto para publicar no GitHub Pages, com links de download para
Windows, Linux e Android.

## Estrutura

```
index.html          # a página em si (sem dependências externas)
assets/
  icon.png           # favicon / ícone no menu
  logo.png           # logo "X8" usada no topo
  screenshot-gameplay.png
  screenshot-save.png
  screenshot-debug.png
```

## Passo a passo para publicar

1. **Crie o repositório novo e público no GitHub** (ex: `M8-rework`).
2. Copie o conteúdo desta pasta (`index.html` + `assets/`) para a raiz do repositório e faça o commit/push.
3. Vá em **Settings → Pages** do repositório → em "Build and deployment" escolha
   **Deploy from a branch**, branch `main`, pasta `/ (root)` → Save.
   O GitHub te dá a URL do site (algo como `https://ian03.github.io/M8-rework/`).

## Publicando os builds (Windows / Linux / Android)

Os arquivos do jogo são grandes (o `.exe` sozinho passa de 450 MB), e o GitHub
**bloqueia arquivos maiores que 100 MB dentro do repositório normal**. Por isso,
os downloads devem ir em uma **Release** do repositório, não commitados direto:

1. No repositório, vá em **Releases → Create a new release**.
2. Crie uma tag, ex: `v1.0.0`.
3. Nomeie os arquivos que você vai anexar **exatamente assim** (o `index.html`
   já está apontando para esses nomes):
   - `MegaManX8-Windows.zip` → o `.exe` exportado (zipado)
   - `MegaManX8-Linux.zip` → o binário `.x86_64` exportado (zipado)
   - `MegaManX8-Android.apk` → o `.apk` exportado
4. Publique a release.

Como o `index.html` usa o link `.../releases/latest/download/<nome-do-arquivo>`,
ele **sempre aponta para a versão mais recente automaticamente** — em releases
futuras, basta manter os mesmos nomes de arquivo que os links continuam funcionando
sem precisar editar a página de novo.

⚠️ **Se o nome do usuário/repositório for diferente do placeholder**: os links
de download em `index.html` usam `Ian03/M8-rework`. Se você
criar o repositório com outro nome, procure e substitua essa parte nos 3
botões de download (seção `<!-- DOWNLOAD -->`... procure por `github.com/Ian03/`).

## Licença / créditos

O projeto original **X8 16-bit** é de **Alysson da Paz**
(https://github.com/AlyssonDaPaz/Mega-Man-X8-16-bit) e distribuído sob a
X8 16-bit License, que **proíbe monetização** de trabalhos derivados (sem
anúncios, doações, Patreon, Ko-fi etc. atrelados ao jogo) e exige que os
créditos originais sejam mantidos — o que já está refletido no rodapé da página.
