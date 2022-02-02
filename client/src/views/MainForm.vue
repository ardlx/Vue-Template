<template>
  <div>
    <a-result class="disable-select" status="403" title="403" sub-title="Sorry, you are not authorized to access this page.">
      <template #extra>
        <center>
          <div style="margin:5px;">
            <a-button type="primary" icon="arrow-left">Go back to Main Page</a-button>
          </div>

          <div style="margin:5px;">
            <a-button type="primary" icon="arrow-left" @click="ClickJavascriptButton()">Javascript File Call</a-button>
          </div>

          <div style="margin:5px;">
            <a-button type="primary" icon="arrow-left" @click="ClickVueButton()">Vue File Call</a-button>
          </div>
        </center>  
      </template>
    </a-result>

<!-- ============================================================================================== -->
<!-- ======================================= Vue Component ======================================== -->
<!-- ============================================================================================== -->
    <vue-sample 
      :VueComponent="VueComponent" 
      :VueComponentString="strString"
      :VueComponentInteger="intInteger"
      :VueComponentBoolean="blnBoolean"
      :VueComponentObject="objObject"
      :VueComponentArray="arrArray"
      @EmitString="EmitString"
      @EmitInteger="EmitInteger"
      @EmitBoolean="EmitBoolean"
      @EmitObject="EmitObject"
      @EmitArray="EmitArray"
      @ClickCloseDialog="ClickCloseDialog"
    />

    <!-- <v-row no-gutters>
      <v-col cols="12">
        <span>
          <v-card tile> 
            <v-card-title>
              <v-row no-gutters>
                <v-spacer></v-spacer>

                <a-tooltip :title="`Log Out`" placement="left">
                  <a-button id="LogOut" @click="LogOut()" type="primary" shape="circle" icon="logout"></a-button>
                </a-tooltip>
              </v-row>
            </v-card-title>
          </v-card>
        </span>
      </v-col>
    </v-row> -->
  </div>
</template>
<!-- ************************************************************************************************* -->
<!-- ============================================= Script ============================================ -->
<!-- ************************************************************************************************* -->
<script>
  import JavascriptSample from '@/components/JavascriptFile.js'
  import VueSample from '@/components/VueFile.vue'

  export default {
// ********************************************************************************** //
// =================================== Components =================================== //
// ********************************************************************************** //
    components:{
      'vue-sample' : VueSample
    },
// ********************************************************************************** //
// ====================================== Data ====================================== //
// ********************************************************************************** //
    data(){
      return{
        VueComponent: false,

        strString: undefined,
        intInteger: undefined,
        blnBoolean: false,
        objObject: {},
        arrArray: [],
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
      EmitString(string){
        console.log(string)
      },
      EmitInteger(integer){
        console.log(integer)
      },
      EmitBoolean(boolean){
        console.log(boolean)
      },
      EmitObject(object){
        console.log(object)
      },
      EmitArray(array){
        console.log(array)
      },

// ============================================================= //
// ===================== User Action Events ==================== //
// ============================================================= //
      ClickJavascriptButton(){
        let Message = "Javascript File Button is clicked!"
        JavascriptSample(Message)
      },
      ClickVueButton(){
        this.strString = "String"
        this.intInteger = 12345,
        this.blnBoolean = true,
        this.objObject =  {Property1: "Value1", Property2 : "Value1", Property3: "Value1"},
        this.arrArray = [
          {Property1: "Object1Value1", Property2 : "Object1Value2", Property3: "Object1Value2"},
          {Property1: "Object2Value1", Property2 : "Object2Value2", Property3: "Object2Value2"},
          {Property1: "Object3Value1", Property2 : "Object3Value2", Property3: "Object3Value2"},
        ]

        // =============================== Object Distructuring =============================== //
        let{
          Property1,
          Property2,
          Property3
        } = this.objObject

        console.log('Distructured Property1', Property1)
        console.log('Distructured Property2', Property2)
        console.log('Distructured Property3', Property3)
        // ==================================================================================== //

        // =============================== Array Distructuring ================================ //
        let[
          Object1,
          Object2,
          Object3
         ] = this.arrArray

        console.log('Distructured Object1', Object1)
        console.log('Distructured Object2', Object2)
        console.log('Distructured Object3', Object3)
        // ==================================================================================== //

        this.VueComponent = true
      },
      ClickCloseDialog(value){
        // EXECUTE FUNCTION FOR DATA LOAD
        this.VueComponent = value
      },
    },
  }
</script>
<!-- ************************************************************************************************* -->
<!-- ============================================= Style ============================================= -->
<!-- ************************************************************************************************* -->
<style scoped>
</style>