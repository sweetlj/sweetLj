<!--  -->
<template>
  <div class="header">
    <div class="title">MyStage</div>
    <el-divider class="divider"></el-divider>
  </div>
</template>

<script>
export default {
  props: ['foldVal'],
  data () {
    return {
    };
  },
  watch:{
    foldVal(newVal) {
      var bodywidth = window.innerWidth;
      
      var header = document.querySelector('.header');
      var divider = document.querySelector('.divider')

      divider.style.setProperty("--set-width",(bodywidth - newVal - 50)+"px");
      header.style.setProperty("--move",newVal+"px");
    }
  },
  methods: {
    
  }
}

</script>
<style scoped>
/* Google Fonts Import Link */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
*{
  
  margin: 0;
  padding: 0;
  box-sizing: content-box;
  font-family: 'Poppins', sans-serif;
}
.header{
  --move:270px;
  --set-width:1820px;
}
.title{
  font-size: 24px;
  font-weight: 700;
  width: 300px;
  margin-left: var(--move);
}
.divider{
  width: var(--set-width);
  margin-left: var(--move);
}
</style>