# Plano de implementação

Proposta aprovada por Eduardo em 27/10/2026. Plano registrado diretamente, conforme alternativa aprovada à habilidade writing-plans indisponível.

## Tarefa 1 - configuração e estrutura
Responsável: Eduardo Bechara Medeiros Craveiro, RM 571081.
Branch: codex/configuracao. Destino: dev.
1. Configurar React e Vite, HTML e entrada da aplicação.
2. Integrar Tailwind e instalar dependências com lockfile.
3. Configurar VS Code, rotas, documentação e verificação automatizada de build.
Validação: npm run build.

## Tarefa 2 - páginas e componentes
Responsável: Eduardo Bechara Medeiros Craveiro, RM 571081.
Branch: codex/paginas-componentes. Destino: dev.
1. Adicionar dados demonstrativos e imagens locais com fontes.
2. Implementar Navbar, Footer e Card, Home e catálogo.
3. Finalizar o layout responsivo e estados de navegação e foco.
Validação: build, prévia de Home e Carros, revisão responsiva.

## Tarefa 3 - filtros, simulador e verificação
Responsável: Eduardo Bechara Medeiros Craveiro, RM 571081.
Branch: codex/filtros-simulador. Destino: dev.
1. Implementar filtros com estado na URL e seleção de veículo.
2. Implementar cálculo por datas civis, validação e testes relevantes.
3. Verificar o fluxo em navegador, revisar acessibilidade e documentar resultados.
Validação: npm test, npm run build e fluxo Home → Carros → filtros → simulação.

Cada passo acima corresponde a pelo menos um commit semântico com mudança real. Revisar e integrar cada PR em dev sem squash; integrar dev em main ao final. Não solicitar revisão a terceiros nem simular aprovação por outro integrante.
