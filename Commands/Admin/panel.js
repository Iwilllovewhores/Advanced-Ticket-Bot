import { PTicket } from "#functions";
import { ApplicationCommandType } from "discord.js";

export default {
  name: "send",
  description: "[🪧] Envie o painel de ticket",
  type: ApplicationCommandType.ChatInput,
  options: [
    {
      type: 1,
      name: "panel",
      description: "."
    }
  ],
  async run(client, interaction) {
    if (!interaction.member.roles.cache.has("CARGO PARA UTILIZAR O COMANDO")) {
      return interaction.reply({ flags: ["Ephemeral"], content: "`❌` | Você não tem permissão para executar este comando." })
    }
    const dev = await PTicket({ interaction });
    interaction.reply(dev)
  }
}