import { db } from "#database";
import { ChannelSelectMenuBuilder, ChannelType, LabelBuilder, ModalBuilder, RoleSelectMenuBuilder, TextInputBuilder } from "discord.js";

export default {
  name: "interactionCreate",
  async run(interaction) {
    if (interaction.isButton()) {
      const id = interaction.customId;

      if (id == "button.open.category") {
        const modal = new ModalBuilder()
          .setCustomId("Modal.systemTicket.category")
          .setTitle("Category")

        const select = new ChannelSelectMenuBuilder()
          .setCustomId("select.category")
          .setChannelTypes([ChannelType.GuildCategory])
          .setPlaceholder("Selecione uma categoria")
          .setMaxValues(1)
          .setMinValues(1)

        const label = new LabelBuilder()
          .setLabel("Selecione uma categoria")
          .setChannelSelectMenuComponent(select)

        modal.addLabelComponents(label);

        await interaction.showModal(modal);
      }

      if (id === "button.open.roles") {
        const modal = new ModalBuilder()
          .setCustomId("Modal.systemTicket.roles")
          .setTitle("Roles")

        const selectMenu = new RoleSelectMenuBuilder()
          .setCustomId("select.role")
          .setPlaceholder("Selecione um cargo")
          .setMinValues(1)
          .setMaxValues(2);

        const component = new LabelBuilder()
          .setLabel("Selecione o cargo")
          .setRoleSelectMenuComponent(selectMenu);

        modal.addLabelComponents(component);

        await interaction.showModal(modal);
      }

      if (id == "button.open.ticket") {
        const modal = new ModalBuilder()
          .setCustomId("modal.open.ticket")
          .setTitle("Motivo")

        const text = new TextInputBuilder()
          .setCustomId("motivo.ticket")
          .setStyle(2)
          .setMaxLength(500)
          .setRequired(true)

        const label = new LabelBuilder()
          .setTextInputComponent(text)
          .setLabel("Motivo")

        modal.addLabelComponents(label)
        await interaction.showModal(modal)

      }

      if (id == "button.close.ticket") {
        const roles = db.get("Modals.SystemTicket.Roles") || [];

        const hasRole = roles.some(role =>
          interaction.member.roles.cache.has(role.id)
        );

        if (!hasRole) {
          return interaction.reply({ flags: ["Ephemeral"], content: "`❌` | Você não tem permissão para executar esta função." });
        }

        await interaction.reply({ flags: ["Ephemeral"], content: "`🛜` | Ticket sendo finalizado em 5 segundos." });

        setTimeout(() => {
          interaction.channel.delete().catch(() => { });
        }, 5000);
      }
    }
  }
}