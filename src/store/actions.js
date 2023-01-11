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

export const setSidebarNavClick = async (dispatch, options) => {
  dispatch({ type: Type.BEGIN_DATA_REQUEST });
  const { sidebarNavClick } = options;

  try {
    dispatch({
      type: Type.SET_SIDEBARNAV_CLICK,
      payload: sidebarNavClick,
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

export const setIntroState = async (dispatch, options) => {
  dispatch({ type: Type.BEGIN_DATA_REQUEST });
  const { introState } = options;

  try {
    dispatch({
      type: Type.SET_INTRO_STATE,
      payload: introState,
    });
    dispatch({ type: Type.SUCCESS_DATA_REQUEST });
  } catch (error) {
    dispatch({ type: Type.FAIL_DATA_REQUEST, payload: error });
  }
};

export const setExpState = async (dispatch, options) => {
  dispatch({ type: Type.BEGIN_DATA_REQUEST });
  const { expState } = options;

  try {
    dispatch({
      type: Type.SET_EXP_STATE,
      payload: expState,
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

export const setWorkState = async (dispatch, options) => {
  dispatch({ type: Type.BEGIN_DATA_REQUEST });
  const { workState } = options;

  try {
    dispatch({
      type: Type.SET_WORK_STATE,
      payload: workState,
    });
    dispatch({ type: Type.SUCCESS_DATA_REQUEST });
  } catch (error) {
    dispatch({ type: Type.FAIL_DATA_REQUEST, payload: error });
  }
};
