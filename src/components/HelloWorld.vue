<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <!-- <header class="hello-header"> -->
    <div style="width: 100%; padding-top: 2%">
      <div style="width: 37.5%; float: left">
        <p class="leftWords" v-html="
          localFavicons ? localFavicons[index].words : 'Hold on please.'
        "></p>
      </div>
      <div style="width: 25%; float: left">
        <svg t="1647569900856" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="1085">
          <path style="width: 60%; height: 60%"
            d="M267.0592 186.99264c24.7296 8.90368 46.0032 12.3648 63.81056 10.38848l51.9424-5.9392 13.35808 5.9392c10.88-8.9088 41.55392-13.35808 92.0064-13.35808 46.50496 0 102.89664-11.37664 169.18528-34.13504l4.4544 2.9696h2.9696l2.9696-2.9696h11.86816l4.4544-4.4544 13.35296-2.96448 13.3632-13.35808c80.13312-8.90368 127.1296-13.35296 140.9792-13.35296H777.5744l-2.9696-4.4544 1.4848-2.9696h-5.9392c-2.9696-2.9696-4.94592-5.43744-5.9392-7.41888 43.53536-4.94592 77.17376-7.424 100.92032-7.424-32.65024-2.96448-65.792-4.44928-99.4304-4.44928-42.5472 0-73.216 1.98144-92.01152 5.9392l-20.77696-4.4544c25.72288-7.91552 56.39168-11.37664 92.0064-10.38848h25.23136c-44.5184-3.95776-67.2768-5.9392-68.26496-5.9392v-1.4848l-2.9696-1.47968c-2.9696 0.98816-5.44256 1.4848-7.41888 1.4848h-2.9696c3.95776-3.95776 9.89696-5.9392 17.81248-5.9392h22.25664l-13.35296-1.4848-5.9392-4.44928-1.4848-2.9696v-1.4848l2.9696-1.4848h8.9088c-3.96288-1.97632-12.86656-2.9696-26.71616-2.9696h-14.84288c-6.92224 0.99328-11.87328 1.4848-14.83776 1.4848 13.8496-11.86816 64.3072-17.80224 151.3728-17.80224l-108.3392-7.424-23.74144 2.9696 10.38848 2.9696h-5.9392c-7.9104 0-14.34624-2.47296-19.29216-7.424 22.7584-5.93408 44.52352-8.90368 65.30048-8.90368 4.94592 0 10.38848 0.49664 16.32256 1.4848l-25.22624-5.9392 84.59264-4.44928-78.65856-2.9696L770.1504 0h-80.13824c-10.88 0-26.71104 0.98816-47.488 2.9696-20.77696 1.97632-35.61984 2.9696-44.52352 2.9696-30.6688 0.98816-81.1264 1.4848-151.3728 1.4848-14.84288 0-36.85376-1.23904-66.04288-3.712-29.184-2.47296-51.2-3.712-66.03776-3.712-5.9392 0-11.37664 1.4848-16.32768 4.4544-7.91552 4.94592-12.86144 7.9104-14.83776 8.90368-13.8496 24.7296-24.23808 42.54208-31.16544 53.42208-3.95776 4.95104-8.41216 7.91552-13.35808 8.9088l7.424 5.93408c-14.848 11.87328-22.26176 33.6384-22.26176 65.30048 0 16.8192 14.34624 30.17216 43.0336 40.06912z m28.19584 75.68384c-7.91552 5.9392-13.35808 10.14272-16.32768 12.61568-2.9696 2.47296-4.94592 5.1968-5.9392 8.16128H267.0592c-22.75328 61.34272-37.59616 107.84256-44.5184 139.50464C179.98848 578.28864 158.72 716.8 158.72 838.49728c0 90.03008 20.28032 143.45216 60.84608 160.27136 29.68064 7.91552 51.9424 12.86656 66.78528 14.84288 28.68736 6.92736 45.50656 10.38848 50.4576 10.38848 62.33088 0 118.72256-6.92736 169.18016-20.77696 39.5776-10.88512 92.01152-31.16544 157.312-60.84608 27.6992-10.88512 48.47616-19.29216 62.33088-25.23136 55.3984-34.62656 96.95744-60.84608 124.65664-78.65344-20.77696 7.91552-34.62656 12.86144-41.5488 14.84288 5.93408-6.92736 13.35296-11.8784 22.25664-14.84288-13.8496 1.98144-41.55392 10.3936-83.10784 25.23136-41.5488 14.83776-67.76832 22.75328-78.65344 23.74144-74.20416 4.95104-115.26144 9.40032-123.17696 13.35808-27.6992-3.95776-49.46944-7.424-65.29536-10.38848l-2.9696 1.4848-1.4848 4.4544c-15.83104-1.98144-31.16544-3.95776-46.00832-5.9392-23.74144-3.95776-38.0928-8.40704-43.0336-13.35808-20.77696-3.95776-40.06912-10.88-57.8816-20.77696a75.49952 75.49952 0 0 1-1.4848-14.83776c0-24.73472 6.43584-68.7616 19.29728-132.08064 13.8496-68.27008 26.71104-108.83072 38.58432-121.69216 1.97632-2.9696 40.56576-10.88512 115.75808-23.74656 69.25312-12.86144 111.7952-20.28032 127.62624-22.26176 25.72288-1.97632 45.51168-3.46112 59.36128-4.4544 10.88512-2.9696 24.2432-7.41888 40.06912-13.35296a28.01152 28.01152 0 0 1-1.4848-8.9088 2727.7056 2727.7056 0 0 1 14.84288-25.22624l-2.9696-1.4848c-1.97632-2.9696-2.47296-5.43744-1.4848-7.41888-1.97632 0-2.9696-0.49664-2.9696-1.4848h1.4848l1.4848-10.38848c-11.86816-10.88-20.77184-18.304-26.71104-22.26176l-8.90368 2.9696c-19.7888-1.97632-65.792 3.46112-138.01984 16.32256-77.16864 13.85472-128.12288 20.77696-152.8576 20.77696l-7.41888-7.41888c9.89184-39.5776 14.84288-69.74976 14.84288-90.52672 0-21.76512-4.4544-50.4576-13.3632-86.07744-10.88-42.54208-23.2448-66.28352-37.0944-71.23456-0.99328 2.9696-1.98144 4.95104-2.9696 5.9392l-8.9088 14.83776-8.89856-1.4848v1.4848l-2.9696 2.9696-4.4544-11.87328-8.90368 20.77696c-0.98816-1.97632-1.97632-3.46112-2.9696-4.4544-0.98816 0.99328-1.4848 1.98144-1.4848 2.9696l-5.93408-7.41888-1.4848 1.4848c-3.95776 2.9696-6.92224 4.94592-8.90368 5.9392l-1.4848 1.4848-11.86816 1.4848c-0.99328-0.99328-1.4848-3.46624-1.4848-7.424l-0.02048 0.18432 0.02048 4.26496z"
            :fill="[localFavicons ? localFavicons[index].fill : svgDefaultFill]" p-id="1086"></path>
        </svg>
      </div>
      <div style="width: 37.5%; float: left">
        <p class="rightWords" v-if="localFavicons">
          <code style="font-size: larger; color: #409eff">
            {{ localFavicons[index].likes }}
          </code>
          folks like this favicon.
        </p>
        <p class="rightWords" v-else style="font-weight: bold">...</p>
      </div>
    </div>
    <div style="clear: both" class="cardHolder">
      <v-item-group v-if="localFavicons" selected-class="bg-primary">
        <v-container>
          <v-row>
            <v-col v-for="localFavicon in localFavicons" :key="localFavicon.id" cols="auto" md="3">
              <v-item v-slot="{ selectedClass, toggle }">
                <v-card :class="['d-flex align-center', selectedClass]" dark height="100"
                  @click="toggle, cardClicked($event)" :style="{ backgroundColor: localFavicon.fill }"
                  :id="localFavicon.id">
                  <div class="text-h6 flex-grow-1 text-center" :id="localFavicon.id">
                    {{ localFavicon.colorName }}
                  </div>
                </v-card>
              </v-item>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
    </div>
    <v-row justify="center" style="padding: 2% 0 2% 0">
      <v-dialog v-model="verificationDialog" scrollable>
        <template v-slot:activator="{ props }">
          <v-btn v-if="iconName === 'mdi-heart-multiple-outline'" icon="mdi-heart-multiple-outline" size="x-large"
            v-bind="props" :color="localFavicons[index].fill">
          </v-btn>
          <v-btn v-if="iconName === 'mdi-heart-multiple'" icon="mdi-heart-multiple" size="x-large" v-bind="props"
            :color="localFavicons[index].fill"></v-btn>
          <v-progress-circular v-if="iconName === 'Progress-circular'" :size="50" color="primary" indeterminate>
          </v-progress-circular>
        </template>
        <v-card>
          <v-card-title>Verification</v-card-title>
          <v-card-subtitle>lg10 = ?</v-card-subtitle>
          <v-divider></v-divider>
          <v-card-text style="height: 20%">
            <v-radio-group v-model="radioValue" column>
              <v-radio label="0" value="0"></v-radio>
              <v-radio label="1" value="1"></v-radio>
              <v-radio label="2" value="2"></v-radio>
              <v-radio label="3" value="3"></v-radio>
            </v-radio-group>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="blue-darken-1" text @click="verificationDialog = false">
              Close
            </v-btn>
            <v-btn color="blue-darken-1" text @click="confirmVarification">
              Confirm
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <div>
      <v-snackbar :model-value="successSnackbar" top color="green darken-2" right>
        <v-icon large> mdi-heart-multiple </v-icon>
        Thanks for your thumbs up!
        <v-btn color="blue" variant="text" @click="successSnackbar = false">
          Close
        </v-btn>
      </v-snackbar>
      <v-snackbar :model-value="warningSnackbar" absolute top color="orange darken-2" right>
        <v-icon large> mdi-alert-circle </v-icon>
        Wrong varification code!
        <v-btn color="blue" variant="text" @click="warningSnackbar = false">
          Close
        </v-btn>
      </v-snackbar>
      <v-snackbar :model-value="errorSnackbar" absolute top color="red darken-2" right>
        <v-icon large> mdi-web-remove </v-icon>
        Oops, something goes wrong!
        <v-btn color="blue" variant="text" @click="errorSnackbar = false">
          Close
        </v-btn>
      </v-snackbar>
    </div>
    <!-- </header> -->
  </div>
</template>

<script>
import Service from "@/services/Service.js";
export default {
  name: "HelloWorld",
  data: () => ({
    localFavicons: null,
    index: 0,
    svgDefaultFill: "#939597",
    iconName: "mdi-heart-multiple-outline",
    radioValue: "",
    verificationDialog: false,
    successSnackbar: false,
    warningSnackbar: false,
    errorSnackbar: false,
  }),
  methods: {
    cardClicked(e) {
      this.index = e.target.id;
    },
    snackbarTimeout(e) {
      if (e === "Warning") {
        this.warningSnackbar = true;
        setTimeout(() => {
          this.warningSnackbar = false;
        }, 2000);
      } else if (e === "Error") {
        this.errorSnackbar = true;
        setTimeout(() => {
          this.errorSnackbar = false;
        }, 2000);
      }
    },
    getJsonplaceholderFavicons() {
      const getFavicons = async () => {
        let result = await Service.getJsonplaceholderFaviconsJson();
        console.log("get jsonplaceholder result: ", result);
        this.localFavicons = result.data;
        this.index = 0;
        this.iconName = "mdi-heart-multiple-outline";
        console.log("this.localFavicons: ", this.localFavicons);
      };
      getFavicons().catch((error) => {
        this.snackbarTimeout("Error");
        console.log("get jsonplaceholder error: ", error);
      });
    },
    patchJsonplaceholderFavicons() {
      const patchFavicons = async () => {
        let result = await Service.patchJsonplaceholderFaviconsJson(
          this.index,
          {
            likes: this.localFavicons[this.index].likes + 1,
          }
        );
        console.log("patch jsonplaceholder result: ", result);
        this.localFavicons[this.index].likes += 1;
        this.iconName = "mdi-heart-multiple";
        this.successSnackbar = true;
        setTimeout(() => {
          console.log(
            "2.5 s passed. Change mdi-heart-multiple to mdi-heart-multiple-outline."
          );
          this.iconName = "mdi-heart-multiple-outline";
          this.successSnackbar = false;
        }, 2500);
      };
      patchFavicons().catch((error) => {
        this.snackbarTimeout("Error");
        console.log("patch jsonplaceholder error: ", error);
      });
    },
    getKratesFavicons() {
      const getFavicons = async () => {
        let result = await Service.getKratesFaviconsJson();
        console.log("get krates result: ", result);
        this.localFavicons = result.data[0].favicons;
        this.index = 0;
        this.iconName = "mdi-heart-multiple-outline";
        console.log("this.localFavicons: ", this.localFavicons);
      };
      getFavicons().catch((error) => {
        this.snackbarTimeout("Error");
        console.log("get krates error: ", error);
      });
    },
    putKratesFavicons() {
      // console.log('{"sample": "Hello World"}');
      let tempFavicons = JSON.stringify(this.localFavicons);
      let favicons = JSON.parse(tempFavicons);
      favicons[this.index].likes += 1;
      const putFavicons = async () => {
        let result = await Service.putKratesFaviconsJson({ favicons });
        console.log("krates put result: ", result);
        this.localFavicons[this.index].likes += 1;
        this.iconName = "mdi-heart-multiple";
        this.successSnackbar = true;
        setTimeout(() => {
          console.log(
            "2.5 s passed. Change heart-multiple to mdi-heart-multiple-outline."
          );
          this.iconName = "mdi-heart-multiple-outline";
          this.successSnackbar = false;
        }, 2500);
      };
      putFavicons().catch((error) => {
        this.snackbarTimeout("Error");
        console.log("put krates error: ", error);
      });
    },
    confirmVarification() {
      if (this.radioValue === "1") {
        this.iconName = "Progress-circular";
        this.verificationDialog = false;
        // this.patchJsonplaceholderFavicons();
        this.putKratesFavicons();
      } else {
        this.snackbarTimeout("Warning");
      }
    },
  },
  created() {
    this.iconName = "Progress-circular";
    // this.getJsonplaceholderFavicons();
    this.getKratesFavicons();
  },
};
</script>

<style>
.hello {
  text-align: center;
}

.hello-header {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.leftWords {
  font-size: larger;
  justify-content: right;
  text-align: right;
  margin: 20% 5% 0 25%;
  vertical-align: middle;
}

.rightWords {
  font-size: larger;
  justify-content: left;
  text-align: left;
  margin: 40% 0 0 5%;
  vertical-align: middle;
}

.cardHolder {
  margin: 0 20% 0 20%;
  height: 150px;
  overflow: hidden;
  overflow-x: auto;
  overflow-y: auto;
}
</style>