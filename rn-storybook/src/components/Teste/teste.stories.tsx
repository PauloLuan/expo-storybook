import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react-native'
import { Teste, TesteProps } from '.'

const args = {}

storiesOf('Components/Teste', module)
  //.addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default: ', () => <Teste {...args} />)
  .add('with some modification: ', () => <Teste {...args} />)
