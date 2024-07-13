

<template>
  <div id="app">
    <div id="nav-bar">

      <router-link to="/products" id="products-link">
        <h1>shoes</h1>
      </router-link>
      <router-link to="/cart" id="cart-link">
        <button>Shopping Cart</button>
      </router-link>
      <!-- <NavBar/> -->
      <router-view/>
    </div>
  </div>
</template>

<script>
// import NavBar from './components/NavBar.vue';
// export default {
//     name: 'App',
//     component: { 
//     NavBar,
//   }

// }
</script>

<style>
 #nav-bar {
      border-bottom: 1px solid #ddd;
      height: 75px;
      width: 100%;
     padding-top: 5%;
    }
  
    #products-link {
      text-align: center;
      display: block;
      color: black;
      font-size: 22px;
      left: 32px;
      position: absolute;
      top: 16px;
      text-decoration: none;
    }
  
    #products-link h1 {
        margin: 0;
    }
  
    #cart-link {
      position: absolute;
      right: 16px;
      top: 16px;
    }



  * {
    box-sizing: border-box;
    font-family: Arial;
  }

  #page-wrap {
    margin: auto; 
    max-width: 800px;
    min-height: 100vh;
  /* border-radius: 2px solid red; */
  }

  button {
    background-color: black;
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    outline: 0;
    padding: 16px;
  }


 
</style>
