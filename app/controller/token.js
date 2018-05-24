
const _ = require('lodash');
const validator = require('validator');
const utility = require('utility');
const uuid = require('uuid');

module.exports = app => {
    class TokenController extends app.Controller {

        async contract() {
            const { ctx, service, config } = this;
            const address = ctx.params.address;

            const ret = {
                'data': {
                    'address': address.trim(),
                    'appName': 'Pelo',
                    'decimals': 18,
                    'id': 66,
                    'name': '',
                    'priority': 100,
                    'symbol': '',
                    'totalSupply': 100000000,
                    'version': ''
                },
                'errorcode': '200',
                'errormsg': ''
            };


            ctx.body = ret;
        }
    }

    return TokenController;
};
