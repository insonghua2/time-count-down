[![npm](https://img.shields.io/npm/v/future-count-down.svg?style=flat-square)](https://www.npmjs.com/package/future-count-down)
[![Travis (.org)](https://img.shields.io/travis/insonghua2/time-count-down.svg?style=flat-square)](https://travis-ci.org/insonghua2/time-count-down)
[![Coveralls github](https://img.shields.io/coveralls/github/insonghua2/time-count-down.svg?style=flat-square)](https://coveralls.io/github/insonghua2/time-count-down)
[![npm](https://img.shields.io/npm/dt/future-count-down.svg?style=flat-square)](https://www.npmjs.com/package/future-count-down)

>   Simple timer count down for future time




## Install

```bash
  $ npm install future-count-down--save
```

## Usage

```js
const countdown=require('future-count-down')
countdown({
  endDate:new Date('2020-12-1')//a future time
  interval:1000// millseconds,
  run:function({days,hours,minutes,seconds}){
    console.log(`${days} days ${hours}:${minutes}:${seconds}`)
  },
  finish(){
    //do something when finished
  }
})

```









## License

MIT © [insonghua2](https://github.com/insonghua2).





