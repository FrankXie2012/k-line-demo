<template>
  <div id="lineChart" class="chart"></div>
</template>

<script>
import AG0 from '@/assets/AG0.json'
import AL0 from '@/assets/AL0.json'
export default {
  data() {
    return {
      chart: ''
    }
  },
  mounted() {
    this.drawChart()
  },
  methods: {
    drawChart() {
      const self = this
      // 提取时间
      const times = AG0.list.map(v => v.tranTime)
      // 银
      const agData = AG0.list.map(v => v.closePrice)
      // 铝
      const alData = AL0.list.map(v => v.closePrice)
      if (!this.chart) {
        // 基于准备好的dom，初始化echarts实例
        this.chart = this.$echarts.init(document.getElementById('lineChart'))
      }
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: '折线图'
        },
        tooltip: {
          trigger: 'axis',
          position: function(pt) {
            return [pt[0] - 100, '10%']
          }
        },
        grid: {
          x: 50,
          y: 40,
          x2: 20,
          y2: 30
        },
        xAxis: {
          type: 'category',
          splitLine: {
            show: false
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#666'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#1c2a42'
            }
          },
          data: times
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: false
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#666'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#1c2a42'
            }
          }
        },
        legend: {
          top: 10,
          right: 10,
          textStyle: {
            color: '#666'
          },
          data: ['沪银主力连续', '沪铝主力连续']
        },
        color: ['#04f7fb', '#fba23c'],
        series: [
          {
            name: '沪银主力连续',
            type: 'line',
            smooth: true,
            // symbol: 'none',
            lineStyle: {
              color: '#04f7fb',
              width: 2
            },
            areaStyle: {
              color: new self.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#047a84'
                },
                {
                  offset: 1,
                  color: '#fff'
                }
              ])
            },
            data: agData
          },
          {
            name: '沪铝主力连续',
            type: 'line',
            smooth: true,
            symbol: 'none',
            lineStyle: {
              color: '#fba23c',
              width: 2
            },
            areaStyle: {
              color: new self.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#996026'
                },
                {
                  offset: 1,
                  color: '#fff'
                }
              ])
            },
            data: alData
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      this.chart.setOption(option, true)
    }
  }
}
</script>

<style lang="less" scoped></style>
