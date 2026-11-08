# Sistema de Gestão da Granja

Portal de documentação do **Sistema de Gestão da Granja**, um sistema para controlar lotes de aves, produção de ovos, consumo de ração, estoque, vendas e financeiro de uma granja familiar.

## O que você encontra aqui

| Página | Conteúdo |
|---|---|
| [Arquitetura](arquitetura.md) | Diagramas C4 (Nível 1 - Contexto e Nível 2 - Containers) e a descrição de cada bloco do sistema. |
| [Regra de Negócio / Fluxo](regra-de-negocio.md) | Fluxo de registro de coleta de ovos, com passo a passo, regras de negócio e resumo. |

## Sobre o sistema

O sistema atende dois perfis de usuário:

- **Gestora da granja:** acompanha produção, estoque, vendas e finanças.
- **Funcionário da granja:** registra no dia a dia a coleta de ovos, a mortalidade e o consumo de ração.

Ele também se integra a serviços externos para enviar alertas por WhatsApp, cobrar via PIX, emitir nota fiscal e agilizar o cadastro de clientes.
