var expect = require('chai').expect
const countdown = require('../index')

describe('countdown ', () => {
  let opts
  let dateStr
  beforeEach('init data', (done) => {
    // mList = new ArrayList(testList, 'id')
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth() + 1
    let date = now.getDate() + 3
    dateStr = [year, month, date].join('-')
    opts = {
      endDate: new Date(dateStr),
      interval: 2000,
      run: function ({ days, hours, minutes, seconds }) {
        console.log(`${days}天${hours}:${minutes}:${seconds}`)
      },
      finish () {
        console.log('finished')
      }
    }
    done()
  })

  describe('countdown arguments', () => {
    it('should throw error if endDate is not instance of Date ', () => {
      opts.endDate = 'foo'
      const fn = function () {
        countdown(opts)
      }
      expect(fn).to.throw(Error)
    })
    it('should throw error if inteveral is not typeof number', () => {
      opts.interval = 'foo'
      const fn = function () {
        countdown(opts)
      }
      expect(fn).to.throw(Error)
    })
    it('should throw error if run is not typeof function', () => {
      opts.run = 'foo'
      const fn = function () {
        countdown(opts)
      }
      expect(fn).to.throw(Error)
    })
    it('should throw error if finish is not typeof function', () => {
      opts.finish = 'foo'
      const fn = function () {
        countdown(opts)
      }
      expect(fn).to.throw(Error)
    })
    it('should be ok if given right typeof arguments', () => {
      opts = {
        endDate: new Date(dateStr),
        interval: 2000,
        run: function ({ days, hours, minutes, seconds }) {
          console.log(`${days}天${hours}:${minutes}:${seconds}`)
        },
        finish () {
          console.log('finished')
        }
      }
      const fn = function () {
        countdown(opts)
      }
      expect(fn).to.not.throw(Error)
    })
  })
})
