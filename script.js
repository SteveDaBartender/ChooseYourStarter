//CONSTANTS
const ERROR_SPRITE = "error.png"; //fallback image for pokemon
const POKEMON_COUNT = 3; //how many pokemon to use
const CATEGORY_ENUM = { //enumerator of each type of category
    TYPE: 0,
    COLOR: 1,
    STAT_HIGH:2,
    STAT_LOW:3,
    ORIGIN_GENERATION:4,
    EV_YIELD:5,
    SHINY:6,
    HEIGHT:7,
    WEIGHT:8,
    DEX_NUM:9,
    LENGTH:10
};
const STAT_NAMES = [ //names used to draw the stats
    "HP",
    "Attack",
    "Defense",
    "Special Attack",
    "Special Defense",
    "Speed"
]
//giant list of all possible moves and abilities
const MOVES_LIST = ["Absorb", "Accelerock", "Acid", "Acid Armor", "Acid Spray", "Acrobatics", "Acupressure", "Aerial Ace", "Aeroblast", "After You",	"Agility", "Air Cutter", "Air Slash", "Alluring Voice", "Ally Switch", "Amnesia", "Anchor Shot", "Ancient Power", "Apple Acid", "Aqua Cutter", "Aqua Jet", "Aqua Ring", "Aqua Step", "Aqua Tail", "Arm Thrust", "Armor Cannon", "Aromatherapy", "Aromatic Mist", "Assist", "Assurance", "Astonish", "Astral Barrage", "Attack Order", "Attract", "Aura Sphere", "Aura Wheel (Morpeko)", "Aurora Beam", "Aurora Veil", "Autotomize", "Avalanche", "Axe Kick", "Baby-Doll Eyes", "Baddy Bad", "Baneful Bunker", "Barb Barrage", "Barrage", "Barrier", "Baton Pass", "Beak Blast", "Beat Up", "Behemoth Bash", "Behemoth Blade", "Belch", "Belly Drum", "Bestow", "Bide", "Bind", "Bite", "Bitter Blade", "Bitter Malice", "Blast Burn", "Blaze Kick", "Blazing Torque", "Bleakwind Storm", "Blizzard", "Block", "Blood Moon", "Blue Flare", "Body Press", "Body Slam", "Bolt Beak", "Bolt Strike",	"Bone Club", "Bone Rush", "Bonemerang", "Boomburst", "Bounce", "Bouncy Bubble", "Branch Poke", "Brave Bird",	"Breaking Swipe", "Brick Break", "Brine", "Brutal Swing", "Bubble", "Bubble Beam", "Bug Bite", "Bug Buzz", "Bulk Up", "Bulldoze", "Bullet Punch", "Bullet Seed", "Burn Up", "Burning Bulwark", "Burning Jealousy", "Buzzy Buzz", "Calm Mind", "Camouflage", "Captivate", "Ceaseless Edge", "Celebrate", "Charge", "Charge Beam", "Charm", "Chatter", "Chilling Water", "Chilly Reception", "Chip Away", "Chloroblast", "Circle Throw", "Clamp", "Clanging Scales", "Clangorous Soul", "Clear Smog", "Close Combat", "Coaching", "Coil", "Collision Course", "Combat Torque", "Comet Punch", "Comeuppance", "Confide", "Confuse Ray", "Confusion", "Constrict", "Conversion", "Conversion 2", "Copycat", "Core Enforcer", "Corrosive Gas", "Cosmic Power", "Cotton Guard", "Cotton Spore", "Counter", "Court Change", "Covet", "Crabhammer", "Crafty Shield", "Cross Chop", "Cross Poison", "Crunch", "Crush Claw", "Crush Grip", "Curse", "Cut", "Dark Pulse", "Dark Void", "Darkest Lariat", "Dazzling Gleam", "Decorate", "Defend Order", "Defense Curl", "Defog", "Destiny Bond", "Detect", "Diamond Storm", "Dig", "Dire Claw", "Disable", "Disarming Voice", "Discharge", "Dive", "Dizzy Punch", "Doodle", "Doom Desire", "Double Hit", "Double Iron Bash", "Double Kick", "Double Shock", "Double Slap", "Double Team", "Double-Edge", "Draco Meteor", "Dragon Ascent", "Dragon Breath", "Dragon Cheer", "Dragon Claw", "Dragon Dance", "Dragon Darts", "Dragon Energy", "Dragon Hammer", "Dragon Pulse", "Dragon Rage", "Dragon Rush", "Dragon Tail", "Drain Punch", "Draining Kiss", "Dream Eater", "Drill Peck", "Drill Run", "Drum Beating", "Dual Chop", "Dual Wingbeat", "Dynamax Cannon", "Dynamic Punch", "Earth Power", "Earthquake", "Echoed Voice", "Eerie Impulse", "Eerie Spell", "Egg Bomb", "Electric Terrain", "Electrify", "Electro Ball", "Electro Drift", "Electro Shot", "Electroweb", "Embargo", "Ember", "Encore", "Endeavor", "Endure", "Energy Ball", "Entrainment", "Eruption", "Esper Wing", "Eternabeam", "Expanding Force", "Explosion", "Extrasensory", "Extreme Speed", "Facade", "Fairy Lock", "Fairy Wind", "Fake Out", "Fake Tears", "False Surrender", "False Swipe", "Feather Dance", "Feint", "Feint Attack", "Fell Stinger", "Fickle Beam", "Fiery Dance", "Fiery Wrath", "Fillet Away", "Final Gambit", "Fire Blast", "Fire Fang", "Fire Lash", "Fire Pledge", "Fire Punch", "Fire Spin", "First Impression", "Fishious Rend", "Fissure", "Flail", "Flame Burst", "Flame Charge", "Flame Wheel", "Flamethrower", "Flare Blitz", "Flash", "Flash Cannon", "Flatter", "Fleur Cannon", "Fling", "Flip Turn", "Floaty Fall", "Floral Healing", "Flower Shield", "Flower Trick", "Fly", "Flying Press", "Focus Blast", "Focus Energy", "Focus Punch", "Follow Me", "Force Palm", "Foresight", "Forest's Curse", "Foul Play", "Freeze Shock", "Freeze-Dry", "Freezing Glare", "Freezy Frost", "Frenzy Plant", "Frost Breath", "Frustration", "Fury Attack", "Fury Cutter", "Fury Swipes", "Fusion Bolt", "Fusion Flare", "Future Sight", "Gastro Acid", "Gear Grind", "Gear Up", "Geomancy", "Giga Drain", "Giga Impact", "Gigaton Hammer", "Glacial Lance", "Glaciate", "Glaive Rush", "Glare", "Glitzy Glow", "Grass Knot", "Grass Pledge", "Grass Whistle", "Grassy Glide", "Grassy Terrain", "Grav Apple", "Gravity", "Growl", "Growth", "Grudge", "Guard Split", "Guard Swap", "Guillotine", "Gunk Shot", "Gust", "Gyro Ball", "Hail", "Hammer Arm", "Happy Hour", "Hard Press", "Harden", "Haze", "Head Charge", "Head Smash", "Headbutt", "Headlong Rush", "Heal Bell", "Heal Block", "Heal Order", "Heal Pulse", "Healing Wish", "Heart Stamp", "Heart Swap", "Heat Crash", "Heat Wave", "Heavy Slam", "Helping Hand", "Hex", "Hidden Power", "High Horsepower", "High Jump Kick", "Hold Back", "Hold Hands", "Hone Claws", "Horn Attack", "Horn Drill", "Horn Leech", "Howl", "Hurricane", "Hydro Cannon", "Hydro Pump", "Hydro Steam", "Hyper Beam", "Hyper Drill", "Hyper Fang", "Hyper Voice", "Hyperspace Fury", "Hyperspace Hole", "Hypnosis", "Ice Ball", "Ice Beam", "Ice Burn", "Ice Fang", "Ice Hammer", "Ice Punch", "Ice Shard", "Ice Spinner", "Icicle Crash", "Icicle Spear", "Icy Wind", "Imprison", "Incinerate", "Infernal Parade", "Inferno", "Infestation", "Ingrain", "Instruct", "Ion Deluge", "Iron Defense", "Iron Head", "Iron Tail", "Ivy Cudgel", "Jaw Lock", "Jet Punch", "Judgment", "Jump Kick", "Jungle Healing", "Karate Chop", "Kinesis", "King's Shield", "Knock Off", "Kowtow Cleave", "Land's Wrath", "Laser Focus", "Lash Out", "Last Resort", "Last Respects", "Lava Plume", "Leaf Blade", "Leaf Storm", "Leaf Tornado", "Leafage", "Leech Life", "Leech Seed", "Leer", "Lick", "Life Dew", "Light of Ruin", "Light Screen", "Liquidation", "Lock-On", "Lovely Kiss", "Low Kick", "Low Sweep", "Lucky Chant", "Lumina Crash", "Lunar Blessing", "Lunar Dance", "Lunge", "Luster Purge", "Mach Punch", "Magic Coat", "Magic Powder", "Magic Room", "Magical Leaf", "Magical Torque", "Magma Storm", "Magnet Bomb", "Magnet Rise", "Magnetic Flux", "Magnitude", "Make It Rain", "Malignant Chain", "Mat Block", "Matcha Gotcha", "Me First", "Mean Look", "Meditate", "Mega Drain", "Mega Kick", "Mega Punch", "Megahorn", "Memento", "Metal Burst", "Metal Claw", "Metal Sound", "Meteor Assault", "Meteor Beam", "Meteor Mash", "Metronome", "Mighty Cleave", "Milk Drink", "Mimic", "Mind Blown", "Mind Reader", "Minimize", "Miracle Eye", "Mirror Coat", "Mirror Move", "Mirror Shot", "Mist", "Mist Ball", "Misty Explosion", "Misty Terrain", "Moonblast", "Moongeist Beam", "Moonlight", "Morning Sun", "Mortal Spin", "Mountain Gale", "Mud Bomb", "Mud Shot", "Mud Sport", "Mud-Slap", "Muddy Water", "Multi-Attack", "Mystical Fire", "Mystical Power", "Nasty Plot", "Natural Gift", "Nature Power", "Nature's Madness", "Needle Arm", "Night Daze", "Night Shade", "Night Slash", "Nightmare", "No Retreat", "Noble Roar", "Noxious Torque", "Nuzzle", "Oblivion Wing", "Obstruct", "Octazooka", "Octolock", "Odor Sleuth", "Ominous Wind", "Order Up", "Origin Pulse", "Outrage", "Overdrive", "Overheat", "Pain Split", "Parabolic Charge", "Parting Shot", "Pay Day", "Payback", "Peck", "Perish Song", "Petal Blizzard", "Petal Dance", "Phantom Force", "Photon Geyser", "Pika Papow", "Pin Missile", "Plasma Fists", "Play Nice", "Play Rough", "Pluck", "Poison Fang", "Poison Gas", "Poison Jab", "Poison Powder", "Poison Sting", "Poison Tail", "Pollen Puff", "Poltergeist", "Population Bomb", "Pounce", "Pound", "Powder", "Powder Snow", "Power Gem", "Power Shift", "Power Split", "Power Swap", "Power Trick", "Power Trip", "Power Whip", "Power-Up Punch", "Precipice Blades", "Present", "Prismatic Laser", "Protect", "Psybeam", "Psyblade", "Psych Up", "Psychic", "Psychic Fangs", "Psychic Noise", "Psychic Terrain", "Psycho Boost", "Psycho Cut", "Psycho Shift", "Psyshield Bash", "Psyshock", "Psystrike", "Psywave", "Punishment", "Purify", "Pursuit", "Pyro Ball", "Quash", "Quick Attack", "Quick Guard", "Quiver Dance", "Rage", "Rage Fist", "Rage Powder", "Raging Bull", "Raging Fury", "Rain Dance", "Rapid Spin", "Razor Leaf", "Razor Shell", "Razor Wind", "Recover", "Recycle", "Reflect", "Reflect Type", "Refresh", "Relic Song", "Rest", "Retaliate", "Return", "Revelation Dance", "Revenge", "Reversal", "Revival Blessing", "Rising Voltage", "Roar", "Roar of Time", "Rock Blast", "Rock Climb", "Rock Polish", "Rock Slide", "Rock Smash", "Rock Throw", "Rock Tomb", "Rock Wrecker", "Role Play", "Rolling Kick", "Rollout", "Roost", "Rototiller", "Round", "Ruination", "Sacred Fire", "Sacred Sword", "Safeguard", "Salt Cure", "Sand Attack", "Sand Tomb", "Sandsear Storm", "Sandstorm", "Sappy Seed", "Scald", "Scale Shot", "Scary Face", "Scorching Sands", "Scratch", "Screech", "Searing Shot", "Secret Power", "Secret Sword", "Seed Bomb", "Seed Flare", "Seismic Toss", "Self-Destruct", "Shadow Ball", "Shadow Bone", "Shadow Claw", "Shadow Force", "Shadow Punch", "Shadow Sneak", "Sharpen", "Shed Tail", "Sheer Cold", "Shell Side Arm", "Shell Smash", "Shell Trap", "Shelter", "Shift Gear", "Shock Wave", "Shore Up", "Signal Beam", "Silk Trap", "Silver Wind", "Simple Beam", "Sing", "Sizzly Slide", "Sketch", "Skill Swap", "Skitter Smack", "Skull Bash", "Sky Attack", "Sky Drop", "Sky Uppercut", "Slack Off", "Slam", "Slash", "Sleep Powder", "Sleep Talk", "Sludge", "Sludge Bomb", "Sludge Wave", "Smack Down", "Smart Strike", "Smelling Salts", "Smog", "Smokescreen", "Snap Trap", "Snarl", "Snatch", "Snipe Shot", "Snore", "Snowscape", "Soak", "Soft-Boiled", "Solar Beam", "Solar Blade", "Sonic Boom", "Spacial Rend", "Spark", "Sparkling Aria", "Sparkly Swirl", "Spectral Thief", "Speed Swap", "Spicy Extract", "Spider Web", "Spike Cannon", "Spikes", "Spiky Shield", "Spin Out", "Spirit Break", "Spirit Shackle", "Spit Up", "Spite", "Splash", "Splishy Splash", "Spore", "Spotlight", "Springtide Storm", "Stealth Rock", "Steam Eruption", "Steamroller", "Steel Beam", "Steel Roller", "Steel Wing", "Sticky Web", "Stockpile", "Stomp", "Stomping Tantrum", "Stone Axe", "Stone Edge", "Stored Power", "Storm Throw", "Strange Steam", "Strength", "Strength Sap", "String Shot", "Struggle", "Struggle Bug", "Stuff Cheeks", "Stun Spore", "Submission", "Substitute", "Sucker Punch", "Sunny Day", "Sunsteel Strike", "Super Fang", "Supercell Slam", "Superpower", "Supersonic", "Surf", "Surging Strikes", "Swagger", "Swallow", "Sweet Kiss", "Sweet Scent", "Swift", "Switcheroo", "Swords Dance", "Synchronoise", "Synthesis", "Syrup Bomb", "Tachyon Cutter", "Tackle", "Tail Glow", "Tail Slap", "Tail Whip", "Tailwind", "Take Down", "Take Heart", "Tar Shot", "Taunt", "Tearful Look", "Teatime", "Techno Blast", "Teeter Dance", "Telekinesis", "Teleport", "Temper Flare", "Tera Blast", "Tera Starstorm", "Terrain Pulse", "Thief", "Thousand Arrows", "Thousand Waves", "Thrash", "Throat Chop", "Thunder", "Thunder Cage", "Thunder Fang", "Thunder Punch", "Thunder Shock", "Thunder Wave", "Thunderbolt", "Thunderclap", "Thunderous Kick", "Tickle", "Tidy Up", "Topsy-Turvy", "Torch Song", "Torment", "Toxic", "Toxic Spikes", "Toxic Thread", "Trailblaze", "Transform", "Tri Attack", "Trick", "Trick Room", "Trick-or-Treat", "Triple Arrows", "Triple Axel", "Triple Dive", "Triple Kick", "Trop Kick", "Trump Card", "Twin Beam", "Twineedle", "Twister", "U-turn", "Upper Hand", "Uproar", "V-create", "Vacuum Wave", "Veevee Volley", "Venom Drench", "Venoshock", "Victory Dance", "Vine Whip", "Vise Grip", "Vital Throw", "Volt Switch", "Volt Tackle", "Wake-Up Slap", "Water Gun", "Water Pledge", "Water Pulse", "Water Shuriken", "Water Sport", "Water Spout", "Waterfall", "Wave Crash", "Weather Ball", "Whirlpool", "Whirlwind", "Wicked Blow", "Wicked Torque", "Wide Guard", "Wild Charge", "Wildbolt Storm", "Will-O-Wisp", "Wing Attack", "Wish", "Withdraw", "Wonder Room", "Wood Hammer", "Work Up", "Worry Seed", "Wrap", "Wring Out", "X-Scissor", "Yawn", "Zap Cannon", "Zen Headbutt", "Zing Zap", "Zippy Zap"];
const ABILITY_LIST = ["Adaptability", "Aerilate", "Aftermath", "Air Lock", "Analytic", "Anger Point", "Anger Shell", "Anticipation", "Arena Trap", "Armor Tail", "Aroma Veil", "As One (Glastrier)", "As One (Spectrier)", "Aura Break", "Bad Dreams", "Ball Fetch", "Battery", "Battle Armor", "Battle Bond (Greninja)", "Beads of Ruin", "Beast Boost", "Berserk", "Big Pecks", "Blaze", "Bulletproof", "Cheek Pouch", "Chilling Neigh", "Chlorophyll", "Clear Body", "Cloud Nine", "Color Change", "Comatose", "Commander (Tatsugiri)", "Competitive", "Compound Eyes", "Contrary", "Corrosion", "Costar", "Cotton Down", "Cud Chew", "Curious Medicine", "Cursed Body", "Cute Charm", "Damp", "Dancer", "Dark Aura", "Dauntless Shield", "Dazzling", "Defeatist", "Defiant", "Delta Stream", "Desolate Land", "Disguise (Mimikyu)", "Download", "Dragon's Maw", "Drizzle", "Drought", "Dry Skin", "Early Bird", "Earth Eater", "Effect Spore", "Electric Surge", "Electromorphosis", "Embody Aspect (Ogerpon)", "Emergency Exit", "Fairy Aura", "Filter", "Flame Body", "Flare Boost", "Flash Fire", "Flower Gift", "Flower Veil", "Fluffy", "Forecast (Castform)", "Forewarn", "Friend Guard", "Frisk", "Full Metal Body", "Fur Coat", "Gale Wings", "Galvanize", "Gluttony", "Good as Gold", "Gooey", "Gorilla Tactics", "Grass Pelt", "Grassy Surge", "Grim Neigh", "Guard Dog", "Gulp Missile (Crammorant)", "Guts", "Hadron Engine", "Harvest", "Healer", "Heatproof", "Heavy Metal", "Honey Gather", "Hospitality", "Huge Power", "Hunger Switch (Morpeko)", "Hustle", "Hydration", "Hyper Cutter", "Ice Body", "Ice Face (Eiscue)", "Ice Scales", "Illuminate", "Illusion", "Immunity", "Imposter", "Infiltrator", "Innards Out", "Inner Focus", "Insomnia", "Intimidate", "Intrepid Sword", "Iron Barbs", "Iron Fist", "Justified", "Keen Eye", "Klutz", "Leaf Guard", "Levitate", "Libero", "Light Metal", "Lightning Rod", "Limber", "Lingering Aroma", "Liquid Ooze", "Liquid Voice", "Long Reach", "Magic Bounce", "Magic Guard", "Magician", "Magma Armor", "Magnet Pull", "Marvel Scale", "Mega Launcher", "Merciless", "Mimicry", "Mind's Eye", "Minus", "Mirror Armor", "Misty Surge", "Mold Breaker", "Moody", "Motor Drive", "Moxie", "Multiscale", "Multitype (Arceus)", "Mummy", "Mycelium Might", "Natural Cure", "Neuroforce", "Neutralizing Gas", "No Guard", "Normalize", "Oblivious", "Opportunist", "Orichalcum Pulse", "Overcoat", "Overgrow", "Own Tempo", "Parental Bond", "Pastel Veil", "Perish Body", "Pickpocket", "Pickup", "Pixilate", "Plus", "Poison Heal", "Poison Point", "Poison Puppeteer", "Poison Touch", "Power Construct (Zygarde)", "Power of Alchemy", "Power Spot", "Prankster", "Pressure", "Primordial Sea", "Prism Armor", "Propeller Tail", "Protean", "Protosynthesis", "Psychic Surge", "Punk Rock", "Pure Power", "Purifying Salt", "Quark Drive", "Queenly Majesty", "Quick Draw", "Quick Feet", "Rain Dish", "Rattled", "Receiver", "Reckless", "Refrigerate", "Regenerator", "Ripen", "Rivalry", "RKS System (Silvally)", "Rock Head", "Rocky Payload", "Rough Skin", "Run Away", "Sand Force", "Sand Rush", "Sand Spit", "Sand Stream", "Sand Veil", "Sap Sipper", "Schooling (Wishiwashi)", "Scrappy", "Screen Cleaner", "Seed Sower", "Serene Grace", "Shadow Shield", "Shadow Tag", "Sharpness", "Shed Skin", "Sheer Force", "Shell Armor", "Shield Dust", "Shields Down (Minior)", "Simple", "Skill Link", "Slow Start", "Slush Rush", "Sniper", "Snow Cloak", "Snow Warning", "Solar Power", "Solid Rock", "Soul-Heart", "Soundproof", "Speed Boost", "Stakeout", "Stall", "Stalwart", "Stamina", "Stance Change (Aegislash)", "Static", "Steadfast", "Steam Engine", "Steelworker", "Steely Spirit", "Stench", "Sticky Hold", "Storm Drain", "Strong Jaw", "Sturdy", "Suction Cups", "Super Luck", "Supersweet Syrup", "Supreme Overlord", "Surge Surfer", "Swarm", "Sweet Veil", "Swift Swim", "Sword of Ruin", "Symbiosis", "Synchronize", "Tablets of Ruin", "Tangled Feet", "Tangling Hair", "Technician", "Telepathy", "Tera Shell", "Tera Shift (Terapagos)", "Teraform Zero", "Teravolt", "Thermal Exchange", "Thick Fat", "Tinted Lens", "Torrent", "Tough Claws", "Toxic Boost", "Toxic Chain", "Toxic Debris", "Trace", "Transistor", "Triage", "Truant", "Turboblaze", "Unaware", "Unburden", "Unnerve", "Unseen Fist", "Vessel of Ruin", "Victory Star", "Vital Spirit", "Volt Absorb", "Wandering Spirit", "Water Absorb", "Water Bubble", "Water Compaction", "Water Veil", "Weak Armor", "Well-Baked Body", "White Smoke", "Wimp Out", "Wind Power", "Wind Rider", "Wonder Guard", "Wonder Skin"];
//pokemon that must be rerolled (mostly strange forms that dont have images)
const BANNED_POKEMON = [
    -1, //fallback value
    1117, //raticate totem
    1145, //gumshoos totem
    1146, //vikavolt totem
    1152, //lurantis totem
    1153, //salazzle totem
    1168, //mimikyu totem
    1169, //mimikyu totem busted
    1173, //marowak totem
    1174, //ribombee totem
    1177, //araquanid totem
    1178, //togedemaru totem

    1288, //koraidon forms
    1289,
    1290,
    1291,
    1292, //miraidon forms
    1293,
    1294,
    1295,

]
//FUNCTIONS

//Fetch Data from API and fill the pokemon data array
async function fetchAllPokemonArray() {
    let nextRequest = 'https://pokeapi.co/api/v2/pokemon/';
    let response = null;
    let data = null;

    while (nextRequest != null) {
        try {
            //get data from API
            response = await fetch(nextRequest);
            data = await response.json();

            for (let i = 0; i < data["results"].length;i++) {
                pokemonData.push(data["results"][i]);
            }

        } catch(error) {
            console.log("Error reading Pokemon ID ",i,"!")
        }
        
        //set next request link
        nextRequest = data["next"];
    }
}

//Fetch Data for a specific pokemon
//Returns: Object of Pokemon from the API
async function fetchPokemonData(pokemonID) {
    let response = null;
    let data = null;
    let responceSpecies = null;
    let dataSpecies = null;
    let finalObject = null;

    //get the data from this monster's API link
    try {
        response = await fetch(pokemonData[pokemonID]["url"]);
        data = await response.json();
    } catch(error) {
        console.log("Error reading Pokemon ID ",pokemonID,"!")
    }
    
    //some of the pokemon data is stored in a spererate API call, 'species'
    //...so fet the api call again!!! joy!
    try {
        responceSpecies = await fetch(data.species.url);
        dataSpecies = await responceSpecies.json();
    } catch(error) {
        console.log("Error reading species of Pokemon ID ",pokemonID,"!")
    }    

    //combine into one object
    finalObject = Object.assign(data, dataSpecies);
    
    //ADDITIONAL DATA
    //set some pokemon to be shiny cuz its cool
    finalObject.shiny = Math.floor(Math.random() * 1024);
    finalObject.shinySound = false;

    return finalObject;
}

//resets the selected pokemon and chooses a new set
async function newRandomPokemon() {
    let randomID = -1; //randomly selected pokemon
    let newPokemon;
    //clear the selected pokemon array
    selectedPokemon = [];

    //select a random pokemon
    for (let i = 0; i < POKEMON_COUNT; i++) {
        //get random mon
        //ensure that the mon is not banned too
        randomID = Math.floor(Math.random() * pokemonData.length) ;
        while (BANNED_POKEMON.includes(randomID)) {
            randomID = Math.floor(Math.random() * pokemonData.length) ;
        }
        console.log(randomID);
        newPokemon = await fetchPokemonData(randomID)
        selectedPokemon.push(newPokemon);
    }

    //update icons
    updatePokemonIcons();
    updatePokemonText();
    updatePokemonNames();
}

//update the icon IMG tags in the HTML doccument
function updatePokemonIcons() {
    //determine if to draw shiny
    let shinyFlag;
    let isShiny = (shinyFlag || category == (CATEGORY_ENUM.SHINY));
    //dummy out icons while loading
    for (let i = 0; i < POKEMON_COUNT; i++) {
        document.getElementById('icon'+String(i)).src = ERROR_SPRITE;
    }
    //get and load the new icons 
    for (let i = 0; i < POKEMON_COUNT; i++) {
        try{
            shinyFlag = (selectedPokemon[i].shiny == 1);
            let documentID = document.getElementById('icon'+String(i))
            documentID.src = selectedPokemon[i].sprites.front_default;
            //shiny icons
            if(isShiny) {
                //play shiny sound if legit sound
                if (shinyFlag && !selectedPokemon[i].shinySound) {
                    var audio = new Audio('shiny.mp3');
                    audio.play();
                    selectedPokemon[i].shinySound = true;
                }
                documentID.src = selectedPokemon[i].sprites.front_shiny;
            }
            documentID.onerror = () => {
                console.log("Image Load Error!");
                console.log(selectedPokemon[i]);
                documentID.src = selectedPokemon[i].sprites.other.showdown.front_default;
                if (isShiny) documentID.src = selectedPokemon[i].sprites.other.showdown.front_shiny;
            }
        } catch(ERROR) {
            //error case (this should never happen)
            console.log("Error obtaining sprite for pokemon ID",i);
            console.log(selectedPokemon);
            documentID.src = ERROR_SPRITE;
        }
    }

}

//update the text beneath each pokemon
function updatePokemonText() {
    let tempString = "null"; //temporary string before asigning to document

    //switch statement based on selected category
    for (let i = 0; i < POKEMON_COUNT; i++) {
        switch(category) {
            case CATEGORY_ENUM.TYPE:
                //first type (awlays exists)
                tempString = selectedPokemon[i].types[0].type.name;

                //single type pokemon don't have a second type
                //this is a hacky way to ensure it doesnt crash
                try {
                    //second type
                    tempString += " / " + selectedPokemon[i].types[1].type.name;
                } catch(error) {};

                break;
            case CATEGORY_ENUM.COLOR:
                tempString = selectedPokemon[i].color.name;
                break;
            case CATEGORY_ENUM.STAT_HIGH:
                let highestValue = 0;
                tempString = "???"
                for (let i2 = 0; i2 < 6; i2++) {
                    if (selectedPokemon[i].stats[i2].base_stat > highestValue) {
                        highestValue = selectedPokemon[i].stats[i2].base_stat;
                        tempString = selectedPokemon[i].stats[i2].stat.name;
                    } else if (selectedPokemon[i].stats[i2].base_stat == highestValue) {
                        tempString += " + " + selectedPokemon[i].stats[i2].stat.name;
                    }
                }
                tempString = capitalize(tempString);
                break;
            case CATEGORY_ENUM.STAT_LOW:
                let lowestValue = 256;
                tempString = "???"
                for (let i2 = 0; i2 < 6; i2++) {
                    if (selectedPokemon[i].stats[i2].base_stat < lowestValue) {
                        lowestValue = selectedPokemon[i].stats[i2].base_stat;
                        tempString = selectedPokemon[i].stats[i2].stat.name;
                    } else if (selectedPokemon[i].stats[i2].base_stat == lowestValue) {
                        tempString += " + " + selectedPokemon[i].stats[i2].stat.name;
                    }
                }
                tempString = capitalize(tempString);
                break;
            case CATEGORY_ENUM.EV_YIELD:
                tempString = ""
                for (let i2 = 0; i2 < 6; i2++) {
                    if (selectedPokemon[i].stats[i2].effort > 0) {
                        tempString += selectedPokemon[i].stats[i2].effort + " " + STAT_NAMES[i2] + " ";
                    }
                }
                tempString = capitalize(tempString);
                break;
            case CATEGORY_ENUM.ORIGIN_GENERATION:
                tempString = selectedPokemon[i].generation.name;
                break;
            case CATEGORY_ENUM.SHINY:
                tempString = "IT'S SHINY???";
                break;
            case CATEGORY_ENUM.HEIGHT:
                tempString = selectedPokemon[i].height/10 + "m";
                break;
            case CATEGORY_ENUM.WEIGHT:
                tempString = selectedPokemon[i].weight/10 + " kg";
                break;
            case CATEGORY_ENUM.DEX_NUM:
                tempString = "#"+selectedPokemon[i].pokedex_numbers[0].entry_number;
                break;
            default:
                tempString = "Not Implemented.";
                break;
        }
        //HP edge case
        if (tempString == "Hp") tempString = "HP";
        //update html document
        document.getElementById('text'+String(i)).textContent = capitalize(tempString);
    }
}

//called when swapping category
function updateCategory() {
    //get the category value forom the HTML element and send it to our code
    let categoryValue = document.getElementById("category").value;
    category = parseInt(categoryValue);
    //update the text and icons
    updatePokemonText();
    updatePokemonIcons();
}

//set the display names for pokemon
function updatePokemonNames() {
    for (let i = 0; i < POKEMON_COUNT; i++) {
        document.getElementById('name'+String(i)).textContent = capitalize(selectedPokemon[i].name);
    }
}

//stole this off the web
function capitalize(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

//get a random move and ability
function randomMoveAbility() {
    let newMoveID = Math.floor(Math.random() * MOVES_LIST.length);
    let newAbilityID = Math.floor(Math.random() * ABILITY_LIST.length);

    document.getElementById('move0').textContent = "Move: "+ MOVES_LIST[newMoveID];
    document.getElementById('ability0').textContent = "Ability: "+ ABILITY_LIST[newAbilityID];
}

//randomly select a category and assign it to the selection object
function randomCategory() {
    let newCategory = category; //temp category
    while (category == newCategory) {
        newCategory = Math.floor(Math.random() * CATEGORY_ENUM.LENGTH);
        
    }
    console.log(newCategory);
    category = newCategory;
    document.getElementById("category").value = category;
    //update the text and icons
    updatePokemonText();
    updatePokemonIcons();
}

//VARIABLES
let pokemonData = []; //contains every pokemon and the link to their associated API link.
let selectedPokemon = []; //the currently selected pokemons
let selectedPokemonSpecies = []; //for some reason, some species data is stored in a completley different query. FUN!
//let movesList = [];  //data for every move
//let abilityList = [];//data for every ability
let category = 0; //currnetly selected categoyr


//'''MAIN'''
(async () => {
    //get the list of all pokemon from the API
    await fetchAllPokemonArray();
    // initalize the pokemon :)
    await newRandomPokemon();
    
    //Set ability and move
    randomMoveAbility();

})();
