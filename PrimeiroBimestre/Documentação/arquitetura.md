# Arquitetura

A arquitetura do sistema foi documentada com o **C4 Model**, nos dois primeiros níveis de abstração: o Diagrama de Contexto (Nível 1) e o Diagrama de Containers (Nível 2).

## Nível 1 - Diagrama de Contexto

Mostra o Sistema de Gestão da Granja no centro, com as pessoas que o utilizam e os sistemas externos com os quais ele se comunica.

![Diagrama de Contexto - Nível 1](img/nivel1-contexto.png)

### Atores

| Ator | Descrição |
|---|---|
| Gestora da Granja | Proprietária; acompanha produção, estoque, vendas e finanças. |
| Funcionário da Granja | Registra coleta de ovos, mortalidade e consumo de ração. |

### Sistemas externos

| Sistema | Finalidade |
|---|---|
| API WhatsApp (Meta) | Envio de alertas de estoque baixo, vacinas e confirmações de pedido. |
| Gateway de Pagamento (PIX) | Geração de cobranças PIX e confirmação de pagamento das vendas. |
| API de NF-e (SEFAZ) | Emissão de nota fiscal de produtor rural nas vendas. |
| API de CEP | Busca de endereço para agilizar o cadastro de clientes. |
| API Consulta CNPJ | Autocompletar dados de clientes empresa (mercados, padarias). |

## Nível 2 - Diagrama de Containers

Detalha as partes fundamentais do sistema e as tecnologias usadas em cada uma.

![Diagrama de Containers - Nível 2](img/nivel2-containers.png)

### Containers

| Container | Tecnologia | Responsabilidade |
|---|---|---|
| Front-end | TypeScript, Next.js, React | Interface web responsiva usada pela gestora (painel) e pelo funcionário (registros pelo celular). |
| Back-end | Node.js, NestJS | Concentra as regras de negócio: lotes, produção de ovos, estoque, vendas, clientes e disparo de alertas. |
| Banco de dados | PostgreSQL | Persistência de lotes, produção diária, estoque, vendas e clientes. |
| Cache | Redis | Fila de alertas agendados, controle de idempotência e cache de consultas. |

### Comunicação entre os blocos

| Origem | Destino | Protocolo | Descrição |
|---|---|---|---|
| Gestora / Funcionário | Front-end | HTTPS | Acompanham produção e registram coleta, mortalidade e ração. |
| Front-end | Back-end | HTTPS/JSON | Chamadas à API REST. |
| Back-end | PostgreSQL | SQL/TCP | Leitura e gravação dos dados. |
| Back-end | Redis | TCP | Enfileira alertas, garante idempotência e usa cache. |
| Back-end | WhatsApp, PIX, CEP, CNPJ | HTTPS/JSON | Integrações com serviços externos. |
| Back-end | NF-e (SEFAZ) | HTTPS/XML | Emissão de notas fiscais. |

!!! note "Notação"
    Nos diagramas, **azul escuro** representa pessoas (atores), **azul claro** representa containers do sistema e **cinza-roxo** representa sistemas externos.
