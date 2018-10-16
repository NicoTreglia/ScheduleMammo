<template>
<b-container>
    <b-button variant="danger" href="http://www.ynhhs.org"> Click To Continue</b-button>
    <b-row class="p-4">
        <h5 class="cover-heading">Thank you for your interest in scheduling a mammogram online:</h5>
    </b-row>
    <b-row class="p-4 border-top border-secondary cover-heading">
        <h5>To ensure the best care, please contact the location convenient to you:</h5>
    </b-row>
    <b-row class=" cover-heading col-lg-9">
        <h5><b-table class=striped hover :items="this.Contacts"></b-table></h5>
    </b-row>
</b-container>
</template>

<script>
export default {
    name: 'Help',
    data() {
        return{
            Contacts: [{location: 'BH Outpatient Radiology', Phone: '203-447-5581'},{location:'Birdgeport Hospital',Phone:'203-384-4843'},{location:'Greenwich Breast Imaging Center',Phone:'203-863-3031'}
            ,{location:'Lawrence & Memorial',Phone:'860-444-3777'},{location:'Yale New Haven',Phone:'	203-688-1010'},{location:'Westerly Hospital',Phone:'401-348-3290'}]
        }//RETURN
    }//DATA
}//EXPORT
</script>

<style>

</style>
