import renderer from 'react-test-renderer'
import { ContentWithButtonsLayout } from './'
import { View } from 'react-native'
import { Text } from '../common'

describe('ContentWithButtonsLayout', () => {
  const fn = jest.fn()

  it('should render correctly', () => {
    const tree = renderer.create(<ContentWithButtonsLayout />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with children', () => {
    const tree = renderer
      .create(
        <ContentWithButtonsLayout>
          <View>
            <Text>Child Content 1</Text>
          </View>
        </ContentWithButtonsLayout>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with primary button', () => {
    const tree = renderer
      .create(
        <ContentWithButtonsLayout
          primaryButton={{
            title: 'primary-title-test',
            onPress: fn,
          }}
        />,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with secondary button', () => {
    const tree = renderer
      .create(
        <ContentWithButtonsLayout
          secondaryButton={{
            title: 'secondary-title-test',
            onPress: fn,
          }}
        />,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with primary and secondary button', () => {
    const tree = renderer
      .create(
        <ContentWithButtonsLayout
          primaryButton={{
            title: 'primary-title-test',
            onPress: fn,
          }}
          secondaryButton={{
            title: 'secondary-title-test',
            onPress: fn,
          }}
        />,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Should render correctly with secondary button outline variant', () => {
    const tree = renderer
      .create(
        <ContentWithButtonsLayout
          primaryButton={{
            title: 'primary-title-test',
            onPress: fn,
            variant: 'outline',
          }}
        />,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Should render correctly if isfocued is true', () => {
    const tree = renderer
      .create(
        <ContentWithButtonsLayout
          primaryButton={{
            title: 'primary-title-test',
            onPress: fn,
          }}
          isfocued={true}
        />,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
