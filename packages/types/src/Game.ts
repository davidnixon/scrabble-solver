export enum Game {
  Crossplay = 'crossplay',
  Kelimelik = 'kelimelik',
  LetterLeague = 'letter-league',
  Literaki = 'literaki',
  Scrabble = 'scrabble',
  ScrabbleDuel = 'scrabble-duel',
  SuperScrabble = 'super-scrabble',
  GoArena99 = 'go-arena-9x9',
  GoArena99B = 'go-arena-9x9B',
  GoArena11 = 'go-arena-11x11',
}

const games = Object.values(Game);

export const isGame = (locale: unknown): locale is Game => games.includes(locale as Game);
