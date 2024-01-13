import renderer from 'react-test-renderer'
import TextField from './TextField'

describe('TextField', () => {
  const fn = jest.fn()
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <TextField
          value="value-test"
          onChange={fn}
          placeholder="placeholder-test"
        />,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render correctly with optionals props', () => {
    const tree = renderer
      .create(
        <TextField
          value="value-test"
          onChange={fn}
          placeholder="placeholder-test"
          divider={true}
          type="number-pad"
        />,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
