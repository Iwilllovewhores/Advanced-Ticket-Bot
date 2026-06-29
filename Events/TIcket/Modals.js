import { db } from "#database";
import { ActionRowBuilder, ButtonBuilder, ChannelType, EmbedBuilder, ThreadAutoArchiveDuration } from "discord.js";

export default {
  name: "interactionCreate",
  async run(interaction) {

    if (interaction.isModalSubmit()) {
      const id = interaction.customId;

      if (id == "Modal.systemTicket.roles") {
        const roles = interaction.fields.getSelectedRoles("select.role");
        db.set("Modals.SystemTicket.Roles", roles);

        interaction.reply({ flags: ["Ephemeral"], content: "`✅` | Cargo setado com sucesso." });
      }

      if (id == "modal.open.ticket") {
        const motivo = interaction.fields.getTextInputValue("motivo.ticket");

        const thread = await interaction.channel.threads.create({
          name: "ticket",
          type: ChannelType.PrivateThread,
          autoArchiveDuration: ThreadAutoArchiveDuration.OneDay,
          reason: "ticket"
        })

        const MainEmbed = new EmbedBuilder()
          .setAuthor({ name: `Ticket - ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() })
          .setDescription(`## Central de Atendimento

Olá, ${interaction.user}! Seja bem-vindo ao seu ticket de suporte.

> Sua solicitação foi registrada com sucesso e nossa equipe foi notificada. Em alguns instantes um membro do suporte irá assumir o atendimento.

\`📋\` **Informações do Ticket**
\`\`\`${motivo}\`\`\`

\`🤖\` **Privacidade**
-# Este tópico é privado e somente você e a equipe autorizada podem visualizar as mensagens.

Agradecemos o contato e faremos o possível para ajudá-lo rapidamente.
`)
          .setThumbnail(interaction.guild.iconURL())
          .setColor("Aqua")

        const Action = new ActionRowBuilder()
          .addComponents(
            new ButtonBuilder({ style: 2, customId: "button.close.ticket", label: "Finalizar" })
          )
        const roles = db.get("Modals.SystemTicket.Roles") || [];

        const role = roles.map(role => `<@&${role.id}>`).join(" ");
        await thread.send({ content: `${interaction.user} | ${role}`, embeds: [MainEmbed], components: [Action] })
        interaction.reply({ flags: ["Ephemeral"], content: "`✅` | Ticket criado com sucesso." })
      }
    }
  }
}