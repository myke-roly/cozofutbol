import React from 'react'
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
} from 'react-native'

type TextProps = {
  level?: '1' | '2' | '3' | '4' | '5'
  strong?: boolean
  centered?: boolean
} & RNTextProps

const Text = ({ level = '4', strong, centered, children }: TextProps) => {
  const fontSizeStyle = {
    '1': styles.level1,
    '2': styles.level2,
    '3': styles.level3,
    '4': styles.level4,
    '5': styles.level5,
  }

  const strongStyle = strong && styles.strong
  const centeredStyle = centered && styles.centered

  const finalStyles = {
    ...fontSizeStyle[level],
    ...strongStyle,
    ...centeredStyle,
  }

  return <RNText style={finalStyles}>{children}</RNText>
}

const styles = StyleSheet.create({
  level1: {
    fontSize: 10,
  },
  level2: {
    fontSize: 12,
  },
  level3: {
    fontSize: 14,
  },
  level4: {
    fontSize: 16,
  },
  level5: {
    fontSize: 20,
  },
  strong: {
    fontWeight: 'bold',
  },
  centered: {
    textAlign: 'center',
  },
})

export default Text
