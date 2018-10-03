<template>
  <div id="app" style="height:'100%'">
    <div class="site-wrapper">
      <div class="site-wrapper-inner">
        <div class="cover-container">
          <b-row class="py-5">
            <h3>Schedule a Mammogram</h3>
          </b-row>
          <row class="py-5">
            <b-col class="col-9">
              <router-view/>
            </b-col>
          </row>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  background: url("assets/bg.jpg") no-repeat;
  background-size:cover;
  /* background-position:center; */
  color: #333333;  
}
  /* Extra markup and styles for table-esque vertical and horizontal centering */
.site-wrapper {
  display: table;
  width: 100%;
  height: 100%;
  min-height: 100%;
}
.site-wrapper-inner {
  display: table-cell;
  vertical-align: top;
  padding-top: 250px
}
.cover-container {
  margin-right: auto;
  margin-left: auto;
}
  /* Padding for spacing */
.inner {
  padding-top: 50px;
  padding: 2rem;
}
.container {
  width: 100%;
  padding-right: 8px;
  padding-left: 8px;
  margin-right: auto;
  margin-left: auto;
}
.cover {
  padding: 0 1.5rem;
}
.cover .btn-lg {
  padding: .75rem 1.25rem;
  font-weight: 700;
} 
.cover-heading {
  font-family:'Trade Gothic W01 Light', Arial, Helvetica, sans-serif;
  font-weight: 100;
  color:#003a70;
}
@media (min-width: 40em) {
  /* Start the vertical centering */
  .site-wrapper-inner {
    vertical-align: middle;
  }
}
@media (max-width: 767px) {
	p.lead {font-size:14px;}
  .cover-heading {font-size:24px;}
}
@media (min-width: 62em) {
  .masthead,
  .cover-container {
    max-width: 970px !important; 
  }
}
@media (min-width: 1600px) {
  .home-container .hero-container .carousel .slide .background-image {
    height: 900px;
    max-height: 900px;
  }
}
.home-container .hero-container .carousel .slide .background-image {
  position: relative;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 900px;
  overflow: hidden;
  max-height: inherit;
}
.lead {
  font-family:'Trade Gothic W01 Light', Arial, Helvetica, sans-serif;
  font-size: 18px;
  font-weight: 100;
}
</style>
