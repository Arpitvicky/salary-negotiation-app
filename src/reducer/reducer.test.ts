import { reducer } from '.';
const initialState: any = {
    employeeSalAmnt: 0,
    employerSalAmnt: 0,
    showModal: false,
    isSuccess: false,
};

describe('Test reducer function', () => {
    it('it should update the state with employer data when employer form  is submitted', () => {
        const returnedState = reducer(initialState, {
            type: 'SET_EMPLOYER_FORM_DATA',
            payload: 20000,
        });
        const expectedState = {
            employeeSalAmnt: 0,
            employerSalAmnt: 20000,
            showModal: false,
            isSuccess: false,
        };

        expect(returnedState).toEqual(expectedState);
    });
    it('it should update the state with employee data when employee form  is submitted', () => {
        const returnedState = reducer(initialState, {
            type: 'SET_EMPLOYEE_FORM_DATA',
            payload: 30000,
        });
        const expectedState = {
            employeeSalAmnt: 30000,
            employerSalAmnt: 0,
            showModal: false,
            isSuccess: false,
        };

        expect(returnedState).toEqual(expectedState);
    });
    it("it should show modal with success when employee's min salary is less than employer's max salary", () => {
        const returnedStateWithEmpData = reducer(initialState, {
            type: 'SET_EMPLOYEE_FORM_DATA',
            payload: 10000,
        });
        const returnedStateWithEmpLyrData = reducer(
            returnedStateWithEmpData,
            {
                type: 'SET_EMPLOYER_FORM_DATA',
                payload: 15000,
            },
        );
        const expectedState = {
            employeeSalAmnt: 10000,
            employerSalAmnt: 15000,
            showModal: true,
            isSuccess: true,
        };

        expect(returnedStateWithEmpLyrData).toEqual(expectedState);
    });
    it("it should show modal with failure when employee's min salary is more than employer's max salary", () => {
        const returnedStateWithEmpData = reducer(initialState, {
            type: 'SET_EMPLOYEE_FORM_DATA',
            payload: 20000,
        });
        const returnedStateWithEmpLyrData = reducer(
            returnedStateWithEmpData,
            {
                type: 'SET_EMPLOYER_FORM_DATA',
                payload: 15000,
            },
        );
        const expectedState = {
            employeeSalAmnt: 20000,
            employerSalAmnt: 15000,
            showModal: true,
            isSuccess: false,
        };

        expect(returnedStateWithEmpLyrData).toEqual(expectedState);
    });
});
