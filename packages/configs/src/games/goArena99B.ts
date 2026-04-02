import { BONUS_CHARACTER, BONUS_WORD } from '@scrabble-solver/constants';
import { Game } from '@scrabble-solver/types';

export const goArena99B = {
  bingo: { multiplier: 2 },
  blankScore: 0,
  blanksCount: 2,
  boardHeight: 9,
  boardWidth: 9,
  game: Game.GoArena99B,
  name: 'Go Arena 9x9 variant B',
  rackSize: 7,
  bonuses: [
    { multiplier: 3, type: BONUS_CHARACTER, y: 0, x: 0 },
    { multiplier: 2, type: BONUS_CHARACTER, y: 0, x: 4 },
    { multiplier: 3, type: BONUS_CHARACTER, y: 0, x: 8 },

    { multiplier: 3, type: BONUS_CHARACTER, y: 1, x: 1 },
    { multiplier: 3, type: BONUS_CHARACTER, y: 1, x: 7 },

    { multiplier: 2, type: BONUS_WORD, y: 2, x: 2 },
    { multiplier: 2, type: BONUS_WORD, y: 2, x: 6 },

    { multiplier: 2, type: BONUS_CHARACTER, y: 3, x: 3 },
    { multiplier: 2, type: BONUS_CHARACTER, y: 3, x: 5 },

    { multiplier: 2, type: BONUS_CHARACTER, y: 4, x: 0 },
    { multiplier: 2, type: BONUS_CHARACTER, y: 4, x: 8 },

    { multiplier: 2, type: BONUS_CHARACTER, y: 5, x: 3 },
    { multiplier: 2, type: BONUS_CHARACTER, y: 5, x: 5 },

    { multiplier: 2, type: BONUS_WORD, y: 6, x: 2 },
    { multiplier: 2, type: BONUS_WORD, y: 6, x: 6 },

    { multiplier: 3, type: BONUS_CHARACTER, y: 7, x: 1 },
    { multiplier: 3, type: BONUS_CHARACTER, y: 7, x: 7 },

    { multiplier: 3, type: BONUS_CHARACTER, y: 8, x: 0 },
    { multiplier: 2, type: BONUS_CHARACTER, y: 8, x: 4 },
    { multiplier: 3, type: BONUS_CHARACTER, y: 8, x: 8 },
  ],
};
