<template>
    <b-container v-if="State==''">
            <b-row class="p-4">
                <h5 class="cover-heading">{{Prompt}}</h5>
            </b-row>
            <b-row class="p-4 border-top border-secondary cover-heading">
                <h5 style="line-height: 2;">{{Directions}}</h5>
            </b-row>
            <b-row>
                <b-select v-model="State">
                    <option disabled value="">Please select one</option>
                    <option v-for="(Loc,i) in Locs" :key="Loc.key">{{i+1}}) {{Loc.adr}}</option>
                </b-select>    
            </b-row>
    </b-container>
    <b-container v-else>
            <b-row class="p-4">
                <h5 class="cover-heading">{{Prompt}}</h5>
            </b-row>
            <b-row class="p-4 border-top border-secondary cover-heading">
                <b-button class="btn-success" @click="State=''"><h5>Select A Different Location</h5></b-button>
            </b-row>
            <b-row>
                <div id="scheduleContainer">
                    <iframe id="openSchedulingFrame" class="embed-responsive" :src="OP"></iframe>
                    <span v-html="OSraw"/>
                </div>
            </b-row>       
    </b-container>
</template>

<script>
export default {
    name: 'Locations', 
    data(){
        return {
        State:'',
        Prompt: "To complete registration:",
        Directions: "Please select the mammogram location convenient to you by using \n  the drop down menu below. If you have had breast imaging at another \n facility in the past, please bring the imaging with you to your appointment.",
        Locs:[{adr:'BRIDGEPORT: 4699 Main Street, Bridgeport, CT 06606',url:'dept=103370001&vt=1052904'},
        {adr:'BRIDGEPORT: 267 Grant Street, Bridgeport, CT 06610',url:'dept=103010303&vt=1057341'},
        {adr:'FAIRFIELD: 425 Post Road, Fairfield, CT 06824',url:'dept=108080013&vt=1059875'},
        {adr:'GROTON: 52 Hazelnut Hill Road, Groton, CT 06340-3268',url:'dept=108080013&vt=1059875'},
        {adr:'GUILFORD: Shoreline Medical Center,2nd Floor Suite 2500, 111 Goose La, Guilford, CT',url:'dept=101050302&vt=1054897'},
        {adr:'NEW LONDON: 365 Montauk Avenue, New London, CT, 06320',url:'dept=108010036&vt=1059875'},
        {adr:'NEW HAVEN: Long Wharf, 150 Sargent Dr 1st Floor, New Haven, CT',url:'dept=101090300&vt=1054897'},
        {adr:'NEW HAVEN: North Pavilion 1st Floor Diag Radiology, 35 Park St, New Haven, CT',url:'dept=101010302&vt=1054897'},
        {adr:'NORTH HAVEN: Diagnostic Radiology 1st Floor, 6 Devine St, North Haven, CT',url:'dept=101460301&vt=1054897'},
        {adr:'STAMFORD: The Diagnostic Center 2015 WEST MAIN STREET, STAMFORD, CT 06902',url:'dept=104080302&vt=1058286'},
        {adr:'STRATFORD: 2909 Main Street, Stratford, CT 06614',url:'dept=103350001&vt=1057341'},
        {adr:'TRUMBULL: 5520 Park Avenue, Trumbull, CT, 06611',url:'dept=103190303&vt=1057341'},
        {adr:'WATERFORD: 196 Parkway South, Suite 102, Waterford, CT 06385-1234',url:'dept=108030002&vt=1059875'},
        {adr:'WESTERLY(RI): 25 Wells St, Westerly, RI, 02891-2961',url:'dept=108710024&vt=1059875'}],
        OSraw:"<link href='http://epicmychart1p.ynhh.org/MyChart-PRD/Content/EmbeddedWidget.css' rel='stylesheet' type='text/css'> <scr" + "ipt src='https://mychart.ynhhs.org/MyChart-PRD/Content/EmbeddedWidgetController.js' type='text/javascript'>" + "</scr" + "ipt><scr" + "ipt type='text/javascript'> var EWC = new EmbeddedWidgetController({'hostname': 'https://mychart.ynhhs.org/MyChart-PRD/','matchMediaString': '(max-width: 747px)' });</scr" + "ipt>"
        }//RETURN
    },//DATA
    computed: {
        OP() {
            return  "https://mychart.ynhhs.org/MyChart-PRD/SignupAndSchedule/EmbeddedSchedule?" + this.Locs[this.State.split(")")[0]].url 
        }//OP A.K.A. Dynamically Created Open Scheduling Widget Link
    },
    methods: {

    },//METHODS
}//EXPORT
</script>