

const validate = (schema) => async (req, res, next) => {
    try {
        const parsebody = await schema.parseAsync(req.body);
        req.body = parsebody;
        return next();
    } catch (err) {
        // console.log(err);
        const errMsg = err.errors[0].message;
        console.log(errMsg);
        res.status(400).json({
            "message": errMsg
        })
    }
}


module.exports = validate;