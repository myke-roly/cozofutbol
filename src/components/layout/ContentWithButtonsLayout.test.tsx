import rendered from 'react-test-renderer'
import { ContentWithButtonsLayout } from './'

describe('ContentWithButtonsLayout', () => {
  it('should render correctly', () => {
    const tree = rendered.create(<ContentWithButtonsLayout />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
