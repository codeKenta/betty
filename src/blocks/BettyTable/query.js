import { formatAdvancedMedia } from '~/api/sanity/utils'

export default `{
  title,
  betters[] {
  "name": betterName,
  correctWinner,
  correctWinnerAndResult,
  correctFinale,
  "total": ((correctFinale * 15) + correctWinner + (correctWinnerAndResult * 3))
  }  | order((correctWinnerAndResult * 3) desc) | order(total desc) | order((correctFinale * 15) desc) | order(total desc),
  mediaProps ${formatAdvancedMedia},
}`
