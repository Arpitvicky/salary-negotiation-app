import React from 'react';
import { StoreDataContext } from '../../../provider';
import Modal from '../../molecules/Modal';
import { apiRequest } from '../../../utils/api';
import { formatAmount } from '../../../utils/formatAmount';
const WEATHER_API_URL =
    'https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=45661c4c96c8dd5d558f18655ce14eb2';

const Result = () => {
    const {
        globalState: {
            showModal,
            isSuccess,
            employeeSalAmnt,
            employerSalAmnt,
        },
        dispatch,
    } = React.useContext(StoreDataContext);
    const [currentCityTemp, setCurrentCityTemp] = React.useState<
        number | undefined
    >();
    React.useEffect(() => {
        if (showModal) {
            apiRequest(WEATHER_API_URL).then(data => {
                if (data) {
                    const kelvinTemp = data?.main?.temp;
                    if (kelvinTemp !== undefined) {
                        const celciusTemp = Math.round(
                            kelvinTemp - 273.15,
                        );
                        setCurrentCityTemp(celciusTemp);
                    }
                }
            });
        }
    }, [showModal]);
    const handleModalClose = () => {
        dispatch({
            type: 'SET_MODAL',
            payload: false,
        });
    };
    return (
        <Modal
            onCloseModal={handleModalClose}
            showModal={showModal}
            headerTitle={'RESULT'}
        >
            {currentCityTemp && (
                <span>
                    Current temperature of London:{' '}
                    <b>
                        {`${currentCityTemp}${String.fromCharCode(
                            176,
                        )}C`}
                    </b>
                </span>
            )}
            <h2>{isSuccess ? 'Success!' : 'Failure!'}</h2>
            <div>
                Maximum offer was:{' '}
                <b>{formatAmount(employerSalAmnt)}</b>
            </div>
            <div>
                Minimum expected salary was:{' '}
                <b>{formatAmount(employeeSalAmnt)}</b>
            </div>
        </Modal>
    );
};

export default Result;
