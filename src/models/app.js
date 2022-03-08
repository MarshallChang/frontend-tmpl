// import {} from '../services/api';

export default {
  state: {},

  subscriptions: {
    setup({ dispatch, history }) {},
  },

  effects: {
    *setProps({ payload }, { call, put }) {
      yield put({ type: 'setPropsReducer', payload: { ...payload } });
    },
  },

  reducers: {
    setPropsReducer(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
