(function () {
  "use strict";

  // Cada entrada:
  // { c:categoria, n:nome, t:[tipoPT,tipoEN], p:caminho, img:"pasta/arquivo.png"(opcional),
  //   d:[descPT,descEN], m:[[chaveRotulo, valorPT, valorEN(opcional)], ...] }
  // Dados extraídos dos arquivos reais do jogo (fraquezas, armas, fases, coletáveis).
  var catalog = [
    // ===================== CHEFES =====================
    {c:"chefes",n:"Optic Sunflower",t:["Maverick — Luz","Maverick — Light"],p:"src/Actors/Bosses/OpticSunflower",img:"bosses/OpticSunflower.png",
      d:["Maverick de Nova Geração que domina feixes de luz e lasers concentrados na Base Troia. Ataca com raios giratórios e a técnica Shining Ray.",
         "New Generation Maverick who wields concentrated light beams and lasers at Troia Base. Attacks with rotating rays and the Shining Ray technique."],
      m:[["stage","Base Troia","Troia Base"],["weak","Blast Launcher (de Bamboo Pandamonium)","Blast Launcher (from Bamboo Pandamonium)"],["grants","Optic Shield / Ray Gun / Tenshouha","Optic Shield / Ray Gun / Tenshouha"]]},
    {c:"chefes",n:"Bamboo Pandamonium",t:["Maverick — Planta","Maverick — Plant"],p:"src/Actors/Bosses/BambooPandamonium",img:"bosses/BambooPandamonium.png",
      d:["Guardião de bambu da Floresta Ergânica, luta com investidas e estacas gigantes. Também pode ser esmagado pela Ride Armor Cyclops da fase.",
         "Bamboo guardian of Booster Forest who fights with charges and giant stakes. Can also be crushed by the stage's Cyclops Ride Armor."],
      m:[["stage","Floresta Ergânica","Booster Forest"],["weak","Fire Dash (de Burn Rooster) / Ride Armor","Fire Dash (from Burn Rooster) / Ride Armor"],["grants","Blast Launcher / Blast Launcher / Youdantotsu","Blast Launcher / Blast Launcher / Youdantotsu"]]},
    {c:"chefes",n:"Burn Rooster",t:["Maverick — Fogo","Maverick — Fire"],p:"src/Actors/Bosses/BurnRooster",img:"bosses/BurnRooster.png",
      d:["Galo de combate flamejante do Incinerador Inferno. Encadeia chutes em chamas e mergulhos ígneos; controla a parede de lava da fase.",
         "Blazing fighting rooster of Inferno. Chains flaming kicks and fiery dives, and controls the stage's lava wall."],
      m:[["stage","Incinerador Inferno","Inferno"],["weak","Drift Diamond (de Avalanche Yeti)","Drift Diamond (from Avalanche Yeti)"],["grants","Fire Dash / Flame Burner / Enkoujin","Fire Dash / Flame Burner / Enkoujin"]]},
    {c:"chefes",n:"Avalanche Yeti",t:["Maverick — Gelo","Maverick — Ice"],p:"src/Actors/Bosses/AvalancheYeti",img:"bosses/AvalancheYeti.png",
      d:["Reploid de gelo da Central Alva. Atira estilhaços congelantes, cria estacas de gelo e avança com investidas geladas.",
         "Ice Reploid of Central White. Fires freezing shards, raises ice spikes and lunges with frozen charges."],
      m:[["stage","Central Alva","Central White"],["weak","Thunder Dancer (de Gigabolt Man-O-War)","Thunder Dancer (from Gigabolt Man-O-War)"],["grants","Drift Diamond / Ice Gattling / Hyouryuushou","Drift Diamond / Ice Gattling / Hyouryuushou"]]},
    {c:"chefes",n:"Gigabolt Man-O-War",t:["Maverick — Elétrico","Maverick — Electric"],p:"src/Actors/Bosses/GigaboltManowar",img:"bosses/GigaboltManowar.png",
      d:["Água-viva mecânica que comanda a energia da Usina Dinastia. Descarrega raios em área e correntes elétricas pelo cenário.",
         "Mechanical man-o-war that commands the power of Dynasty. Unleashes area lightning and electric currents across the arena."],
      m:[["stage","Usina Dinastia","Dynasty"],["weak","Crystal Bouncer (de Earthrock Trilobyte)","Crystal Bouncer (from Earthrock Trilobyte)"],["grants","Thunder Dancer / Plasma Gun / Raikousen","Thunder Dancer / Plasma Gun / Raikousen"]]},
    {c:"chefes",n:"Gravity Antonion",t:["Maverick — Gravidade","Maverick — Gravity"],p:"src/Actors/Bosses/GravityAntonion",img:"bosses/GravityAntonion.png",
      d:["Formiga-cientista do Laboratório Primula que manipula a gravidade e faz a fase girar. Puxa e arremessa X pelo campo de batalha.",
         "Ant-scientist of Primrose who manipulates gravity and rotates the stage. Pulls and flings the hunter across the battlefield."],
      m:[["stage","Laboratório Primula","Primrose"],["weak","Dark Arrow (de Dark Mantis)","Dark Arrow (from Dark Mantis)"],["grants","Squeeze Bomb / Spiral Magnum / Juuhazan","Squeeze Bomb / Spiral Magnum / Juuhazan"]]},
    {c:"chefes",n:"Dark Mantis",t:["Maverick — Trevas","Maverick — Darkness"],p:"src/Actors/Bosses/DarkMantis",img:"bosses/DarkMantis.png",
      d:["Louva-a-deus ninja do Arsenal Soturno, ataca na escuridão total com foices afiadas e movimentos furtivos.",
         "Ninja mantis of Pitch Black who attacks in total darkness with sharp scythes and stealthy moves."],
      m:[["stage","Arsenal Soturno","Pitch Black"],["weak","Optic Shield (de Optic Sunflower)","Optic Shield (from Optic Sunflower)"],["grants","Dark Arrow / Black Arrow / Rasetsusen","Dark Arrow / Black Arrow / Rasetsusen"]]},
    {c:"chefes",n:"Earthrock Trilobyte",t:["Maverick — Terra","Maverick — Earth"],p:"src/Actors/Bosses/EarthrockTrilobyte",img:"bosses/EarthrockTrilobyte.png",
      d:["Trilobita de cristal do Vale do Metal. Levanta muralhas de rocha, dispara cristais e rola pela arena couraçado.",
         "Crystal trilobite of Metal Valley. Raises rock walls, fires crystals and rolls across the arena armored."],
      m:[["stage","Vale do Metal","Metal Valley"],["weak","Squeeze Bomb (de Gravity Antonion)","Squeeze Bomb (from Gravity Antonion)"],["grants","Crystal Bouncer / Bound Blaster / Rekkyoudan","Crystal Bouncer / Bound Blaster / Rekkyoudan"]]},
    {c:"chefes",n:"Vile",t:["Rival","Rival"],p:"src/Actors/Bosses/Vile",
      d:["Rival clássico dos Hunters, enfrentado no Elevador Orbital Jakob e novamente no Palácio de Sigma, sempre pilotando Ride Armor.",
         "The Hunters' classic rival, faced at the Jakob Orbital Elevator and again at Sigma Palace, always piloting a Ride Armor."],
      m:[["stage","Elevador Jakob / Palácio Sigma","Jakob Elevator / Sigma Palace"],["weak","Drift Diamond / Ice Gattling / Ride Armor","Drift Diamond / Ice Gattling / Ride Armor"]]},
    {c:"chefes",n:"Lumine",t:["Chefe final","Final boss"],p:"src/Actors/Bosses/Lumine",
      d:["O reploid diretor por trás do Projeto Jakob e verdadeiro antagonista. Sua forma Seraph encerra a jornada no Palácio Lunar Sigma.",
         "The Reploid director behind the Jakob Project and true antagonist. His Seraph form ends the journey at Sigma Palace."],
      m:[["weak","Squeeze Bomb / Spiral Magnum / Juuhazan","Squeeze Bomb / Spiral Magnum / Juuhazan"]]},
    {c:"chefes",n:"Copy Sigma",t:["Chefe — Sigma","Boss — Sigma"],p:"src/Actors/Bosses/CopySigma",img:"bosses/Sigma.png",
      d:["Primeira forma de Sigma no confronto final, uma cópia reconstruída que testa o Hunter antes do embate derradeiro.",
         "Sigma's first form in the finale, a rebuilt copy that tests the Hunter before the last stand."],
      m:[["weak","Dark Arrow (de Dark Mantis)","Dark Arrow (from Dark Mantis)"]]},
    {c:"chefes",n:"Satan Sigma",t:["Chefe — Sigma","Boss — Sigma"],p:"src/Actors/Bosses/SatanSigma",img:"bosses/Sigma.png",
      d:["Forma final e colossal de Sigma. Uma fortaleza demoníaca que domina a tela no ápice do Palácio Lunar Sigma.",
         "Sigma's final, colossal form. A demonic fortress that dominates the screen at the peak of Sigma Palace."],
      m:[["weak","Optic Shield (de Optic Sunflower) / Ray Gun","Optic Shield (from Optic Sunflower) / Ray Gun"]]},
    {c:"chefes",n:"Devil Bear",t:["Mini-chefe","Miniboss"],p:"src/Actors/Bosses/DevilBear",
      d:["Mini-chefe encontrado na Floresta Ergânica: um mechaniloid ursino que salta e esmaga o terreno.",
         "Miniboss found in Booster Forest: a bear-like mechaniloid that leaps and smashes the ground."],
      m:[["weak","Drift Diamond / Ice Gattling (gelo)","Drift Diamond / Ice Gattling (ice)"]]},
    {c:"chefes",n:"King Crab",t:["Chefe de intro","Intro boss"],p:"src/Actors/Bosses/KingCrab",
      d:["\"King Crabs-Y\", o caranguejo mecânico gigante enfrentado no Parque de Noé, na fase de abertura do jogo.",
         "\"King Crabs-Y\", the giant mechanical crab faced at Noah's Park, the game's opening stage."],
      m:[["stage","Parque de Noé","Noah's Park"]]},
    {c:"chefes",n:"Copy Reploid",t:["Chefe","Boss"],p:"src/Actors/Bosses/CopyReploid",
      d:["Reploid de Nova Geração capaz de copiar formas e dados — o tema central da tecnologia por trás dos Mavericks de X8.",
         "New Generation Reploid able to copy forms and data — the core theme of the technology behind X8's Mavericks."],
      m:[]},
    {c:"chefes",n:"Giant Mechaniloid",t:["Mini-chefe","Miniboss"],p:"src/Actors/Bosses/GiantMechaniloid",
      d:["Mechaniloid de grande porte usado como obstáculo pesado ao longo das fases, exigindo mira nos pontos fracos.",
         "Large-scale mechaniloid used as a heavy obstacle across stages, requiring aim at its weak points."],
      m:[]},
    {c:"chefes",n:"Cut Man",t:["Chefe convidado","Guest boss"],p:"src/Actors/Bosses/Cutman",
      d:["Participação especial do clássico Robot Master do primeiro Mega Man, incluído como luta extra/convidada.",
         "Special appearance of the classic Robot Master from the original Mega Man, included as an extra/guest fight."],
      m:[]},

    // ===================== FASES =====================
    {c:"fases",n:"Noah's Park",t:["Fase de intro","Intro stage"],p:"src/Levels/NoahsPark",
      d:["Parque de Noé — o cenário de abertura que apresenta os controles antes do confronto com o King Crab.",
         "Noah's Park — the opening area that teaches the controls before the King Crab fight."],
      m:[["boss","King Crab","King Crab"]]},
    {c:"fases",n:"Troia Base",t:["Fase","Stage"],p:"src/Levels/TroiaBase",img:"stages/TroiaBase.png",
      d:["Base Troia, domínio luminoso de Optic Sunflower.","Troia Base, the luminous domain of Optic Sunflower."],
      m:[["boss","Optic Sunflower","Optic Sunflower"],["inside","Optic Shield, Sub Tank, Life Up, Hermes Arms, armadura White Axl","Optic Shield, Sub Tank, Life Up, Hermes Arms, White Axl armor"]]},
    {c:"fases",n:"Primrose",t:["Fase","Stage"],p:"src/Levels/Primrose",img:"stages/Primrose.png",
      d:["Laboratório Primula, onde Gravity Antonion faz a fase inteira girar de cabeça para baixo.",
         "Primrose, where Gravity Antonion flips the entire stage upside down."],
      m:[["boss","Gravity Antonion","Gravity Antonion"],["inside","Squeeze Bomb, Icarus Head, Life Up, T-Breaker (Zero), luta contra Vile","Squeeze Bomb, Icarus Head, Life Up, T-Breaker (Zero), Vile fight"]]},
    {c:"fases",n:"Pitch Black",t:["Fase","Stage"],p:"src/Levels/PitchBlack",img:"stages/PitchBlack.png",
      d:["Arsenal Soturno mergulhado na escuridão, patrulhado por holofotes e por Dark Mantis.",
         "Pitch Black, drowned in darkness and patrolled by searchlights and Dark Mantis."],
      m:[["boss","Dark Mantis","Dark Mantis"],["inside","Dark Arrow, Hermes Body, Life Up, armadura Black Zero, Ultima Head","Dark Arrow, Hermes Body, Life Up, Black Zero armor, Ultima Head"]]},
    {c:"fases",n:"Dynasty",t:["Fase","Stage"],p:"src/Levels/Dynasty",img:"stages/Dynasty.png",
      d:["Usina Dinastia, complexo energético eletrificado guardado por Gigabolt Man-O-War.",
         "Dynasty, an electrified power complex guarded by Gigabolt Man-O-War."],
      m:[["boss","Gigabolt Man-O-War","Gigabolt Man-O-War"],["inside","Thunder Dancer, Icarus Arms, Life Up, Rogue Blade (Zero)","Thunder Dancer, Icarus Arms, Life Up, Rogue Blade (Zero)"]]},
    {c:"fases",n:"Booster Forest",t:["Fase","Stage"],p:"src/Levels/BoosterForest",img:"stages/BoosterForest.png",
      d:["Floresta Ergânica com trechos de Ride Armor Cyclops, lar de Bamboo Pandamonium e do mini-chefe Devil Bear.",
         "Booster Forest with Cyclops Ride Armor sections, home to Bamboo Pandamonium and the Devil Bear miniboss."],
      m:[["boss","Bamboo Pandamonium","Bamboo Pandamonium"],["inside","Blast Launcher, Icarus Legs, Life Up, V-Hanger (Zero), luta contra Vile","Blast Launcher, Icarus Legs, Life Up, V-Hanger (Zero), Vile fight"]]},
    {c:"fases",n:"Metal Valley",t:["Fase","Stage"],p:"src/Levels/MetalValley",img:"stages/MetalValley.png",
      d:["Vale do Metal, região rochosa e industrial defendida por Earthrock Trilobyte.",
         "Metal Valley, a rocky industrial region defended by Earthrock Trilobyte."],
      m:[["boss","Earthrock Trilobyte","Earthrock Trilobyte"],["inside","Crystal Bouncer, Icarus Body, Sub Tank, Life Up, B-Fan (Zero)","Crystal Bouncer, Icarus Body, Sub Tank, Life Up, B-Fan (Zero)"]]},
    {c:"fases",n:"Central White",t:["Fase","Stage"],p:"src/Levels/CentralWhite",img:"stages/CentralWhite.png",
      d:["Central Alva, estação polar congelada dominada por Avalanche Yeti.",
         "Central White, a frozen polar station dominated by Avalanche Yeti."],
      m:[["boss","Avalanche Yeti","Avalanche Yeti"],["inside","Drift Diamond, Hermes Head, Sub Tank, Life Up, Z-Breaker (Zero)","Drift Diamond, Hermes Head, Sub Tank, Life Up, Z-Breaker (Zero)"]]},
    {c:"fases",n:"Inferno",t:["Fase","Stage"],p:"src/Levels/Inferno",img:"stages/Inferno.png",
      d:["Incinerador Inferno, usina vulcânica com paredes de lava controladas por Burn Rooster.",
         "Inferno, a volcanic plant with lava walls controlled by Burn Rooster."],
      m:[["boss","Burn Rooster","Burn Rooster"],["inside","Fire Dash, Hermes Legs, Sub Tank, Life Up, D-Glaive (Zero)","Fire Dash, Hermes Legs, Sub Tank, Life Up, D-Glaive (Zero)"]]},
    {c:"fases",n:"Gateway",t:["Fase de acesso","Access stage"],p:"src/Levels/Gateway",
      d:["Satélite de Acesso — corredor orbital de ligação com um dos desafios mais difíceis do jogo.",
         "Gateway — an orbital access corridor holding one of the game's hardest challenges."],
      m:[["inside","Life Up (EX), bônus de Axl","Life Up (EX), Axl buff"]]},
    {c:"fases",n:"Jakob Elevator",t:["Fase orbital","Orbital stage"],p:"src/Levels/JakobElevator",
      d:["Elevador Orbital Jakob, a subida ao espaço onde Vile aguarda no topo.",
         "Jakob Orbital Elevator, the climb to space where Vile waits at the top."],
      m:[["boss","Vile","Vile"],["inside","Life Up (EX), Ultima Head","Life Up (EX), Ultima Head"]]},
    {c:"fases",n:"Sigma Palace",t:["Fase final","Final stage"],p:"src/Levels/SigmaPalace",
      d:["Palácio Lunar Sigma, o reduto final com Vile, as formas de Sigma e o confronto derradeiro contra Lumine.",
         "Sigma Palace, the final stronghold with Vile, Sigma's forms and the last battle against Lumine."],
      m:[["boss","Vile · Copy Sigma · Satan Sigma · Lumine","Vile · Copy Sigma · Satan Sigma · Lumine"],["inside","Life Up (EX), armadura Awakened Zero","Life Up (EX), Awakened Zero armor"]]},

    // ===================== PERSONAGENS =====================
    {c:"personagens",n:"X",t:["Personagem jogável","Playable character"],p:"System/Screens/CharacterSelection/X.png",img:"characters/X.png",
      d:["O Maverick Hunter equilibrado. Dispara e carrega o X-Buster e coleta as armas especiais dos chefes.",
         "The balanced Maverick Hunter. Fires and charges the X-Buster and collects the bosses' special weapons."],
      m:[["role","Tiro carregável + armas especiais","Chargeable shot + special weapons"]]},
    {c:"personagens",n:"Ultimate X",t:["Variação de X","X variation"],p:"System/Screens/CharacterSelection/X_Ultimate.png",img:"characters/X_Ultimate.png",
      d:["Armadura Ultimate: reúne o melhor de todas as partes — dano ao pular, cura pelo Buster, dash invencível e armas sem munição.",
         "Ultimate Armor: combines the best of every part — jump damage, Buster healing, invincible dash and no-ammo weapons."],
      m:[["role","Armadura definitiva (partes U)","Ultimate armor (U parts)"]]},
    {c:"personagens",n:"Hermes Armor X",t:["Variação de X","X variation"],p:"System/Screens/CharacterSelection/X_Hermes.png",img:"characters/X_Hermes.png",
      d:["Armadura Hermes, focada em velocidade: carregamento rápido, armas sem munição, cura ao acertar o Buster e dash invencível.",
         "Hermes Armor, focused on speed: fast charge, no-ammo weapons, healing on Buster hits and an invincible dash."],
      m:[["ability","Velocidade e agressividade","Speed and aggression"]]},
    {c:"personagens",n:"Icarus Armor X",t:["Variação de X","X variation"],p:"System/Screens/CharacterSelection/X_Icarus.png",img:"characters/X_Icarus.png",
      d:["Armadura Icarus, focada em potência: dano de salto, imune a recuo, tiros carregados sem munição e pulo alto com dash aéreo duplo.",
         "Icarus Armor, focused on power: jump damage, knockback immunity, no-ammo charged shots and high jump with double air dash."],
      m:[["ability","Potência e mobilidade","Power and mobility"]]},
    {c:"personagens",n:"Infinite X",t:["Variação de X","X variation"],p:"System/Screens/CharacterSelection/X_Infinite.png",img:"characters/X_Infinite.png",
      d:["Forma especial desbloqueável de X, oferecida como recompensa de progresso com recursos ampliados.",
         "Special unlockable form of X, offered as a progress reward with enhanced capabilities."],
      m:[["role","Forma bônus","Bonus form"]]},
    {c:"personagens",n:"Zero",t:["Personagem jogável","Playable character"],p:"System/Screens/CharacterSelection/Zero.png",img:"characters/Zero.png",
      d:["O espadachim dos Hunters. Combate corpo a corpo com a Z-Saber e técnicas ligadas às armas dos Mavericks.",
         "The Hunters' swordsman. Melee combat with the Z-Saber and techniques tied to the Mavericks' weapons."],
      m:[["role","Combate corpo a corpo","Melee combat"]]},
    {c:"personagens",n:"Awakened Zero",t:["Variação de Zero","Zero variation"],p:"System/Screens/CharacterSelection/Zero_Awakened.png",img:"characters/Zero_Awakened.png",
      d:["Zero Desperto: forma potencializada desbloqueada no Palácio de Sigma, com ataques mais fortes.",
         "Awakened Zero: an empowered form unlocked at Sigma Palace, with stronger attacks."],
      m:[["ability","Poder ampliado","Amplified power"]]},
    {c:"personagens",n:"Black Zero",t:["Variação de Zero","Zero variation"],p:"System/Screens/CharacterSelection/Zero_Beta.png",img:"characters/Zero_Beta.png",
      d:["A clássica versão negra de Zero, que troca defesa por mais poder de ataque.",
         "The classic black version of Zero, trading defense for extra attack power."],
      m:[["ability","Mais ataque, menos defesa","More attack, less defense"]]},
    {c:"personagens",n:"Axl",t:["Personagem jogável","Playable character"],p:"System/Screens/CharacterSelection/Axl.png",img:"characters/Axl.png",
      d:["O atirador ágil dos Hunters. Mira livre em 360°, tiro contínuo e o Copy Shot para assumir formas de inimigos.",
         "The Hunters' agile gunner. Free 360° aim, rapid fire and the Copy Shot to take enemy forms."],
      m:[["role","Mira livre + Copy Shot","Free aim + Copy Shot"]]},
    {c:"personagens",n:"White Axl",t:["Variação de Axl","Axl variation"],p:"System/Screens/CharacterSelection/Axl_Cheat.png",img:"characters/Axl_Cheat.png",
      d:["Axl com a Armadura Branca, desbloqueada na Base Troia, ampliando suas habilidades de cópia e mobilidade.",
         "Axl in the White Armor, unlocked at Troia Base, boosting his copy and mobility abilities."],
      m:[["ability","Cópia e mobilidade ampliadas","Enhanced copy and mobility"]]},
    {c:"personagens",n:"Axl Floppa",t:["Variação de Axl","Axl variation"],p:"System/Screens/CharacterSelection/Axl_Floppa.png",img:"characters/Axl_Floppa.png",
      d:["Variação bem-humorada de Axl (do Floppa mod) com dash diagonal como diferencial de movimento.",
         "A tongue-in-cheek Axl variation (from the Floppa mod) featuring a diagonal dash as its movement gimmick."],
      m:[["ability","Dash diagonal","Diagonal dash"]]},
    {c:"personagens",n:"White Axl Floppa",t:["Variação de Axl","Axl variation"],p:"System/Screens/CharacterSelection/Axl_Floppa_Cheat.png",img:"characters/Axl_Floppa_Cheat.png",
      d:["Combinação da Armadura Branca com o dash diagonal do Floppa — a versão mais completa da variante.",
         "Combination of the White Armor with the Floppa diagonal dash — the most complete version of the variant."],
      m:[["ability","Armadura Branca + dash diagonal","White Armor + diagonal dash"]]},
    {c:"personagens",n:"Alia",t:["Personagem jogável","Playable character"],p:"System/Screens/CharacterSelection/Alia.png",img:"characters/Alia.png",
      d:["Navegadora dos Hunters, jogável via Tag Team mod. Especialista em análise e suporte em combate.",
         "The Hunters' Navigator, playable through the Tag Team mod. A specialist in analysis and combat support."],
      m:[["role","Navegadora jogável (Tag Team)","Playable Navigator (Tag Team)"]]},
    {c:"personagens",n:"Layer",t:["Personagem jogável","Playable character"],p:"System/Screens/CharacterSelection/Layer.png",img:"characters/Layer.png",
      d:["Navegadora e espadachim, jogável via Tag Team mod, com estilo de combate próximo ao de Zero.",
         "Navigator and swordfighter, playable through the Tag Team mod, with a combat style close to Zero's."],
      m:[["role","Navegadora jogável (Tag Team)","Playable Navigator (Tag Team)"]]},
    {c:"personagens",n:"Pallette",t:["Personagem jogável","Playable character"],p:"System/Screens/CharacterSelection/Pallette.png",img:"characters/Pallette.png",
      d:["Navegadora e atiradora, jogável via Tag Team mod, com estilo de combate próximo ao de Axl.",
         "Navigator and gunner, playable through the Tag Team mod, with a combat style close to Axl's."],
      m:[["role","Navegadora jogável (Tag Team)","Playable Navigator (Tag Team)"]]},

    // ===================== ARMAS (X) =====================
    {c:"armas",n:"Optic Shield",t:["Arma de X","X weapon"],p:"src/Actors/Player/BossWeapons/OpticShield",
      d:["Escudo de luz obtido de Optic Sunflower. Protege e reflete projéteis. Forte contra Dark Mantis.",
         "Light shield obtained from Optic Sunflower. Guards and reflects projectiles. Strong against Dark Mantis."],
      m:[["source","Optic Sunflower","Optic Sunflower"],["strong","Dark Mantis","Dark Mantis"]]},
    {c:"armas",n:"Squeeze Bomb",t:["Arma de X","X weapon"],p:"src/Actors/Player/BossWeapons/SqueezeBomb",
      d:["Bomba aderente de Gravity Antonion que gruda e explode. Forte contra Earthrock Trilobyte.",
         "Sticky bomb from Gravity Antonion that clings and detonates. Strong against Earthrock Trilobyte."],
      m:[["source","Gravity Antonion","Gravity Antonion"],["strong","Earthrock Trilobyte","Earthrock Trilobyte"]]},
    {c:"armas",n:"Dark Arrow",t:["Arma de X","X weapon"],p:"src/Actors/Player/BossWeapons/DarkArrow",
      d:["Flechas sombrias teleguiadas obtidas de Dark Mantis. Forte contra Gravity Antonion.",
         "Homing dark arrows obtained from Dark Mantis. Strong against Gravity Antonion."],
      m:[["source","Dark Mantis","Dark Mantis"],["strong","Gravity Antonion","Gravity Antonion"]]},
    {c:"armas",n:"Thunder Dancer",t:["Arma de X","X weapon"],p:"src/Actors/Player/BossWeapons/ThunderDancer",
      d:["Orbe elétrico de Gigabolt Man-O-War que percorre o cenário. Forte contra Avalanche Yeti.",
         "Electric orb from Gigabolt Man-O-War that travels along the terrain. Strong against Avalanche Yeti."],
      m:[["source","Gigabolt Man-O-War","Gigabolt Man-O-War"],["strong","Avalanche Yeti","Avalanche Yeti"]]},
    {c:"armas",n:"Blast Launcher",t:["Arma de X","X weapon"],p:"src/Actors/Player/BossWeapons/BlastLauncher",
      d:["Lançador de morteiros de Bamboo Pandamonium com projéteis em arco. Forte contra Optic Sunflower.",
         "Mortar launcher from Bamboo Pandamonium with arcing projectiles. Strong against Optic Sunflower."],
      m:[["source","Bamboo Pandamonium","Bamboo Pandamonium"],["strong","Optic Sunflower","Optic Sunflower"]]},
    {c:"armas",n:"Crystal Bouncer",t:["Arma de X","X weapon"],p:"src/Actors/Player/BossWeapons/CrystalBouncer",
      d:["Cristais que quicam pelas superfícies, obtidos de Earthrock Trilobyte. Forte contra Gigabolt Man-O-War.",
         "Crystals that bounce off surfaces, obtained from Earthrock Trilobyte. Strong against Gigabolt Man-O-War."],
      m:[["source","Earthrock Trilobyte","Earthrock Trilobyte"],["strong","Gigabolt Man-O-War","Gigabolt Man-O-War"]]},
    {c:"armas",n:"Drift Diamond",t:["Arma de X","X weapon"],p:"src/Actors/Player/BossWeapons/DriftDiamond",
      d:["Disparo de gelo de Avalanche Yeti capaz de congelar inimigos. Forte contra Burn Rooster.",
         "Ice shot from Avalanche Yeti able to freeze enemies. Strong against Burn Rooster."],
      m:[["source","Avalanche Yeti","Avalanche Yeti"],["strong","Burn Rooster","Burn Rooster"]]},
    {c:"armas",n:"Fire Dash",t:["Arma de X","X weapon"],p:"src/Actors/Player/BossWeapons/FireDash",
      d:["Investida flamejante de Burn Rooster que atravessa inimigos. Forte contra Bamboo Pandamonium.",
         "Flaming dash from Burn Rooster that pierces enemies. Strong against Bamboo Pandamonium."],
      m:[["source","Burn Rooster","Burn Rooster"],["strong","Bamboo Pandamonium","Bamboo Pandamonium"]]},
    {c:"armas",n:"Giga Crash",t:["Ataque especial de X","X special attack"],p:"src/Actors/Player/BossWeapons/GigaCrash",
      d:["Giga Attack de X: libera toda a energia de armas em uma explosão que atinge a tela inteira.",
         "X's Giga Attack: unleashes all weapon energy in a blast that hits the whole screen."],
      m:[["role","Ataque de tela cheia","Full-screen attack"]]},
    {c:"armas",n:"X-Drive",t:["Modo especial de X","X special mode"],p:"src/Actors/Player/BossWeapons/XDrive",
      d:["Modo hiper temporário de X que potencializa seus disparos e desempenho por um curto período.",
         "X's temporary hyper mode that boosts his shots and performance for a short window."],
      m:[["role","Modo de potência temporário","Temporary power mode"]]},

    // ===================== ARMAS (Zero) =====================
    {c:"armas",n:"Z-Saber",t:["Arma de Zero","Zero weapon"],p:"Zero_mod/Player/Weapons/Z-Saber.tres",
      d:["A sabre padrão de Zero, base de todos os seus combos corpo a corpo.",
         "Zero's default sabre, the foundation of all his melee combos."],
      m:[["role","Sabre padrão","Default sabre"]]},
    {c:"armas",n:"K-Knuckle",t:["Arma de Zero","Zero weapon"],p:"Zero_mod/Player/Weapons/K-Knuckle.tres",
      d:["Manoplas para combate próximo e veloz, com golpes rápidos em sequência.",
         "Knuckles for fast close-range combat, with quick chained strikes."],
      m:[["role","Combate próximo veloz","Fast close combat"]]},
    {c:"armas",n:"T-Breaker",t:["Arma de Zero","Zero weapon"],p:"Zero_mod/Player/Weapons/T-Breaker.tres",
      d:["Marreta pesada de alto dano e alcance, porém lenta. Encontrada no Laboratório Primula.",
         "Heavy high-damage, high-reach hammer, but slow. Found at Primrose."],
      m:[["role","Marreta pesada","Heavy hammer"],["location","Primrose","Primrose"]]},
    {c:"armas",n:"D-Glaive",t:["Arma de Zero","Zero weapon"],p:"Zero_mod/Player/Weapons/D-Glaive.tres",
      d:["Glaive de longo alcance para atingir inimigos à distância. Encontrada no Incinerador Inferno.",
         "Long-reach glaive to strike enemies from afar. Found at Inferno."],
      m:[["role","Lança de longo alcance","Long-reach polearm"],["location","Inferno","Inferno"]]},
    {c:"armas",n:"B-Fan",t:["Arma de Zero","Zero weapon"],p:"Zero_mod/Player/Weapons/B-Fan.tres",
      d:["Leque de combate com golpes amplos e efeito de vento. Encontrado no Vale do Metal.",
         "Combat fan with wide swings and a wind effect. Found at Metal Valley."],
      m:[["role","Leque de vento","Wind fan"],["location","Metal Valley","Metal Valley"]]},
    {c:"armas",n:"Sigma Blade",t:["Arma de Zero","Zero weapon"],p:"Zero_mod/Player/Weapons/Sigma-Blade.tres",
      d:["A lâmina de Sigma empunhada por Zero — uma das armas mais poderosas do arsenal.",
         "Sigma's blade wielded by Zero — one of the most powerful weapons in the arsenal."],
      m:[["role","Lâmina poderosa","Powerful blade"]]},
    {c:"armas",n:"Rogue Blade",t:["Arma de Zero","Zero weapon"],p:"Zero_mod/Player/Weapons/Rogue-Blade.tres",
      d:["Lâmina alternativa de Zero com seu próprio conjunto de golpes. Encontrada na Usina Dinastia.",
         "Alternate Zero blade with its own moveset. Found at Dynasty."],
      m:[["role","Lâmina alternativa","Alternate blade"],["location","Dynasty","Dynasty"]]},
    {c:"armas",n:"V-Hanger",t:["Arma de Zero","Zero weapon"],p:"Zero_mod/Player/Weapons/V-Hanger.tres",
      d:["Lâminas gêmeas ágeis para combos rápidos. Encontradas na Floresta Ergânica.",
         "Agile twin blades for fast combos. Found at Booster Forest."],
      m:[["role","Lâminas gêmeas","Twin blades"],["location","Booster Forest","Booster Forest"]]},
    {c:"armas",n:"Z-Breaker",t:["Arma de Zero","Zero weapon"],p:"Zero_mod/Player/Weapons/Z-Breaker.tres",
      d:["Lâmina pesada de Zero voltada ao dano bruto. Encontrada na Central Alva.",
         "Heavy Zero blade geared toward raw damage. Found at Central White."],
      m:[["role","Lâmina pesada","Heavy blade"],["location","Central White","Central White"]]},

    // ===================== ARMAS (Axl) =====================
    {c:"armas",n:"Ray Gun",t:["Arma de Axl","Axl weapon"],p:"Axl_mod/Player/Projectiles/BossWeapons/RayGun",
      d:["Arma de raios de Axl copiada de Optic Sunflower.","Axl's ray weapon copied from Optic Sunflower."],
      m:[["source","Optic Sunflower","Optic Sunflower"]]},
    {c:"armas",n:"Spiral Magnum",t:["Arma de Axl","Axl weapon"],p:"Axl_mod/Player/Projectiles/BossWeapons/SpiralMagnum",
      d:["Magnum de tiro perfurante de Axl, copiada de Gravity Antonion.","Axl's piercing magnum, copied from Gravity Antonion."],
      m:[["source","Gravity Antonion","Gravity Antonion"]]},
    {c:"armas",n:"Black Arrow",t:["Arma de Axl","Axl weapon"],p:"Axl_mod/Player/Projectiles/BossWeapons/BlackArrow",
      d:["Flechas de Axl copiadas de Dark Mantis.","Axl's arrows copied from Dark Mantis."],
      m:[["source","Dark Mantis","Dark Mantis"]]},
    {c:"armas",n:"Plasma Gun",t:["Arma de Axl","Axl weapon"],p:"Axl_mod/Player/Projectiles/BossWeapons/PlasmaGun",
      d:["Canhão de plasma elétrico de Axl, copiado de Gigabolt Man-O-War.","Axl's electric plasma gun, copied from Gigabolt Man-O-War."],
      m:[["source","Gigabolt Man-O-War","Gigabolt Man-O-War"]]},
    {c:"armas",n:"Blast Launcher (Axl)",t:["Arma de Axl","Axl weapon"],p:"Axl_mod/Player/Projectiles/BossWeapons/BlastLauncher",
      d:["Versão de Axl do lançador de morteiros, copiada de Bamboo Pandamonium.","Axl's version of the mortar launcher, copied from Bamboo Pandamonium."],
      m:[["source","Bamboo Pandamonium","Bamboo Pandamonium"]]},
    {c:"armas",n:"Bound Blaster",t:["Arma de Axl","Axl weapon"],p:"Axl_mod/Player/Projectiles/BossWeapons/BoundBlaster",
      d:["Disparos que ricocheteiam pelas paredes, copiados de Earthrock Trilobyte.","Shots that ricochet off walls, copied from Earthrock Trilobyte."],
      m:[["source","Earthrock Trilobyte","Earthrock Trilobyte"]]},
    {c:"armas",n:"Ice Gatling",t:["Arma de Axl","Axl weapon"],p:"Axl_mod/Player/Projectiles/BossWeapons/IceGattling",
      d:["Metralhadora de gelo de tiro rápido, copiada de Avalanche Yeti.","Rapid-fire ice gatling, copied from Avalanche Yeti."],
      m:[["source","Avalanche Yeti","Avalanche Yeti"]]},
    {c:"armas",n:"Flame Burner",t:["Arma de Axl","Axl weapon"],p:"Axl_mod/Player/Projectiles/BossWeapons/FlameBurner",
      d:["Lança-chamas de curto alcance de Axl, copiado de Burn Rooster.","Axl's short-range flamethrower, copied from Burn Rooster."],
      m:[["source","Burn Rooster","Burn Rooster"]]},

    // ===================== ITENS =====================
    {c:"itens",n:"Life Up",t:["Aumento de energia","Energy upgrade"],p:"src/Objects/LifeUp.tscn",
      d:["Também chamado de Heart Tank: aumenta permanentemente a barra de vida máxima do personagem.",
         "Also known as a Heart Tank: permanently increases the character's maximum life bar."],
      m:[["role","Vida máxima +","Max life +"]]},
    {c:"itens",n:"Sub Tank",t:["Reserva de energia","Energy reserve"],p:"src/Objects/Pickups/SubTank.tscn",
      d:["Armazena energia excedente para ser usada como recuperação em emergências.",
         "Stores surplus energy to be spent as recovery in emergencies."],
      m:[["role","Reserva de vida","Life reserve"]]},
    {c:"itens",n:"Extra Life",t:["Vida extra","Extra life"],p:"src/Objects/Pickups/ExtraLife.tscn",
      d:["O clássico 1UP: concede uma vida adicional ao ser coletado.",
         "The classic 1UP: grants an additional life when collected."],
      m:[["role","+1 vida","+1 life"]]},
    {c:"itens",n:"Health Pickup",t:["Recuperação de energia","Energy recovery"],p:"src/Objects/Pickups/HealthPickup.gd",
      d:["Item que restaura parte da barra de vida ao ser coletado durante a fase.",
         "Item that restores part of the life bar when collected during a stage."],
      m:[["role","Cura imediata","Instant heal"]]},
    {c:"itens",n:"Ammo Pickup",t:["Recuperação de munição","Ammo recovery"],p:"src/Objects/Pickups/AmmoPickup.gd",
      d:["Recarrega a energia das armas especiais equipadas.",
         "Refills the energy of the equipped special weapons."],
      m:[["role","Recarrega armas","Refills weapons"]]},
    {c:"itens",n:"Light Capsule",t:["Cápsula de armadura","Armor capsule"],p:"src/Objects/Light Capsule/LightCapsule.tscn",
      d:["Cápsula do Dr. Light escondida nas fases: concede a X as partes das armaduras Hermes, Icarus e Ultimate.",
         "Dr. Light's capsule hidden across stages: grants X the Hermes, Icarus and Ultimate armor parts."],
      m:[["role","Concede partes de armadura","Grants armor parts"]]}
  ];

  var translations = {
    pt: {
      "nav.sobre":"Sobre","nav.screenshots":"Screenshots","nav.download":"Download",
      "hero.eyebrow":"Base de conhecimento",
      "hero.description":"Explore o conteúdo do projeto: fases, chefes, personagens, armas e itens — com fraquezas, coletáveis e sprites do próprio jogo.",
      "search.placeholder":"Buscar fase, chefe, arma...","sidebar.navigation":"Navegação",
      "category.all":"Visão geral","category.fases":"Fases","category.chefes":"Chefes",
      "category.personagens":"Personagens","category.armas":"Armas","category.itens":"Itens",
      "welcome.eyebrow":"Enciclopédia do projeto","welcome.title":"Bem-vindo à Wiki do X8 16-bit",
      "welcome.description":"Catálogo montado a partir dos arquivos do jogo: fraquezas dos chefes, armas e técnicas de X, Zero e Axl, coletáveis de cada fase e sprites extraídos do próprio projeto.",
      "catalog.eyebrow":"Catálogo","catalog.all":"Todo o conteúdo",
      "empty.title":"Nenhum resultado encontrado",
      "empty.description":"Tente buscar usando outro nome ou selecione outra categoria.",
      "source.note":"As informações refletem os arquivos atuais do jogo e podem mudar durante o desenvolvimento.",
      "result.one":"registro","result.many":"registros","project":"Projeto",
      "meta.stage":"Fase","meta.weak":"Fraqueza","meta.grants":"Concede","meta.boss":"Chefe",
      "meta.inside":"Contém","meta.source":"Origem","meta.strong":"Forte contra","meta.role":"Estilo",
      "meta.ability":"Habilidade","meta.location":"Local"
    },
    en: {
      "nav.sobre":"About","nav.screenshots":"Screenshots","nav.download":"Download",
      "hero.eyebrow":"Knowledge base",
      "hero.description":"Explore the project's content: stages, bosses, characters, weapons and items — with weaknesses, collectibles and sprites from the game itself.",
      "search.placeholder":"Search stages, bosses, weapons...","sidebar.navigation":"Navigation",
      "category.all":"Overview","category.fases":"Stages","category.chefes":"Bosses",
      "category.personagens":"Characters","category.armas":"Weapons","category.itens":"Items",
      "welcome.eyebrow":"Project encyclopedia","welcome.title":"Welcome to the X8 16-bit Wiki",
      "welcome.description":"A catalog built from the game files: boss weaknesses, weapons and techniques for X, Zero and Axl, each stage's collectibles and sprites extracted from the project itself.",
      "catalog.eyebrow":"Catalog","catalog.all":"All content",
      "empty.title":"No results found",
      "empty.description":"Try another name or select a different category.",
      "source.note":"Information reflects the current game files and may change during development.",
      "result.one":"record","result.many":"records","project":"Project",
      "meta.stage":"Stage","meta.weak":"Weakness","meta.grants":"Grants","meta.boss":"Boss",
      "meta.inside":"Contains","meta.source":"Source","meta.strong":"Strong vs","meta.role":"Style",
      "meta.ability":"Ability","meta.location":"Location"
    }
  };
  // Textos de créditos/licença/rodapé vêm de assets/legal.js (fonte única compartilhada com o index).
  if (window.LEGAL_I18N){
    Object.assign(translations.pt, window.LEGAL_I18N.pt);
    Object.assign(translations.en, window.LEGAL_I18N.en);
  }
  var categoryLabels = {
    pt:{all:"Visão geral",fases:"Fases",chefes:"Chefes",personagens:"Personagens",armas:"Armas",itens:"Itens"},
    en:{all:"Overview",fases:"Stages",chefes:"Bosses",personagens:"Characters",armas:"Weapons",itens:"Items"}
  };
  var icons = {fases:"▧",chefes:"◆",personagens:"♟",armas:"⚡",itens:"●"};

  var STORAGE_KEY = "x8-lang";
  var currentLang = "pt";
  var activeFilter = "all";
  var search = document.getElementById("wiki-search");
  var grid = document.getElementById("wiki-grid");
  var empty = document.getElementById("empty-state");

  function normalize(value) {
    return value.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  }
  function esc(value) {
    return String(value).replace(/[&<>"]/g, function (ch) {
      return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[ch];
    });
  }
  function langIndex() { return currentLang === "en" ? 1 : 0; }
  function pick(pair) { return pair[langIndex()] !== undefined ? pair[langIndex()] : pair[0]; }
  function metaValue(row) { return row[2] !== undefined ? (currentLang === "en" ? row[2] : row[1]) : row[1]; }

  function searchString(item) {
    var parts = [item.n, pick(item.t), item.c, pick(item.d), item.p || ""];
    (item.m || []).forEach(function (row) { parts.push(metaValue(row)); });
    return normalize(parts.join(" "));
  }

  function cardHtml(item) {
    var visual = item.img
      ? '<span class="entry-icon character-icon"><img src="assets/wiki/' + esc(item.img) + '" alt="" loading="lazy"></span>'
      : '<span class="entry-icon" aria-hidden="true">' + icons[item.c] + '</span>';
    var meta = (item.m || []).map(function (row) {
      return '<div class="entry-meta-row"><dt>' + esc(translations[currentLang]["meta." + row[0]] || row[0]) +
        '</dt><dd>' + esc(metaValue(row)) + '</dd></div>';
    }).join("");
    return '<article class="wiki-entry">' +
      '<div class="entry-top">' + visual +
      '<div><span class="entry-category">' + categoryLabels[currentLang][item.c] + '</span><h3>' + esc(item.n) + '</h3></div></div>' +
      '<p><strong>' + esc(pick(item.t)) + '.</strong> ' + esc(pick(item.d)) + '</p>' +
      (meta ? '<dl class="entry-meta">' + meta + '</dl>' : "") +
      '<span class="entry-source">' + translations[currentLang].project + ': ' + esc(item.p) + '</span></article>';
  }

  function render() {
    var term = normalize(search.value.trim());
    var results = catalog.filter(function (item) {
      return (activeFilter === "all" || item.c === activeFilter) &&
        (!term || searchString(item).indexOf(term) !== -1);
    });

    grid.innerHTML = results.map(cardHtml).join("");

    document.getElementById("result-count").textContent = results.length + " " +
      translations[currentLang][results.length === 1 ? "result.one" : "result.many"];
    empty.hidden = results.length !== 0;
    grid.hidden = results.length === 0;
  }

  function setFilter(filter) {
    activeFilter = categoryLabels[currentLang][filter] ? filter : "all";
    document.querySelectorAll("[data-filter]").forEach(function (button) {
      button.classList.toggle("active", button.dataset.filter === activeFilter);
    });
    document.getElementById("current-category").textContent = categoryLabels[currentLang][activeFilter];
    document.getElementById("catalog-title").textContent = activeFilter === "all"
      ? translations[currentLang]["catalog.all"] : categoryLabels[currentLang][activeFilter];
    document.getElementById("welcome-panel").hidden = activeFilter !== "all" || search.value.trim() !== "";
    render();
  }

  Object.keys(categoryLabels.pt).filter(function (key) { return key !== "all"; }).forEach(function (category) {
    document.getElementById("count-" + category).textContent = catalog.filter(function (item) { return item.c === category; }).length;
  });

  document.querySelectorAll("[data-filter]").forEach(function (button) {
    button.addEventListener("click", function () {
      search.value = "";
      setFilter(button.dataset.filter);
      document.querySelector(".catalog-panel").scrollIntoView({behavior:"smooth",block:"start"});
    });
  });
  search.addEventListener("input", function () {
    document.getElementById("welcome-panel").hidden = search.value.trim() !== "" || activeFilter !== "all";
    render();
  });

  function detectLanguage() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "pt" || saved === "en") return saved;
    return (navigator.language || "en").toLowerCase().indexOf("pt") === 0 ? "pt" : "en";
  }

  function applyLanguage(lang) {
    currentLang = lang === "pt" ? "pt" : "en";
    document.documentElement.lang = currentLang === "pt" ? "pt-BR" : "en";
    document.querySelectorAll("[data-i18n]").forEach(function (element) {
      var value = translations[currentLang][element.dataset.i18n];
      if (value === undefined) return;
      if (element.hasAttribute("data-i18n-attr")) {
        element.setAttribute(element.getAttribute("data-i18n-attr"), value);
      } else {
        element.innerHTML = value;
      }
    });
    document.querySelectorAll("[data-lang]").forEach(function (button) {
      button.classList.toggle("active", button.dataset.lang === currentLang);
    });
    localStorage.setItem(STORAGE_KEY, currentLang);
    setFilter(activeFilter);
  }

  document.querySelectorAll("[data-lang]").forEach(function (button) {
    button.addEventListener("click", function () { applyLanguage(button.dataset.lang); });
  });
  applyLanguage(detectLanguage());
})();
