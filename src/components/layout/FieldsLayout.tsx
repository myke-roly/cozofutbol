import React, { PropsWithChildren, createRef, memo } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

import { ContentWithButtonsLayout } from './'
import { KeyboardAvoidingComponent, Text, TextField } from '../common'
import { TextFieldProps } from '../ui/TextField'
import { ContentWithButtonsLayoutProps } from './ContentWithButtonsLayout'
import { Color } from '../../constants'

export type FieldsLayoutProps = {
  fields: TextFieldProps[]
  error: string
  children: PropsWithChildren<React.ReactNode>
} & ContentWithButtonsLayoutProps

const FieldsLayout = ({
  fields,
  error,
  primaryButton,
  secondaryButton,
  children,
}: FieldsLayoutProps) => {
  console.log('🚀 ~ FieldsLayout:')

  return (
    <KeyboardAvoidingComponent>
      <ContentWithButtonsLayout
        isfocued={false}
        primaryButton={primaryButton}
        secondaryButton={secondaryButton}>
        {/* TODO: render header component */}
        <ScrollView>
          {children}
          <View style={styles.fields}>
            {fields.map(({ onChange, ...props }, index) => (
              <TextField
                ref={() => createRef()}
                key={String(index)}
                onChange={onChange}
                autoFocus={index === 0}
                divider={index !== fields.length - 1}
                {...props}
              />
            ))}
          </View>
          {!!error && (
            <Text style={styles.error} level="2">
              {error}
            </Text>
          )}
        </ScrollView>
      </ContentWithButtonsLayout>
    </KeyboardAvoidingComponent>
  )
}

const styles = StyleSheet.create({
  fields: {
    marginTop: 24,
    borderWidth: 1,
    borderColor: Color.GRAY,
    borderRadius: 8,
    paddingHorizontal: 2,
  },
  error: {
    color: Color.DANGER,
    paddingVertical: 8,
  },
})

export default memo(FieldsLayout)
