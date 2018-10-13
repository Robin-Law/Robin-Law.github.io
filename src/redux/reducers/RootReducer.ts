// tslint:disable-next-line:no-empty-interface
export interface IRootState {}

export interface IActionType<T> {
  type: string;
  payload?: T;
}

export const RootReducer = (state: IRootState, action: IActionType<any>): IRootState => {
  switch (action.type) {
    default: return { ...state };
  }
};

export default RootReducer;
