# Proposta do projeto CP-6

Data: 27/10/2026
Aluno: Eduardo Bechara Medeiros Craveiro
RM: 571081
Repositório: https://github.com/FrontEnd-FIAP/CP-6

## Objetivo

Criar o site de locação de carros importados solicitado no trabalho de Web Development da turma 1ESPI. O visitante poderá conhecer a locadora, consultar a frota e simular uma locação. A entrega demonstrará a estrutura e o fluxo de versionamento exigidos.

## Abordagens consideradas

1. Catálogo com Home e Carros: atende à estrutura mínima e tem menos interação.
2. Catálogo com filtros e simulação: inclui pesquisa da frota, datas e estimativa de preço, sem serviços externos de reserva.

Eduardo escolheu a segunda abordagem. React, Vite e Tailwind CSS são exigências do enunciado. As demais escolhas abaixo são propostas do assistente para aprovação.

## Funcionalidades

- Home em `/`: apresentação da locadora, destaques da frota, benefícios, explicação da locação e acesso ao catálogo.
- Carros em `/carros`: pelo menos seis veículos importados com foto, marca, modelo, categoria, câmbio, capacidade e diária em reais.
- Pesquisa por marca ou modelo, filtro por categoria e ordenação por diária. Os controles funcionam em conjunto, com opção de limpar e mensagem quando não houver resultados.
- Cada card permite selecionar o veículo para simulação na página Carros. Destaques da Home levam ao catálogo com o veículo selecionado.
- Simulador com veículo, diária, retirada, devolução, quantidade de diárias e total. Não exige dados pessoais.
- Retirada a partir da data local atual; devolução obrigatoriamente posterior. O cálculo usa datas civis, sem desvios por fuso ou horário de verão. Exemplo: de 10/11 a 12/11 são duas diárias.
- Total = diária multiplicada pelo número de diárias, sem taxas ou descontos implícitos. Datas ausentes, passadas ou em ordem inválida não produzem orçamento válido.
- Valores ilustrativos e resultado identificado como simulação acadêmica. Não efetiva reserva, recebe pagamento ou alega disponibilidade comercial.
- Sem backend, cadastro, banco de dados ou pagamentos. Não inventar contatos reais ou avaliações de clientes.

## Visual proposto

Marca fictícia: Aurum Drive. Fundo claro, verde escuro, detalhes discretos em dourado, fotos automotivas e preços legíveis. Nome e estilo são propostas do assistente, não exigências do professor.

Layout responsivo para celular e desktop, navegação por teclado, foco visível, rótulos nos campos, contraste adequado e respeito a movimento reduzido. Imagens com descrição alternativa e dimensões definidas. Identificação do aluno na documentação e no arquivo de entrega.

## Estrutura e configuração

- `src/components/Navbar.jsx`, `Footer.jsx` e `Card.jsx`.
- `src/pages/Home.jsx` e `Carros.jsx`.
- Rotas com React Router em `src/App.jsx`.
- Dados da frota em módulo próprio, imagens e estilos organizados no projeto.
- Tailwind integrado ao Vite; remover arquivos de demonstração.
- `.vscode/` com configurações compartilhadas, sem alterar configurações pessoais globais.
- `integrante.txt` na raiz com RM, nome completo e URL do repositório.
- README em português: instalação, execução, build, funcionalidades, limitações e referências das imagens.
- Documentação da proposta e divisão de tarefas atribuídas ao único integrante, Eduardo.

## Git e entrega

O repositório foi verificado como público, dentro da organização FrontEnd-FIAP, vazio e com permissão de escrita informada pela conexão.

Três tarefas: configuração e estrutura; páginas e componentes; filtros, simulador e verificação. Cada tarefa terá branch com nome neutro, sem referência a IA, no mínimo três commits semânticos com alterações reais e PR para `dev`. Criar e enviar `main` e `dev` ao GitHub. Revisar e integrar os PRs preservando os commits; depois integrar `dev` em `main` por PR.

Registrar a revisão técnica com transparência, sem fingir aprovação por outro integrante. Não solicitar revisão a terceiros. Como o autor não pode aprovar formalmente o próprio PR, documentar a validação individual pelos resultados dos checks.

Entregar código final em `main`, links dos PRs e cópia de `integrante.txt` nas saídas desta conversa. O arquivo ficará pronto para Eduardo enviar ao Teams; o envio não será automatizado. LinkedIn e hospedagem do site ficam fora desta entrega.

## Critérios de aceite

- Instalação reprodutível com lockfile e build de produção sem erros.
- Estrutura obrigatória presente e navegação Home/Carros funcionando.
- Busca, filtros, limpeza e estado sem resultados funcionando.
- Cálculo de diárias correto e rejeição de datas inválidas.
- Verificação no navegador em celular e desktop, incluindo teclado e ausência de rolagem horizontal indevida.
- Revisão de interface com a versão atual das Web Interface Guidelines indicada na habilidade solicitada.
- Nome, RM e URL corretos; repositório público; versão final em `main`.
- Histórico comprovando três commits semânticos por tarefa e PRs para `dev`.

## Decisões da implementação

O assistente escolherá modelos da frota, imagens com referências verificáveis, detalhes de tipografia e espaçamento, dependências estáveis compatíveis e funções auxiliares. Nenhuma API externa será necessária para os dados da frota.

## Estado

Abordagem 2 e proposta aprovadas por Eduardo em 27/10/2026. Implementação autorizada; estilo visual e elaboração direta do plano também aprovados.
