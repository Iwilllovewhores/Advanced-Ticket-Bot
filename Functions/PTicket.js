import { db } from "#database";
import { ActionRowBuilder, AttachmentBuilder, ButtonBuilder, EmbedBuilder } from "discord.js";

export async function PTicket({ interaction }) {
  const attachment = new AttachmentBuilder("./Assets/banner.png");

  const MainEmbed = new EmbedBuilder({
    author: { name: "System Ticket", iconURL: interaction.guild.iconURL() },
    description: `## Painel de Atendimento
> Seja bem-vindo(a) ao nosso sistema de tickets. Abra um atendimento apenas quando realmente precisar de suporte, dúvidas, compras ou qualquer outro assunto relacionado à nossa comunidade.

\`⚠️\` **Regras do Atendimento:**
- Respeite todos os membros da equipe.
- Não abra múltiplos tickets para o mesmo assunto.
- Evite spam, flood ou menções excessivas.
- O descumprimento das regras poderá resultar no fechamento do ticket.

\`🕒\` **Horário de Suporte:**
-# Atendemos diariamente das **10:00 às 20:00**. Tickets abertos fora do horário serão respondidos assim que nossa equipe retornar.`,
    thumbnail: { url: interaction.guild.iconURL() },
    image: { url: "attachment://banner.png" },
    color: 2,
    footer: { text: `© ${interaction.guild.name} - Todos os direitos rezervados`, iconURL: interaction.guild.iconURL() }
  })

  const Action = new ActionRowBuilder()
    .addComponents(
      new ButtonBuilder({
        style: 2,
        label: "Abrir ticket",
        customId: "button.open.ticket"
      })
    )
  return { embeds: [MainEmbed], components: [Action], files: [attachment] }
}