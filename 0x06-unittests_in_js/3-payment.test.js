const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    const totalAmount = 100;
    const totalShipping = 20;

    sendPaymentRequestToApi(totalAmount, totalShipping);

    sinon.assert.calledWithExactly(
      calculateNumberSpy,
      'SUM',
      totalAmount,
      totalShipping
    );

    calculateNumberSpy.restore();
  });
});
