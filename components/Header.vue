<template>
  <div>
    <!-- 头部内容 -->
    <header class="header-area">
      <div class="top-header">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-8">
              <ul class="header-left-content">
                <li>
                  <NuxtLink to="/about">About</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/store-location">Store Location</NuxtLink>
                </li>
                <li>
                  Need help? Call:
                  <a href="tel:(0755) 8271 7003">
                    <span>(0755) 8271 7003</span>
                  </a>
                </li>
                <li>
                  Email:
                  <a href="#">
                    <span>info@elecsaler.com</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-4">
              <div class="header-right-content">
                <ul>
                  <li v-if="isShow">
                    <nuxt-link to="/login" ref="login">
                      <span>Log In</span>
                    </nuxt-link>
                  </li>
                  <li v-if="isShow">
                    <nuxt-link to="/Register" ref="register">
                      <span>Register</span>
                    </nuxt-link>
                  </li>
                  <li v-else>
                    <nuxt-link to="/" ref="UserInfo">
                      <span>{{UserInfo.CmsCompanyName}}</span>
                    </nuxt-link>
                  </li>
                  <li>
                    <div class="usd">
                      <select>
                        <option value="1">USD</option>
                      </select>
                    </div>
                  </li>
                  <li>
                    <div class="navbar-option-item navbar-option-language dropdown language-option">
                      <button
                        class="dropdown-toggle"
                        type="button"
                        id="language2"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span class="lang-name">English</span>
                      </button>
                      <div class="dropdown-menu language-dropdown-menu" aria-labelledby="language2">
                        <a class="dropdown-item" href="#">
                          <img src="~/static/picture/english.png" alt="ESALER" />
                          English
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    
      <div class="middle-header middle-header-style-two">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-3">
              <div class="logo">
                <NuxtLink to="/">
                  <img src="~/static/picture/logo.png" alt="ESALER" width="162px" />
                </NuxtLink>
              </div>
            </div>
            <div class="col-lg-5">
              
              <!-- <form class="search-box" action="search-page"> -->
                <div class="search-box">
                <input
                  type="text"
                  name="search"
                  placeholder="Search Products..."
                  class="form-control"
                  v-model="search"
                 
                />
                <!-- @click="func(event)"  -->
                <div @click="search_btn">
                  <button class="search-btn" >
                  <i class="ri-search-line"></i>
                  Search
                </button>
                </div>
                </div>

              <!-- </form> -->
            </div>
            <div class="col-lg-4">
              <ul class="wish-cart">
                <li>
                  <NuxtLink to="/wishlist">
                    <span class="wish-icon">
                      <i class="ri-heart-line"></i>
                      <span class="count">{{wishlist.length}}</span>
                    </span>
                    <span class="favorite">Favorite</span>
                    My Wishlist
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="navbar-area navbar-area-style-two">
        <div class="mobile-responsive-nav">
          <div class="container">
            <div class="mobile-responsive-menu">
              <div class="navbar-category">
                <button
                  type="button"
                  id="categoryButton-1"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="ri-menu-line"></i>
                </button>
              </div>
              <div class="logo">
                <NuxtLink to="/">
                  <img src="~/static/picture/logo.png" alt="ESALER" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <!-- tip -->
        <div class="desktop-nav">
          <div class="container">
            <nav class="navbar navbar-expand-md navbar-light">
              <div class="navbar-category">
                <button
                  type="button"
                  id="categoryButton"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="ri-menu-line"></i>
                  ALL CATEGORIES
                  <i class="arrow-down ri-arrow-down-s-line"></i>
                </button>
                <div
                  class="navbar-category-dropdown dropdown-menu"
                  aria-labelledby="categoryButton"
                >
                  <ul>
                    <li>
                      <NuxtLink to="/products" v-for="(item,index) in categoryButton" :key="index">{{item}}</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/categories">
                        <b>More >></b>
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                <ul class="navbar-nav">
                  <li class="nav-item float-end">
                    <NuxtLink to="/" class="nav-link active">Home</NuxtLink>
                  </li>
                  <li class="nav-item mega-menu">
                    <a href="#" class="nav-link">
                      Shop
                      <i class="ri-arrow-down-s-line"></i>
                    </a>
                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <NuxtLink to="/products">Products</NuxtLink>
                      </li>
                      <li class="nav-item">
                        <NuxtLink to="/best-sellers">
                          Best
                          Sellers
                        </NuxtLink>
                      </li>
                      <li class="nav-item">
                        <NuxtLink to="/featured-products">
                          Featured
                          Products
                        </NuxtLink>
                      </li>
                      <li class="nav-item">
                        <NuxtLink to="/new-arrivals">
                          New
                          Arrivals
                        </NuxtLink>
                      </li>
                      <li class="nav-item">
                        <NuxtLink to="/categories">Categories</NuxtLink>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      Pages
                      <i class="ri-arrow-down-s-line"></i>
                    </a>
                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <NuxtLink to="/about" class="nav-link">About</NuxtLink>
                      </li>
                      <li class="nav-item">
                        <NuxtLink to="/faq" class="nav-link">FAQ</NuxtLink>
                      </li>

                    </ul>
                  </li>
                  <li class="nav-item">
                    <NuxtLink to="/RFQ" class="nav-link">RFQ</NuxtLink>
                  </li>
                  <li class="nav-item">
                    <NuxtLink to="/checkout" class="nav-link">BOM</NuxtLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      search: "",
      isShow: true,
      UserInfo: "",
      CmsCompanyName: "",
      categoryButton:[
            "Audio Products",
            "Battery Products",
            "Boxes,Enclosures,Racks",
            "Cable Assemblies",
            "Cables,Wires-Management",
            "Cables,Wires",
            "Capacitors",
            "Circuit Protection",
            "Computer Equipment",
            "Computer Equipment",
      ]
    };
  },
  mounted() {
    this.login();
  },
  methods: {

    // func(event){
    //   // 阻止from提交刷新页面
    // },
    search_btn() {
     // console.log(this.search);
     this.$router.push({path: '/search-page', query:{search: this.search}});
    },
    login() {
      if (localStorage.getItem("UserInfo")) {
        this.UserInfo = JSON.parse(localStorage.getItem("UserInfo")).data;
        this.isShow = false;
        console.log(this.UserInfo);
      } else {
        this.isShow = true;
      }
    }
  },
  computed: {
    wishlist() {
      return this.$store.state.wishlist.wishlist;
    }
  }
};
</script>




