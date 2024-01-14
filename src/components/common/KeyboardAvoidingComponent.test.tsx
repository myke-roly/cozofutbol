import renderer from 'react-test-renderer'
import { fireEvent, render } from '@testing-library/react-native'
import { View } from 'react-native'
import KeyboardAvoidingComponent from './KeyboardAvoidingComponent'
import { Text } from './'

describe('KeyboardAvoidingComponent', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <KeyboardAvoidingComponent>
          <View>
            <Text>Children custom keyboard avoiding</Text>
          </View>
        </KeyboardAvoidingComponent>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Should render correctly sets height onLayout', () => {
    const nativeEventMock = {
      nativeEvent: {
        layout: {
          height: 100,
        },
      },
    }

    const { toJSON, getByTestId } = render(
      <KeyboardAvoidingComponent>
        <View>
          <Text>Children custom keyboard avoiding</Text>
        </View>
      </KeyboardAvoidingComponent>,
    )

    fireEvent(
      getByTestId('keyboard-avoiding-view'),
      'onLayout',
      nativeEventMock,
    )
    expect(toJSON()).toMatchSnapshot()
  })
})
