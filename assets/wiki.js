(function () {
  "use strict";

  var catalog = [
    ["fases","Booster Forest","Fase","src/Levels/BoosterForest"],
    ["fases","Central White","Fase","src/Levels/CentralWhite"],
    ["fases","Dynasty","Fase","src/Levels/Dynasty"],
    ["fases","Gateway","Fase","src/Levels/Gateway"],
    ["fases","Inferno","Fase","src/Levels/Inferno"],
    ["fases","Jakob Elevator","Fase","src/Levels/JakobElevator"],
    ["fases","Metal Valley","Fase","src/Levels/MetalValley"],
    ["fases","Noah's Park","Fase","src/Levels/NoahsPark"],
    ["fases","Pitch Black","Fase","src/Levels/PitchBlack"],
    ["fases","Primrose","Fase","src/Levels/Primrose"],
    ["fases","Sigma Palace","Fase","src/Levels/SigmaPalace"],
    ["fases","Troia Base","Fase","src/Levels/TroiaBase"],

    ["chefes","Avalanche Yeti","Chefe","src/Actors/Bosses/AvalancheYeti"],
    ["chefes","Bamboo Pandamonium","Chefe","src/Actors/Bosses/BambooPandamonium"],
    ["chefes","Burn Rooster","Chefe","src/Actors/Bosses/BurnRooster"],
    ["chefes","Copy Reploid","Chefe","src/Actors/Bosses/CopyReploid"],
    ["chefes","Copy Sigma","Chefe","src/Actors/Bosses/CopySigma"],
    ["chefes","Cut Man","Chefe","src/Actors/Bosses/Cutman"],
    ["chefes","Dark Mantis","Chefe","src/Actors/Bosses/DarkMantis"],
    ["chefes","Devil Bear","Chefe","src/Actors/Bosses/DevilBear"],
    ["chefes","Earthrock Trilobyte","Chefe","src/Actors/Bosses/EarthrockTrilobyte"],
    ["chefes","Giant Mechaniloid","Chefe","src/Actors/Bosses/GiantMechaniloid"],
    ["chefes","Gigabolt Man-O-War","Chefe","src/Actors/Bosses/GigaboltManowar"],
    ["chefes","Gravity Antonion","Chefe","src/Actors/Bosses/GravityAntonion"],
    ["chefes","King Crab","Chefe","src/Actors/Bosses/KingCrab"],
    ["chefes","Lumine","Chefe","src/Actors/Bosses/Lumine"],
    ["chefes","Optic Sunflower","Chefe","src/Actors/Bosses/OpticSunflower"],
    ["chefes","Satan Sigma","Chefe","src/Actors/Bosses/SatanSigma"],
    ["chefes","Vile","Chefe","src/Actors/Bosses/Vile"],

    ["personagens","X","Personagem jogável","System/Screens/CharacterSelection/X.png","X.png"],
    ["personagens","Ultimate X","Variação de X","System/Screens/CharacterSelection/X_Ultimate.png","X_Ultimate.png"],
    ["personagens","Infinite X","Variação de X","System/Screens/CharacterSelection/X_Infinite.png","X_Infinite.png"],
    ["personagens","Hermes Armor X","Variação de X","System/Screens/CharacterSelection/X_Hermes.png","X_Hermes.png"],
    ["personagens","Icarus Armor X","Variação de X","System/Screens/CharacterSelection/X_Icarus.png","X_Icarus.png"],
    ["personagens","Zero","Personagem jogável","System/Screens/CharacterSelection/Zero.png","Zero.png"],
    ["personagens","Awakened Zero","Variação de Zero","System/Screens/CharacterSelection/Zero_Awakened.png","Zero_Awakened.png"],
    ["personagens","Black Zero","Variação de Zero","System/Screens/CharacterSelection/Zero_Beta.png","Zero_Beta.png"],
    ["personagens","Axl","Personagem jogável","System/Screens/CharacterSelection/Axl.png","Axl.png"],
    ["personagens","White Axl","Variação de Axl","System/Screens/CharacterSelection/Axl_Cheat.png","Axl_Cheat.png"],
    ["personagens","Axl Floppa","Variação de Axl","System/Screens/CharacterSelection/Axl_Floppa.png","Axl_Floppa.png"],
    ["personagens","White Axl Floppa","Variação de Axl","System/Screens/CharacterSelection/Axl_Floppa_Cheat.png","Axl_Floppa_Cheat.png"],
    ["personagens","Alia","Personagem jogável","System/Screens/CharacterSelection/Alia.png","Alia.png"],
    ["personagens","Layer","Personagem jogável","System/Screens/CharacterSelection/Layer.png","Layer.png"],
    ["personagens","Pallette","Personagem jogável","System/Screens/CharacterSelection/Pallette.png","Pallette.png"],

    ["armas","Blast Launcher","Arma de X","src/Actors/Player/BossWeapons/BlastLauncher"],
    ["armas","Crystal Bouncer","Arma de X","src/Actors/Player/BossWeapons/CrystalBouncer"],
    ["armas","Dark Arrow","Arma de X","src/Actors/Player/BossWeapons/DarkArrow"],
    ["armas","Drift Diamond","Arma de X","src/Actors/Player/BossWeapons/DriftDiamond"],
    ["armas","Fire Dash","Arma de X","src/Actors/Player/BossWeapons/FireDash"],
    ["armas","Giga Crash","Arma de X","src/Actors/Player/BossWeapons/GigaCrash"],
    ["armas","Optic Shield","Arma de X","src/Actors/Player/BossWeapons/OpticShield"],
    ["armas","Squeeze Bomb","Arma de X","src/Actors/Player/BossWeapons/SqueezeBomb"],
    ["armas","Thunder Dancer","Arma de X","src/Actors/Player/BossWeapons/ThunderDancer"],
    ["armas","X-Drive","Arma de X","src/Actors/Player/BossWeapons/XDrive"],
    ["armas","B-Fan","Arma de Zero","Zero_mod/Player/Weapons/B-Fan.tres"],
    ["armas","D-Glaive","Arma de Zero","Zero_mod/Player/Weapons/D-Glaive.tres"],
    ["armas","K-Knuckle","Arma de Zero","Zero_mod/Player/Weapons/K-Knuckle.tres"],
    ["armas","Rogue Blade","Arma de Zero","Zero_mod/Player/Weapons/Rogue-Blade.tres"],
    ["armas","Sigma Blade","Arma de Zero","Zero_mod/Player/Weapons/Sigma-Blade.tres"],
    ["armas","T-Breaker","Arma de Zero","Zero_mod/Player/Weapons/T-Breaker.tres"],
    ["armas","V-Hanger","Arma de Zero","Zero_mod/Player/Weapons/V-Hanger.tres"],
    ["armas","Z-Breaker","Arma de Zero","Zero_mod/Player/Weapons/Z-Breaker.tres"],
    ["armas","Z-Saber","Arma de Zero","Zero_mod/Player/Weapons/Z-Saber.tres"],
    ["armas","Black Arrow","Arma de Axl","Axl_mod/Player/Projectiles/BossWeapons/BlackArrow"],
    ["armas","Blast Launcher (Axl)","Arma de Axl","Axl_mod/Player/Projectiles/BossWeapons/BlastLauncher"],
    ["armas","Bound Blaster","Arma de Axl","Axl_mod/Player/Projectiles/BossWeapons/BoundBlaster"],
    ["armas","Flame Burner","Arma de Axl","Axl_mod/Player/Projectiles/BossWeapons/FlameBurner"],
    ["armas","Ice Gatling","Arma de Axl","Axl_mod/Player/Projectiles/BossWeapons/IceGattling"],
    ["armas","Plasma Gun","Arma de Axl","Axl_mod/Player/Projectiles/BossWeapons/PlasmaGun"],
    ["armas","Ray Gun","Arma de Axl","Axl_mod/Player/Projectiles/BossWeapons/RayGun"],
    ["armas","Spiral Magnum","Arma de Axl","Axl_mod/Player/Projectiles/BossWeapons/SpiralMagnum"],

    ["itens","Life Up","Aumento de energia","src/Objects/LifeUp.tscn"],
    ["itens","Sub Tank","Reserva de energia","src/Objects/Pickups/SubTank.tscn"],
    ["itens","Extra Life","Vida extra","src/Objects/Pickups/ExtraLife.tscn"],
    ["itens","Health Pickup","Recuperação de energia","src/Objects/Pickups/HealthPickup.gd"],
    ["itens","Ammo Pickup","Recuperação de munição","src/Objects/Pickups/AmmoPickup.gd"],
    ["itens","Light Capsule","Cápsula de armadura","src/Objects/Light Capsule/LightCapsule.tscn"]
  ];

  var translations = {
    pt: {
      "nav.sobre":"Sobre","nav.screenshots":"Screenshots","nav.download":"Download",
      "hero.eyebrow":"Base de conhecimento",
      "hero.description":"Explore o conteúdo encontrado nos arquivos do projeto: fases, chefes, personagens, armas e itens.",
      "search.placeholder":"Buscar fase, chefe, arma...","sidebar.navigation":"Navegação",
      "category.all":"Visão geral","category.fases":"Fases","category.chefes":"Chefes",
      "category.personagens":"Personagens","category.armas":"Armas","category.itens":"Itens",
      "welcome.eyebrow":"Enciclopédia do projeto","welcome.title":"Bem-vindo à Wiki do X8 16-bit",
      "welcome.description":"Este catálogo é mantido sem banco de dados. Os nomes foram organizados a partir das pastas e recursos do projeto do jogo.",
      "catalog.eyebrow":"Catálogo","catalog.all":"Todo o conteúdo",
      "empty.title":"Nenhum resultado encontrado",
      "empty.description":"Tente buscar usando outro nome ou selecione outra categoria.",
      "source.note":"Os nomes refletem a estrutura atual do projeto e podem mudar durante o desenvolvimento do jogo.",
      "legal.p1":"Este é um <strong>fangame gratuito e não-oficial</strong> de Mega Man X. Não é afiliado, associado, autorizado, aprovado ou de qualquer forma oficialmente conectado com a Capcom ou qualquer uma de suas subsidiárias. Mega Man X é propriedade da <strong>Capcom</strong> — por favor, apoie os jogos oficiais.",
      "legal.p2":"Baseado no projeto original <span class=\"credit-name\">X8 16-bit</span>, criado por <span class=\"credit-name\">Alysson da Paz</span> — <a href=\"https://github.com/AlyssonDaPaz/Mega-Man-X8-16-bit\" target=\"_blank\" rel=\"noopener\">github.com/AlyssonDaPaz/Mega-Man-X8-16-bit</a>",
      "legal.p3":"Distribuído sob a licença X8 16-bit License: uso e distribuição livres, desde que não monetizados. Consulte o repositório do projeto original para o texto completo da licença.",
      "footer.text":"Feito com Godot Engine · <a href=\"https://github.com/Ian03/Megaman-X\" target=\"_blank\" rel=\"noopener\">código-fonte no GitHub</a>",
      "result.one":"registro","result.many":"registros","project":"Projeto"
    },
    en: {
      "nav.sobre":"About","nav.screenshots":"Screenshots","nav.download":"Download",
      "hero.eyebrow":"Knowledge base",
      "hero.description":"Explore content found in the project files: stages, bosses, characters, weapons and items.",
      "search.placeholder":"Search stages, bosses, weapons...","sidebar.navigation":"Navigation",
      "category.all":"Overview","category.fases":"Stages","category.chefes":"Bosses",
      "category.personagens":"Characters","category.armas":"Weapons","category.itens":"Items",
      "welcome.eyebrow":"Project encyclopedia","welcome.title":"Welcome to the X8 16-bit Wiki",
      "welcome.description":"This catalog works without a database. Names are organized from the game project's folders and resources.",
      "catalog.eyebrow":"Catalog","catalog.all":"All content",
      "empty.title":"No results found",
      "empty.description":"Try another name or select a different category.",
      "source.note":"Names reflect the current project structure and may change during game development.",
      "legal.p1":"This is a <strong>free, unofficial fangame</strong> of Mega Man X. It is not affiliated with, endorsed, sponsored, or specifically approved by Capcom or any of its subsidiaries. Mega Man X is property of <strong>Capcom</strong> — please support the official games.",
      "legal.p2":"Based on the original project <span class=\"credit-name\">X8 16-bit</span>, created by <span class=\"credit-name\">Alysson da Paz</span> — <a href=\"https://github.com/AlyssonDaPaz/Mega-Man-X8-16-bit\" target=\"_blank\" rel=\"noopener\">github.com/AlyssonDaPaz/Mega-Man-X8-16-bit</a>",
      "legal.p3":"Distributed under the X8 16-bit License: free use and distribution, as long as it is not monetized. See the original project's repository for the full license text.",
      "footer.text":"Made with Godot Engine · <a href=\"https://github.com/Ian03/Megaman-X\" target=\"_blank\" rel=\"noopener\">source code on GitHub</a>",
      "result.one":"record","result.many":"records","project":"Project"
    }
  };
  var categoryLabels = {
    pt:{all:"Visão geral",fases:"Fases",chefes:"Chefes",personagens:"Personagens",armas:"Armas",itens:"Itens"},
    en:{all:"Overview",fases:"Stages",chefes:"Bosses",personagens:"Characters",armas:"Weapons",itens:"Items"}
  };
  var icons = {fases:"▧",chefes:"◆",personagens:"♟",armas:"⚡",itens:"●"};
  var descriptions = {
    pt:{
      fases:"Área jogável identificada nos diretórios de níveis do projeto.",
      chefes:"Inimigo especial com recursos próprios na estrutura de chefes.",
      personagens:"Personagem ou variação com recursos próprios no projeto.",
      armas:"Arma ou habilidade encontrada nos recursos dos personagens.",
      itens:"Coletável ou objeto de suporte encontrado nos recursos do jogo."
    },
    en:{
      fases:"Playable area identified in the project's level directories.",
      chefes:"Special enemy with dedicated resources in the boss structure.",
      personagens:"Character or variation with dedicated project resources.",
      armas:"Weapon or ability found in the characters' resources.",
      itens:"Collectible or support object found in the game resources."
    }
  };
  var typeTranslations = {
    "Fase":"Stage","Chefe":"Boss","Personagem jogável":"Playable character","Personagem":"Character",
    "Variação de X":"X variation","Variação de Zero":"Zero variation","Variação de Axl":"Axl variation",
    "Arma de X":"X weapon","Arma de Zero":"Zero weapon","Arma de Axl":"Axl weapon",
    "Aumento de energia":"Energy upgrade","Reserva de energia":"Energy reserve","Vida extra":"Extra life",
    "Recuperação de energia":"Energy recovery","Recuperação de munição":"Ammo recovery","Cápsula de armadura":"Armor capsule"
  };
  var STORAGE_KEY = "x8-lang";
  var currentLang = "pt";
  var activeFilter = "all";
  var search = document.getElementById("wiki-search");
  var grid = document.getElementById("wiki-grid");
  var empty = document.getElementById("empty-state");

  function normalize(value) {
    return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  function render() {
    var term = normalize(search.value.trim());
    var results = catalog.filter(function (item) {
      return (activeFilter === "all" || item[0] === activeFilter) &&
        (!term || normalize(item.join(" ")).indexOf(term) !== -1);
    });

    grid.innerHTML = results.map(function (item) {
      var visual = item[4]
        ? '<span class="entry-icon character-icon"><img src="assets/wiki/characters/' + item[4] + '" alt="" loading="lazy"></span>'
        : '<span class="entry-icon" aria-hidden="true">' + icons[item[0]] + '</span>';
      return '<article class="wiki-entry">' +
        '<div class="entry-top">' + visual +
        '<div><span class="entry-category">' + categoryLabels[currentLang][item[0]] + '</span><h3>' + item[1] + '</h3></div></div>' +
        '<p><strong>' + (currentLang === "en" ? (typeTranslations[item[2]] || item[2]) : item[2]) + '.</strong> ' + descriptions[currentLang][item[0]] + '</p>' +
        '<span class="entry-source">' + translations[currentLang].project + ': ' + item[3] + '</span></article>';
    }).join("");

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
    document.getElementById("count-" + category).textContent = catalog.filter(function (item) { return item[0] === category; }).length;
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
