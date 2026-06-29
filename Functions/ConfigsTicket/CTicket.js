import { ActionRowBuilder, ComponentType, ContainerBuilder, SectionBuilder, SeparatorBuilder, StringSelectMenuBuilder } from "discord.js";

export async function CTicket({ interaction }) {
  const section = new SectionBuilder({
    accessory: { type: ComponentType.Thumbnail, media: { url: interaction.user.displayAvatarURL() } },
    components: [
      {
        content: `## •  Configs Panel
Olá, ${interaction.user}, seja muito bem-vindo(a) ao painel de configurações do sistema de tickets.

\`🎫\` **Sistema de Tickets**
-# Gerencie todas as configurações relacionadas aos tickets do seu servidor de forma rápida, segura e organizada.

\`💡\` **Dica:** 
-# Utilize os menus e botões abaixo para navegar entre as configurações disponíveis.`,
        type: ComponentType.TextDisplay
      }
    ]
  })
  const container = new ContainerBuilder()
    .addSectionComponents(section)
    .addSeparatorComponents(new SeparatorBuilder())
    .addActionRowComponents(new ActionRowBuilder().addComponents(
      new StringSelectMenuBuilder({
        customId: "select.open.configs.ticket",
        placeholder: "Selecione uma opção",
        options: [
          {
            label: "System ticket",
            value: "string.open.systemTicket"
          },
          {
            label: "Voltar",
            value: "string.closePanel.configs.ticket"
          }
        ]
      })
    ))
  return { flags: ["Ephemeral", "IsComponentsV2"], components: [container] }
}