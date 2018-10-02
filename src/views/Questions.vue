<template>
  <b-container>
    <b-container v-if="show(i)" v-for="(Question, i) in Questions" :key="Question">
      <b-form-group>
          <b-row>
            <p>{{Question}}</p>
          </b-row>
          <b-row>
            <b-form-radio-group v-model="Answers[i]">
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
      Answers: ['','','',''],
      DoesShow: [],
      topMessage:"Head Question",
      Questions: ["Do you have a current referring provider your results can be sent to?",
      "Was your last screening more than 1 year ago from today?",
      "Are you having a new issue/problem with your breast today?(e.g., a lump in breast or nipple discharge).",
      "Have you had a dense breast ultrasound in the last year or in the past?"]
    }//RETURN
  },//DATA
  methods: {
    show(i) {
      if(i==0){
        if(this.Answers[i]==''){return true;}
        else { return false;}
      }
      else if(i==1){
        if(this.Answers[0]=='Yes' && this.Answers[1]==''){ return true;}
        else { return false;}
      }
      else if(i==2){
        if(this.Answers[1]=='Yes' && this.Answers[2]==''){ return true;}
        else { return false;}
      }
      else if(i==3){
        if(this.Answers[2]=='No' && this.Answers[3]==''){ return true;}
        else { return false;}
      }
    },
  },
  components: {
   
  }
}
</script>
