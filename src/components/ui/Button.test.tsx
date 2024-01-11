import renderer from 'react-test-renderer'
import Button from './Button'

describe('Button', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Button title="test-title" onPress={jest.fn()} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
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
