import { CTicket } from "#functions";

export default {
  name: "interactionCreate",
  async run(interaction) {
    if (interaction.isButton()) {
      const id = interaction.customId;

      if (id == "button.open.configs.ticket") {
        const dev = await CTicket({ interaction });
        interaction.update(dev);
      }

      if (id == "button.close.SystemTicket") {
        const dev = await CTicket({ interaction });
        interaction.update(dev)
      }
    }
  }
}