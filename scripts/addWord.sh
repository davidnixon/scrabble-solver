DICTIONARY_LOCALE=en-US
set -e
jq '
  reduce $ARGS.positional[] as $w (.; .additions |= (if index($w) then . else . + [$w] end))
' packages/word-lists/src/customization/${DICTIONARY_LOCALE}.json --args "$@" > /tmp/output.json
cp /tmp/output.json packages/word-lists/src/customization/${DICTIONARY_LOCALE}.json
rm ~/.scrabble-solver/dictionaries/${DICTIONARY_LOCALE}.txt
npm run build -w @scrabble-solver/word-lists
npm run build -w @scrabble-solver/dictionaries
