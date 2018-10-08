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
                    <option v-for="(Loc, i) in Locs" :key="Loc">{{Loc.adr}}</option>
                </b-select>    
            </b-row>
    </b-container>
    <b-container v-else>
            <b-row class="p-4">
                <h5 class="cover-heading">{{Prompt}}</h5>
            </b-row>
            <b-row class="p-4 border-top border-secondary cover-heading">
                <b-button class="btn-success"><h5>Select A Different Location</h5></b-button>
            </b-row>
            <b-row>

            </b-row>       
    </b-container>
</template>

<script src="https://mychart.ynhhs.org/MyChart-PRD/Content/EmbeddedWidgetController.js" type="text/javascript"></script>
<script type="text/javascript">
    var EWC = new EmbeddedWidgetController({
    'hostname': 'https://mychart.ynhhs.org/MyChart-PRD/',
    'matchMediaString': '(max-width: 747px)',
    'showToggleBtn': true,
    });
</script>
<script>

export default {
    name: 'Locations', 
    data(){
        return {
        State:'',
        Prompt: "To complete registration:",
        Directions: "Please select the mammogram location convenient to you by using \n  the drop down menu below. If you have had breast imaging at another \n facility in the past, please bring the imaging with you to your appointment.",
        Locs:[{adr:'BRIDGEPORT: 4699 Main Street, Bridgeport, CT 06606',url:'dept=103370001amp;vt=1052904'},
        {adr:'BRIDGEPORT: 267 Grant Street, Bridgeport, CT 06610',url:'dept=103010303amp;vt=1057341'},
        {adr:'FAIRFIELD: 425 Post Road, Fairfield, CT 06824',url:'dept=108080013amp;vt=1059875'},
        {adr:'GROTON: 52 Hazelnut Hill Road, Groton, CT 06340-3268',url:'dept=108080013amp;vt=1059875'},
        {adr:'GUILFORD: Shoreline Medical Center,2nd Floor Suite 2500, 111 Goose La, Guilford, CT',url:'dept=101050302amp;vt=1054897'},
        {adr:'NEW LONDON: 365 Montauk Avenue, New London, CT, 06320',url:'dept=108010036amp;vt=1059875'},
        {adr:'NEW HAVEN: Long Wharf, 150 Sargent Dr 1st Floor, New Haven, CT',url:'dept=101090300amp;vt=1054897'},
        {adr:'NEW HAVEN: North Pavilion 1st Floor Diag Radiology, 35 Park St, New Haven, CT',url:'dept=101010302amp;vt=1054897'},
        {adr:'NORTH HAVEN: Diagnostic Radiology 1st Floor, 6 Devine St, North Haven, CT',url:'dept=101460301amp;vt=1054897'},
        {adr:'STAMFORD: The Diagnostic Center 2015 WEST MAIN STREET, STAMFORD, CT 06902',url:'dept=104080302amp;vt=1058286'},
        {adr:'STRATFORD: 2909 Main Street, Stratford, CT 06614',url:'dept=103350001amp;vt=1057341'},
        {adr:'TRUMBULL: 5520 Park Avenue, Trumbull, CT, 06611',url:'dept=103190303amp;vt=1057341'},
        {adr:'WATERFORD: 196 Parkway South, Suite 102, Waterford, CT 06385-1234',url:'dept=108030002amp;vt=1059875'},
        {adr:'WESTERLY(RI): 25 Wells St, Westerly, RI, 02891-2961',url:'dept=108710024amp;vt=1059875'}]
        }//RETURN
    },//DATA
    methods: {

    },//METHODS
}//EXPORT
</script>




<style href="https://mychart.ynhhs.org/MyChart-PRD/Content/EmbeddedWidget.css" rel="stylesheet" type="text/css">