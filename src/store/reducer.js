import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import Type from './actionTypes';

export const StoreContext = createContext();

const initialState = {
  sidebarState: false,
  requestdata: { loading: false, error: null },
};

function reducer(state, action) {
  switch (action.type) {
    case Type.SET_SIDEBARSTATE:
      return {
        ...state,
        sidebarState: action.payload,
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
