<script lang="ts" setup>
import { menu } from '~/core/consts/menu'

const router = useRouter()
// const permissions = localStorage.getItem('permissions')
// const result = filterMenuByPermission(menu, permissions)
//
// function filterMenuByPermission(menu: any, permissions: any) {
//   return menu.filter((item: any) => permissions?.includes(item?.permission))
// }

function toggleDropdown(event: any) {
  event.currentTarget.classList.toggle('opened')
  event.currentTarget.parentElement.classList.toggle('opened')
}
</script>

<template>
  <ul class="menu">
    <li class="cursor-pointer mb-[10px]"></li>
    <li class="menuItem">
      <RouterLink
        class="menuLink"
        :class="router.currentRoute.value.path == '/' ? 'active' : null"
        to="/"
        w-full
        flex
        items-center
      >
        <i class="menuIcon iconDashboard"></i>
        <span>Дэшборд</span>
      </RouterLink>
    </li>
    <li class="menuItem">
      <RouterLink
        class="menuLink"
        :class="router.currentRoute.value.path == '/customers' ? 'active' : null"
        to="/customers"
        w-full
        flex
        items-center
      >
        <i class="menuIcon iconReports"></i>
        <span>Мижозлар</span>
      </RouterLink>
    </li>
    <li class="menuItem">
      <RouterLink
        class="menuLink"
        :class="router.currentRoute.value.path == '/products' ? 'active' : null"
        to="/"
        w-full
        flex
        items-center
      >
        <i class="menuIcon iconStaffs"></i>
        <span>Махсулотлар</span>
      </RouterLink>
    </li>
    <li class="menuItem">
      <RouterLink
        class="menuLink"
        :class="router.currentRoute.value.path == '/orders' ? 'active' : null"
        to="/"
        w-full
        flex
        items-center
      >
        <i class="menuIcon iconDashboard"></i>
        <span>Буюртмалар</span>
      </RouterLink>
    </li>
    <li class="menuItem">
      <RouterLink
        class="menuLink"
        :class="router.currentRoute.value.path == '/managers' ? 'active' : null"
        to="/"
        w-full
        flex
        items-center
      >
        <i class="menuIcon iconDashboard"></i>
        <span>Менежерлар</span>
      </RouterLink>
    </li>
    <li class="menuItem">
      <RouterLink
        class="menuLink"
        :class="router.currentRoute.value.path == '/damaged' ? 'active' : null"
        to="/"
        w-full
        flex
        items-center
      >
        <i class="menuIcon iconDashboard"></i>
        <span>Шикастланган</span>
      </RouterLink>
    </li>
    
    <div v-for="(item, index) in menu" :key="index">
      <ul
        class="subMenu"
        :class="router.currentRoute.value.path.includes(item.path) ? 'opened' : null"
        v-if="item.children"
      >
        <div class="subMenuToggle" @click="toggleDropdown($event)">
          <i class="menuIcon" :class="item?.icon"></i>
          <span>
            {{ item.name }}
          </span>
          <i class="arrowRightIcon"></i>
        </div>
        <div class="subMenuItems">
          <li v-for="(child, index) in item.children" :key="index">
            <RouterLink
              class="subMenuLink"
              :class="router.currentRoute.value.path.includes(child.path) ? 'active' : null"
              :to="child.path"
              w-full
              flex
              items-center
            >
              <span>
                {{ child.name }}
              </span>
            </RouterLink>
          </li>
        </div>
        <div class="subMenuToolTip">
          <li v-for="(child, index) in item.children" :key="index">
            <RouterLink
              :class="router.currentRoute.value.path.includes(child.path) ? 'active' : null"
              :to="child.path"
              w-full
              flex
              items-center
            >
              <span>
                {{ child.name }}
              </span>
            </RouterLink>
          </li>
        </div>
      </ul>

      <li class="menuItem" v-else>
        <RouterLink
          class="menuLink"
          :class="router.currentRoute.value.path.includes(item.path) ? 'active' : null"
          :to="item.path"
          w-full
          flex
          items-center
          v-if="!item.children"
        >
          <i class="menuIcon" :class="item.icon"></i>
          <span>
            {{ item.name }}
          </span>

          <div class="subMenuToolTip">
            <li>
              <RouterLink
                :class="router.currentRoute.value.path.includes(item.path) ? 'active' : null"
                :to="item.path"
                w-full
                flex
                items-center
              >
                <span>
                  {{ item.name }}
                </span>
              </RouterLink>
            </li>
          </div>
        </RouterLink>
      </li>
    </div>
  </ul>
</template>

<style>
.menuItem {
  margin-bottom: 10px;
}

.menuLink {
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: normal;
  color: #000;
  padding: 0 10px;
  border-radius: 10px;
  height: 44px;
  position: relative;
  transition: all 0.2s linear;
}

.menuLink:hover,
.menuLink.active {
  color: #fff;
  background-color: #000;
}

.menuIcon {
  width: 20px;
  height: 20px;
  flex: none;
  margin-right: 10px;
  background-color: #000;
  transition: all 0.2s linear;
}

.menuLink:hover .menuIcon,
.menuLink.active .menuIcon {
  background-color: #fff;
}

.menuIcon.iconDashboard {
  -webkit-mask: url('/src/assets/icons/menu/dashboard.svg') no-repeat center/100%;
  -mask: url('/src/assets/icons/menu/dashboard.svg') no-repeat center/100%;
}

.menuIcon.iconReports {
  -webkit-mask: url('/src/assets/icons/menu/reports.svg') no-repeat center/100%;
  -mask: url('/src/assets/icons/menu/reports.svg') no-repeat center/100%;
}

.menuIcon.iconAuction {
  -webkit-mask: url('/src/assets/icons/menu/auction.svg') no-repeat center/100%;
  -mask: url('/src/assets/icons/menu/auction.svg') no-repeat center/100%;
}

.menuIcon.iconRegistration {
  -webkit-mask: url('/src/assets/icons/menu/registration.svg') no-repeat center/100%;
  -mask: url('/src/assets/icons/menu/registration.svg') no-repeat center/100%;
}

.menuIcon.iconRoles {
  -webkit-mask: url('/src/assets/icons/menu/roles.svg') no-repeat center/100%;
  -mask: url('/src/assets/icons/menu/roles.svg') no-repeat center/100%;
}

.menuIcon.iconStaffs {
  -webkit-mask: url('/src/assets/icons/menu/staffs.svg') no-repeat center/100%;
  -mask: url('/src/assets/icons/menu/staffs.svg') no-repeat center/100%;
}

.menuIcon.iconNotification {
  -webkit-mask: url('/src/assets/icons/menu/notification.svg') no-repeat center/100%;
  -mask: url('/src/assets/icons/menu/notification.svg') no-repeat center/100%;
}

.menuIcon.iconDiscount {
  -webkit-mask: url('/src/assets/icons/menu/discounts.svg') no-repeat center/100%;
  -mask: url('/src/assets/icons/menu/discounts.svg') no-repeat center/100%;
}

/* sub menu */
.subMenu {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  margin-bottom: 10px;
}

.subMenuToggle {
  position: relative;
  z-index: 4;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: normal;
  color: #000;
  height: 44px;
  width: 100%;
  padding: 0 10px;
  border-radius: 10px;
  cursor: pointer;
  user-select: none;
  background-color: #fff;
  transition: all 0.2s linear;
}

.subMenuToggle:hover,
.subMenu.opened .subMenuToggle {
  background-color: #000;
  color: #fff;
}

.subMenuToggle:hover .menuIcon,
.subMenu.opened .menuIcon {
  background-color: #fff;
}

.subMenuItems {
  position: relative;
  width: 100%;
  padding: 0 20px 0 30px;
  z-index: 3;
  display: none;
}

.subMenu.opened .subMenuItems {
  display: block;
}

.subMenuItems::before {
  content: '';
  position: absolute;
  top: -10px;
  bottom: 0;
  left: 17px;
  height: calc(100% - 10px);
  width: 1px;
  background-color: #000;
}

.subMenuItems a {
  display: flex;
  align-items: center;
  padding: 6px 10px;
  font-size: 14px;
  height: 32px;
  font-weight: normal;
  line-height: 16px;
  border-radius: 8px;
  margin-bottom: 4px;
  color: #8d8d8d;
  transition: all 0.2s linear;
}

.subMenuItems a:first-child {
  margin-top: 10px;
}

.subMenuItems a::before {
  content: '';
  position: absolute;
  left: 17px;
  width: 10px;
  height: 1px;
  background-color: #000;
}

.subMenuItems a:hover,
.subMenuItems a.active {
  background-color: #000;
  color: #ffffff;
}

.subMenuItems a:hover::before,
.subMenuItems a.active::before {
  background-color: #000;
}

.arrowRightIcon {
  width: 14px;
  height: 14px;
  flex: 0 0 14px;
  -webkit-mask: url('/src/assets/icons/top.svg') no-repeat center/100%;
  -mask: url('/src/assets/icons/top.svg') no-repeat center/100%;
  background-color: #000;
  margin-left: auto;
  transform: rotate(90deg);
  transition: all 0.2s linear;
}

.subMenuToggle:hover .arrowRightIcon,
.subMenu.opened .arrowRightIcon {
  background-color: #fff;
}

.subMenu.opened .arrowRightIcon {
  transform: rotate(0deg);
}

body.sideBarClose .menuItem {
  margin-bottom: 20px;
}

body.sideBarClose .menuLink {
  font-size: 0;
  padding: 0 13px;
}

body.sideBarClose .menuIcon {
  margin-right: 0;
  background-color: #8d8d8d;
}

body.sideBarClose .subMenu {
  margin-bottom: 20px;
}

body.sideBarClose .subMenuToggle {
  padding: 0 13px;
  font-size: 0;
}

body.sideBarClose .subMenuToggle .arrowRightIcon {
  display: none;
}

body.sideBarClose .subMenu.opened .subMenuItems {
  display: none;
}

.subMenuToolTip {
  display: none;
  position: absolute;
  top: 0;
  opacity: 0;
  visibility: hidden;
  left: 0;
  margin-top: 0;
  margin-left: 55px;
  background-color: #fff;
  padding: 8px;
  width: 160px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow:
    0px 8px 8px -4px rgba(16, 24, 40, 0.03),
    0px 20px 24px -4px rgba(16, 24, 40, 0.08);
  transition: all 0.2s linear;
}

body.sideBarClose .subMenuToolTip {
  display: block;
}

body.sideBarClose .subMenu:hover .subMenuToolTip,
body.sideBarClose .menuLink:hover .subMenuToolTip {
  opacity: 1;
  visibility: visible;
}

body.sideBarClose .subMenuToolTip li a {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  border-radius: 8px;
  margin-bottom: 4px;
  color: #404040;
  transition: all 0.2s linear;
}

body.sideBarClose .subMenuToolTip li:last-child a {
  margin-bottom: 0;
}

body.sideBarClose .subMenuToolTip li a:hover,
body.sideBarClose .subMenuToolTip li a.active {
  background-color: #000;
  color: #ffffff;
}
</style>
