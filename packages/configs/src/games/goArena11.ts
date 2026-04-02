import { BONUS_CHARACTER, BONUS_WORD } from '@scrabble-solver/constants';
import { Game } from '@scrabble-solver/types';

export const goArena11 = {
  bingo: { multiplier: 2 },
  blankScore: 0,
  blanksCount: 2,
  boardHeight: 11,
  boardWidth: 11,
  game: Game.GoArena11,
  name: 'Go Arena 11x11',
  rackSize: 7,
  bonuses: [
    { multiplier: 3, type: BONUS_WORD, y: 0, x: 1 },
    { multiplier: 3, type: BONUS_WORD, y: 0, x: 9 },

    { multiplier: 3, type: BONUS_WORD, y: 1, x: 0 },
    { multiplier: 3, type: BONUS_CHARACTER, y: 1, x: 2 },
    { multiplier: 3, type: BONUS_CHARACTER, y: 1, x: 8 },
    { multiplier: 3, type: BONUS_WORD, y: 1, x: 10 },

    { multiplier: 3, type: BONUS_CHARACTER, y: 2, x: 1 },
    { multiplier: 2, type: BONUS_WORD, y: 2, x: 3 },
    { multiplier: 2, type: BONUS_WORD, y: 2, x: 7 },
    { multiplier: 3, type: BONUS_CHARACTER, y: 2, x: 9 },

    { multiplier: 2, type: BONUS_WORD, y: 3, x: 2 },
    { multiplier: 2, type: BONUS_CHARACTER, y: 3, x: 4 },
    { multiplier: 2, type: BONUS_CHARACTER, y: 3, x: 6 },
    { multiplier: 2, type: BONUS_WORD, y: 3, x: 8 },

    { multiplier: 2, type: BONUS_CHARACTER, y: 4, x: 3 },
    { multiplier: 2, type: BONUS_CHARACTER, y: 4, x: 7 },

    /* middle row empty */

    { multiplier: 2, type: BONUS_CHARACTER, y: 6, x: 3 },
    { multiplier: 2, type: BONUS_CHARACTER, y: 6, x: 7 },

    { multiplier: 2, type: BONUS_WORD, y: 7, x: 2 },
    { multiplier: 2, type: BONUS_CHARACTER, y: 7, x: 4 },
    { multiplier: 2, type: BONUS_CHARACTER, y: 7, x: 6 },
    { multiplier: 2, type: BONUS_WORD, y: 7, x: 8 },

    { multiplier: 3, type: BONUS_CHARACTER, y: 8, x: 1 },
    { multiplier: 2, type: BONUS_WORD, y: 8, x: 3 },
    { multiplier: 2, type: BONUS_WORD, y: 8, x: 7 },
    { multiplier: 3, type: BONUS_CHARACTER, y: 8, x: 9 },

    { multiplier: 3, type: BONUS_WORD, y: 9, x: 0 },
    { multiplier: 3, type: BONUS_CHARACTER, y: 9, x: 2 },
    { multiplier: 3, type: BONUS_CHARACTER, y: 9, x: 8 },
    { multiplier: 3, type: BONUS_WORD, y: 9, x: 10 },

    { multiplier: 3, type: BONUS_WORD, y: 10, x: 1 },
    { multiplier: 3, type: BONUS_WORD, y: 10, x: 9 },
  ],
};
