import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import Type from './actionTypes';

export const StoreContext = createContext();

const initialState = {
  sidebarState: false,
  sidebarNavClick: false,
  sidebarNavState: 0,
  introState: 0,
  expState: 0,
  portfolioNavState: 0,
  workState: -1,
  requestdata: { loading: false, error: null },
};

function reducer(state, action) {
  switch (action.type) {
    case Type.SET_SIDEBAR_STATE:
      return {
        ...state,
        sidebarState: action.payload,
      };
    case Type.SET_SIDEBARNAV_CLICK:
      return {
        ...state,
        sidebarNavClick: action.payload,
      };
    case Type.SET_SIDEBARNAV_STATE:
      return {
        ...state,
        sidebarNavState: action.payload,
      };
    case Type.SET_INTRO_STATE:
      return {
        ...state,
        introState: action.payload,
      };
    case Type.SET_EXP_STATE:
      return {
        ...state,
        expState: action.payload,
      };
    case Type.SET_PORTFOLIONAV_STATE:
      return {
        ...state,
        portfolioNavState: action.payload,
      };
    case Type.SET_WORK_STATE:
      return {
        ...state,
        workState: action.payload,
      };
    case Type.BEGIN_DATA_REQUEST:
      return {
        ...state,
        requestdata: { ...state.requestdata, loading: true },
      };
    case Type.SUCCESS_DATA_REQUEST:
      return {
        ...state,
        requestdata: { ...state.requestdata, loading: false },
      };
    case Type.FAIL_DATA_REQUEST:
      return {
        ...state,
        requestdata: {
          ...state.requestdata,
          loading: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <StoreContext.Provider value={value}>
      {props.children}
    </StoreContext.Provider>
  );
}

StoreProvider.propTypes = {
  children: PropTypes.object,
};
