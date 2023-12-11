<template>
  <div class="nav mt-2 d-flex align-items-center ps-4">
    <nav class="navbar navbar-expand-lg p-0">
      <div class="container-fluid">
        <a class="navbar-brand me-5 nav-logo" href="#">Project</a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li v-for="menu in menu" class="nav-item">
              <a
                class="nav-link d-flex align-items-center"
                aria-current="page"
                :href="menu.href"
                @click="menuOnclick(menu)"
              >
                <div :class="menu.active ? 'active' : ''"></div>
                <div class="ms-2 menu-text">{{ menu.name }}</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      menu: [
        {
          name: "Home",
          active: true,
          hfef: "#",
        },
        {
          name: "About",
          active: false,
          hfef: "#",
        },
      ],
    };
  },
  methods: {
    menuOnclick(item) {
      for (let i = 0; i < this.menu.length; i++) {
        if (item.name == this.menu[i].name) {
          this.menu[i].active = true;
        } else {
          this.menu[i].active = false;
        }
      }
    },
  },
};
</script>

<style>
.nav {
  width: 100%;
  /* height: 50px; */
  border: 1px solid #FFFF00;
  /* box-shadow: 0px 0 5px 0 #FFFF00; */
  border-radius: 50px;
}
.active {
  width: 4px;
  height: 20px;
  background: #FFFF00;
  border-radius: 5px;
  position: absolute;
  box-shadow: 0px 0 5px 0 #FFFF00;
  /* border-left: 4px solid red;
    height: 70%; */
  /* top: 15%; */
}
.menu-text{
  color: #fff;
}
a :hover {
  cursor: pointer;
}
.nav-logo{
  color: #fff;
}
/* a p {
    margin: 0;
}
a.active{
    border-left: 4px solid red;
    height: 50%;
    display: flex;
    align-items: center;
} */
</style>
