import React, { PropsWithChildren, memo } from 'react'
import { StyleSheet, View, ScrollView, Dimensions } from 'react-native'
import { Button } from '../ui'
import { ButtonProps } from '../ui/Button'
import { Color } from '../../constants'

const heightWindow = Dimensions.get('window').height

export type ContentWithButtonsLayoutProps = PropsWithChildren<{
  primaryButton?: ButtonProps
  secondaryButton?: ButtonProps
  isfocued?: boolean
}>

const renderPrimaryButton = ({ variant, ...props }: ButtonProps) => (
  <Button variant={variant || 'primary'} {...props} />
)

const renderSecondaryButton = ({ ...props }: ButtonProps) => (
  <Button variant="text" {...props} />
)

const ContentWithButtonsLayout = ({
  children,
  primaryButton,
  secondaryButton,
  isfocued = false,
}: ContentWithButtonsLayoutProps) => {
  console.log('render ContentWithButtonsLayout', heightWindow)

  return (
    <View style={styles.container}>
      {children && (
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled">
          {children}
        </ScrollView>
      )}
      {!!primaryButton && (
        <View style={[styles.buttons, isfocued && styles.topShadow]}>
          {renderPrimaryButton({ ...primaryButton })}
          {!!secondaryButton && renderSecondaryButton({ ...secondaryButton })}
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
  },
  content: {
    flex: 1,
    width: '90%',
    height: heightWindow * 0.7,
    alignSelf: 'center',
    marginVertical: 24,
  },
  buttons: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: Color.WHITE,
  },
  topShadow: {
    shadowOffset: { width: 0, height: 10 },
    shadowColor: Color.BLACK,
    elevation: 10,
  },
})

export default memo(ContentWithButtonsLayout)
