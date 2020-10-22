export default [
    {
        id: 'dragonborn',
        name: 'Dragonborn',
        image: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/340/420/618/636272677995471928.png',
        description: 'Born of dragons, as their name proclaims, the dragonborn walk proudly through a world that greets them with fearful incomprehension. Shaped by draconic gods or the dragons themselves, dragonborn originally hatched from dragon eggs as a unique race, combining the best attributes of dragons and humanoids. Some dragonborn are faithful servants to true dragons, others form the ranks of soldiers in great wars, and still others find themselves adrift, with no clear calling in life.',
        speed: 30,
        strength: 2,
        charisma: 1,
        racialTraits: [
            {
                id: 'draconic-ancestry',
                name: 'Draconic Ancestry',
                description: `You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table (pg. 34 of the Player's Handbook). Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.`,
            },
            {
                id: 'breath-weapon',
                name: 'Breath Weapon',
                description: 'You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can’t use it again until you complete a short or long rest.',
            },
            {
                id: 'damage-resistance',
                name: 'Damage Resistance',
                description: 'You have resistance to the damage type associated with your draconic ancestry.',
            },
            {
                id: 'languages',
                name: 'Languages',
                description: 'You can speak, read, and write Common and Draconic. Draconic is thought to be one of the oldest languages and is often used in the study of magic. The language sounds harsh to most other creatures and includes numerous hard consonants and sibilants.',
            }
        ]
    },
    {
        id: 'dwarf',
        name: 'Dwarf',
        image: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/254/420/618/636271781394265550.png',
        description: 'Kingdoms rich in ancient grandeur, halls carved into the roots of mountains, the echoing of picks and hammers in deep mines and blazing forges, a commitment to clan and tradition, and a burning hatred of goblins and orcs—these common threads unite all dwarves.',
        speed: 25,
        constitution: 2,
        racialTraits: [
            {
                id: 'darkvision',
                name: 'Darkvision',
                description: `Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.`,
            },
            {
                id: 'dwarven-resilience',
                name: 'Dwarven Resilience',
                description: `You have advantage on saving throws against poison, and you have resistance against poison damage (pg. 197 of the Player's Handbook).`,
            },
            {
                id: 'dwarven-combat-training',
                name: 'Dwarven Combat Training',
                description: 'You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.',
            },
            {
                id: 'stonecunning',
                name: 'Stonecunning',
                description: 'Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.',
            },
            {
                id: 'languages',
                name: 'Languages',
                description: 'You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.',
            }
        ]
    },
    {
        id: 'elf',
        name: 'Elf',
        image: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/7/639/420/618/636287075350739045.png',
        description: 'Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. They live in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light, where soft music drifts through the air and gentle fragrances waft on the breeze. Elves love nature and magic, art and artistry, music and poetry, and the good things of the world.',
        speed: 30,
        dexterity: 2,
        racialTraits: [
            {
                id: 'darkvision',
                name: 'Darkvision',
                description: `Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.`,
            },
            {
                id: 'keen-senses',
                name: 'Keen Senses',
                description: `You have proficiency in the Perception skill.`,
            },
            {
                id: 'fey-ancestry',
                name: 'Fey Ancestry',
                description: 'You have advantage on saving throws against being charmed, and magic can’t put you to sleep.',
            },
            {
                id: 'trance',
                name: 'Trance',
                description: 'Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.',
            },
            {
                id: 'languages',
                name: 'Languages',
                description: 'You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.',
            }
        ]
    },
    {
        id: 'gnome',
        name: 'Gnome',
        image: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/334/420/618/636272671553055253.png',
        description: 'A constant hum of busy activity pervades the warrens and neighborhoods where gnomes form their close-knit communities. Louder sounds punctuate the hum: a crunch of grinding gears here, a minor explosion there, a yelp of surprise or triumph, and especially bursts of laughter. Gnomes take delight in life, enjoying every moment of invention, exploration, investigation, creation, and play.',
        speed: 25,
        intelligence: 2,
        racialTraits: [
            {
                id: 'darkvision',
                name: 'Darkvision',
                description: `Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.`,
            },
            {
                id: 'gnome-cunning',
                name: 'Gnome Cunning',
                description: `You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.`,
            },
            {
                id: 'languages',
                name: 'Languages',
                description: 'You can speak, read, and write Common and Gnomish. The Gnomish language, which uses the Dwarvish script, is renowned for its technical treatises and its catalogs of knowledge about the natural world.',
            }
        ]
    },
    {
        id: 'half-elf',
        name: 'Half-Elf',
        image: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/481/420/618/636274618102950794.png',
        description: 'Walking in two worlds but truly belonging to neither, half-elves combine what some say are the best qualities of their elf and human parents: human curiosity, inventiveness, and ambition tempered by the refined senses, love of nature, and artistic tastes of the elves. Some half-elves live among humans, set apart by their emotional and physical differences, watching friends and loved ones age while time barely touches them. Others live with the elves, growing restless as they reach adulthood in the timeless elven realms, while their peers continue to live as children. Many half-elves, unable to fit into either society, choose lives of solitary wandering or join with other misfits and outcasts in the adventuring life.',
        speed: 30,
        charisma: 2,
        dexterity: 1,
        wisdom: 1,
        racialTraits: [
            {
                id: 'darkvision',
                name: 'Darkvision',
                description: `Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.`,
            },
            {
                id: 'fey-ancestry',
                name: 'Fey Ancestry',
                description: 'You have advantage on saving throws against being charmed, and magic can’t put you to sleep.',
            },
            {
                id: 'skill-versatility',
                name: 'Skill Versatility',
                description: 'You gain proficiency in two skills of your choice.',
            },
            {
                id: 'languages',
                name: 'Languages',
                description: 'You can speak, read, and write Common, Elvish, and one extra language of your choice.',
            }
        ]
    },
    {
        id: 'halfling',
        name: 'Halfling',
        image: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/256/420/618/636271789409776659.png',
        description: 'The comforts of home are the goals of most halflings’ lives: a place to settle in peace and quiet, far from marauding monsters and clashing armies; a blazing fire and a generous meal; fine drink and fine conversation. Though some halflings live out their days in remote agricultural communities, others form nomadic bands that travel constantly, lured by the open road and the wide horizon to discover the wonders of new lands and peoples. But even these wanderers love peace, food, hearth, and home, though home might be a wagon jostling along a dirt road or a raft floating downriver.',
        speed: 25,
        dexterity: 2,
        racialTraits: [
            {
                id: 'lucky',
                name: 'Lucky',
                description: `When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.`,
            },
            {
                id: 'brave',
                name: 'Brave',
                description: 'You have advantage on saving throws against being frightened.',
            },
            {
                id: 'halfling-nimbleness',
                name: 'Halfling Nimbleness',
                description: 'You can move through the space of any creature that is of a size larger than yours.',
            },
            {
                id: 'languages',
                name: 'Languages',
                description: 'You can speak, read, and write Common and Halfling. The Halfling language isn’t secret, but halflings are loath to share it with others. They write very little, so they don’t have a rich body of literature. Their oral tradition, however, is very strong. Almost all halflings speak Common to converse with the people in whose lands they dwell or through which they are traveling.',
            }
        ]
    },
    {
        id: 'half-orc',
        name: 'Half-Orc',
        image: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/466/420/618/636274570630462055.png',
        description: 'Whether united under the leadership of a mighty warlock or having fought to a standstill after years of conflict, orc and human tribes sometimes form alliances, joining forces into a larger horde to the terror of civilized lands nearby. When these alliances are sealed by marriages, half-orcs are born. Some half-orcs rise to become proud chiefs of orc tribes, their human blood giving them an edge over their full-blooded orc rivals. Some venture into the world to prove their worth among humans and other more civilized races. Many of these become adventurers, achieving greatness for their mighty deeds and notoriety for their barbaric customs and savage fury.',
        speed: 30,
        strength: 2,
        constitution: 1,
        racialTraits: [
            {
                id: 'darkvision',
                name: 'Darkvision',
                description: `Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.`,
            },
            {
                id: 'menacing',
                name: 'Menacing',
                description: `You gain proficiency in the Intimidation skill.`,
            },
            {
                id: 'relentless-endurance',
                name: 'Relentless Endurance',
                description: 'When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can’t use this feature again until you finish a long rest.',
            },
            {
                id: 'savage-attacks',
                name: 'Savage Attacks',
                description: 'When you score a critical hit with a melee weapon attack, you can roll one of the weapon’s damage dice one additional time and add it to the extra damage of the critical hit.',
            },
            {
                id: 'languages',
                name: 'Languages',
                description: 'You can speak, read, and write Common and Orc. Orc is a harsh, grating language with hard consonants. It has no script of its own but is written in the Dwarvish script.',
            }
        ]
    },
    {
        id: 'human',
        name: 'Human',
        image: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/258/420/618/636271801914013762.png',
        description: 'In the reckonings of most worlds, humans are the youngest of the common races, late to arrive on the world scene and short-lived in comparison to dwarves, elves, and dragons. Perhaps it is because of their shorter lives that they strive to achieve as much as they can in the years they are given. Or maybe they feel they have something to prove to the elder races, and that’s why they build their mighty empires on the foundation of conquest and trade. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.',
        speed: 30,
        strength: 1,
        dexterity: 1,
        constitution: 1,
        intelligence: 1,
        wisdom: 1,
        charisma: 1,
        racialTraits: [
            {
                id: 'languages',
                name: 'Languages',
                description: 'You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.',
            }
        ]
    },
    {
        id: 'tiefling',
        name: 'Tiefling',
        image: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/7/641/420/618/636287076637981942.png',
        description: 'To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: this is the lot of the tiefling. And to twist the knife, tieflings know that this is because a pact struck generations ago infused the essence of Asmodeus—overlord of the Nine Hells—into their bloodline. Their appearance and their nature are not their fault but the result of an ancient sin, for which they and their children and their children’s children will always be held accountable.',
        speed: 30,
        charisma: 2,
        intelligence: 1,
        racialTraits: [
            {
                id: 'darkvision',
                name: 'Darkvision',
                description: `Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.`,
            },
            {
                id: 'hellish-resistance',
                name: 'Hellish Resistance',
                description: 'You have resistance to fire damage.',
            },
            {
                id: 'infernal-legacy',
                name: 'Infernal Legacy',
                description: 'You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the hellish rebuke spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.',
            },
            {
                id: 'languages',
                name: 'Languages',
                description: 'You can speak, read, and write Common and Infernal.',
            }
        ]
    }
];