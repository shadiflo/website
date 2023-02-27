module.exports = (handlePromise) => (req, res, next) => {
    Promise.resolve(handlePromise(req, res, next)).catch(next);
};
