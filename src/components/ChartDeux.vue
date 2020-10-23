<script>
import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  data: () => ({
    chartdata: {
      labels: ["Propre", "Pas fatigué", "Déterminé", "Confiant"],
      datasets: [
        {
          backgroundColor: ['#249e70', '#EB5A52', '#249e70', '#EB5A52'],
          hoverBackgroundColor:['rgba(36,158, 112, 0.8)', 'rgba(235,90, 82, 0.8)'],
          borderWidth: 4,
          borderColor:'#3a6d57',
          borderAlign:'center',
          hoverBorderColor:'#3a6d57',
          weight: 4,
          data: [25, 25, 25, 25]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutoutPercentage: 90,
      legend:{
          display: false,          
      },
      animation: {
            duration: 3000
        },
      tooltips: {
         enabled: true,
        // mode: 'dataset',
         backgroundColor:'#249e70',
         bodyFontSize: 16,
         bodyFontStyle:'bold',
         bodyFontColor:'#3a6d57',
         xPadding: 16,
         yPadding: 16,
         displayColors: false,
         borderColor: '#3a6d57',
         borderWidth: 2,
         intersect: true,
      }
    }
  }),

  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>