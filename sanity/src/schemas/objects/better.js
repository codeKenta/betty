
export default {
  name: 'better',
  title: 'Bettare',
  type: 'object',
  fields: [
    {
      name: 'betterName',
      title: 'Namn på bettare',
      type: 'string',
    },
    {
      name: 'correctWinner',
      title: 'Rätt vinnare, fel resultat',
      type: 'number',
    },
    {
      name: 'correctWinnerAndResult',
      title: 'Rätt vinnare och resultat',
      type: 'number',
    },
     {
      name: 'correctFinale',
      title: 'Rätt vinnare av turnering',
      type: 'number',
    },
  ],
}
