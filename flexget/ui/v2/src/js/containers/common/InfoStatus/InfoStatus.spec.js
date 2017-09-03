import { mapStateToProps } from 'containers/common/InfoStatus';

describe('containers/common/InfoStatus', () => {
  it('should be correct if an info status should be displayed', () => {
    expect(mapStateToProps({ status: { info: 'Info Status' } })).toMatchSnapshot();
  });

  it('should be correct if an info status should not be displayed', () => {
    expect(mapStateToProps({ status: { } })).toMatchSnapshot();
  });
});