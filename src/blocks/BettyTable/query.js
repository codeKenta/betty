import { formatAdvancedMedia } from '~/api/sanity/utils'

export default `{
  title,
  betters[] {
  "name": betterName,
  correctWinner,
  correctWinnerAndResult,
  correctFinale,
  "total": ((correctFinale * 15) + correctWinner + (correctWinnerAndResult * 3))
  }  | order(total desc) | order((correctFinale * 15) desc) | order((correctWinnerAndResult * 3) desc),
  mediaProps ${formatAdvancedMedia},
}`
