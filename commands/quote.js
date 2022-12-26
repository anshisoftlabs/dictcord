const { SlashCommandBuilder, ActionRowBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle, Events } = require('discord.js');

const {
	oAuthconfig
} = require('../config.json');


const fs = require('fs');

let rawdata = fs.readFileSync('dict.json');
let dict = JSON.parse(rawdata);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dictcord')
		.setDescription('Dictionary Service')
		.addStringOption(option =>
			option.setName('word')
				.setDescription('Find meaning of the word')
				.setRequired(true)
				//.setAutocomplete(true)
		),
	async execute(interaction) {
		userid = interaction.user.id;
		
			const word = interaction.options.getString('word');
			meaning = dict[word];
			console.log(meaning);
			response = meaning.substring(0,1999);;
			await interaction.reply(response);
	},
};