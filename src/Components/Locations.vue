<template>
    <b-container v-if="State==''">
    <!--This container will show if a location is not selected yet-->
        <b-row class="p-4">
            <h5 class="cover-heading">{{Prompt}}</h5>
        </b-row>
        <b-row class="p-4 border-top border-secondary cover-heading">
            <h5 style="line-height: 2;">{{Directions}}</h5>
        </b-row>
        <b-row>
            <!--Displays every options in Locs list-->
            <b-form-select v-model="State" :options="Locs">
                <!--Default option defined-->
                <option disabled value="">Please select one</option>
            </b-form-select>    
        </b-row>
    </b-container>
    <b-container v-else>
    <!--This container will show if a location has been selected-->
        <b-row class="p-4">
            <h5 class="cover-heading">{{Prompt}}</h5>
        </b-row>
        <b-row class="p-4 border-top border-secondary cover-heading">
            <!--Will bring user back to selecting a location-->
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
        end_URL:'',
        State:'',
        Prompt: "To complete registration:",
        Directions: "Please select the mammogram location convenient to you by using \n  the drop down menu below. If you have had breast imaging at another \n facility in the past, please bring the imaging with you to your appointment.",
        Locs:[{text:'BRIDGEPORT: 4699 Main Street, Bridgeport, CT 06606',value:'dept=103370001&vt=1052904'},
        {text:'BRIDGEPORT: 267 Grant Street, Bridgeport, CT 06610',url:'dept=103010303&vt=1057341'},
        {text:'FAIRFIELD: 425 Post Road, Fairfield, CT 06824',value:'dept=103360001&vt=1057341'},
        {text:'GROTON: 52 Hazelnut Hill Road, Groton, CT 06340-3268',value:'dept=108080013&vt=1059875'},
        {text:'GUILFORD: Shoreline Medical Center,2nd Floor Suite 2500, 111 Goose La, Guilford, CT',value:'dept=101050302&vt=1054897'},
        {text:'NEW LONDON: 365 Montauk Avenue, New London, CT, 06320',value:'dept=108010036&vt=1059875'},
        {text:'NEW HAVEN: Long Wharf, 150 Sargent Dr 1st Floor, New Haven, CT',value:'dept=101090300&vt=1054897'},
        {text:'NEW HAVEN: North Pavilion 1st Floor Diag Radiology, 35 Park St, New Haven, CT',value:'dept=101010302&vt=1054897'},
        {text:'NORTH HAVEN: Diagnostic Radiology 1st Floor, 6 Devine St, North Haven, CT',value:'dept=101460301&vt=1054897'},
        {text:'STAMFORD: The Diagnostic Center 2015 West Main Street, Stamford, CT 06902',value:'dept=104080302&vt=1058286'},
        {text:'STRATFORD: 2909 Main Street, Stratford, CT 06614',value:'dept=103350001&vt=1057341'},
        {text:'TRUMBULL: 5520 Park Avenue, Trumbull, CT, 06611',value:'dept=103190303&vt=1057341'},
        {text:'WATERFORD: 196 Parkway South, Suite 102, Waterford, CT 06385-1234',value:'dept=108030002&vt=1059875'},
        {text:'WESTERLY(RI): 25 Wells St, Westerly, RI, 02891-2961',value:'dept=108710024&vt=1059875'}],
        //OSraw holds all code to link to Epic Widget
        OSraw:"<link href='http://epicmychart2vt.ynhh.org/mychartPOC/Content/EmbeddedWidget.css' rel='stylesheet' type='text/css'> <scr" + "ipt src='https://epicmychart2vt.ynhh.org/MyChartPOC/Content/EmbeddedWidgetController.js' type='text/javascript'>" + "</scr" + "ipt><scr" + "ipt type='text/javascript'> var EWC = new EmbeddedWidgetController({'hostname': 'https://epicmychart2vt.ynhh.org/mychartPOC','matchMediaString': '(max-width: 747px)' });</scr" + "ipt>"
        }//RETURN
    },//DATA
    computed: {
        OP() { 
            return  "http://epicmychart2vt.ynhh.org/mychartPOC/SignupAndSchedule/EmbeddedSchedule?" + this.State
        }//OP A.K.A. Dynamically Created Open Scheduling Widget Link
    },
    methods: {

    },//METHODS
}//EXPORT
</script>