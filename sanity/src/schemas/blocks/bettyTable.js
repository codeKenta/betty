import { MdTextFields } from 'react-icons/md'
import commonBlockSettings from '../partials/commonBlockSettings'
import previewTitle from '../../utils/previewTitle'

export default {
  ...commonBlockSettings,
  title: 'Betty Table',
  name: 'BettyTable',
  type: 'object',
  preview: previewTitle('Content', 'heading', MdTextFields),
  fields: [{ title: 'Text', name: 'title', type: 'string', group: 'content' },  {
    name: 'betters',
    type: 'array',
    of: [{type: 'better'}],
    group: 'content',
  },
 {
      name: 'mediaProps',
      title: 'Media',
      type: 'advancedMedia',
      group: 'content',
    },

],
}
