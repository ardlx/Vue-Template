<template>
  <div id="app">
<!-- ************************************************************************************************* -->
<!-- ============================================= Log In ============================================ -->
<!-- ************************************************************************************************* -->
    <v-app id="inspire">
      <v-app id="inspire" style="background-color:#dbdcda">
        <v-main>
          <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
              <v-col>
                <v-card class="mx-auto elevation-12 pl-3 pr-2" max-width="700px">
                  <v-row>
<!-- ============================================== -->
<!-- ===================== Icon =================== -->
<!-- ============================================== -->
                    <v-col cols="3" style="padding-top:50px; background-color:#7FDBFF; border-radius:7px 0px 0px 7px; border: 1px black solid;">
                      <v-row>
                        <v-col align="center" justify="center">
                          <v-img max-width="120px" src="Icon.png" alt="SYSTEM"></v-img>
                        </v-col>
                      </v-row>
                    </v-col>

                    <v-col>
<!-- ============================================== -->
<!-- ==================== Text ==================== -->
<!-- ============================================== -->
                      <v-row style="padding-top:10px;">
                        <v-col align="center" justify="center">
                          <v-img max-width="120px" src="Name.png" alt="SYSTEM"></v-img>
                        </v-col>
                      </v-row>
                      
                      <v-form style="margin-top:20px;" align="center" justify="center">

                        <v-layout style="padding-bottom:3px;">
                          <v-icon style="color:black;"> mdi-badge-account </v-icon>
                          <v-spacer></v-spacer> <a-input v-model="strUsername" class="InputLogIn" style="width:150px;" @change="CheckLogIn()" @keypress.enter="ClickLogIn()" allowClear></a-input>
                          <v-spacer></v-spacer> <a-input class="disable-select" style="width:300px;" v-model="strName" disabled></a-input>
                        </v-layout>

                        <v-layout style="padding-bottom:7px;">
                          <v-icon style="color:black;"> mdi-lock-outline </v-icon>
                          <v-spacer></v-spacer> <a-input-password v-model="strPassword" class="InputLogIn" style="width:150px;" @keypress.enter="ClickLogIn()" allowClear></a-input-password>
                          <v-spacer></v-spacer> <a-input class="disable-select" style="width:300px;" v-model="strText" disabled></a-input>
                        </v-layout>

                        <v-layout>
                          <v-spacer></v-spacer>
                          <a-tooltip :title="`Log in`" placement="left">
                            <a-button key="submit" type="primary" shape="circle" icon="login" :disabled="blnDisableLogIn" @click="ClickLogIn()"  style="border: 1px black solid;"></a-button>
                          </a-tooltip>
                        </v-layout>

                        <p class="disable-select text-center pl-1 pt-1" style="font-family:Century Gothic; font-weight:bold; color:black; margin:auto; font-size:10px;">
                          Description. Year
                        </p>
                      </v-form>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-main>
      </v-app>
    </v-app>
  </div>
</template>
<!-- ************************************************************************************************* -->
<!-- ============================================= Script ============================================ -->
<!-- ************************************************************************************************* -->
<script>
  import axios from 'axios'
  
  export default {
  // ********************************************************************************** //
  // ====================================== Data ====================================== //
  // ********************************************************************************** //
    data(){
      return{
        blnDisableLogIn: true,

        strUsername: undefined,
        strPassword: undefined,
        strFirstName: undefined,
        strName: undefined,
        strText: undefined,
      }
    },
// ********************************************************************************** //
// ===================================== Created ==================================== //
// ********************************************************************************** //
    created(){
      // this.ClassFunctionWithAxios()
      this.ClassFunctionWithoutAxios()
    },
// *********************************************************************************** //
// ===================================== Computed ==================================== //
// *********************************************************************************** //
    computed:{
      
    },
// ********************************************************************************** //
// ===================================== Methods ==================================== //
// ********************************************************************************** //
    methods: {
// ============================================================= //
// ===================== Data Load Events ====================== //
// ============================================================= //
      ClassFunctionWithAxios(){
        this.clsClassFile.WithAxios(this.api).then(data => { 
          console.log(data)
        })
      },
      ClassFunctionWithoutAxios(){
        this.clsClassFile.WithoutAxios().then(data => { 
          alert(data)
        })
      },
      CheckLogInWithAxios(){
        if(this.strUsername !== undefined && this.strUsername !== null && this.strUsername !== ""){
          let url = `${this.basic_info_api}${this.strUsername}`
          axios.get(url, {headers:{'master-api' : this.header_api}}).then(res => {
            let Data = res.data[0]
            if(Data !== undefined && Data !== null && Data !== ""){
              this.blnDisableLogIn = false
              this.strName = Data.EmployeeName
              this.strFirstName = Data.FirstName
              this.strText = Data.ShortName + ' - ' + Data.DepartmentName
            }
            else{
              this.strName = ""
              this.strFirstName = ""
              this.strText = ""
              this.blnDisableLogIn = true
            }
          })
        }
        else{
          this.strName = ""
          this.strFirstName = ""
          this.strText = ""
          this.blnDisableLogIn = true
        }
      },
      CheckLogIn(){
        if(this.strUsername !== undefined && this.strUsername !== null && this.strUsername !== ""){
          if(this.strUsername === 'Janren'){
            this.strName = "Janren"
            this.strFirstName = "Janren"
            this.strText = "Janren"
            this.blnDisableLogIn = false
          }
        }
        else{
          this.strName = ""
          this.strFirstName = ""
          this.strText = ""
          this.blnDisableLogIn = true
        }
      },
// ============================================================= //
// ===================== User Action Events ==================== //
// ============================================================= //
      ClickLogIn(){
        if(this.blnDisableLogIn === false){
          var EncryptUserLogIn = this.$CryptoJS.AES.encrypt(this.strUsername, process.env.VUE_APP_SECRETKEY).toString()
          var EncryptLogIn = this.$CryptoJS.AES.encrypt('true', process.env.VUE_APP_SECRETKEY).toString()
          this.$store.commit("CHANGE_USER", EncryptUserLogIn)
          this.$store.commit("CHANGE_LOGIN", EncryptLogIn)

          this.$notification.open({
            style: "background-color:#505050;",
            icon: <a-avatar src="Icon.png"></a-avatar>,
            message: <b class="disable-select" style="color:white;">SYSTEM</b>,
            description: <div class="disable-select NotificationDescription" style="color:white;">Welcome {this.strFirstName}!</div>,
          })
          this.$router.push('/main')
        }
      },
    }
  }
</script>
<!-- ************************************************************************************************* -->
<!-- ============================================= Style ============================================= -->
<!-- ************************************************************************************************* -->
<style scoped>
  img{
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .spanLabel{
    padding-top: 5px;
    color: black;
  }

  .ant-input[disabled]{
    font-family: arial !important;
    font-size: 14px !important;
    font-weight: bold !important;
    color: black !important;
    border: 1px black solid !important;
    border-radius: 4px !important;
    background-color: #60bfe7 !important;
    cursor: default !important;
    opacity: 1 !important;
  }
</style>