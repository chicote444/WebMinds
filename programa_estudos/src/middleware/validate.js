export function validate(schema) {
    return function (req, res, next) {
        try {
            schema.parse({
                body: req.body,
                query: req.query,
                params: req.params,
            });
            next();
        }   catch (err) {
            res.status(400).send(err.errors);
        }
    };
}