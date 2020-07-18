/* eslint-disable */
(function() {
    var app = new Vue({
        el: '#app',
        data: {
            appName: 'The name of some other app'
        },
        beforeCreate: function () {
            console.log(this.appName)
        },
        created: function () {
            console.log(this.appName)
        }
    })
})()