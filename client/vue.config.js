module.exports = {
  devServer: {
    host: "0.0.0.0",
    port: "8000", //name of port
    public: "0.0.0.0:8000",
    disableHostCheck: true,
    noInfo: true,
  },
  transpileDependencies: [
    'vuetify'
  ]
}
