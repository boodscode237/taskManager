const asyncWrapper = (funct) => {
    return async(req, res, next) => {
        try {
            await funct(req, res, next)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = asyncWrapper