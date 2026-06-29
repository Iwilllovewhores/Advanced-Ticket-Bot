import { ActionRowBuilder, ButtonBuilder, ComponentType, ContainerBuilder, SectionBuilder, SeparatorBuilder, TextDisplayBuilder } from "discord.js";

export async function STicket({ interaction }) {
  const container = new ContainerBuilder()
    .addTextDisplayComponents(new TextDisplayBuilder().setContent(`## •  Config Panel\nUse os botões abaixo para\nconfigurar o sistema de ticket`))
    .addSeparatorComponents(new SeparatorBuilder())
    .addActionRowComponents(new ActionRowBuilder().addComponents(
      new ButtonBuilder({
        style: 3,
        customId: "button.open.roles",
        label: "Roles"
      })
    ))
    .addActionRowComponents(new ActionRowBuilder().addComponents(
      new ButtonBuilder({
        style: 2,
        customId: "button.close.SystemTicket",
        label: "Voltar"
      })
    ))
  return { flags: ["Ephemeral", "IsComponentsV2"], components: [container] }
}