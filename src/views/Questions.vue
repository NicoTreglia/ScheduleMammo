<template>
  <b-container>
    <b-container v-if="showNextQuestion(i)" v-for="(Question, i) in Questions" :key="Question">
      <b-form-group>
          <b-row class="p-4">
            <h5 class="cover-heading">{{Prompt}}</h5>
            </b-row>
          <b-row class="p-4 border-top border-secondary cover-heading">
            <h5>{{Question}}</h5>
          </b-row>
          <b-row class="p-4 border-bottom border-secondary">
            <b-form-radio-group v-model="Answers[i]">
              <b-form-radio value="Yes">Yes</b-form-radio>
              <b-form-radio value="No">No</b-form-radio>
            </b-form-radio-group>
          </b-row>
      </b-form-group>
      </b-container>
      <b-container v-else-if="showLocation()"/>
      <b-container v-if="ShowPicker==1">
        <locations/>
      </b-container>
  </b-container>
</template>

<script>
/*Loads in locations component that houses 
the Open Scheduling locations picker and widget*/
import Locations from "@/Components/Locations.vue"

export default {
  name: 'home', 
  data(){
    return {
      Prompt: "Please answer a few questions before scheduling an appointment:",
      Answers: ['','','',''],
      Correct: ['Yes','Yes','No','No'],
      DoesShow: [],
      ShowPicker: 0,
      topMessage:"Head Question",
      /*List of questions the program will ask, 
      the logic for the answering to this question is found in the METHODS sections below */
      Questions: ["Do you have a current referring provider your results can be sent to?",
      "Was your last screening more than 1 year ago from today?",
      "Are you having a new issue/problem with your breast today?(e.g., a lump in breast or nipple discharge).",
      "Have you had a dense breast ultrasound in the last year or in the past?"]
      //Correct Sequence of Answers is: YES, YES, NO, NO
    }//RETURN
  },//DATA
  components:{
    Locations
  },//COMPONENTS
  methods: {
    showNextQuestion(i) { // --> Will continue to show next question if previous is correct 
      if(i==0){if(this.Answers[i]==''){return true;}}
      else if(i==1){if(this.Answers[0]=='Yes' && this.Answers[1]==''){ return true;}}
      else if(i==2){if(this.Answers[1]=='Yes' && this.Answers[2]==''){ return true;}}
      else if(i==3){if(this.Answers[2]=='No' && this.Answers[3]==''){ return true;}}
    },//SHOWNEXTQUESTION
    showLocation(){ // --> If there is an incorrect answer, it will display the Help view
      if(this.Answers[3]==this.Correct[3]) {this.ShowPicker = 1 }
      else if(this.Answers[0]!=this.Correct[0] && this.Answers[0] != '') {this.$router.push({path: '/Help'})}
      else if(this.Answers[1]!=this.Correct[1] && this.Answers[1] != '') {this.$router.push({path: '/Help'})}
      else if(this.Answers[2]!=this.Correct[2] && this.Answers[2] != '') {this.$router.push({path: '/Help'})}
      else if(this.Answers[3]!=this.Correct[3] && this.Answers[3] != '') {this.$router.push({path: '/Help'})}
    }//SHOWLOCATION
  },//METHODS
}//EXPORT
</script>
