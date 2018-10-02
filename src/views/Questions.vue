<template>
  <!-- <b-container class="content-center">
    <b-row>{{this.topMessage}}</b-row>
    <b-container v-if="this.show1">
      <b-form-group>
          <b-row>
            <p>{{this.Q1}}</p>
          </b-row>
          <b-row>
            <b-form-radio-group v-model="A1">
              <b-form-radio value="Yes">Yes</b-form-radio>
              <b-form-radio value="No">No</b-form-radio>
            </b-form-radio-group>
          </b-row>
      </b-form-group>
    </b-container>
    <b-container v-else-if="this.show2">
      <b-form-group>
          <b-row>
            <p>{{this.Q2}}</p>
          </b-row>
          <b-row>
            <b-form-radio-group v-model="A2">
              <b-form-radio value="Yes">Yes</b-form-radio>
              <b-form-radio value="No">No</b-form-radio>
            </b-form-radio-group>
          </b-row>
      </b-form-group>
    </b-container>
    <b-container  v-else-if="this.show3">
      <b-form-group>
          <b-row>
            <p>{{this.Q3}}</p>
          </b-row>
          <b-row>
            <b-form-radio-group v-model="A3">
              <b-form-radio value="Yes">Yes</b-form-radio>
              <b-form-radio value="No">No</b-form-radio>
            </b-form-radio-group>
          </b-row>
      </b-form-group>
    </b-container>
    <b-container v-else-if="this.show4">
      <b-form-group>
          <b-row>
            <p>{{this.Q4}}</p>
          </b-row>
          <b-row>
            <b-form-radio-group v-model="A4">
              <b-form-radio value="Yes">Yes</b-form-radio>
              <b-form-radio value="No">No</b-form-radio>
            </b-form-radio-group>
          </b-row>
      </b-form-group>
    </b-container>
  </b-container> -->
  <b-container>
    <b-container v-for="Question in Questions" :key="Question">
      <b-form-group>
          <b-row>
            <p>{{Question}}</p>
          </b-row>
          <b-row>
            <b-form-radio-group v-model="A4">
              <b-form-radio value="Yes">Yes</b-form-radio>
              <b-form-radio value="No">No</b-form-radio>
            </b-form-radio-group>
          </b-row>
      </b-form-group>
    </b-container>
  </b-container>
</template>

<script>

export default {
  name: 'home', 
  data(){
    return {
      A1:'', A2:'', A3:'', A4:'',
      topMessage:"Head Question",
      Questions: ["Do you have a current referring provider your results can be sent to?",
      "Was your last screening more than 1 year ago from today?",
      "Are you having a new issue/problem with your breast today?(e.g., a lump in breast or nipple discharge).",
      "Have you had a dense breast ultrasound in the last year or in the past?"]
    }//RETURN
  },//DATA
  computed: {
    show1() {
      if(this.A1==''){ return true;}
      else { return false;}
    },
    show2() {
      if(this.A1=='Yes' && this.A2==''){ return true;}
      else { return false;}
    },
    show3() {
      if(this.A2=='Yes' && this.A3==''){ return true;}
      else { return false;}
    },
    show4() {
      if(this.A3=='No' && this.A4==''){ return true;}
      else { return false;}
    }
  },
  components: {
   
  }
}
</script>
