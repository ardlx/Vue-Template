<template>
  <v-app>
    <drawer v-if="this.DecryptText(this.$store.state.log_in) === 'true'"></drawer>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
  import drawer from "./components/Drawer";

  export default {
    name: 'App',
    components: {
      drawer,
    },

    data: () => ({
      //
    }),
  };
</script>

<style>
  /****************************** CLASS ******************************/
  .InputLogIn{
    border: 1px black solid !important;
    border-radius: 4px !important;
  }

  .NotificationDescription{
    font-family: arial !important; 
    font-size: 12px !important; 
    font-weight: bold !important;
    color: black !important;
  }

  .ModalButtons{
    font-family: arial !important; 
    font-size: 12px !important; 
  }

  /****************************** BODY *******************************/
  html, body{
    overflow-y: hidden !important;
    overflow-x: hidden !important;
  }
  
  /*************************** APPLICATION ***************************/
  .v-application ul, .v-application ol{
    padding-left: 0px !important;
  }

  /***************************** RESULT ******************************/
  .ant-result-title{
    color: rgba(0, 0, 0, 0.85) !important;
    font-size: 24px !important;
    line-height: 1.8 !important;
    text-align: center !important;
    -webkit-touch-callout: none !important;
    -webkit-user-select: none !important;    /* Safari */
    -khtml-user-select: none !important;     /* Konqueror HTML */
    -moz-user-select: none !important;       /* Firefox */
    -ms-user-select: none !important;        /* Internet Explorer/Edge */
    user-select: none !important;            /* supported by Chrome and Opera */
  }

  .ant-result-subtitle{
    color: rgba(0, 0, 0, 0.45) !important;
    font-size: 14px !important;
    line-height: 1.6 !important;
    text-align: center !important;
    -webkit-touch-callout: none !important;
    -webkit-user-select: none !important;    /* Safari */
    -khtml-user-select: none !important;     /* Konqueror HTML */
    -moz-user-select: none !important;       /* Firefox */
    -ms-user-select: none !important;        /* Internet Explorer/Edge */
    user-select: none !important;            /* supported by Chrome and Opera */
  }

  /***************************** TOOLTIP *****************************/
  .ant-tooltip-inner{
    font-family: arial !important;
    font-size: 12px !important;
    font-weight: bold !important;
    -webkit-touch-callout: none !important;
    -webkit-user-select: none !important;    /* Safari */
    -khtml-user-select: none !important;     /* Konqueror HTML */
    -moz-user-select: none !important;       /* Firefox */
    -ms-user-select: none !important;        /* Internet Explorer/Edge */
    user-select: none !important;            /* supported by Chrome and Opera */
  }

  /***************************** POPOVER *****************************/
  .ant-popover-title{
    font-family: arial !important;
    font-size: 15px !important;
    font-weight: bold !important;
    -webkit-touch-callout: none !important;
    -webkit-user-select: none !important;    /* Safari */
    -khtml-user-select: none !important;     /* Konqueror HTML */
    -moz-user-select: none !important;       /* Firefox */
    -ms-user-select: none !important;        /* Internet Explorer/Edge */
    user-select: none !important;            /* supported by Chrome and Opera */
  }
  .ant-popover-inner-content{
    padding: 12px 16px !important;
    color: rgba(0, 0, 0, 0.65) !important;
    -webkit-touch-callout: none !important;
    -webkit-user-select: none !important;    /* Safari */
    -khtml-user-select: none !important;     /* Konqueror HTML */
    -moz-user-select: none !important;       /* Firefox */
    -ms-user-select: none !important;        /* Internet Explorer/Edge */
    user-select: none !important;            /* supported by Chrome and Opera */
  }
  
  .ant-popover-message-title{
    font-family: arial !important;
    color: black !important;
    padding-left: 22px !important;
    -webkit-touch-callout: none !important;
    -webkit-user-select: none !important;    /* Safari */
    -khtml-user-select: none !important;     /* Konqueror HTML */
    -moz-user-select: none !important;       /* Firefox */
    -ms-user-select: none !important;        /* Internet Explorer/Edge */
    user-select: none !important;            /* supported by Chrome and Opera */
  }

  .ant-popover-buttons button{
    font-family: arial !important;
    font-size: 12px !important;
    border: 1px black solid !important;
    margin-left: 8px !important;
  }

  /****************************** MODAL ******************************/
  .ant-modal-title{
    font-family: arial !important;
    font-size: 15px !important;
    font-weight: bold !important;
    -webkit-touch-callout: none !important;
    -webkit-user-select: none !important;    /* Safari */
    -khtml-user-select: none !important;     /* Konqueror HTML */
    -moz-user-select: none !important;       /* Firefox */
    -ms-user-select: none !important;        /* Internet Explorer/Edge */
    user-select: none !important;            /* supported by Chrome and Opera */
  }

  .ant-modal-body{
    padding-top: 20px !important;
    padding-left: 24px !important;
    padding-bottom: 10px !important;
    word-wrap: break-word !important;
  }

  .ant-modal-confirm-body .ant-modal-confirm-title{
    display: block !important;
    overflow: hidden !important;
    color: rgba(0, 0, 0, 0.85) !important;
    font-size: 16px !important;
    line-height: 1.4 !important;
    font-family: arial !important;
    font-weight: bold !important;
    -webkit-touch-callout: none !important;
    -webkit-user-select: none !important;    /* Safari */
    -khtml-user-select: none !important;     /* Konqueror HTML */
    -moz-user-select: none !important;       /* Firefox */
    -ms-user-select: none !important;        /* Internet Explorer/Edge */
    user-select: none !important;            /* supported by Chrome and Opera */
  }

  .ant-modal-confirm-body{
    font-size: 14px !important;
    line-height: 1.5 !important;
    word-wrap: break-word !important;
    font-family: arial !important;
    -webkit-touch-callout: none !important;
    -webkit-user-select: none !important;    /* Safari */
    -khtml-user-select: none !important;     /* Konqueror HTML */
    -moz-user-select: none !important;       /* Firefox */
    -ms-user-select: none !important;        /* Internet Explorer/Edge */
    user-select: none !important;            /* supported by Chrome and Opera */
  }

  /**************************** COLLAPSE *****************************/
  .ant-collapse{
    border:1px black solid !important; 
    border-radius: 4px !important;
  }

  .ant-collapse-header{
    font-size: 14px !important;
    font-family: arial !important;
    font-weight: bold !important;
  }

  .ant-collapse-header:hover{
    background-color: #c2c2c2 !important;
  }

  /***************************** DRAWER ******************************/
  .ant-drawer-header{
    position: relative;
    padding-top: 8px !important;
    padding-left: 15px !important;
    padding-right: 0px !important;
    padding-bottom: 0px !important;
    color: rgba(0, 0, 0, 0.65);
    background: #fff;
    border-bottom: 1px solid #e8e8e8;
    border-radius: 4px 4px 0 0;
    -webkit-touch-callout: none !important;
    -webkit-user-select: none !important;    /* Safari */
    -khtml-user-select: none !important;     /* Konqueror HTML */
    -moz-user-select: none !important;       /* Firefox */
    -ms-user-select: none !important;        /* Internet Explorer/Edge */
    user-select: none !important;            /* supported by Chrome and Opera */
  }

  .ant-drawer-title{
    font-family: arial !important;
    font-size: 14px !important;
    font-weight: bold !important;
    margin: 0 !important;
    line-height: 22px !important;
    height: 30px !important;
    -webkit-touch-callout: none !important;
    -webkit-user-select: none !important;    /* Safari */
    -khtml-user-select: none !important;     /* Konqueror HTML */
    -moz-user-select: none !important;       /* Firefox */
    -ms-user-select: none !important;        /* Internet Explorer/Edge */
    user-select: none !important;            /* supported by Chrome and Opera */
  }

  .ant-drawer-body{
    font-family: arial !important;
    font-size: 12px !important;
    color: black !important;
    padding: 12px !important;
    line-height: 1.5 !important;
    word-wrap: break-word !important;
    -webkit-touch-callout: none !important;
    -webkit-user-select: none !important;    /* Safari */
    -khtml-user-select: none !important;     /* Konqueror HTML */
    -moz-user-select: none !important;       /* Firefox */
    -ms-user-select: none !important;        /* Internet Explorer/Edge */
    user-select: none !important;            /* supported by Chrome and Opera */
  }

  /*************************** DESCRIPTION ***************************/
  .ant-descriptions{
    border: 1px black solid !important;
    border-radius: 4px !important;
  }

  .ant-descriptions-item-label{
    font-size: 12px !important;
    font-weight: bold !important;
    color: black !important;
    background-color: #b0b0b0 !important;
    line-height: 1.5 !important;
  }

  .ant-descriptions-item-content{
    font-size: 12px !important;
    color: black !important;
    line-height: 1.5 !important;
    display: table-cell !important;
  }
  
  /***************************** AVATAR ******************************/
  .ant-avatar-string{
    font-family: arial !important;
    font-weight: bold !important;
    position: absolute !important;
    left: 50% !important;
    transform-origin: 0 center !important;
    -webkit-touch-callout: none !important;
    -webkit-user-select: none !important;    /* Safari */
    -khtml-user-select: none !important;     /* Konqueror HTML */
    -moz-user-select: none !important;       /* Firefox */
    -ms-user-select: none !important;        /* Internet Explorer/Edge */
    user-select: none !important;            /* supported by Chrome and Opera */
  }

  /****************************** INPUT ******************************/
  .ant-input-affix-wrapper .ant-input{
    font-family: arial !important; 
    font-size: 12px !important; 
    color: black !important;
    padding-right: 30px !important;
  }

  textarea.ant-input[disabled]{
    color: black !important;
  }

  /*************************** DATE PICKER ***************************/
  .ant-calendar-picker-input.ant-input{
    font-family: arial !important; 
    font-size: 12px !important; 
    color: black !important;
    line-height: 1.5 !important;
  }

  .ant-calendar{
    font-family: arial !important; 
    font-size: 12px !important; 
    color: black !important;
    border: 1px black solid !important;
  }

  /***************************** SELECT ******************************/
  .ant-select-selection-selected-value {
    padding-left: 2px !important;
  }
  
  .ant-select-dropdown-menu-item{
    font-family: arial !important;
    font-size: 12px !important;
    font-weight: normal !important;
    color: black !important;
    position: relative !important;
    display: block !important;
    line-height: 20px !important;
    white-space: nowrap !important;
    text-overflow: ellipsis !important;
    cursor: pointer !important;
    transition: background 0.3s ease !important;
  }

  .ant-select[disabled]{
    color: gray !important;
    font-weight: normal !important;
  }

  /****************************** TABS *******************************/
  .ant-tabs{
    font-family: arial !important;
    font-size: 14px !important;
    font-weight: bold !important;
    color: black !important;
  }

  /***************************** DISABLE *****************************/
  .disable-select{
    -webkit-touch-callout: none !important;
    -webkit-user-select: none !important;    /* Safari */
    -khtml-user-select: none !important;     /* Konqueror HTML */
    -moz-user-select: none !important;       /* Firefox */
    -ms-user-select: none !important;        /* Internet Explorer/Edge */
    user-select: none !important;            /* supported by Chrome and Opera */
  }
</style>