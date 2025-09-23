// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: FormatList = [

	// OR/AS Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "Insurgence Singles",
		column: 1,
	},
	{
		name: "[Gen 6] Random Battle",

		mod: 'gen6',
		team: 'random',
		ruleset: ['Obtainable', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod', 'Mega Rayquaza Clause'],
	},
	{
		name: "[Gen 6] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/xy/tags/ou/">ORAS OU Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8133793/">ORAS OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3623399/">ORAS OU Viability Rankings</a>`,
		],

		mod: 'gen6',
		ruleset: ['Standard', 'Swagger Clause'],
		banlist: ['Uber', 'Arena Trap', 'Shadow Tag', 'Soul Dew', 'Baton Pass'],
	},
	{
		name: "[Gen 6] Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8286277/">ORAS Ubers</a>`,
		],

		mod: 'gen6',
		ruleset: ['Standard', 'Swagger Clause', 'Mega Rayquaza Clause'],
	},
	{
		name: "[Gen 6] UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/xy/formats/uu/">ORAS UU Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3598164/">ORAS UU Viability Rankings</a>`,
		],

		mod: 'gen6',
		ruleset: ['[Gen 6] OU'],
		banlist: ['OU', 'UUBL', 'Drizzle', 'Drought'],
	},
	{
		name: "[Gen 6] RU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/xy/tags/ru/">ORAS RU Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3574583/">ORAS RU Viability Rankings</a>`,
		],

		mod: 'gen6',
		ruleset: ['[Gen 6] UU'],
		banlist: ['UU', 'RUBL'],
	},
	{
		name: "[Gen 6] NU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/xy/tags/nu/">ORAS NU Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3555650/">ORAS NU Viability Rankings</a>`,
		],

		mod: 'gen6',
		ruleset: ['[Gen 6] RU'],
		banlist: ['RU', 'NUBL'],
	},
	{
		name: "[Gen 6] PU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/xy/tags/pu/">ORAS PU Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3528743/">ORAS PU Viability Rankings</a>`,
		],

		mod: 'gen6',
		ruleset: ['[Gen 6] NU'],
		banlist: ['NU', 'PUBL', 'Chatter'],
	},
	{
		name: "[Gen 6] LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/xy/formats/lc/">ORAS LC Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3547566/">ORAS LC Viability Rankings</a>`,
		],

		mod: 'gen6',
		ruleset: ['Standard', 'Little Cup'],
		banlist: [
			'Drifloon', 'Gligar', 'Meditite', 'Misdreavus', 'Murkrow', 'Scyther', 'Sneasel', 'Swirlix', 'Tangela', 'Yanma',
			'Baton Pass', 'Dragon Rage', 'Sonic Boom', 'Swagger',
			'Aipom-Delta', 'Tangela-Delta', 'Scyther-Delta', 'Misdreavus-Delta', 'Yanma-Delta', 'Dwebble-Delta-C',
		],
	},
	{
		name: "[Gen 6] 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8031459/">ORAS 1v1</a>`,
		],

		mod: 'gen6',
		ruleset: [
			'Max Team Size = 3', 'Picked Team Size = 1', 'Obtainable', 'Nickname Clause', 'Moody Clause', 'OHKO Clause',
			'Evasion Moves Clause', 'Accuracy Moves Clause', 'Swagger Clause', 'Endless Battle Clause', 'HP Percentage Mod',
			'Cancel Mod', 'Team Preview',
		],
		banlist: [
			'Arceus', 'Blaziken', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Deoxys-Defense', 'Dialga', 'Giratina',
			'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-White', 'Lugia', 'Mewtwo',
			'Palkia', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Snorlax', 'Xerneas', 'Yveltal',
			'Zekrom', 'Focus Sash', 'Soul Dew', 'Grass Whistle', 'Hypnosis', 'Perish Song', 'Sing', 'Yawn',
		],
	},
	{
		name: "[Gen 6] Anything Goes",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3523229/">ORAS Anything Goes</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3548945/">ORAS AG Resources</a>`,
		],

		mod: 'gen6',
		ruleset: ['Obtainable', 'Team Preview', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 6] ZU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/xy/formats/zu/">ORAS ZU Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8034679/">ORAS ZU Viability Rankings</a>`,
		],

		mod: 'gen6',
		ruleset: ['[Gen 6] PU'],
		banlist: ['PU', 'Fraxure', 'Regigigas', 'Simisear'],
	},
	{
		name: "[Gen 6] CAP",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3537407/">ORAS CAP Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8752281/">ORAS CAP Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8752280/">ORAS CAP Viability Rankings</a>`,
		],

		mod: 'gen6',
		ruleset: ['[Gen 6] OU', '+CAP'],
		banlist: ['Cawmodore'],
	},
	{
		name: "[Gen 6] 3v3 Singles",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3527960/">ORAS Battle Spot Singles</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3554616/">ORAS BSS Viability Rankings</a>`,
		],

		mod: 'gen6',
		ruleset: ['Flat Rules'],
	},
	{
		name: "[Gen 6] Custom Game",

		mod: 'gen6',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 120'],
	},

	// OR/AS Doubles/Triples
	///////////////////////////////////////////////////////////////////

	{
		section: "Insurgence Doubles/Triples",
		column: 1,
	},
	{
		name: "[Gen 6] Doubles AG",
		mod: 'gen6',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard Doubles'],
	},
	{
		name: "[Gen 6] 4v4 Doubles",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3558332/">VGC 2016 Rules</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3580592/">VGC 2016 Viability Rankings</a>`,
		],

		mod: 'gen6',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Flat Rules'],
	},
	{
		name: "[Gen 6] Doubles Custom Game",

		mod: 'gen6',
		gameType: 'doubles',
		searchShow: false,
		battle: {trunc: Math.trunc},
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 120'],
	},
	{
		name: "[Gen 6] Triples Custom Game",

		mod: 'gen6',
		gameType: 'triples',
		searchShow: false,
		battle: {trunc: Math.trunc},
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 120'],
	},

	// Ryuka Dex
	///////////////////////////////////////////////////////////////////

	{
		section: "S/V Singles",
		column: 3,
	},
	{
		name: "[Gen 9] Random Battle",
		desc: `Randomized teams of Pok&eacute;mon with sets that are generated to be competitively viable.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712619/">Random Battle Suggestions</a>`,
		],

		mod: 'gen9',
		team: 'random',
		ruleset: ['PotD', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Illusion Level Mod'],
	},
	{
		name: "[Gen 9] Ryuka Dex",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3710848/">Ryuka Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3714511/">Ryuka Dex Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3714863/">Ryuka Dex Sample Teams</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Sleep Clause Mod'],
		banlist: [
			'ND Uber', 'ND AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock',
			'Quick Claw', 'Razor Fang', 'Assist', 'Baton Pass', 'Last Respects', 'Shed Tail',
		],
	},
	{
		name: "[Gen 9] Ryuka Dex Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712168/">Ryuka Dex Ubers Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712170/">Ryuka Dex Ubers Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3712169/">Ryuka Dex Ubers Viability Rankings</a>`,
		],

		mod: 'gen9',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Evasion Items Clause', 'Species Clause', 'Sleep Clause Mod', 'Mega Rayquaza Clause'],
		banlist: ['ND AG', 'Assist', 'Baton Pass'],
	},
	{
		name: "[Gen 9] Ryuka Dex UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3711752/">Ryuka Dex UU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3719079/">Ryuka Dex UU Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3725988/">Ryuka Dex UU Sample Teams</a>`,
		],

		mod: 'gen9',
		ruleset: ['[Gen 9] Ryuka Dex', 'Terastal Clause'],
		banlist: ['ND OU', 'ND UUBL', 'Drizzle', 'Drought', 'Light Clay'],
	},
	{
		name: "[Gen 9] Ryuka Dex RU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3713801/">Ryuka Dex RU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3721776/">Ryuka Dex RU Resources</a>`,
		],

		mod: 'gen9',
		searchShow: false,
		ruleset: ['[Gen 9] Ryuka Dex UU'],
		banlist: ['ND UU', 'ND RUBL', 'Slowbro-Base + Slowbronite', 'Heat Rock'],
	},
	{
		name: "[Gen 9] Free-For-All",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3711724/">Free-For-All</a>`,
		],

		mod: 'gen9',
		gameType: 'freeforall',
		rated: false,
		tournamentShow: false,
		ruleset: ['Standard', 'Sleep Moves Clause', '!Sleep Clause Mod', '!Evasion Items Clause'],
		banlist: [
			'Annihilape', 'Arceus', 'Calyrex-Ice', 'Calyrex-Shadow', 'Chi-Yu', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Dialga', 'Dialga-Origin',
			'Eternatus', 'Flutter Mane', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Hoopa-Unbound', 'Iron Bundle', 'Koraidon', 'Kyogre',
			'Kyurem-White', 'Landorus-Base', 'Lugia', 'Lunala', 'Magearna', 'Mewtwo', 'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane',
			'Palkia', 'Palkia-Origin', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Solgaleo', 'Spectrier', 'Terapagos', 'Ursaluna', 'Ursaluna-Bloodmoon',
			'Urshifu-Base', 'Zacian', 'Zacian-Crowned', 'Zekrom', 'Moody', 'Shadow Tag', 'Toxic Chain', 'Toxic Debris', 'Acupressure', 'Aromatic Mist',
			'Baton Pass', 'Coaching', 'Court Change', 'Decorate', 'Dragon Cheer', 'Final Gambit', 'Flatter', 'Floral Healing', 'Follow Me', 'Heal Pulse',
			'Last Respects', 'Malignant Chain', 'Poison Fang', 'Rage Powder', 'Spicy Extract', 'Swagger', 'Toxic', 'Toxic Spikes',
		],
	},
	{
		name: "[Gen 9] Ryuka Dex LC",
		mod: 'gen9',
		ruleset: ['Little Cup', 'Standard NatDex', 'Dynamax Clause'],
		banlist: [
			'Corsola-Galar', 'Cutiefly', 'Drifloon', 'Gastly', 'Gothita', 'Magby', 'Rufflet', 'Scraggy', 'Scyther', 'Sneasel', 'Swirlix',
			'Tangela', 'Vullaby', 'Vulpix-Alola', 'Woobat', 'Zigzagoon-Base', 'Chlorophyll', 'Moody', 'Baton Pass', 'Sticky Web', 'Dunsparce', 'Flittle',
			'Aipom-Delta', 'Tangela-Delta', 'Qwilfish-Hisui', 'Mr. Mime-Galar', 'Basculin', 'Type: Null', 'Scyther-Delta', 'Misdreavus-Delta', 'Yanma-Delta',
			'Dwebble-Delta-C', 'Yanma', 'Murkrow', 'Misdreavus', 'Girafarig', 'Gligar',
		],
	},
	{
		name: "[Gen 9] Ryuka Dex 1v1",
		mod: 'gen9',
		ruleset: [
			'Picked Team Size = 1', 'Max Team Size = 3',
			'Standard NatDex', 'Terastal Clause', 'Sleep Moves Clause', 'Accuracy Moves Clause',
		],
		banlist: [
			'Calyrex-Ice', 'Calyrex-Shadow', 'Dialga', 'Eternatus', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Koraidon',
			'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Mew', 'Mewtwo', 'Mimikyu', 'Miraidon', 'Necrozma', 'Necrozma-Dawn-Wings',
			'Necrozma-Dusk-Mane', 'Palkia', 'Rayquaza', 'Reshiram', 'Snorlax', 'Solgaleo', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned',
			'Zamazenta', 'Zekrom', 'Moody', 'Bright Powder', 'Focus Band', 'Focus Sash', 'Lax Incense', 'Quick Claw',
			'Acupressure', 'Hypnosis', 'Perish Song', 'Sing', 'Grass Whistle', 'Lovely Kiss', 'Detect + Fightinium Z',
			'Cryogonal-Mega', 'Hoopa-Delta-Unleashed' , 'Hydreigon-Mega-Five', 'Metagross-Delta-R-Mega', 'Metagross-Delta-S-Mega', 'Mewtwo-Shadow', 'Regigigas-Primal',
			'Volcarona-Delta', 'pokemon:volcaronadeltaarmor', 'pokemon:zekromarmor', 'Arceus-Primal', 'Giratina-Primal', 'Metagross-Delta-R-Crystal',
			'Arceus', 'Darkrai', 'Deoxys', 'Metagross-Delta-R', 'Gengar-Mega', 'Salamence-Mega', 'Shaymin-Sky', 'Kangaskhan-Mega',
		],
	},
	{
		name: "[Gen 9] Ryuka Dex CAP",

		mod: 'gen9',
		ruleset: ['[Gen 9] Ryuka Dex', '+CAP'],
		banlist: ['Crucibellite'],
	},
	{
		name: "[Gen 9] Ryuka Dex 3v3 Singles",

		mod: 'gen9',
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'VGC Timer'],
		banlist: ['Sub-Legendary'],
	},
	{
		name: "[Gen 9] Ryuka Dex Multi Battle",

		mod: 'gen9',
		gameType: 'multi',
		searchShow: false,
		tournamentShow: false,
		rated: false,
		ruleset: ['Max Team Size = 3', 'Standard NatDex'],
	},
	{
		name: "[Gen 9] Ryuka Dex Free-For-All",

		mod: 'gen9',
		gameType: 'freeforall',
		tournamentShow: false,
		rated: false,
		ruleset: ['Standard NatDex'],
	},
	{
		name: "[Gen 9] Custom Game",

		mod: 'gen9',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 120', 'Sleep Clause Mod'],
	},

	// Ryuka Dex Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: "S/V Doubles",
		column: 3,
	},
	{
		name: "[Gen 9] Ryuka Dex Doubles AG",

		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['Standard NatDex Doubles', '!Gravity Sleep Clause'],
	},
	{
		name: "[Gen 9] Ryuka Dex 4v4 Doubles",

		mod: 'gen9',
		gameType: 'doubles',
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'VGC Timer'],
	},
	{
		name: "[Gen 9] Doubles Custom Game",

		mod: 'gen9',
		gameType: 'doubles',
		searchShow: false,
		battle: {trunc: Math.trunc},
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 120'],
	},

	// Draft League
	///////////////////////////////////////////////////////////////////

	{
		section: "Draft",
		column: 2,
	},
	{
		name: "[Gen 6] Draft",

		mod: 'gen6',
		searchShow: false,
		ruleset: ['Standard Draft'],
	},
	{
		name: "[Gen 9] NatDex Draft",

		mod: 'gen9',
		searchShow: false,
		ruleset: ['Standard Draft', '+Unobtainable', '+Past', '+PastMove'],
	},
	{
		name: "[Gen 9] Tera Preview NatDex Draft",

		mod: 'gen9',
		searchShow: false,
		ruleset: ['[Gen 9] NatDex Draft', 'Tera Type Preview'],
	},
	{
		name: "[Gen 9] NatDex 6v6 Doubles Draft",

		mod: 'gen9',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard Draft', '!Sleep Clause Mod', '!Evasion Moves Clause', '+Unobtainable', '+Past', '+PastMove', 'Min Source Gen = 3'],
	},
	{
		name: "[Gen 9] NatDex 4v4 Doubles Draft",

		mod: 'gen9',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard Draft', 'Item Clause', '!Sleep Clause Mod', '!OHKO Clause', '!Evasion Moves Clause', '!! Adjust Level = 50', 'Picked Team Size = 4', '+Unobtainable', '+Past', '+PastMove', 'Min Source Gen = 3'],
	},
	{
		name: "[Gen 9] NatDex Draft LC",

		mod: 'gen9',
		searchShow: false,
		ruleset: ['LC Draft', '+Unobtainable', '+Past', '+PastMove', 'Double Item Clause', 'Little Cup'],
		banlist: ['Dragon Rage', 'Sonic Boom'],
	},
	{
		name: "[Gen 8] NatDex Draft",

		mod: 'gen8',
		searchShow: false,
		ruleset: ['Standard Draft', '+Past', '+PastMove'],
	},
	{
		name: "[Gen 8] NatDex 4v4 Doubles Draft",

		mod: 'gen8',
		searchShow: false,
	},
	{
		name: "[Gen 8] NatDex Draft LC",

		mod: 'gen8',
		searchShow: false,
		ruleset: ['LC Draft', '+Past', '+PastMove', 'Double Item Clause', 'Little Cup'],
		banlist: ['Dragon Rage', 'Sonic Boom'],
	},
	{
		name: "[Gen 7] Draft",

		mod: 'gen7',
		searchShow: false,
		ruleset: ['Standard Draft', '+LGPE'],
	},

	// Other Metagames
	///////////////////////////////////////////////////////////////////

	{
		section: "Other Metagames",
		column: 2,
	},
	{
		name: "[Gen 6] Pure Hackmons",
		desc: `Anything that can be hacked in-game and is usable in local battles is allowed.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/9029427/">ORAS Pure Hackmons</a>`,
		],

		mod: 'gen6',
		searchShow: false,
		ruleset: ['-Nonexistent', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause', 'EV limit = 510'],
	},
	{
		name: "[Gen 6] Monotype",
		desc: `All the Pok&eacute;mon on a team must share a type.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8411583/">ORAS Monotype</a>`,
		],

		mod: 'gen6',
		ruleset: ['Standard', 'Swagger Clause', 'Same Type Clause'],
		banlist: [
			'Aegislash', 'Altaria-Mega', 'Arceus', 'Blaziken', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Deoxys-Speed', 'Dialga', 'Genesect',
			'Gengar-Mega', 'Giratina', 'Giratina-Origin', 'Greninja', 'Groudon', 'Ho-Oh', 'Hoopa-Unbound', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-White',
			'Lucario-Mega', 'Lugia', 'Mawile-Mega', 'Medicham-Mega', 'Metagross-Mega', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Sableye-Mega',
			'Salamence-Mega', 'Shaymin-Sky', 'Slowbro-Mega', 'Talonflame', 'Xerneas', 'Yveltal', 'Zekrom',
			'Shadow Tag', 'Damp Rock', 'Focus Band', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Smooth Rock', 'Soul Dew', 'Baton Pass',
		],
	},
	{
		name: "[Gen 6] Almost Any Ability",
		desc: `Pok&eacute;mon have access to almost any ability.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8772336/">ORAS Almost Any Ability</a>`,
		],

		mod: 'gen6',
		ruleset: ['[Gen 6] OU', 'Ability Clause = 2', 'AAA Restricted Abilities', '!Obtainable Abilities'],
		banlist: ['Archeops', 'Bisharp', 'Chatot', 'Dragonite', 'Keldeo', 'Kyurem-Black', 'Mamoswine', 'Regigigas', 'Shedinja', 'Slaking', 'Smeargle', 'Snorlax', 'Suicune', 'Terrakion', 'Weavile', 'Dynamic Punch', 'Zap Cannon'],
		unbanlist: ['Aegislash', 'Blaziken', 'Deoxys-Defense', 'Deoxys-Speed', 'Genesect', 'Greninja', 'Landorus'],
		restricted: ['Arena Trap', 'Contrary', 'Fur Coat', 'Huge Power', 'Illusion', 'Imposter', 'Parental Bond', 'Protean', 'Pure Power', 'Simple', 'Speed Boost', 'Wonder Guard'],
	},
	{
		name: "[Gen 6] STABmons",
		desc: "Pok&eacute;mon can use any move of their typing, in addition to the moves they can normally learn.",
		threads: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3547279/\">STABmons</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3558034/\">STABmons Viability Ranking</a>",
		],

		mod: 'gen6',
		ruleset: ['[Gen 6] OU', 'STABmons Move Legality'],
		banlist: ['Diggersby', 'Kyurem-Black', 'Porygon-Z', 'Thundurus', 'Aerodactylite', 'Altarianite', "King's Rock", 'Metagrossite', 'Razor Fang'],
	},
	{
		name: "[Gen 6] Battle Factory",
		desc: `Randomized teams of Pok&eacute;mon for a generated Smogon tier with sets that are competitively viable.`,

		mod: 'gen6',
		team: 'randomFactory',
		searchShow: false,
		ruleset: ['Obtainable', 'Sleep Clause Mod', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Mega Rayquaza Clause', 'Illusion Level Mod'],
	},

	// Randomized Metas
	///////////////////////////////////////////////////////////////////

	{
		section: "Randomized Metas",
		column: 2,
	},
	{
		name: "[Gen 9] Monotype Random Battle",

		mod: 'gen9',
		team: 'random',
		ruleset: ['Obtainable', 'Same Type Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Illusion Level Mod'],
	},
	{
		name: "[Gen 9] Computer-Generated Teams",
		desc: `Teams generated automatically based on heuristics (rules), with levels based on previous success/failure in battle. ` +
			`Not affiliated with Random Battles formats. Some sets will by nature be worse than others, but you can report egregiously bad sets ` +
			`with <a href="https://forms.gle/DYwQN5qGVegz3YU38">this form</a>.`,

		mod: 'gen9',
		team: 'computerGenerated',
		ruleset: ['Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Illusion Level Mod'],
	},
	{
		name: "[Gen 9] Hackmons Cup",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with absolutely any ability, moves, and item.`,

		mod: 'gen9',
		team: 'randomHC',
		ruleset: ['HP Percentage Mod', 'Cancel Mod'],
		banlist: ['CAP', 'LGPE', 'MissingNo.', 'Pikachu-Cosplay', 'Pichu-Spiky-eared', 'Pokestar Smeargle', 'Pokestar UFO', 'Pokestar UFO-2', 'Pokestar Brycen-Man', 'Pokestar MT', 'Pokestar MT2', 'Pokestar Transport', 'Pokestar Giant', 'Pokestar Humanoid', 'Pokestar Monster', 'Pokestar F-00', 'Pokestar F-002', 'Pokestar Spirit', 'Pokestar Black Door', 'Pokestar White Door', 'Pokestar Black Belt', 'Pokestar UFO-PropU2', 'Xerneas-Base'],
		unbanlist: ['All Pokemon'],
	},
	{
		name: "[Gen 9] Doubles Hackmons Cup",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with absolutely any ability, moves, and item. Now with TWICE the Pok&eacute;mon per side!`,

		mod: 'gen9',
		team: 'randomHC',
		searchShow: false,
		gameType: 'doubles',
		ruleset: ['[Gen 9] Hackmons Cup'],
	},
	{
		name: "[Gen 9] Challenge Cup 1v1",
		desc: `Get a randomized team of level-balanced Pok&eacute;mon with absolutely any legal ability, moves, and item, and choose one to battle.`,

		mod: 'gen9',
		team: 'randomCC',
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview', 'Terastal Clause', 'Picked Team Size = 1'],
	},
	{
		name: "[Gen 9] Challenge Cup 2v2",
		desc: `Get a randomized team of level-balanced Pok&eacute;mon with absolutely any legal ability, moves, and item, and choose two to battle in a doubles format.`,

		mod: 'gen9',
		team: 'randomCC',
		gameType: 'doubles',
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview', 'Picked Team Size = 2'],
	},
	{
		name: "[Gen 9] Challenge Cup 6v6",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with absolutely any legal ability, moves, and item.`,

		mod: 'gen9',
		team: 'randomCC',
		searchShow: false,
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 8] Random Battle",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with sets that are generated to be competitively viable.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656537/">Random Battle Suggestions</a>`,
		],

		mod: 'gen8',
		team: 'random',
		ruleset: ['PotD', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Illusion Level Mod'],
	},
	{
		name: "[Gen 7] Random Battle",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with sets that are generated to be competitively viable.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3591157/">Sets and Suggestions</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3616946/">Role Compendium</a>`,
		],

		mod: 'gen7',
		team: 'random',
		ruleset: ['Obtainable', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod', 'Mega Rayquaza Clause', 'Illusion Level Mod'],
	},

	// Sw/Sh Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "Sw/Sh Singles",
		column: 4,
	},
	{
		name: "[Gen 8] Ryuka Dex",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3666135/">SS Ryuka Dex Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3667921/">SS Ryuka Dex Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3666572/">SS Ryuka Dex Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod'],
		banlist: ['ND Uber', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Razor Fang', 'Quick Claw', 'Baton Pass'],
	},
	{
		name: "[Gen 8] Ryuka Dex UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3660920/">Ryuka Dex UU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672486/">Ryuka Dex UU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672482/">Ryuka Dex UU Viability Rankings</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['[Gen 8] Ryuka Dex'],
		banlist: ['ND OU', 'ND UUBL', 'Drizzle', 'Drought', 'Light Clay', 'Slowbronite'],
	},
	{
		name: "[Gen 8] Ryuka Dex RU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3660920/">Ryuka Dex UU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672486/">Ryuka Dex UU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672482/">Ryuka Dex UU Viability Rankings</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['[Gen 8] Ryuka Dex UU'],
		banlist: ['ND UU', 'ND RUBL'],
	},
	{
		name: "[Gen 8] Ryuka Dex LC",
		mod: 'gen8',
		searchShow: false,
		ruleset: ['Little Cup', 'Standard NatDex', 'Dynamax Clause'],
		banlist: [
			'Corsola-Galar', 'Cutiefly', 'Drifloon', 'Gastly', 'Gothita', 'Magby', 'Rufflet', 'Scraggy', 'Scyther', 'Sneasel', 'Swirlix',
			'Tangela', 'Vullaby', 'Vulpix-Alola', 'Woobat', 'Zigzagoon-Base', 'Chlorophyll', 'Moody', 'Baton Pass', 'Sticky Web',
			'Aipom-Delta', 'Tangela-Delta', 'Mr. Mime-Galar', 'Type: Null', 'Scyther-Delta', 'Misdreavus-Delta', 'Yanma-Delta',
			'Dwebble-Delta-C', 'Yanma', 'Murkrow', 'Misdreavus', 'Gligar',
		],
	},
	{
		name: "[Gen 8] Ryuka Dex Monotype",
		desc: `All the Pok&eacute;mon on a team must share a type.`,
		mod: 'gen8',
		searchShow: false,
		ruleset: ['Same Type Clause', 'Standard NatDex', 'Dynamax Clause'],
		banlist: [
			'Blaziken', 'Calyrex-Ice', 'Calyrex-Shadow', 'Dialga', 'Dracovish', 'Eternatus', 'Genesect', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh',
			'Kartana', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Mewtwo', 'Naganadel',
			'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Solgaleo', 'Urshifu-Base', 'Xerneas', 'Yveltal',
			'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Base', 'Moody', 'Power Construct', 'Shadow Tag', 'Damp Rock',
			'Focus Band', 'King\'s Rock', 'Quick Claw', 'Smooth Rock', 'Terrain Extender', 'Acupressure', 'Baton Pass',
		],
	},
	{
		name: "[Gen 8] Ryuka Dex 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		mod: 'gen8',
		searchShow: false,
		ruleset: [
			'Picked Team Size = 1', 'Max Team Size = 3',
			'Obtainable', '+Unobtainable', '+Past', 'Sketch Post-Gen 7 Moves', '+PastMove', 'Nickname Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Accuracy Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Endless Battle Clause',
		],
		banlist: [
			'Calyrex-Ice', 'Calyrex-Shadow', 'Dialga', 'Eternatus', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh',
			'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Mew', 'Mewtwo', 'Mimikyu', 'Necrozma', 'Necrozma-Dawn-Wings',
			'Necrozma-Dusk-Mane', 'Palkia', 'Rayquaza', 'Reshiram', 'Snorlax', 'Solgaleo', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned',
			'Zamazenta', 'Zekrom', 'Moody', 'Bright Powder', 'Focus Band', 'Focus Sash', 'Lax Incense', 'Quick Claw',
			'Acupressure', 'Hypnosis', 'Perish Song', 'Sing', 'Grass Whistle', 'Lovely Kiss', 'Detect + Fightinium Z',
			'Cryogonal-Mega', 'Hoopa-Delta-Unleashed' , 'Hydreigon-Mega-Five', 'Metagross-Delta-R-Mega', 'Metagross-Delta-S-Mega', 'Mewtwo-Shadow', 'Regigigas-Primal',
			'Volcarona-Delta', 'pokemon:volcaronadeltaarmor', 'pokemon:zekromarmor', 'Arceus-Primal', 'Giratina-Primal', 'Metagross-Delta-R-Crystal',
			'Arceus', 'Darkrai', 'Deoxys', 'Metagross-Delta-R', 'Gengar-Mega', 'Salamence-Mega', 'Shaymin-Sky', 'Kangaskhan-Mega',
		],
	},
	{
		name: "[Gen 8] Ryuka Dex AG",
		mod: 'gen8',
		searchShow: false,
		ruleset: ['Standard NatDex'],
	},
	{
		name: "[Gen 8] Ryuka Dex CAP",
		mod: 'gen8',
		searchShow: false,
		ruleset: ['[Gen 8] Ryuka Dex', '+CAP'],
		banlist: ['Crucibellite'],
	},
	{
		name: "[Gen 8] Ryuka Dex 3v3 Singles",
		mod: 'gen8',
		searchShow: false,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'VGC Timer'],
	},
	{
		name: "[Gen 8] Custom Game",
		mod: 'gen8',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 120'],
	},

	// Sw/Sh Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: "Sw/Sh Doubles",
		column: 4,
	},
	{
		name: "[Gen 8] Random Doubles Battle",

		mod: 'gen8',
		gameType: 'doubles',
		team: 'random',
		searchShow: false,
		ruleset: ['PotD', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Illusion Level Mod'],
	},
	{
		name: "[Gen 8] Ryuka Dex Doubles AG",

		mod: 'gen8',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard NatDex Doubles', '!Gravity Sleep Clause'],
	},
	{
		name: "[Gen 8] Ryuka Dex 4v4 Doubles",

		mod: 'gen8',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'VGC Timer'],
	},
	{
		name: "[Gen 8] Doubles Custom Game",

		mod: 'gen8',
		gameType: 'doubles',
		searchShow: false,
		battle: {trunc: Math.trunc},
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 120'],
	},

	// US/UM Singles
	///////////////////////////////////////////////////////////////////
	{
		section: "US/UM Singles",
		column: 5,
	},
	{
		name: "[Gen 7] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/sm/tags/ou/">USM OU Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8162240/">USM OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3667522/">USM OU Viability Rankings</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['Standard'],
		banlist: ['Uber', 'Arena Trap', 'Power Construct', 'Shadow Tag', 'Baton Pass'],
	},
	{
		name: "[Gen 7] Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/9462706/">USM Ubers</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['Standard', 'Mega Rayquaza Clause'],
		banlist: ['Baton Pass'],
	},
	{
		name: "[Gen 7] UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3621217/">USM UU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3641346/">USM UU Viability Rankings</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['[Gen 7] OU'],
		banlist: ['OU', 'UUBL', 'Drizzle', 'Drought', 'Kommonium Z', 'Mewnium Z'],
	},
	{
		name: "[Gen 7] RU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3733237/">USM RU Resources</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['[Gen 7] UU'],
		banlist: ['UU', 'RUBL', 'Mimikyu', 'Aurora Veil'],
		unbanlist: ['Drought'],
	},
	{
		name: "[Gen 7] NU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3730730/">USM NU Resources</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['[Gen 7] RU'],
		banlist: ['RU', 'NUBL', 'Drought'],
	},
	{
		name: "[Gen 7] PU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3730846/">USM PU Resources</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['[Gen 7] NU'],
		banlist: ['NU', 'PUBL'],
	},
	{
		name: "[Gen 7] LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/dex/sm/formats/lc/">USM LC Banlist</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3639319/">USM LC Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3621440/">USM LC Viability Rankings</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['Little Cup', 'Standard', 'Swagger Clause'],
		banlist: [
			'Aipom', 'Cutiefly', 'Drifloon', 'Gligar', 'Gothita', 'Meditite', 'Misdreavus', 'Murkrow', 'Porygon',
			'Scyther', 'Sneasel', 'Swirlix', 'Tangela', 'Trapinch', 'Vulpix-Base', 'Wingull', 'Yanma',
			'Eevium Z', 'Baton Pass', 'Dragon Rage', 'Sonic Boom', 'Sticky Web',
			'Aipom-Delta', 'Tangela-Delta', 'Type: Null', 'Scyther-Delta', 'Misdreavus-Delta', 'Yanma-Delta',
			'Dwebble-Delta-C',
		],
	},
	{
		name: "[Gen 7] Monotype",
		desc: `All the Pok&eacute;mon on a team must share a type.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8411581/">USM Monotype</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['Same Type Clause', 'Standard', 'Evasion Abilities Clause', 'Swagger Clause'],
		banlist: [
			'Aegislash', 'Arceus', 'Blaziken', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Dialga', 'Genesect', 'Gengar-Mega', 'Giratina', 'Giratina-Origin',
			'Groudon', 'Ho-Oh', 'Hoopa-Unbound', 'Kangaskhan-Mega', 'Kartana', 'Kyogre', 'Kyurem-White', 'Lucario-Mega', 'Lugia', 'Lunala', 'Magearna',
			'Marshadow', 'Mawile-Mega', 'Medicham-Mega', 'Metagross-Mega', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia',
			'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Tapu Lele', 'Xerneas', 'Yveltal', 'Zekrom', 'Zygarde',
			'Battle Bond', 'Shadow Tag', 'Damp Rock', 'Focus Band', 'King\'s Rock', 'Quick Claw', 'Razor Fang', 'Smooth Rock', 'Terrain Extender', 'Baton Pass',
		],
	},
	{
		name: "[Gen 7] 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8031458/">USUM 1v1</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: [
			'Picked Team Size = 1', 'Max Team Size = 3',
			'Obtainable', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Swagger Clause', 'Evasion Moves Clause', 'Accuracy Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause',
		],
		banlist: [
			'Arceus', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Deoxys-Defense', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon',
			'Ho-Oh', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Marshadow', 'Mew', 'Mewtwo',
			'Mimikyu', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky',
			'Snorlax', 'Solgaleo', 'Tapu Koko', 'Xerneas', 'Yveltal', 'Zekrom', 'Moody', 'Focus Sash', 'Grass Whistle', 'Hypnosis',
			'Perish Song', 'Sing', 'Detect + Fightinium Z',
		],
	},
	{
		name: "[Gen 7] Anything Goes",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3587441/">Anything Goes Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3591711/">Anything Goes Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3646736/">Anything Goes Sample Teams</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
	},
	{
		name: "[Gen 7] ZU",
		desc: `The unofficial usage-based tier below PU.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3646743/">ZU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3643412/">ZU Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3646739/">ZU Sample Teams</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['[Gen 7] PU'],
		banlist: ['PU', 'ZUBL'],
	},
	{
		name: "[Gen 7] CAP",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3621207/">USUM CAP Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8691482/">USUM CAP Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8691484/">USUM CAP Sample Teams</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['[Gen 7] OU', '+CAP'],
	},
	{
		name: "[Gen 7] 3v3 Singles",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3601012/">Introduction to Battle Spot Singles</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3605970/">Battle Spot Singles Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3601658/">Battle Spot Singles Role Compendium</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3619162/">Battle Spot Singles Sample Teams</a>`,
		],

		mod: 'gen7',
		searchShow: false,
		ruleset: ['Flat Rules'],
	},
	{
		name: "[Gen 7] Custom Game",

		mod: 'gen7',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 120'],
	},

	// US/UM Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: "US/UM Doubles",
		column: 5,
	},
	{
		name: "[Gen 7] Doubles AG",
		mod: 'gen7',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard Doubles'],
	},
	{
		name: "[Gen 7] 4v4 Doubles",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3641100/">VGC 2019 Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3641123/">VGC 2019 Viability Rankings</a>`,
		],

		mod: 'gen7',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'VGC Timer'],
	},
	{
		name: "[Gen 7 Let's Go] Doubles OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3671748/#post-8685222">LGPE Doubles OU</a>`,
		],

		mod: 'gen7letsgo',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard Doubles', 'Sleep Clause Mod'],
		banlist: ['Mewtwo'],
	},
	{
		name: "[Gen 7] Doubles Custom Game",

		mod: 'gen7',
		gameType: 'doubles',
		searchShow: false,
		battle: {trunc: Math.trunc},
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 120'],
	},
];
