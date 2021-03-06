import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';
import * as actionsCreators from '@common/store/git/actions';
import { ActionTypes, Git } from '@common/store/git/types';
import { commonInitialState } from '@common/lib/store/reducer';
import { CommonError } from '@common/lib/store/types';

export type State = Git;
export type Action = ActionType<typeof actionsCreators>;

export const initialState: State = {
  ...commonInitialState,
  releases: [],
};

export const reducer: Reducer<State, Action> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_RELEASES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case ActionTypes.LOAD_RELEASES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isInitialLoaded: true,
        releases: action.payload,
      };

    case ActionTypes.LOAD_RELEASES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: CommonError.FAILED_REQUEST,
      };

    default: {
      return state;
    }
  }
};
