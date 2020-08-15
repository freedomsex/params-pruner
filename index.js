import _ from 'underscore';

export default function(params) { 
    function prune(object) {
        object = _.mapObject(object, value => {
        if (_.isObject(value)) {
            if (_.isEmpty(value)) {
            return null;
            }
            return prune(value);
        }
        return value;
        });
        return _.pick(object, value => value !== '' && (!_.isObject(value) || !_.isEmpty(value)) && !_.isNull(value) && !_.isNaN(value) && !_.isUndefined(value));
    }
    return prune(params); 
};
