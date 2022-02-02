import { mapState, mapMutations } from 'vuex'
import CryptoJS from 'crypto-js'
// import axios from "axios"
// import moment from "moment"

import ClassFile from '@/class/ClassFile.js'

const myPlugins = {
    install(Vue){
        Vue.mixin({
// ******************************************************************************* //
// ===================================== Data ==================================== //
// ******************************************************************************* //
            data:() => ({
                api: process.env.VUE_APP_URL,
                header_api: process.env.VUE_APP_HEADER_API,
                basic_info_api: process.env.VUE_APP_BASIC_INFO_API,
                clsClassFile: new ClassFile(),
            }),
// *********************************************************************************** //
// ===================================== Computed ==================================== //
// *********************************************************************************** //
            computed:{
                ...mapState([
                    'user',
                    'log_in',
                ]),
            },
// ********************************************************************************** //
// ===================================== Created ==================================== //
// ********************************************************************************** //
            created(){
                this.$notification.config({ placement: "bottomRight", duration: 3 })
            },
// ******************************************************************************* //
// =================================== Methods =================================== //
// ******************************************************************************* //
            methods:{             
                ...mapMutations([
                    'CHANGE_USER',
                    'CHANGE_LOGIN',
                ]),
                DecryptText(text){
                    var bytes  = CryptoJS.AES.decrypt(text, process.env.VUE_APP_SECRETKEY )
                    var originalText = bytes.toString(CryptoJS.enc.Utf8)
                    return originalText
                },
                FilterOption(input, option){
                  return(option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0)
                },
            }
        })
    }
}

export default myPlugins