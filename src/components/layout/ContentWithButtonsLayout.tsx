import React, { PropsWithChildren, memo } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Button } from '../ui'
import { ButtonProps } from '../ui/Button'
import { Color } from '../../constants'

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
  const [buttonsHeight, setButtonsHeight] = React.useState(0)

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={[
          styles.content,
          { marginBottom: buttonsHeight },
        ]}
        keyboardShouldPersistTaps="handled">
        {children}
      </ScrollView>
      {!!primaryButton && (
        <View
          testID="buttons-view"
          style={[styles.buttons, isfocued && styles.topShadow]}
          onLayout={({ nativeEvent: { layout } }) =>
            setButtonsHeight(layout.height)
          }>
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
