export const formatAmount = (val: number) => {
    return val.toLocaleString('de-DE', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2,
    });
};
