import { ActionRowBuilder, ButtonBuilder, ComponentType, ContainerBuilder, SectionBuilder, SeparatorBuilder } from "discord.js";

export async function DConfig({ interaction }) {
  const section = new SectionBuilder({
    accessory: { type: ComponentType.Thumbnail, media: { url: interaction.guild.iconURL() } },
    components: [
      {
        content: `## •  Panel\nOlá, ${interaction.user}, seja bem-vindo(a) ao painel de configurações\n> Gerencie todas as configurações relacionadas aos tickets do seu servidor de forma rápida, segura e organizada. Configure categorias, cargos da equipe, canais de logs e diversos recursos do sistema.`,
        type: ComponentType.TextDisplay
      }
    ]
  })

  const container = new ContainerBuilder()
    .addSectionComponents(section)
    .addSeparatorComponents(new SeparatorBuilder())
    .addActionRowComponents(new ActionRowBuilder().addComponents(
      new ButtonBuilder({
        style: 2,
        label: "Iniciar",
        customId: "button.open.configs.ticket"
      })
    ))
  return { flags: ["Ephemeral", "IsComponentsV2"], components: [container] }
}