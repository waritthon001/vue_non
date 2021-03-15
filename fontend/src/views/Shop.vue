<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title">Shop</h1>
            <h4>
              ทุกคนสามารถซื้อของต่างๆเพื่อเอาไปเลี้ยงน้อนๆได้
              โดยที่อาหารแต่ละอย่างจะมีราคา และให้ค่าสถานะที่ต่างกันไป
              ด้านล่างคือเงินของคุณ และสามารถกดเพื่อเติมเงินได้
            </h4>
            <a
              class="md-button md-success md-lg md-theme-default"
              target="_blank"
              ><div class="md-ripple">
                <div class="md-button-content">
                  <i class="fas fa-copyright"></i> 30
                </div>
              </div></a
            >
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section text-center">
        <div class="container">
          <div class="team">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamImg1"
                        alt="Thumbnail Image"
                        class="img rounded img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Milk
                      <br />
                    </h4>
                    <md-card-content>
                      <p>
                        ลดความหิว = 1 เพิ่มความสุข = 0
                      </p>
                      <p>คุณมีจำนวน : 0 แก้ว</p>
                    </md-card-content>
                    <md-card-actions class="text-center">
                      <button
                        data-v-573a91af=""
                        type="button"
                        class="md-button md-success md-sm md-theme-default"
                      >
                        <div class="md-ripple">
                          <div class="md-button-content">1 แก้ว = 10 coin</div>
                        </div>
                      </button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamImg1"
                        alt="Thumbnail Image"
                        class="img rounded img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      BananaMilk
                      <br />
                    </h4>
                    <md-card-content>
                      <p>
                        ลดความหิว = 2 เพิ่มความสุข = 1
                      </p>
                      <p>คุณมีจำนวน : 0 แก้ว</p>
                    </md-card-content>
                    <md-card-actions class="text-center">
                      <button
                        data-v-573a91af=""
                        type="button"
                        class="md-button md-success md-sm md-theme-default"
                      >
                        <div class="md-ripple">
                          <div class="md-button-content">1 แก้ว = 20 coin</div>
                        </div>
                      </button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamImg1"
                        alt="Thumbnail Image"
                        class="img rounded img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      CoCoMilk
                      <br />
                    </h4>
                    <md-card-content>
                      <p>
                        ลดความหิว = 3 เพิ่มความสุข = 2
                      </p>
                      <p>คุณมีจำนวน : 0 แก้ว</p>
                    </md-card-content>
                    <md-card-actions class="text-center">
                      <button
                        data-v-573a91af=""
                        type="button"
                        class="md-button md-success md-sm md-theme-default"
                      >
                        <div class="md-ripple">
                          <div class="md-button-content">1 แก้ว = 30 coin</div>
                        </div>
                      </button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  bodyClass: "landing-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg2.jpg")
    },
    teamImg1: {
      type: String,
      default: require("@/assets/img/milk.jpg")
    },
    teamImg2: {
      type: String,
      default: require("@/assets/img/faces/christian.jpg")
    },
    teamImg3: {
      type: String,
      default: require("@/assets/img/faces/kendall.jpg")
    }
  },
  data() {
    return {
      name: null,
      email: null,
      message: null
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}
</style>
