var countdown = ({ endDate, interval, run, finish }) => {
  if (!(endDate instanceof Date)) {
    throw new TypeError('Expected Date,endDate got ' + typeof endDate)
  }
  if (typeof interval !== 'number') {
    throw new TypeError('Expected Number,interval got ' + typeof interval)
  }
  if (typeof run !== 'function') {
    throw new TypeError('Expected Function,run got ' + typeof run)
  }
  if (typeof finish !== 'function') {
    throw new TypeError('Expected Function,finish got ' + typeof finish)
  }

  var timer = setInterval(() => {
    var duration = endDate.getTime() - new Date().getTime()
    if (duration <= 0) {
      finish && finish()
      clearInterval(timer)
    } else {
      var days = Math.floor(duration / (24 * 3600 * 1000))
      var leaveHour = duration % (24 * 3600 * 1000)
      var hours = Math.floor(leaveHour / (3600 * 1000))
      var leaveNin = leaveHour % (3600 * 1000)
      var minutes = Math.floor(leaveNin / (60 * 1000))
      var leaveSecond = leaveNin % (60 * 1000)
      var seconds = Math.round(leaveSecond / 1000)
      run && run({ days, hours, minutes, seconds })
    }
  }, interval)
}

module.exports = countdown
