<template>
  <div>
    <Navbar />
    <Nuxt />
    
    <Footer />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
export default {
  components:{
    Navbar,
    Footer
  },
  mounted() {
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/6072a71af7ce182709392b4e/1f2vtpfsv";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  },
  
}
</script>



<style>
body{
  font-size:13px;
  line-height: 19px;
  color: #111;
}
</style>
