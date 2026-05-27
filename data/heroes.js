/**
 * Dungeon Dice Duel - Hero data
 *
 * This file defines the heroes for the dice-based battle idea (and shared card data
 * for other game modes that use the same roster).
 *
 * Each hero has:
 * - id: unique numeric id
 * - name: hero name
 * - attackPower: numeric max roll for attack (1..attackPower)
 * - defensePower: numeric max roll for defense (1..defensePower)
 * - maxHp: starting hit points for that hero
 * - imageUrl: used by the frontend to show a card image
 *
 * NOTE:
 * - For Epic 1 you can keep HP ephemeral (per battle) and not store it in DB.
 * - For later epics, you can move this into a "heroes" table.
 */

export const heroes = [
  {
    id: 1,
    name: "Knight of Ashfang",
    attackPower: 10,
    defensePower: 6,
    maxHp: 18,
    imageUrl:
      "https://images.unsplash.com/photo-1577493340887-b7bfff550145?auto=format&fit=crop&crop=top&w=500&h=400&q=80"
  },
  {
    id: 2,
    name: "Mireclaw Raider",
    attackPower: 9,
    defensePower: 4,
    maxHp: 14,
    imageUrl:
      "https://images.unsplash.com/photo-1643345633742-7af1bd1226af?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 3,
    name: "Voltjaw Rogue",
    attackPower: 8,
    defensePower: 6,
    maxHp: 12,
    imageUrl:
      "https://images.unsplash.com/photo-1561084746-f360502e5abe?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 4,
    name: "Grimscale Guardian",
    attackPower: 7,
    defensePower: 8,
    maxHp: 20,
    imageUrl:
      "https://images.unsplash.com/photo-1770610973306-a09b57e6dc52?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 5,
    name: "Briarhorn Druid",
    attackPower: 7,
    defensePower: 7,
    maxHp: 16,
    imageUrl:
      "https://images.unsplash.com/photo-1542605731-cf0169ad50e3?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 6,
    name: "Frostmane Warlock",
    attackPower: 8,
    defensePower: 5,
    maxHp: 15,
    imageUrl:
      "https://images.unsplash.com/photo-1725158214576-a908b2a0346a?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 7,
    name: "Emberfang Berserker",
    attackPower: 11,
    defensePower: 5,
    maxHp: 16,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1667608386999-bc20b98ef329?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 8,
    name: "Tidecaller Mystic",
    attackPower: 6,
    defensePower: 9,
    maxHp: 17,
    imageUrl:
      "https://images.unsplash.com/photo-1696825612755-7ba581bb4f39?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 9,
    name: "Shadowfen Assassin",
    attackPower: 10,
    defensePower: 4,
    maxHp: 13,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1696528052089-fd6dabc34972?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 10,
    name: "Ironbark Sentinel",
    attackPower: 6,
    defensePower: 10,
    maxHp: 22,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1694444269425-897fa3a0e3fa?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 11,
    name: "Stormveil Archer",
    attackPower: 9,
    defensePower: 7,
    maxHp: 14,
    imageUrl:
      "https://images.unsplash.com/photo-1573306533578-12e23afbf2c6?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 12,
    name: "Duskwraith Knight",
    attackPower: 8,
    defensePower: 8,
    maxHp: 18,
    imageUrl:
      "https://images.unsplash.com/photo-1483879504681-c0196ecceda5?auto=format&fit=crop&w=500&q=80"
  }
];