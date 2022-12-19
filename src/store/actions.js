import Type from './actionTypes';

export const setSidebarState = async (dispatch, options) => {
  dispatch({ type: Type.BEGIN_DATA_REQUEST });
  const { sidebarState } = options;

  try {
    dispatch({
      type: Type.SET_SIDEBAR_STATE,
      payload: sidebarState,
    });
    dispatch({ type: Type.SUCCESS_DATA_REQUEST });
  } catch (error) {
    dispatch({ type: Type.FAIL_DATA_REQUEST, payload: error });
  }
};

export const setSidebarNavState = async (dispatch, options) => {
  dispatch({ type: Type.BEGIN_DATA_REQUEST });
  const { sidebarNavState } = options;

  try {
    dispatch({
      type: Type.SET_SIDEBARNAV_STATE,
      payload: sidebarNavState,
    });
    dispatch({ type: Type.SUCCESS_DATA_REQUEST });
  } catch (error) {
    dispatch({ type: Type.FAIL_DATA_REQUEST, payload: error });
  }
};

export const setPortfolioNavState = async (dispatch, options) => {
  dispatch({ type: Type.BEGIN_DATA_REQUEST });
  const { portfolioNavState } = options;

  try {
    dispatch({
      type: Type.SET_PORTFOLIONAV_STATE,
      payload: portfolioNavState,
    });
    dispatch({ type: Type.SUCCESS_DATA_REQUEST });
  } catch (error) {
    dispatch({ type: Type.FAIL_DATA_REQUEST, payload: error });
  }
};
