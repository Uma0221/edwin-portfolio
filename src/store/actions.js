import Type from './actionTypes';

export const setSidebarState = async (dispatch, options) => {
  dispatch({ type: Type.BEGIN_DATA_REQUEST });
  const { sidebarState } = options;

  try {
    dispatch({
      type: Type.SET_SIDEBARSTATE,
      payload: sidebarState,
    });
    dispatch({ type: Type.SUCCESS_DATA_REQUEST });
  } catch (error) {
    dispatch({ type: Type.FAIL_DATA_REQUEST, payload: error });
  }
};
