import renderer from 'react-test-renderer'
import Button from './Button'

import { fireEvent, render } from '@testing-library/react-native'
import { Animated } from 'react-native'

jest.spyOn(Animated, 'timing').mockImplementation(() => ({
  start: jest.fn(),
  stop: jest.fn(),
  reset: jest.fn(),
}))

describe('Button', () => {
  it('renders correctly', () => {
    const { toJSON, getByTestId } = render(
      <Button title="test-title" onPress={jest.fn()} />,
    )

    fireEvent(getByTestId('btn-presable-view'), 'onPressIn')
    expect(Animated.timing).toHaveBeenCalledWith(expect.any(Object), {
      toValue: 0.98,
      duration: 100,
      useNativeDriver: true,
    })

    fireEvent(getByTestId('btn-presable-view'), 'onPressOut')
    expect(Animated.timing).toHaveBeenCalledWith(expect.any(Object), {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    })

    expect(toJSON()).toMatchSnapshot()
  })

  it('renders correctly with disabled', () => {
    const tree = renderer
      .create(<Button title="test-title" onPress={jest.fn()} disabled />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with outline variant', () => {
    const tree = renderer
      .create(
        <Button title="test-title" onPress={jest.fn()} variant="outline" />,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly with text variant', () => {
    const tree = renderer
      .create(<Button title="test-title" onPress={jest.fn()} variant="text" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
