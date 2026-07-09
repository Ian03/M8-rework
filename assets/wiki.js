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

    ["personagens","X","Personagem jogável","src/Actors/Player/X"],
    ["personagens","Ultimate X","Variação de X","X_mod/UltimateX"],
    ["personagens","Infinite X","Variação de X","X_mod/InfiniteX"],
    ["personagens","Zero","Personagem jogável","Zero_mod/Player"],
    ["personagens","Axl","Personagem jogável","Axl_mod/Player"],
    ["personagens","Alia","Personagem","src/Actors/Player/alia_sprites"],

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

  var labels = {all:"Visão geral",fases:"Fases",chefes:"Chefes",personagens:"Personagens",armas:"Armas",itens:"Itens"};
  var icons = {fases:"▧",chefes:"◆",personagens:"♟",armas:"⚡",itens:"●"};
  var descriptions = {
    fases:"Área jogável identificada nos diretórios de níveis do projeto.",
    chefes:"Inimigo especial com recursos próprios na estrutura de chefes.",
    personagens:"Personagem ou variação com recursos próprios no projeto.",
    armas:"Arma ou habilidade encontrada nos recursos dos personagens.",
    itens:"Coletável ou objeto de suporte encontrado nos recursos do jogo."
  };
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
      return '<article class="wiki-entry">' +
        '<div class="entry-top"><span class="entry-icon" aria-hidden="true">' + icons[item[0]] + '</span>' +
        '<div><span class="entry-category">' + labels[item[0]] + '</span><h3>' + item[1] + '</h3></div></div>' +
        '<p><strong>' + item[2] + '.</strong> ' + descriptions[item[0]] + '</p>' +
        '<span class="entry-source">Projeto: ' + item[3] + '</span></article>';
    }).join("");

    document.getElementById("result-count").textContent = results.length + (results.length === 1 ? " registro" : " registros");
    empty.hidden = results.length !== 0;
    grid.hidden = results.length === 0;
  }

  function setFilter(filter) {
    activeFilter = labels[filter] ? filter : "all";
    document.querySelectorAll("[data-filter]").forEach(function (button) {
      button.classList.toggle("active", button.dataset.filter === activeFilter);
    });
    document.getElementById("current-category").textContent = labels[activeFilter];
    document.getElementById("catalog-title").textContent = activeFilter === "all" ? "Todo o conteúdo" : labels[activeFilter];
    document.getElementById("welcome-panel").hidden = activeFilter !== "all" || search.value.trim() !== "";
    render();
  }

  Object.keys(labels).filter(function (key) { return key !== "all"; }).forEach(function (category) {
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
  render();
})();
