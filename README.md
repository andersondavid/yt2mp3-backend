## YouTube to MP3 App - Backend
YT2MP3 é um app para converter video do youtube para MP3.
Esse app é constituido por duas partes: Backend e Frontend conectados por **Socket.io**.

### Backend

O backend foi construido com [Express](https://expressjs.com/pt-br/), um framework NodeJS.

### *Status*
Atualmente o projeto funciona se estiver rodando em conjunto com o projeto frontend pois necessita de uma arvore DOM para criar o elemento <a> que será responsavel pelo download do arquivo .mp3.

### *Demostração*
O exemplo online do projeto pode ser acessado clicando aqui, o código frontend estar hospedado em ____ e o projeto backend em ___.

### *Rodar localmente*
Siga os passos a seguir para rodar o projeto localmente:

Clone o repositorio **backend**, navegue ate a raiz do projeto e execute a linha de comando para instalar os pacotes npm de acordo com o seu gerenciador de pacotes preferido.

- **npm**: `npm i`
- **pnpm**: `pnpm i`
- **yarn**: `yarn add`

Apos a instalação dos pacotes, execute o comando corresponde a seu gerenciador para executar o projeto.

- **npm**: `npm run dev`
- **pnpm**: `pnpm dev`
- **yarn**: `yarn dev`

Siga o mesmo passos agora para o projeto **frontend**.
O projeto backend estar configurado para executar na porta :3000 caso esteja livre. Se isso não for possivel ele irar iniciar em outra porta e será necessario que o arquivo ENV seja editado para atualizar essa alteração.
### *Tecnlogias*
O lado backend necessitou das sequintes tecnologias para ser completado em pleno funcionamento:

- [ExpressJS](https://expressjs.com/pt-br/)
- [Socket.IO](https://socket.io/)
- [FFMPEG](https://www.npmjs.com/package/@ffmpeg/ffmpeg)
- [TypeScript](https://www.typescriptlang.org/)

## ToDo
- [ ] Refatoração
- [ ] Reformular rotas
- [ ] Reformular controllers 