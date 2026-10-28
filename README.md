# Aurum Drive | CP-6

Site de uma locadora fictícia de carros importados, desenvolvido para o trabalho de Web Development da turma 1ESPI, professor Wellington Cidade Silva.

**Aluno:** Eduardo Bechara Medeiros Craveiro

**RM:** 571081

**Repositório:** https://github.com/FrontEnd-FIAP/CP-6

## Executar

Requer Node.js 22.12 ou superior, ou 24 LTS, e npm.

```sh
npm ci
npm run dev
```

Abra a URL exibida pelo Vite, normalmente http://127.0.0.1:5173/. No PowerShell, se a política bloquear o comando `npm`, utilize `npm.cmd` nos comandos acima.

```sh
npm test          # testes de cálculo, datas e filtros
npm run build    # produção em dist/
npm run preview  # conferir a versão de produção local
```

## Funcionalidades

- Home com apresentação, destaques da frota, etapas da simulação e dúvidas frequentes.
- Página Carros com 6 modelos e 4 categorias.
- Busca por marca ou modelo sem distinção de maiúsculas ou acentos.
- Filtro de categoria, ordenação por diária, limpeza de filtros e estado sem resultados.
- Seleção de veículo pelo card, link de destaque ou formulário.
- Simulação com retirada, devolução, quantidade de diárias e valor total em reais.
- Estado dos filtros, veículo e datas na URL: é possível recarregar ou compartilhar a mesma configuração.
- Validação de datas ausentes, inexistentes, passadas e devolução igual ou anterior à retirada.
- Layout responsivo, menu móvel, navegação por teclado, foco visível, mensagens acessíveis e movimento reduzido.
- Imagens locais otimizadas em WebP; a aplicação não depende de serviços de imagens durante o uso.

## Tecnologias e organização

React, Vite, Tailwind CSS e React Router. As rotas são configuradas em `src/App.jsx`.

```text
src/
  components/   Navbar.jsx, Footer.jsx, Card.jsx, Simulator.jsx, Brand.jsx, Icon.jsx
  pages/        Home.jsx, Carros.jsx
  data/         cars.js
  utils/        catalog.js, rental.js, format.js
  App.jsx
  main.jsx
  index.css
public/
  images/       fotografias locais
  favicon.svg
.vscode/        configuração e extensões recomendadas
.github/workflows/verify.yml
integrante.txt
tests/rental.test.js
docs/
```

## Como o cálculo funciona

Total estimado = diária do veículo × dias entre retirada e devolução. Retirada em 10/11 e devolução em 12/11 correspondem a 2 diárias. O cálculo usa datas civis em UTC, sem depender da duração local de um dia durante a mudança de horário de verão. A data mínima de retirada usa o dia local do visitante.

Ao alterar veículo ou datas, o orçamento anterior deixa de ser exibido até um novo cálculo. Limpar filtros mantém a seleção e as datas.

## Limites do projeto

Esta é uma simulação acadêmica: veículos, características e valores são dados de demonstração. Não realiza reservas, pagamentos ou consultas de disponibilidade. Não inclui backend, autenticação, seguros, taxas ou caução.

O servidor Vite atende diretamente `/carros`. Uma futura hospedagem estática com BrowserRouter precisará redirecionar as rotas para `index.html`; nenhum deploy foi solicitado nesta entrega.

## Versionamento

Trabalho individual. Todas as tarefas são atribuídas a Eduardo. Proposta em `docs/superpowers/specs/` e plano em `docs/plans/`.

| Tarefa                           | Branch                    | Destino | Commits mínimos |
| -------------------------------- | ------------------------- | ------- | --------------- |
| Configuração e estrutura         | codex/configuracao        | dev     | 3               |
| Páginas e componentes            | codex/paginas-componentes | dev     | 3               |
| Filtros, simulador e verificação | codex/filtros-simulador   | dev     | 3               |

A revisão individual deve ser registrada nos PRs, sem simular aprovação por outro participante. Merges sem squash preservam os commits. A integração final de `dev` deve chegar a `main`.

## Imagens e referências

Fotografias obtidas no Unsplash sob a [Unsplash License](https://unsplash.com/license), com páginas de origem, autores e URLs registrados em `docs/imagens.json`. As fotos são referenciais, sem vínculo comercial ou afiliação com as marcas.

- Porsche: [Luke Thornton](https://unsplash.com/photos/7mqiyL9cWbY)
- BMW: [Jonas Rhyner](https://unsplash.com/photos/JgV1UuzGwqs)
- Mercedes-Benz: [Artur Kulagin](https://unsplash.com/photos/NjQmytqwDGs)
- Audi: [Viktor Stefanoski](https://unsplash.com/photos/duNq-OdvuGA)
- Range Rover: [Swansway Motor Group](https://unsplash.com/photos/WNts6J4kxXg)
- MINI: [Chandler Cruttenden](https://unsplash.com/photos/Bs1vILbRgqI)

Documentação: [React](https://react.dev/), [Vite](https://vite.dev/guide/), [Tailwind com Vite](https://tailwindcss.com/docs/installation/using-vite), [React Router](https://reactrouter.com/).

## Entrega

O arquivo `integrante.txt`, na raiz, contém nome, RM e endereço do repositório para o envio ao Teams. Confira o relatório em `docs/validacao.md` e o histórico do GitHub para o estado da integração remota.
