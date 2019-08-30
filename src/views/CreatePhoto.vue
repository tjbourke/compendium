<template>
    <div>
        <b-form @submit="save">
            <b-container class="mt-24">
                <h1>Add Photo to Compendium</h1>
                <hr>

                <b-row>
                    <b-col md="4">
                        <b-form-group label="Name">
                            <b-form-input v-model="photo.name"></b-form-input>
                        </b-form-group>
                        <b-form-group label="Caption">
                            <b-form-input v-model="photo.caption"></b-form-input>
                        </b-form-group>
                        <b-form-group label="Description">
                            <b-form-input v-model="photo.description"></b-form-input>
                        </b-form-group>
                        <b-form-group label="Species">
                            <b-form-input v-model="photo.species"></b-form-input>
                        </b-form-group>
                        <b-form-group label="Sub Species">
                            <b-form-input v-model="photo.sub_species"></b-form-input>
                        </b-form-group>
                        <b-form-group label="Date Photographed">
                            <b-form-input v-model="photo.photographed_on"></b-form-input>
                        </b-form-group>
                        <b-button type="button" @click="save">Add Photo</b-button>
                    </b-col>
                </b-row>
            </b-container>
        </b-form>
    </div>
</template>
<script>

let FormattedPhoto = (photo) => {
    let formData = new FormData();

    formData.append('name', photo.name);
    formData.append('caption', photo.caption);
    formData.append('description', photo.description);
    formData.append('species', photo.species);
    formData.append('sub_species', photo.sub_species);
    formData.append('photographed_on', window.moment(photo.photographed_on).format('YYYY-MM-DD'));

    return formData;
};

export default {
	data() {
		return {
			photo: {
				name: '',
				caption: '',
				description: '',
				species: '',
				sub_species: '',
				photographed_on: ''
			}
		}
	},
	methods: {
		save() {
			let data = new FormData();
			data.append('photo_data',JSON.stringify(this.photo));

			//data.append('document_file',this.documentFile);
			//this.documentSupportFiles.forEach(function(file) {
			//	data.append('document_support_files[]',file);
			//});
			window.axios.post(
				process.env.VUE_APP_ROOT_API + '/photos2',
                new FormattedPhoto(this.photo),
                {
			//	headers: {
			//		'enctype': 'multipart/form-data',
			//	}
			}).then((response) => {
			//	this.isRequesting = false;
			//	if(response.data === 1){
			//		console.log({
			//			title: "Great!",
			//			text: "Your document approval request has been submitted!",
			//			icon: "success",
			//		});
			//		this.clearAll();
			//	}
			});
		}
	}
}
</script>
