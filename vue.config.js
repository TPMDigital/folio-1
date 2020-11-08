module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/folio1" : "/",
    productionSourceMap: process.env.NODE_ENV != 'production'
};