<template>
    <div id="wrapper">
      <p>
        FullName: {{ fullName }}
      </p>
      <p>
        FirstName: <input type="text" v-model="FirstName">
      </p>
      <p>obj.a {{obj.a}}<input type="text" v-model="obj.a"></p>
      <MainComponent></MainComponent>
      <nav class="navbar navbar-default">
        <div class="container">
          <a href="" class="navbar-brand">
            <i class="glyphicon glyphicon-time"></i>
            计划版
          </a>
          <ul class="nav navbar-nav">
            <li>
              <router-link to='/home'>首页</router-link>
            </li>
            <li>
              <router-link to='/time-entries'>计划列表</router-link>
            </li>
          </ul>
        </div>
      </nav>
      <div class="container">
        <div class="col-sm-3">
          <Sidebar></Sidebar>
        </div>
        <div class="col-sm-9">
            <router-view/>
        </div>
      </div>
    </div>
  </template>
  
  <script>
    import MainComponent from '@/components/MainComponent'
    import Sidebar from '@/components/Sidebar'
  export default {
    name: 'App',
    data () {
      return {
        FirstName: '晕',
        lastName: '晕啊',
        fullName: '',
        obj: {
          a: 123
        }
      }
    },
    watch: {
      FirstName: {
        handler(newName, oldName) {
          this.fullName = newName + ' ' + this.lastName
        },
        immediate: true
      },
      obj: {
        handler(newName,oldName) {
          console.log('obj.a cahnged');
        },
        immediate: true,
        deep: true
      },
      // FirstName(newName,oldName) {
        // console.log(newName,oldName);
      //   this.fullName = newName + ' ' + this.lastName
      // }
    },
    // computed: {
    //   fullName () {
    //     return `${this.FirstName}+${this.lastName}`
    //   }
    // },
    components: {
      Sidebar,
      MainComponent
    }
  }
  </script>
  
  <style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>
  