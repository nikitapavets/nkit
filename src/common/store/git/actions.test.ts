import * as actionsCreators from '@common/store/git/actions';
import { ActionTypes } from '@common/store/git/types';

describe('git actions creators', () => {
  it(`should create ${ActionTypes.LOAD_RELEASES_REQUEST} action creator`, () => {
    const expectedAction = {
      type: ActionTypes.LOAD_RELEASES_REQUEST,
    };

    expect(actionsCreators.loadReleaseRequest()).toEqual(expectedAction);
  });

  it(`should create ${ActionTypes.LOAD_RELEASES_SUCCESS} action creator`, () => {
    const payload = [
      {
        id: 1,
        name: 'Release v1',
        tag_name: 'v1',
        html_url: 'https://github.com/iamnnort/nkit/releases/tag/v1',
      },
    ];
    const expectedAction = {
      type: ActionTypes.LOAD_RELEASES_SUCCESS,
      payload,
    };

    expect(actionsCreators.loadReleaseSuccess(payload)).toEqual(expectedAction);
  });

  it(`should create ${ActionTypes.LOAD_RELEASES_FAILURE} action creator`, () => {
    const expectedAction = {
      type: ActionTypes.LOAD_RELEASES_FAILURE,
    };

    expect(actionsCreators.loadReleaseFailure()).toEqual(expectedAction);
  });
});
