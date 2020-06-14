<template>
  <div class="chart" :id="id"></div>
</template>

<script>
export default {
  name: 'chart',
  props: {
    id: {
      type: String
    },
    data: {
      type: Object
    }
  },
  data() {
    return {
      chart: ''
    }
  },
  async mounted() {
    this.drawChart()
  },
  methods: {
    drawChart() {
      // 提取时间
      let times = []
      let data = []
      for (const object of this.data.list) {
        times.push(object.tranTime)
        data.push([object.openPrice, object.closePrice, object.minPrice, object.maxPrice])
      }
      if (!this.chart) {
        // 基于准备好的dom，初始化echarts实例
        this.chart = this.$echarts.init(document.getElementById(this.id))
      }
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: this.data.list[0]['stockName']
        },
        tooltip: {
          trigger: 'item'
        },
        grid: {
          x: 50,
          y: 40,
          x2: 20,
          y2: 30
        },
        xAxis: {
          data: times
        },
        yAxis: {},
        series: [
          {
            type: 'k',
            data: data
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      this.chart.setOption(option, true)
    }
  }
}
</script>
