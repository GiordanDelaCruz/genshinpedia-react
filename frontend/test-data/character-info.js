const API_URL = "https://genshin.jmp.blue/characters/ganyu";

const ganyu_data = {
    "name": "Ganyu",
    "title": "Plenilune Gaze",
    "vision": "Cryo",
    "weapon": "Bow",
    "gender": "Female",
    "nation": "Liyue",
    "affiliation": "Yuehai Pavilion",
    "rarity": 5,
    "release": "2021-01-12",
    "constellation": "Sinae Unicornis",
    "birthday": "0000-12-02",
    "description": "The secretary at Yuehai Pavilion. The blood of the qilin, an illuminated beast, flows within her veins.",
    "skillTalents": [
      {
        "name": "Liutian Archery",
        "unlock": "Normal Attack",
        "description": "Normal Attack\nPerform up to 6 consecutive shots with a bow.\nCharged Attack\nPerform a more precise Aimed Shot with increased DMG. While aiming, an icy aura will accumulate on the arrowhead before the arrow is fired.\nHas different effects based on how long the energy has been charged\nCharge Level 1\nFires off an icy arrow that deals Cryo DMG.\nCharge Level 2\nFires off a Frostflake Arrow that deals Cryo DMG.\nThe Frostflake Arrow blooms after hitting its target, dealing AoE Cryo DMG.",
        "upgrades": [
          {
            "name": "1-Hit DMG",
            "value": "31.7%"
          },
          {
            "name": "2-Hit DMG",
            "value": "35.6%"
          },
          {
            "name": "3-Hit DMG",
            "value": "45.5%"
          },
          {
            "name": "4-Hit DMG",
            "value": "45.5%"
          },
          {
            "name": "5-Hit DMG",
            "value": "48.2%"
          },
          {
            "name": "6-Hit DMG",
            "value": "57.6%"
          },
          {
            "name": "Aimed Shot",
            "value": "43.9%"
          },
          {
            "name": "Aimed Shot Charge Level 1 DMG",
            "value": "124%"
          },
          {
            "name": "Frostflake Arrow DMG",
            "value": "128%"
          },
          {
            "name": "Frostflake Arrow Bloom DMG",
            "value": "218%"
          },
          {
            "name": "Plunge DMG",
            "value": "56.8%"
          },
          {
            "name": "Low / High Plunge DMG",
            "value": "114% / 142%"
          }
        ],
        "type": "NORMAL_ATTACK"
      },
      {
        "name": "Trail of the Qilin",
        "unlock": "Elemental Skill",
        "description": "Leaving a single Ice Lotus behind, Ganyu dashes backward, shunning all impurity and dealing AoE Cryo DMG.\nThe Ice Lotus continuously taunts surrounding opponents, attracting them to attack it. Its endurance scales based on Ganyu's Max HP, and it blooms profusely when destroyed or once its duration ends, dealing AoE Cryo DMG.",
        "upgrades": [
          {
            "name": "Inherited HP",
            "value": "120%"
          },
          {
            "name": "Skill DMG",
            "value": "132%"
          },
          {
            "name": "Delay",
            "value": "2s"
          },
          {
            "name": "Duration",
            "value": "6s"
          },
          {
            "name": "CD",
            "value": "10s"
          }
        ],
        "type": "ELEMENTAL_SKILL"
      },
      {
        "name": "Celestial Shower",
        "unlock": "Elemental Burst",
        "description": "Coalesces atmospheric frost and snow to summon a Sacred Cryo Pearl that exorcises evil.\nWhile active, the Sacred Cryo Pearl will continuously rain down shards of ice, striking opponents within its AoE and dealing Cryo DMG.",
        "upgrades": [
          {
            "name": "Ice Shard DMG",
            "value": "70%"
          },
          {
            "name": "Duration",
            "value": "15s"
          },
          {
            "name": "CD",
            "value": "15s"
          },
          {
            "name": "Energy Cost",
            "value": "60"
          }
        ],
        "type": "ELEMENTAL_BURST"
      }
    ],
    "passiveTalents": [
      {
        "name": "Undivided Heart",
        "unlock": "Unlocked at Ascension 1",
        "description": "After firing a Frostflake Arrow, the CRIT Rate of subsequent Frostflake Arrows and their resulting bloom effects is increased by 20% for 5s.",
        "level": 1
      },
      {
        "name": "Harmony between Heaven and Earth",
        "unlock": "Unlocked at Ascension 4",
        "description": "Celestial Shower grants a 20% Cryo DMG Bonus to active members in the AoE.",
        "level": 4
      },
      {
        "name": "Preserved for the Hunt",
        "unlock": "Unlocked Automatically",
        "description": "Refunds 15% of the ores used when crafting Bow-type weapons."
      }
    ],
    "constellations": [
      {
        "name": "Dew-Drinker",
        "unlock": "Constellation Lv. 1",
        "description": "Taking DMG from a Charge Level 2 Frostflake Arrow or Frostflake Arrow Bloom decreases opponents' Cryo RES by 15% for 6s.\n\nA hit regenerates 2 Energy for Ganyu. This effect can only occur once per Charge Level Frostflake Arrow, regardless if Frostflake Arrow itself or its Bloom hit the target.",
        "level": 1
      },
      {
        "name": "The Auspicious",
        "unlock": "Constellation Lv. 2",
        "description": "Trail of the Qilin gains 1 additional charge.",
        "level": 2
      },
      {
        "name": "Cloud-Strider",
        "unlock": "Constellation Lv. 3",
        "description": "Increases the Level of Celestial Shower by 3. Maximum upgrade level is 15.",
        "level": 3
      },
      {
        "name": "Westward Sojourn",
        "unlock": "Constellation Lv. 4",
        "description": "Opponents standing within the AoE of Celestial Shower take increased DMG. This effect strengthens over time. Increased DMG taken begins at 5% and increases by 5% every 3s, up to a maximum of 25%.\nThe effect lingers for 3s after the opponent leaves the AoE.",
        "level": 4
      },
      {
        "name": "The Merciful",
        "unlock": "Constellation Lv. 5",
        "description": "Increases the Level of Trail of the Qilin by 3. Maximum upgrade level is 15.",
        "level": 5
      },
      {
        "name": "The Clement",
        "unlock": "Constellation Lv. 6",
        "description": "Using Trail of the Qilin causes the next Frostflake Arrow shot within 30s to not require charging.",
        "level": 6
      }
    ],
    "vision_key": "CRYO",
    "weapon_type": "BOW",
    "outfits": [
      {
        "type": "Themed",
        "name": "Twilight Blossom",
        "description": "A light and graceful festive outfit accented mainly in black nightshade and cerulean blue. Its hair accessory is as radiant as the Qingxin — a pairing that Ganyu is most fond of.",
        "rarity": 4,
        "price": 1680,
        "image": "outfit-twilight-blossom"
      }
    ],
    "id": "ganyu"
  };

  export default ganyu_data;
  export {API_URL};