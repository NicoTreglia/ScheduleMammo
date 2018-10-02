<template>
  <b-container class="content-center">
    <b-row>{{this.topMessage}}</b-row>
    <b-row>{{this.question}}</b-row>
    <b-form-group>
      <b-form-radio-group v-model="A1">
        <b-form-radio value="Yes">Yes</b-form-radio>
        <b-form-radio value="No">No</b-form-radio>
      </b-form-radio-group>
      <b-form-radio-group v-if="A1='Yes'" v-model="A2">
        <b-form-radio value="Yes">Yes</b-form-radio>
        <b-form-radio value="No">No</b-form-radio>
      </b-form-radio-group>
      <b-form-radio-group v-if="A2='Yes'" v-model="A3">
        <b-form-radio value="Yes">Yes</b-form-radio>
        <b-form-radio value="No">No</b-form-radio>
      </b-form-radio-group>
      <b-form-radio-group v-if="A3='No'" v-model="A4">
        <b-form-radio value="Yes">Yes</b-form-radio>
        <b-form-radio value="No">No</b-form-radio>
      </b-form-radio-group>
    </b-form-group>
  </b-container>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'home', 
  data(){
    return {
      A1:'', A2:'', A3:'', A4:'',
      topMessage:"Head Question",
      Q1:"Do you have a current referring provider your results can be sent to?",
      Q2:"Was your last screening more than 1 year ago from today?",
      Q3:"Are you having a new issue/problem with your breast today?(e.g., a lump in breast or nipple discharge).",
      Q4:"Have you had a dense breast ultrasound in the last year or in the past?"
    }//RETURN
  },//DATA
  components: {
   
  }
}
</script>
