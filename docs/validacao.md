# Validação do projeto

Data da verificação: 27/10/2026. Revisão técnica assistida no trabalho individual de Eduardo Bechara Medeiros Craveiro, RM 571081. Não representa aprovação do professor ou revisão por outro integrante.

## Resultados locais

- `npm test`: 11 testes aprovados, 0 falhas.
- `npm run build`: build de produção concluído.
- Busca por BMW: 1 veículo encontrado e estado `q=BMW` na URL.
- Busca BMW combinada com SUV: estado vazio com 0 resultados.
- Limpar filtros: 6 veículos novamente.
- Ordenar por menor diária: MINI, Audi, Mercedes-Benz, BMW, Range Rover, Porsche.
- Seleção de Porsche, retirada em 10/11/2026 e devolução em 12/11/2026: 2 diárias, total de R$ 3.780, conferido no navegador.
- Formulário sem datas: mensagens junto aos campos e foco na retirada.
- Link do destaque da Home abre o catálogo com Porsche selecionado.
- Seleção de MINI em celular move o foco à retirada no simulador.
- Menu móvel abre, navega e fecha por Escape com retorno do foco ao botão.
- Home sem rolagem horizontal nas larguras de 320, 375, 768 e 1440 px.
- Catálogo sem rolagem horizontal na largura de 375 px.
- Imagens locais carregadas e nenhum erro/aviso de aplicação no console durante o teste do fluxo.

Os testes automatizados cobrem datas ausentes, passadas, inexistentes, devolução igual ou anterior à retirada, ano bissexto, virada do ano e mudança de horário de verão, além de busca, filtros e ordenação sem alterar o conjunto original.

O preenchimento automatizado do campo nativo de data precisou ser confirmado com o teclado do navegador; os valores e a URL foram conferidos antes do cálculo. O uso normal dos controles nativos foi preservado.

## Revisão de interface

Referência: [Web Interface Guidelines](https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md), consultada em 27/10/2026. Também aplicada a habilidade React Best Practices.

Correções incorporadas: contraste de textos secundários, sequência de títulos do catálogo, foco visível no destino do link de salto e retorno de foco ao fechar o menu por Escape.

Resultado final da revisão nos arquivos de interface:

```text
src/App.jsx:1 - ✓ pass
src/components/Navbar.jsx:1 - ✓ pass
src/components/Footer.jsx:1 - ✓ pass
src/components/Card.jsx:1 - ✓ pass
src/components/Simulator.jsx:1 - ✓ pass
src/pages/Home.jsx:1 - ✓ pass
src/pages/Carros.jsx:1 - ✓ pass
src/index.css:1 - ✓ pass
```

Verificados: semântica, rótulos de formulário, aria-live, dimensões e textos alternativos de imagens, foco, estados vazios, preferência por movimento reduzido, moeda/data via Intl e parâmetros de URL para filtros e simulação. Isto é uma revisão direcionada; não equivale a certificação de acessibilidade.

## Situação do GitHub

O repositório FrontEnd-FIAP/CP-6 está público na organização informada. A conexão permitiu leitura, mas as tentativas de escrita retornaram 403, `Resource not accessible by integration`. O Git local também encontrou uma restrição de acesso ao gerenciador de credenciais do Windows. Nenhuma credencial foi salva nos arquivos do projeto.

Os commits das tarefas existem localmente. Enquanto o acesso não for liberado, a criação de PRs e a publicação da versão final em main no GitHub permanecem pendentes. A entrega não deve ser considerada integralmente concluída antes dessa etapa.
