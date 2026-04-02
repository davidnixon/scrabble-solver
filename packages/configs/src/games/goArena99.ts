import { BONUS_CHARACTER, BONUS_WORD } from '@scrabble-solver/constants';
import { Game } from '@scrabble-solver/types';

export const goArena99 = {
  bingo: { multiplier: 2 },
  blankScore: 0,
  blanksCount: 2,
  boardHeight: 9,
  boardWidth: 9,
  game: Game.GoArena99,
  name: 'Go Arena 9x9',
  rackSize: 7,
  bonuses: [
    { multiplier: 3, type: BONUS_CHARACTER, y: 0, x: 1 },
    { multiplier: 3, type: BONUS_CHARACTER, y: 0, x: 7 },

    { multiplier: 3, type: BONUS_CHARACTER, y: 1, x: 0 },
    { multiplier: 2, type: BONUS_WORD, y: 1, x: 2 },
    { multiplier: 2, type: BONUS_WORD, y: 1, x: 6 },
    { multiplier: 3, type: BONUS_CHARACTER, y: 1, x: 8 },

    { multiplier: 2, type: BONUS_WORD, y: 2, x: 1 },
    { multiplier: 2, type: BONUS_CHARACTER, y: 2, x: 3 },
    { multiplier: 2, type: BONUS_CHARACTER, y: 2, x: 5 },
    { multiplier: 2, type: BONUS_WORD, y: 2, x: 7 },

    { multiplier: 2, type: BONUS_CHARACTER, y: 3, x: 2 },
    { multiplier: 2, type: BONUS_CHARACTER, y: 3, x: 6 },

    { multiplier: 2, type: BONUS_CHARACTER, y: 5, x: 2 },
    { multiplier: 2, type: BONUS_CHARACTER, y: 5, x: 6 },

    { multiplier: 2, type: BONUS_WORD, y: 6, x: 1 },
    { multiplier: 2, type: BONUS_CHARACTER, y: 6, x: 3 },
    { multiplier: 2, type: BONUS_CHARACTER, y: 6, x: 5 },
    { multiplier: 2, type: BONUS_WORD, y: 6, x: 7 },

    { multiplier: 3, type: BONUS_CHARACTER, y: 7, x: 0 },
    { multiplier: 2, type: BONUS_WORD, y: 7, x: 2 },
    { multiplier: 2, type: BONUS_WORD, y: 7, x: 6 },
    { multiplier: 3, type: BONUS_CHARACTER, y: 7, x: 8 },

    { multiplier: 3, type: BONUS_CHARACTER, y: 8, x: 1 },
    { multiplier: 3, type: BONUS_CHARACTER, y: 8, x: 7 },
  ],
};
