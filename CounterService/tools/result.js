class Result {
    constructor(isError, data, message) {
        this.IsError = isError;
        this.Data = data;
        this.Message = message;
    }

    static success(data, message) {
        return new Result(false, data, message);
    }

    static error(message) {
        return new Result(true, null, message);
    }
};

module.exports = Result;