<template>
  <div class="home">
    <k-chart :id="'agChart'" :data="agData"></k-chart>
    <k-chart :id="'alChart'" :data="alData"></k-chart>
  </div>
</template>

<script>
import AG0 from '@/assets/AG0.json'
import AL0 from '@/assets/AL0.json'
import kChart from '@/components/kChart'
export default {
  name: 'Home',
  components: {kChart},
  data() {
    return {
      chart: '',
      agData: AG0,
      alData: AL0
    }
  },
  async mounted() {
    console.log(AG0.list, AL0.list)
  },
  methods: {}
}
</script>
<style lang="less" scoped>
</style>