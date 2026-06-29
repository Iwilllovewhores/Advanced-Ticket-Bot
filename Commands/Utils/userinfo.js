import { ApplicationCommandType, EmbedBuilder } from "discord.js";

export default {
  name: "user",
  description: "[⚙️] verifique suas informações de usuario",
  type: ApplicationCommandType.ChatInput,
  options: [
    {
      type: 1,
      name: "info",
      description: "."
    }
  ],
  async run(client, interaction) {
    const MainEmbed = new EmbedBuilder({
      author: { name: `${interaction.user.username}`, iconURL: `${interaction.user.displayAvatarURL()}` },
      thumbnail: { url: interaction.user.displayAvatarURL() },
      fields: [
        {
          name: "Username",
          value: `**${interaction.user.username}**`
        },
        {
          name: "Global Name",
          value: `**${interaction.user}**`
        },
        {
          name: "User Id",
          value: `**${interaction.user.id}**`
        },
        {
          name: "Account created",
          value: `**${interaction.user.createdAt}**`
        },
        {
          name: "Icon URL",
          value: `[URL](${interaction.user.avatarURL() || "Não consegui achar o icon do usuario."})`
        }
      ]
    })

    interaction.reply({ flags: ["Ephemeral"], embeds: [MainEmbed] })
  }
}