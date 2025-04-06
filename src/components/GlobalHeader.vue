<template>
  <a-row :wrap="false">
    <a-col flex="200px">
      <RouterLink to="/">
        <div class = "title-bar">
          <img src="@/assets/logo.png" alt="logo" class ="logo"/>
          <div class = "title">Past 图库</div>
        </div>
      </RouterLink>
    </a-col>
    <a-col flex="auto">
      <div>
        <a-menu
          v-model:selectedKeys="current"
          mode="horizontal"
          :items="items"
          @click = "doMenuClick"
        />
      </div>
    </a-col>
    <a-col flex="120px">
      <div class="user-login-status">
        <div v-if="loginUserStore.loginUser.id">
          {{ loginUserStore.loginUser.userName ?? '无名' }}
        </div>
        <div v-else>
          <a-button type="primary" href="/user/login">登录</a-button>
        </div>
      </div>

    </a-col>
  </a-row>
</template>


<script lang="ts" setup>
import { h, ref } from 'vue';
import { menuRoutes } from '@/router/menuRoutes'
import type { MenuProps } from 'ant-design-vue'
import { useLoginUserStore } from '@/stores/userStore.ts'
const loginUserStore = useLoginUserStore()
loginUserStore.fetchLoginUser()
const items = ref<MenuProps['items']>(
  menuRoutes.map((route) => {
    if (route.external) {
      return {
        key: route.path,
        label: h('a', { href: route.path, target: '_blank' }, route.label),
        title: route.label,
      };
    }

    return {
      key: route.path,
      icon: route.icon,
      label: route.label,
      title: route.label,
    };
  })
);

import { useRouter } from "vue-router";
const router = useRouter();
const current = ref<string[]>(['mail']);
// 监听路由变化，更新当前选中菜单
router.afterEach((to, from, next) => {
  current.value = [to.path];
});
// 路由跳转事件
const doMenuClick = ({ key }: { key: string }) => {
  router.push({
    path: key,
  });
};

</script>


<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}

.title {
  color: black;
  font-size: 18px;
  margin-left: 16px;
}

.logo {
  height: 48px;
}
</style>

