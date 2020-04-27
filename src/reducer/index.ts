type Action =
    | {
          type: 'SET_EMPLOYER_FORM_DATA';
          payload: number;
      }
    | {
          type: 'SET_EMPLOYEE_FORM_DATA';
          payload: number;
      }
    | {
          type: 'SET_MODAL';
          payload: boolean;
      };
export const initialState: any = {
    employeeSalAmnt: 0,
    employerSalAmnt: 0,
    showModal: false,
    isSuccess: false,
};

export const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'SET_EMPLOYER_FORM_DATA': {
            const showModal = Boolean(
                state.employeeSalAmnt && action.payload,
            );
            const isSuccess =
                showModal && state.employeeSalAmnt <= action.payload;
            return {
                ...state,
                employerSalAmnt: action.payload,
                isSuccess,
                showModal,
            };
        }

        case 'SET_EMPLOYEE_FORM_DATA': {
            const showModal = Boolean(
                state.employerSalAmnt && action.payload,
            );
            const isSuccess =
                showModal && action.payload <= state.employerSalAmnt;
            return {
                ...state,
                employeeSalAmnt: action.payload,
                isSuccess,
                showModal,
            };
        }
        case 'SET_MODAL':
            return {
                ...state,
                showModal: action.payload,
            };
        default:
            return state;
    }
};
