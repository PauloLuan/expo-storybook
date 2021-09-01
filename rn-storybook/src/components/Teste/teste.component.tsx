import React from 'react'
import { Text } from 'react-native'
import * as S from './teste.styles'

export interface TesteProps {
  testId?: string
}

export const Teste = ({
  testId = 'component-teste-id',
  ...props
}: TesteProps) => {
  return (
    <>
      <S.Wrapper testID={testId} {...props}>
        <Text>Body...</Text>
      </S.Wrapper>
    </>
  )
}
