import axios from 'axios'
import moment from 'moment'

export default class Classes{
  constructor(){}

  WithAxios(api){
    return new Promise(resolve => {
      axios.get(`${api} link here`).then(Result => {
        if(Result.data.length > 0){
          resolve(Result.data)
        }
      })
    })
  }

  WithoutAxios(){
    return new Promise(resolve => {
      let Message = undefined
      let YearToday = moment(new Date()).format("YYYY")
      Message = 'Welcome ' + YearToday + '!'
      resolve(Message)
    })
  }
}
