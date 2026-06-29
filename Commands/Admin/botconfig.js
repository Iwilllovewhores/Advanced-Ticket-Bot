import { DConfig } from "#functions";
import { ApplicationCommandType } from "discord.js";

export default {
  name: "panel",
  description: "[🔨] Painel de configurações",
  type: ApplicationCommandType.ChatInput,
  async run(client, interaction) {
    if (!interaction.member.roles.cache.has("CARGO PARA UTILIZAR O COMANDO")) {
      return interaction.reply({ flags: ["Ephemeral"], content: "`❌` | Você não tem permissão para executar este comando." })
    }
    const dev = await DConfig({ interaction });
    interaction.reply(dev)
  }
}