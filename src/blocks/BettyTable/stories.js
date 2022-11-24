import * as React from 'react'
import mock from './mock'
import BettyTable from './BettyTable'

export default {
  title: 'Blocks/Content',
  component: BettyTable,
}

const Template = (args) => <BettyTable {...args} />

export const Default = Template.bind({})
Default.args = mock
