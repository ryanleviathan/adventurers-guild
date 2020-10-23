export default [
    {
        id: 'barbarian',
        name: 'Barbarian',
        image: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/342/420/618/636272680339895080.png',
        audio: '../assets/wizard-audio/barbarian.m4a',
        description: `People of towns and cities take pride in how their civilized ways set them apart from animals, as if denying one’s own nature was a mark of superiority. To a barbarian, though, civilization is no virtue, but a sign of weakness. The strong embrace their animal nature—keen instincts, primal physicality, and ferocious rage. Barbarians are uncomfortable when hedged in by walls and crowds. They thrive in the wilds of their homelands: the tundra, jungle, or grasslands where their tribes live and hunt.

        Barbarians come alive in the chaos of combat. They can enter a berserk state where rage takes over, giving them superhuman strength and resilience. A barbarian can draw on this reservoir of fury only a few times without resting, but those few rages are usually sufficient to defeat whatever threats arise. found on page 46 in the Players Handbook`,
        hitDie: 'd12',
        hitPoints: 12,
        primaryAbility: 'Strength',
        classProficiencies: [
            {
                id: 'armor',
                name: 'Armor',
                description: `Light armor, medium armor, shields.`,
            },
            {
                id: 'weapons',
                name: 'Weapons',
                description: 'Simple weapons, martial weapons.',
            },
            {
                id: 'saving-throws',
                name: 'Saving Throws',
                description: 'Strength, Constitution.',
            },
            {
                id: 'skills',
                name: 'Skills',
                description: 'Choose two from Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival.',
            }
        ],
        classEquipment: [
            {
                id: 'equipment',
                name: 'Equipment',
                description: `A greataxe or any martial melee weapon. 
                Two handaxes or any simple weapon. 
                An explorer’s pack and four javelins`,
            }
        ],
        classFeatures: [
            {
                id: 'rage',
                name: 'Rage',
                description: `In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action.

                While raging, you gain the following benefits if you aren’t wearing heavy armor: You have advantage on Strength checks and Strength saving throws. When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a barbarian, as shown in the Rage Damage column of the Barbarian table. You have resistance to bludgeoning, piercing, and slashing damage. If you are able to cast spells, you can’t cast them or concentrate on them while raging.
                
                Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven’t attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action.
                
                Once you have raged the number of times shown for your barbarian level in the Rages column of the Barbarian table, you must finish a long rest before you can rage again.`,
            },
            {
                id: 'unarmored-defense',
                name: 'Unarmored Defense',
                description: `While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.`,
            }
        ]
    },
    {
        id: 'bard',
        name: 'Bard',
        image: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/369/420/618/636272705936709430.png',
        audio: '../assets/wizard-audio/bard.m4a',
        description: `In the worlds of D&D, words and music are not just vibrations of air, but vocalizations with power all their own. The bard is a master of song, speech, and the magic they contain. Bards say that the multiverse was spoken into existence, that the words of the gods gave it shape, and that echoes of these primordial Words of Creation still resound throughout the cosmos. The music of bards is an attempt to snatch and harness those echoes, subtly woven into their spells and powers.

        The greatest strength of bards is their sheer versatility. Many bards prefer to stick to the sidelines in combat, using their magic to inspire their allies and hinder their foes from a distance. But bards are capable of defending themselves in melee if necessary, using their magic to bolster their swords and armor. Their spells lean toward charms and illusions rather than blatantly destructive spells. They have a wide-ranging knowledge of many subjects and a natural aptitude that lets them do almost anything well. Bards become masters of the talents they set their minds to perfecting, from musical performance to esoteric knowledge. found on page 51 in the Players Handbook`,
        hitDie: 'd8',
        hitPoints: 8,
        primaryAbility: 'Charisma',
        classProficiencies: [
            {
                id: 'armor',
                name: 'Armor',
                description: `Light armor.`,
            },
            {
                id: 'weapons',
                name: 'Weapons',
                description: 'Simple weapons, hand crossbows, longswords, rapiers, shortswords.',
            },
            {
                id: 'tools',
                name: 'Tools',
                description: 'Three musical instruments of your choice.',
            },
            {
                id: 'saving-throws',
                name: 'Saving Throws',
                description: 'Dexterity, Charisma.',
            },
            {
                id: 'skills',
                name: 'Skills',
                description: 'Choose any three.',
            }
        ],
        classEquipment: [
            {
                id: 'equipment',
                name: 'Equipment',
                description: `A rapier, a longsword, or any simple weapon.
                A diplomat’s pack or an entertainer’s pack.
                A lute or any other musical instrument.
                Leather armor and a dagger.`,
            }
        ],
        classFeatures: [
            {
                id: 'spellcasting',
                name: 'Spellcasting',
                description: `You have learned to untangle and reshape the fabric of reality in harmony with your wishes and music. Your spells are part of your vast repertoire, magic that you can tune to different situations. See Spells Rules for the general rules of spellcasting and the Spells Listing for the bard spell list (pg. 208 of the Player's Handbook).`,
            },
            {
                id: 'cantrips',
                name: 'Cantrips',
                description: `You know two cantrips of your choice from the bard spell list. You learn additional bard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Bard table.`,
            },
            {
                id: 'spell-slots',
                name: 'Spell Slots',
                description: `The Bard table shows how many spell slots you have to cast your bard spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell’s level or higher. You regain all expended spell slots when you finish a long rest.`,
            },
            {
                id: 'spell-known',
                name: 'Spell Known',
                description: `You know two 1st-level spells of your choice from the bard spell list.`,
            },
            {
                id: 'spellcasting-ability',
                name: 'Spellcasting Ability',
                description: `Charisma is your spellcasting ability for your bard spells. Your magic comes from the heart and soul you pour into the performance of your music or oration. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a bard spell you cast and when making an attack roll with one.`,
            },
            {
                id: 'spell-save-dc',
                name: 'Spell save DC',
                description: `8 + your proficiency bonus + your Charisma modifier.`,
            },
            {
                id: 'spell-attack-modifier ',
                name: 'Spell attack modifier ',
                description: `Your proficiency bonus + your Charisma modifier.`,
            },
            {
                id: 'ritual-casting',
                name: 'Ritual Casting',
                description: `You can cast any bard spell you know as a ritual if that spell has the ritual tag.`,
            },
            {
                id: 'spellcasting-focus',
                name: 'Spellcasting Focus',
                description: `You can use a musical instrument (see the Tools section) as a spellcasting focus for your bard spells.`,
            },
            {
                id: 'bardic-inspiration',
                name: 'Bardic Inspiration',
                description: `You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6.

                Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the DM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.
                
                You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest.`,
            }
        ]
    },
    {
        id: 'cleric',
        name: 'Cleric',
        image: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/371/420/618/636272706155064423.png',
        audio: '../assets/wizard-audio/cleric.m4a',
        description: `Divine magic, as the name suggests, is the power of the gods, flowing from them into the world. Clerics are conduits for that power, manifesting it as miraculous effects. The gods don’t grant this power to everyone who seeks it, but only to those chosen to fulfill a high calling.
        
        Harnessing divine magic doesn’t rely on study or training. A cleric might learn formulaic prayers and ancient rites, but the ability to cast cleric spells relies on devotion and an intuitive sense of a deity’s wishes.
        
        Clerics combine the helpful magic of healing and inspiring their allies with spells that harm and hinder foes. They can provoke awe and dread, lay curses of plague or poison, and even call down flames from heaven to consume their enemies. For those evildoers who will benefit most from a mace to the head, clerics depend on their combat training to let them wade into melee with the power of the gods on their side. found on page 56 in the Players Handbook`,
        hitDie: 'd8',
        hitPoints: 8,
        primaryAbility: 'Wisdom',
        classProficiencies: [
            {
                id: 'armor',
                name: 'Armor',
                description: `Light armor, medium armor, shields.`,
            },
            {
                id: 'weapons',
                name: 'Weapons',
                description: 'Simple weapons.',
            },
            {
                id: 'saving-throws',
                name: 'Saving Throws',
                description: 'Wisdom, Charisma.',
            },
            {
                id: 'skills',
                name: 'Skills',
                description: 'Choose two from History, Insight, Medicine, Persuasion, and Religion.',
            }
        ],
        classEquipment: [
            {
                id: 'equipment',
                name: 'Equipment',
                description: `A mace or a warhammer (if proficient).
                Scale mail, leather armor, or chain mail (if proficient).
                A light crossbow and 20 bolts or any simple weapon.
                A priest’s pack or an explorer’s pack.
                A shield and a holy symbol.`,
            }
        ],
        classFeatures: [
            {
                id: 'spellcasting',
                name: 'Spellcasting',
                description: `As a conduit for divine power, you can cast cleric spells. See Spells Rules for the general rules of spellcasting and the Spells Listing for the cleric spell list (pg. 57 of the Player's Handbook).`,
            },
            {
                id: 'cantrips',
                name: 'Cantrips',
                description: `At 1st level, you know three cantrips of your choice from the cleric spell list. You learn additional cleric cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Cleric table.`,
            },
            {
                id: 'preparing-casting',
                name: 'Preparing and Casting Spells',
                description: `The Cleric table shows how many spell slots you have to cast your cleric spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell’s level or higher. You regain all expended spell slots when you finish a long rest.

                You prepare the list of cleric spells that are available for you to cast, choosing from the cleric spell list. When you do so, choose a number of cleric spells equal to your Wisdom modifier + your cleric level (minimum of one spell). The spells must be of a level for which you have spell slots.`,
            },
            {
                id: 'spell-save-dc',
                name: 'Spell save DC',
                description: `8 + your proficiency bonus + your Wisdom modifier.`,
            },
            {
                id: 'spell-attack-modifier ',
                name: 'Spell attack modifier ',
                description: `Your proficiency bonus + your Wisdom modifier.`,
            },
            {
                id: 'ritual-casting',
                name: 'Ritual Casting',
                description: `You can cast a cleric spell as a ritual if that spell has the ritual tag and you have the spell prepared.`,
            },
            {
                id: 'spellcasting-focus',
                name: 'Spellcasting Focus',
                description: `You can use a holy symbol (see the Tools section) as a spellcasting focus for your cleric spells.`,
            },
            {
                id: 'divine-domain',
                name: 'Divine Domain',
                description: `Choose one domain related to your deity: Knowledge, Life, Light, Nature, Tempest, Trickery, or War. The Life domain is detailed at the end of the class description and provides examples of gods associated with it. See the Player’s Handbook for details on all the domains.Your choice grants you domain spells and other features when you choose it at 1st level.`,
            },
            {
                id: 'turn-undead',
                name: 'Turn Undead',
                description: `As an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.

                A turned creature must spend its turns trying to move as far away from you as it can, and it can’t willingly move to a space within 30 feet of you. It also can’t take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there’s nowhere to move, the creature can use the Dodge action.`,
            }
        ]
    },
    {
        id: 'druid',
        name: 'Druid',
        image: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/346/420/618/636272691461725405.png',
        audio: '../assets/wizard-audio/druid.m4a',
        description: `Druids revere nature above all, gaining their spells and other magical powers either from the force of nature itself or from a nature deity. Many druids pursue a mystic spirituality of transcendent union with nature rather than devotion to a divine entity, while others serve gods of wild nature, animals, or elemental forces. The ancient druidic traditions are sometimes called the Old Faith, in contrast to the worship of gods in temples and shrines.

        Druid spells are oriented toward nature and animals—the power of tooth and claw, of sun and moon, of fire and storm. Druids also gain the ability to take on animal forms, and some druids make a particular study of this practice, even to the point where they prefer animal form to their natural form. found on page 64 in the Players Handbook`,
        hitDie: 'd8',
        hitPoints: 8,
        primaryAbility: 'Wisdom',
        classProficiencies: [
            {
                id: 'armor',
                name: 'Armor',
                description: `Light armor, medium armor, shields (druids will not wear armor or use shields made of metal).`,
            },
            {
                id: 'weapons',
                name: 'Weapons',
                description: 'Clubs, daggers, darts, javelins, maces, quarterstaffs, scimitars, sickles, slings, spears.',
            },
            {
                id: 'tools',
                name: 'Tools',
                description: 'Herbalism kit.',
            },
            {
                id: 'saving-throws',
                name: 'Saving Throws',
                description: 'Intelligence, Wisdom.',
            },
            {
                id: 'skills',
                name: 'Skills',
                description: 'Choose two from Arcana, Animal Handling, Insight, Medicine, Nature, Perception, Religion, and Survival.',
            }
        ],
        classEquipment: [
            {
                id: 'equipment',
                name: 'Equipment',
                description: `A wooden shield or any simple weapon.
                A scimitar or any simple melee weapon.
                Leather armor, an explorer’s pack, and a druidic focus.`,
            }
        ],
        classFeatures: [
            {
                id: 'druidic',
                name: 'Druidic',
                description: `You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the message’s presence with a successful DC 15 Wisdom (Perception) check but can’t decipher it without magic.`,
            },
            {
                id: 'spellcasting',
                name: 'Spellcasting',
                description: `Drawing on the divine essence of nature itself, you can cast spells to shape that essence to your will. See Spells Rules for the general rules of spellcasting and the Spells Listing for the druid spell list (pg. 65 of the Player's Handbook).`,
            },
            {
                id: 'cantrips',
                name: 'Cantrips',
                description: `At 1st level, you know two cantrips of your choice from the druid spell list. You learn additional druid cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Druid table.`,
            },
            {
                id: 'preparing-casting',
                name: 'Preparing and Casting Spells',
                description: `The Druid table shows how many spell slots you have to cast your druid spells of 1st level and higher. To cast one of these druid spells, you must expend a slot of the spell’s level or higher. You regain all expended spell slots when you finish a long rest.

                You prepare the list of druid spells that are available for you to cast, choosing from the druid spell list. When you do so, choose a number of druid spells equal to your Wisdom modifier + your druid level (minimum of one spell). The spells must be of a level for which you have spell slots.`,
            },
            {
                id: 'spell-save-dc',
                name: 'Spell save DC',
                description: `8 + your proficiency bonus + your Wisdom modifier.`,
            },
            {
                id: 'spell-attack-modifier ',
                name: 'Spell attack modifier ',
                description: `Your proficiency bonus + your Wisdom modifier.`,
            },
            {
                id: 'ritual-casting',
                name: 'Ritual Casting',
                description: `You can cast a druid spell as a ritual if that spell has the ritual tag and you have the spell prepared.`,
            },
            {
                id: 'spellcasting-focus',
                name: 'Spellcasting Focus',
                description: `You can use a druidic focus (see the Tools section) as a spellcasting focus for your druid spells.`,
            }
        ]
    },
    {
        id: 'fighter',
        name: 'Fighter',
        image: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/359/420/618/636272697874197438.png',
        audio: '../assets/wizard-audio/fighter.m4a',
        description: `Fighters learn the basics of all combat styles. Every fighter can swing an axe, fence with a rapier, wield a longsword or a greatsword, use a bow, and even trap foes in a net with some degree of skill. Likewise, a fighter is adept with shields and every form of armor. Beyond that basic degree of familiarity, each fighter specializes in a certain style of combat. Some concentrate on archery, some on fighting with two weapons at once, and some on augmenting their martial skills with magic. This combination of broad general ability and extensive specialization makes fighters superior combatants on battlefields and in dungeons alike. found on page 70 in the Players Handbook`,
        hitDie: 'd10',
        hitPoints: 10,
        primaryAbility: 'Strength or Dexterity',
        classProficiencies: [
            {
                id: 'armor',
                name: 'Armor',
                description: `All armor, shields.`,
            },
            {
                id: 'weapons',
                name: 'Weapons',
                description: 'Simple weapons, martial weapons.',
            },
            {
                id: 'saving-throws',
                name: 'Saving Throws',
                description: 'Strength, Constitution.',
            },
            {
                id: 'skills',
                name: 'Skills',
                description: 'Choose two skills from Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Perception, and Survival.',
            }
        ],
        classEquipment: [
            {
                id: 'equipment',
                name: 'Equipment',
                description: `Chain mail or leather armor, longbow, and 20 arrows.
                A martial weapon and a shield or two martial weapons.
                A light crossbow and 20 bolts or two handaxes.
                A dungeoneer’s pack or an explorer’s pack.`,
            }
        ],
        classFeatures: [
            {
                id: 'fighting-style',
                name: 'Fighting Style',
                description: `You adopt a particular style of fighting as your specialty. Choose one of the following options. You can’t take a Fighting Style option more than once, even if you later get to choose again (pg. 72 of the Player's Handbook).`,
            },
            {
                id: 'second-wind',
                name: 'Second Wind',
                description: `You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again.`,
            }
        ]
    },
    {
        id: 'monk',
        name: 'Monk',
        image: 'https://media-waterdeep.cursecdn.com/attachments/thumbnails/5/899/400/601/scag04-08.png',
        audio: '../assets/wizard-audio/monk.m4a',
        description: `Monks make careful study of a magical energy that most monastic traditions call ki. This energy is an element of the magic that suffuses the multiverse—specifically, the element that flows through living bodies. Monks harness this power within themselves to create magical effects and exceed their bodies’ physical capabilities, and some of their special attacks can hinder the flow of ki in their opponents. Using this energy, monks channel uncanny speed and strength into their unarmed strikes. As they gain experience, their martial training and their mastery of ki gives them more power over their bodies and the bodies of their foes. found on page 76 in the Players Handbook`,
        hitDie: 'd8',
        hitPoints: 8,
        primaryAbility: 'Dexterity and Wisdom',
        classProficiencies: [
            {
                id: 'armor',
                name: 'Armor',
                description: `None.`,
            },
            {
                id: 'weapons',
                name: 'Weapons',
                description: 'Simple weapons, shortswords.',
            },
            {
                id: 'tools',
                name: 'Tools',
                description: 'Choose one type of artisan’s tools or one musical instrument.',
            },
            {
                id: 'saving-throws',
                name: 'Saving Throws',
                description: 'Strength, Dexterity.',
            },
            {
                id: 'skills',
                name: 'Skills',
                description: 'Choose two from Acrobatics, Athletics, History, Insight, Religion, and Stealth.',
            }
        ],
        classEquipment: [
            {
                id: 'equipment',
                name: 'Equipment',
                description: `A shortsword or any simple weapon.
                A dungeoneer’s pack or an explorer’s pack.
                10 darts.`,
            }
        ],
        classFeatures: [
            {
                id: 'unarmored-defense',
                name: 'Unarmored Defense',
                description: `Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.`,
            },
            {
                id: 'martial-arts',
                name: 'Martial Arts',
                description: `At 1st level, your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don’t have the two-handed or heavy property.

                You gain the following benefits while you are unarmed or wielding only monk weapons and you aren’t wearing armor or wielding a shield: You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons.
                You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels, as shown in the Martial Arts column of the Monk table. When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action.`,
            }
        ]
    },
    {
        id: 'paladin',
        name: 'Paladin',
        image: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/365/420/618/636272701937419552.png',
        audio: '../assets/wizard-audio/paladin.m4a',
        description: `A paladin swears to uphold justice and righteousness, to stand with the good things of the world against the encroaching darkness, and to hunt the forces of evil wherever they lurk. Different paladins focus on various aspects of the cause of righteousness, but all are bound by the oaths that grant them power to do their sacred work. Although many paladins are devoted to gods of good, a paladin’s power comes as much from a commitment to justice itself as it does from a god.

        Paladins train for years to learn the skills of combat, mastering a variety of weapons and armor. Even so, their martial skills are secondary to the magical power they wield: power to heal the sick and injured, to smite the wicked and the undead, and to protect the innocent and those who join them in the fight for justice. found on page 82 in the Players Handbook`,
        hitDie: 'd10',
        hitPoints: 10,
        primaryAbility: 'Strength and Charisma',
        classProficiencies: [
            {
                id: 'armor',
                name: 'Armor',
                description: `All armor, shields.`,
            },
            {
                id: 'weapons',
                name: 'Weapons',
                description: 'Simple weapons, martial weapons.',
            },
            {
                id: 'saving-throws',
                name: 'Saving Throws',
                description: 'Wisdom, Charisma.',
            },
            {
                id: 'skills',
                name: 'Skills',
                description: 'Choose two from Athletics, Insight, Intimidation, Medicine, Persuasion, and Religion.',
            }
        ],
        classEquipment: [
            {
                id: 'equipment',
                name: 'Equipment',
                description: `A martial weapon and a shield or two martial weapons.
                Five javelins or any simple melee weapon.
                A priest’s pack or an explorer’s pack.
                Chain mail and a holy symbol.`,
            }
        ],
        classFeatures: [
            {
                id: 'divine-sense',
                name: 'Divine Sense',
                description: `The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity (the vampire Count Strahd von Zarovich, for instance). Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the hallow spell.

                You can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses.`,
            },
            {
                id: 'lay-on-hands',
                name: 'Lay on Hands',
                description: `Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level × 5.

                As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool.
                
                Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one.
                
                This feature has no effect on undead and constructs.`,
            }
        ]
    },
    {
        id: 'ranger',
        name: 'Ranger',
        image: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/367/420/618/636272702826438096.png',
        audio: '../assets/wizard-audio/ranger.m4a',
        description: `Warriors of the wilderness, rangers specialize in hunting the monsters that threaten the edges of civilization—humanoid raiders, rampaging beasts and monstrosities, terrible giants, and deadly dragons. They learn to track their quarry as a predator does, moving stealthily through the wilds and hiding themselves in brush and rubble. Rangers focus their combat training on techniques that are particularly useful against their specific favored foes.

        Thanks to their familiarity with the wilds, rangers acquire the ability to cast spells that harness nature’s power, much as a druid does. Their spells, like their combat abilities, emphasize speed, stealth, and the hunt. A ranger’s talents and abilities are honed with deadly focus on the grim task of protecting the borderlands. found on page 89 in the Players Handbook`,
        hitDie: 'd10',
        hitPoints: 10,
        primaryAbility: 'Dexterity and Wisdom',
        classProficiencies: [
            {
                id: 'armor',
                name: 'Armor',
                description: `Light armor, medium armor, shields.`,
            },
            {
                id: 'weapons',
                name: 'Weapons',
                description: 'Simple weapons, martial weapons.',
            },
            {
                id: 'saving-throws',
                name: 'Saving Throws',
                description: 'Strength, Dexterity.',
            },
            {
                id: 'skills',
                name: 'Skills',
                description: 'Choose three from Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, and Survival.',
            }
        ],
        classEquipment: [
            {
                id: 'equipment',
                name: 'Equipment',
                description: `Scale mail or leather armor.
                Two shortswords or two simple melee weapons.
                A dungeoneer’s pack or an explorer’s pack.
                A longbow and a quiver of 20 arrows.`,
            }
        ],
        classFeatures: [
            {
                id: 'favored-enemy',
                name: 'Favored Enemy',
                description: `Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.

                Choose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies.
                
                You have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.
                
                When you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.`,
            },
            {
                id: 'natural-explorer',
                name: 'Natural Explorer',
                description: `You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, swamp, or the Underdark. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you’re proficient in.

                While traveling for an hour or more in your favored terrain, you gain the following benefits: Difficult terrain doesn’t slow your group’s travel. Your group can’t become lost except by magical means. Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger. If you are traveling alone, you can move stealthily at a normal pace. When you forage, you find twice as much food as you normally would. While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.`,
            }
        ]
    },
    {
        id: 'rogue',
        name: 'Rogue',
        image: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/384/420/618/636272820319276620.png',
        audio: '../assets/wizard-audio/rogue.m4a',
        description: `Rogues devote as much effort to mastering the use of a variety of skills as they do to perfecting their combat abilities, giving them a broad expertise that few other characters can match. Many rogues focus on stealth and deception, while others refine the skills that help them in a dungeon environment, such as climbing, finding and disarming traps, and opening locks.

        When it comes to combat, rogues prioritize cunning over brute strength. A rogue would rather make one precise strike, placing it exactly where the attack will hurt the target most, than wear an opponent down with a barrage of attacks. Rogues have an almost supernatural knack for avoiding danger, and a few learn magical tricks to supplement their other abilities. found on page 94 in the Players Handbook`,
        hitDie: 'd8',
        hitPoints: 8,
        primaryAbility: 'Dexterity',
        classProficiencies: [
            {
                id: 'armor',
                name: 'Armor',
                description: `Light armor.`,
            },
            {
                id: 'weapons',
                name: 'Weapons',
                description: 'Simple weapons, hand crossbows, longswords, rapiers, shortswords.',
            },
            {
                id: 'tools',
                name: 'Tools',
                description: 'Thieves’ tools.',
            },
            {
                id: 'saving-throws',
                name: 'Saving Throws',
                description: 'Dexterity, Intelligence.',
            },
            {
                id: 'skills',
                name: 'Skills',
                description: 'Choose four from Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Performance, Persuasion, Sleight of Hand, and Stealth.',
            }
        ],
        classEquipment: [
            {
                id: 'equipment',
                name: 'Equipment',
                description: `A rapier or a shortsword.
                A shortbow and quiver of 20 arrows or a shortsword.
                A burglar’s pack, a dungeoneer’s pack, or an explorer’s pack.
                Leather armor, two daggers, and thieves’ tools.`,
            }
        ],
        classFeatures: [
            {
                id: 'expertise',
                name: 'Expertise',
                description: `At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves’ tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.

                At 6th level, you can choose two more of your proficiencies (in skills or with thieves’ tools) to gain this benefit.`,
            },
            {
                id: 'sneak-attack',
                name: 'Sneak Attack',
                description: `Beginning at 1st level, you know how to strike subtly and exploit a foe’s distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon.

                You don’t need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn’t incapacitated, and you don’t have disadvantage on the attack roll.
                
                The amount of the extra damage increases as you gain levels in this class, as shown in the Sneak Attack column of the Rogue table (pg. 96 of the Player's Handbook).`,
            },
            {
                id: 'thieves-cant',
                name: 'Thieves Cant',
                description: `During your rogue training you learned thieves’ cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves’ cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly.

                In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves’ guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run.`,
            }
        ]
    },
    {
        id: 'sorcerer',
        name: 'Sorcerer',
        image: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/485/420/618/636274643818663058.png',
        audio: '../assets/wizard-audio/sorcerer.m4a',
        description: `Magic is a part of every sorcerer, suffusing body, mind, and spirit with a latent power that waits to be tapped. Some sorcerers wield magic that springs from an ancient bloodline infused with the magic of dragons. Others carry a raw, uncontrolled magic within them, a chaotic storm that manifests in unexpected ways.

        The appearance of sorcerous powers is wildly unpredictable. Some draconic bloodlines produce exactly one sorcerer in every generation, but in other lines of descent every individual is a sorcerer. Most of the time, the talents of sorcery appear as apparent flukes. Some sorcerers can’t name the origin of their power, while others trace it to strange events in their own lives. The touch of a demon, the blessing of a dryad at a baby’s birth, or a taste of the water from a mysterious spring might spark the gift of sorcery. So too might the gift of a deity of magic, exposure to the elemental forces of the Inner Planes or the maddening chaos of Limbo, or a glimpse into the inner workings of reality.
        
        Sorcerers have no use for the spellbooks and ancient tomes of magic lore that wizards rely on, nor do they rely on a patron to grant their spells as warlocks do. By learning to harness and channel their own inborn magic, they can discover new and staggering ways to unleash that power. found on page 99 in the Players Handbook`,
        hitDie: 'd6',
        hitPoints: 6,
        primaryAbility: 'Charisma',
        classProficiencies: [
            {
                id: 'armor',
                name: 'Armor',
                description: `None.`,
            },
            {
                id: 'weapons',
                name: 'Weapons',
                description: 'Daggers, darts, slings, quarterstaffs, light crossbows.',
            },
            {
                id: 'saving-throws',
                name: 'Saving Throws',
                description: 'Constitution, Charisma.',
            },
            {
                id: 'skills',
                name: 'Skills',
                description: 'Choose two from Arcana, Deception, Insight, Intimidation, Persuasion, and Religion.',
            }
        ],
        classEquipment: [
            {
                id: 'equipment',
                name: 'Equipment',
                description: `A light crossbow and 20 bolts or any simple weapon.
                A component pouch or an arcane focus.
                A dungeoneer’s pack or an explorer’s pack.
                Two daggers.`,
            }
        ],
        classFeatures: [
            {
                id: 'spellcasting',
                name: 'Spellcasting',
                description: `An event in your past, or in the life of a parent or ancestor, left an indelible mark on you, infusing you with arcane magic. This font of magic, whatever its origin, fuels your spells. See Spells Rules for the general rules of spellcasting and the Spells Listing for the sorcerer spell list (pg. 209 of the Player's Handbook).`,
            },
            {
                id: 'cantrips',
                name: 'Cantrips',
                description: `At 1st level, you know four cantrips of your choice from the sorcerer spell list. You learn additional sorcerer cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Sorcerer table.`,
            },
            {
                id: 'spell-slots',
                name: 'Spell Slots',
                description: `The Sorcerer table shows how many spell slots you have to cast your sorcerer spells of 1st level and higher. To cast one of these sorcerer spells, you must expend a slot of the spell’s level or higher. You regain all expended spell slots when you finish a long rest.`,
            },
            {
                id: 'spell-known',
                name: 'Spell Known',
                description: `You know two 1st-level spells of your choice from the sorcerer spell list.`,
            },
            {
                id: 'spellcasting-ability',
                name: 'Spellcasting Ability',
                description: `Charisma is your spellcasting ability for your sorcerer spells, since the power of your magic relies on your ability to project your will into the world. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a sorcerer spell you cast and when making an attack roll with one.`,
            },
            {
                id: 'spell-save-dc',
                name: 'Spell save DC',
                description: `8 + your proficiency bonus + your Charisma modifier.`,
            },
            {
                id: 'spell-attack-modifier ',
                name: 'Spell attack modifier ',
                description: `Your proficiency bonus + your Charisma modifier.`,
            },
            {
                id: 'spellcasting-focus',
                name: 'Spellcasting Focus',
                description: `You can use an arcane focus as a spellcasting focus for your sorcerer spells.`,
            },
            {
                id: 'sorcerous-origin',
                name: 'Sorcerous Origin',
                description: `Choose a sorcerous origin, which describes the source of your innate magical power: Draconic Bloodline, detailed at the end of the class description, or one from another source.`,
            },
            {
                id: 'sorcery-points',
                name: 'Sorcery Points',
                description: `You have 2 sorcery points, and you gain more as you reach higher levels, as shown in the Sorcery Points column of the Sorcerer table (pg. 101 of the Player's Handbook). You can never have more sorcery points than shown on the table for your level. You regain all spent sorcery points when you finish a long rest.`,
            },
            {
                id: 'flexible-casting',
                name: 'Flexible Casting',
                description: `You can use your sorcery points to gain additional spell slots, or sacrifice spell slots to gain additional sorcery points. You learn other ways to use your sorcery points as you reach higher levels.`,
            },
            {
                id: 'creating-spell-slots',
                name: 'Creating Spell Slots',
                description: `You can transform unexpended sorcery points into one spell slot as a bonus action on your turn. The Creating Spell Slots table shows the cost of creating a spell slot of a given level. You can create spell slots no higher in level than 5th.

                Any spell slot you create with this feature vanishes when you finish a long rest.`,
            }
        ]
    },
    {
        id: 'warlock',
        name: 'Warlock',
        image: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/375/420/618/636272708661726603.png',
        audio: '../assets/wizard-audio/warlock.m4a',
        description: `A warlock is defined by a pact with an otherworldly being. Sometimes the relationship between warlock and patron is like that of a cleric and a deity, though the beings that serve as patrons for warlocks are not gods. A warlock might lead a cult dedicated to a demon prince, an archdevil, or an utterly alien entity—beings not typically served by clerics. More often, though, the arrangement is similar to that between a master and an apprentice. The warlock learns and grows in power, at the cost of occasional services performed on the patron’s behalf.

        The magic bestowed on a warlock ranges from minor but lasting alterations to the warlock’s being (such as the ability to see in darkness or to read any language) to access to powerful spells. Unlike bookish wizards, warlocks supplement their magic with some facility at hand-to-hand combat. They are comfortable in light armor and know how to use simple weapons. found on page 105 in the Players Handbook`,
        hitDie: 'd8',
        hitPoints: 8,
        primaryAbility: 'Charisma',
        classProficiencies: [
            {
                id: 'armor',
                name: 'Armor',
                description: `Light armor.`,
            },
            {
                id: 'weapons',
                name: 'Weapons',
                description: 'Simple weapons.',
            },
            {
                id: 'saving-throws',
                name: 'Saving Throws',
                description: 'Wisdom, Charisma.',
            },
            {
                id: 'skills',
                name: 'Skills',
                description: 'Choose two skills from Arcana, Deception, History, Intimidation, Investigation, Nature, and Religion.',
            }
        ],
        classEquipment: [
            {
                id: 'equipment',
                name: 'Equipment',
                description: `A light crossbow and 20 bolts or any simple weapon.
                A component pouch or an arcane focus.
                A scholar’s pack or a dungeoneer’s pack.
                Leather armor, any simple weapon, and two daggers.`,
            }
        ],
        classFeatures: [
            {
                id: 'otherworldly-patron',
                name: 'Otherworldly Patron',
                description: `At 1st level, you have struck a bargain with an otherworldly being of your choice: the Fiend, which is detailed at the end of the class description, or one from another source (pg. 108 of the Player's Handbook). Your choice grants you features at 1st level and again at 6th, 10th, and 14th level.`,
            },
            {
                id: 'pact-magic',
                name: 'Pact Magic',
                description: `Your arcane research and the magic bestowed on you by your patron have given you facility with spells. See Spells Rules for the general rules of spellcasting and the Spells Listing for the warlock spell list (pg. 210 of the Player's Handbook).`,
            },
            {
                id: 'cantrips',
                name: 'Cantrips',
                description: `You know two cantrips of your choice from the warlock spell list. You learn additional warlock cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Warlock table.`,
            },
            {
                id: 'spell-slots',
                name: 'Spell Slots',
                description: `The Warlock table shows how many spell slots you have to cast your warlock spells of 1st through 5th level. The table also shows what the level of those slots is; all of your spell slots are the same level. To cast one of your warlock spells of 1st level or higher, you must expend a spell slot. You regain all expended spell slots when you finish a short or long rest.`,
            },
            {
                id: 'spell-known',
                name: 'Spell Known',
                description: `At 1st level, you know two 1st-level spells of your choice from the warlock spell list.`,
            },
            {
                id: 'spellcasting-ability',
                name: 'Spellcasting Ability',
                description: `Charisma is your spellcasting ability for your warlock spells, so you use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a warlock spell you cast and when making an attack roll with one.`,
            },
            {
                id: 'spell-save-dc',
                name: 'Spell save DC',
                description: `8 + your proficiency bonus + your Charisma modifier.`,
            },
            {
                id: 'spell-attack-modifier ',
                name: 'Spell attack modifier ',
                description: `Your proficiency bonus + your Charisma modifier.`,
            },
            {
                id: 'spellcasting-focus',
                name: 'Spellcasting Focus',
                description: `You can use an arcane focus as a spellcasting focus for your warlock spells.`,
            }
        ]
    },
    {
        id: 'wizard',
        name: 'Wizard',
        image: 'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/357/420/618/636272696881281556.png',
        audio: '../assets/wizard-audio/wizard.m4a',
        description: `Wild and enigmatic, varied in form and function, the power of magic draws students who seek to master its mysteries. Some aspire to become like the gods, shaping reality itself. Though the casting of a typical spell requires merely the utterance of a few strange words, fleeting gestures, and sometimes a pinch or clump of exotic materials, these surface components barely hint at the expertise attained after years of apprenticeship and countless hours of study.

        Wizards live and die by their spells. Everything else is secondary. They learn new spells as they experiment and grow in experience. They can also learn them from other wizards, from ancient tomes or inscriptions, and from ancient creatures (such as the fey) that are steeped in magic. found on page 112 in the Players Handbook`,
        hitDie: 'd6',
        hitPoints: 6,
        primaryAbility: 'Intelligence',
        classProficiencies: [
            {
                id: 'armor',
                name: 'Armor',
                description: `None.`,
            },
            {
                id: 'weapons',
                name: 'Weapons',
                description: 'Daggers, darts, slings, quarterstaffs, light crossbows.',
            },
            {
                id: 'saving-throws',
                name: 'Saving Throws',
                description: 'Intelligence, Wisdom.',
            },
            {
                id: 'skills',
                name: 'Skills',
                description: 'Choose two from Arcana, History, Insight, Investigation, Medicine, and Religion.',
            }
        ],
        classEquipment: [
            {
                id: 'equipment',
                name: 'Equipment',
                description: `A quarterstaff or a dagger.
                A component pouch or an arcane focus.
                A scholar’s pack or an explorer’s pack.
                A spellbook.`,
            }
        ],
        classFeatures: [
            {
                id: 'spellcasting',
                name: 'Spellcasting',
                description: `As a student of arcane magic, you have a spellbook containing spells that show the first glimmerings of your true power. See Spells Rules for the general rules of spellcasting and the Spells Listing for the wizard spell list (pg. 210 of the Player's Handbook).`,
            },
            {
                id: 'cantrips',
                name: 'Cantrips',
                description: `At 1st level, you know three cantrips of your choice from the wizard spell list. You learn additional wizard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Wizard table.`,
            },
            {
                id: 'spellbook',
                name: 'Spellbook',
                description: `At 1st level, you have a spellbook containing six 1st-level wizard spells of your choice. Your spellbook is the repository of the wizard spells you know, except your cantrips, which are fixed in your mind.`,
            },
            {
                id: 'preparing-casting',
                name: 'Preparing and Casting Spells',
                description: `The Wizard table shows how many spell slots you have to cast your wizard spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell’s level or higher. You regain all expended spell slots when you finish a long rest.

                You prepare the list of wizard spells that are available for you to cast. To do so, choose a number of wizard spells from your spellbook equal to your Intelligence modifier + your wizard level (minimum of one spell). The spells must be of a level for which you have spell slots.`,
            },
            {
                id: 'spellcasting-ability',
                name: 'Spellcasting Ability',
                description: `Intelligence is your spellcasting ability for your wizard spells, since you learn your spells through dedicated study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for a wizard spell you cast and when making an attack roll with one.`,
            },
            {
                id: 'spell-save-dc',
                name: 'Spell save DC',
                description: `8 + your proficiency bonus + your Intelligence modifier.`,
            },
            {
                id: 'spell-attack-modifier ',
                name: 'Spell attack modifier ',
                description: `Your proficiency bonus + your Intelligence modifier.`,
            },
            {
                id: 'ritual-casting',
                name: 'Ritual Casting',
                description: `You can cast a wizard spell as a ritual if that spell has the ritual tag and you have the spell in your spellbook. You don’t need to have the spell prepared.`,
            },
            {
                id: 'spellcasting-focus',
                name: 'Spellcasting Focus',
                description: `You can use an arcane focus as a spellcasting focus for your wizard spells.`,
            },
            {
                id: 'arcane-recovery',
                name: 'Arcane Recovery',
                description: `You have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher.`,
            }
        ]
    },
];