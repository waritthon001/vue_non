<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title">Feed Your Pets</h1>
            <h4>
              การให้อาหารทำให้ค่าความสุขเพิ่มขึ้น และค่าความหิวลดลง
              และเมื่อพวกเราเลี้ยงจนน้อนโตเต็มที่
              น้อนก็จะพัฒนาไปเป็นอีกร่างนึงได้
              ด้านล่างคือเงินของคุณกดเพื่อเติมเงินได้
              และมีจำนวนอาหารกดเพื่อดูค่าสถานะที่จะได้
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
            <p>
              <md-button>
                Food1 = 3
                <md-tooltip md-direction="top"
                  ><p>ลดค่าความหิว 1</p>
                  เพิ่มค่าความสุข 0</md-tooltip
                >
              </md-button>
              <md-button>
                Food2 = 1
                <md-tooltip md-direction="top"
                  ><p>ลดค่าความหิว 2</p>
                  เพิ่มค่าความสุข 1</md-tooltip
                >
              </md-button>
              <md-button>
                Food3 = 1
                <md-tooltip md-direction="top"
                  ><p>ลดค่าความหิว 3</p>
                  เพิ่มค่าความสุข 2</md-tooltip
                >
              </md-button>
            </p>
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
                      Raccoon
                      <br />
                    </h4>
                    <md-card-actions class="text-center">
                      <button
                        data-v-573a91af=""
                        type="button"
                        class="md-button md-primary md-sm md-theme-default"
                      >
                        <div class="md-ripple">
                          <div class="md-button-content">Food1</div>
                        </div>
                      </button>
                      <button
                        data-v-573a91af=""
                        type="button"
                        class="md-button md-primary md-sm md-theme-default"
                      >
                        <div class="md-ripple">
                          <div class="md-button-content">Food2</div>
                        </div>
                      </button>
                      <button
                        data-v-573a91af=""
                        type="button"
                        class="md-button md-primary md-sm md-theme-default"
                      >
                        <div class="md-ripple">
                          <div class="md-button-content">Food3</div>
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
                        :src="teamImg2"
                        alt="Thumbnail Image"
                        class="img rounded img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Egg
                      <br />
                    </h4>
                    <md-card-actions class="text-center">
                      <button
                        data-v-573a91af=""
                        type="button"
                        class="md-button md-primary md-sm md-theme-default"
                      >
                        <div class="md-ripple">
                          <div class="md-button-content">Food1</div>
                        </div>
                      </button>
                      <button
                        data-v-573a91af=""
                        type="button"
                        class="md-button md-primary md-sm md-theme-default"
                      >
                        <div class="md-ripple">
                          <div class="md-button-content">Food2</div>
                        </div>
                      </button>
                      <button
                        data-v-573a91af=""
                        type="button"
                        class="md-button md-primary md-sm md-theme-default"
                      >
                        <div class="md-ripple">
                          <div class="md-button-content">Food3</div>
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
                        :src="teamImg3"
                        alt="Thumbnail Image"
                        class="img rounded img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Slime
                      <br />
                    </h4>
                    <md-card-actions class="text-center">
                      <button
                        data-v-573a91af=""
                        type="button"
                        class="md-button md-primary md-sm md-theme-default"
                      >
                        <div class="md-ripple">
                          <div class="md-button-content">Food1</div>
                        </div>
                      </button>
                      <button
                        data-v-573a91af=""
                        type="button"
                        class="md-button md-primary md-sm md-theme-default"
                      >
                        <div class="md-ripple">
                          <div class="md-button-content">Food2</div>
                        </div>
                      </button>
                      <button
                        data-v-573a91af=""
                        type="button"
                        class="md-button md-primary md-sm md-theme-default"
                      >
                        <div class="md-ripple">
                          <div class="md-button-content">Food3</div>
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
                        :src="teamImg4"
                        alt="Thumbnail Image"
                        class="img rounded img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Zombie
                      <br />
                    </h4>
                    <md-card-actions class="text-center">
                      <button
                        data-v-573a91af=""
                        type="button"
                        class="md-button md-primary md-sm md-theme-default"
                      >
                        <div class="md-ripple">
                          <div class="md-button-content">Food1 = 10</div>
                        </div>
                      </button>
                      <button
                        data-v-573a91af=""
                        type="button"
                        class="md-button md-primary md-sm md-theme-default"
                      >
                        <div class="md-ripple">
                          <div class="md-button-content">Food2 = 10</div>
                        </div>
                      </button>
                      <button
                        data-v-573a91af=""
                        type="button"
                        class="md-button md-primary md-sm md-theme-default"
                      >
                        <div class="md-ripple">
                          <div class="md-button-content">Food3 = 10</div>
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
      default: require("@/assets/img/nature-2.jpg")
    },
    teamImg1: {
      type: String,
      default: require("@/assets/img/raccoon.gif")
    },
    teamImg2: {
      type: String,
      default: require("@/assets/img/egg.gif")
    },
    teamImg3: {
      type: String,
      default: require("@/assets/img/slime.gif")
    },
    teamImg4: {
      type: String,
      default: require("@/assets/img/logo.gif")
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
