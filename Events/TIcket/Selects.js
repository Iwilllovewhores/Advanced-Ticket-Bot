import { DConfig, STicket } from "#functions";

export default {
  name: "interactionCreate",
  async run(interaction) {
    if (interaction.isStringSelectMenu() && interaction.customId === "select.open.configs.ticket") {
      const options = interaction.values[0];

      if (options == "string.open.systemTicket") {
        const dev = await STicket({ interaction });
        interaction.update(dev);
      }

      if (options == "string.closePanel.configs.ticket") {
        const dev = await DConfig({ interaction });
        await interaction.update(dev);
      }
    }
  }
}