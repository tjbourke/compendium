<template>
    <div>
        Name <input type="text" v-model="photo.name"><br>
        Caption <input type="text" v-model="photo.caption"><br>
        Description <input type="text" v-model="photo.description"><br>
        Species <input type="text" v-model="photo.species"><br>
        Sub Species <input type="text" v-model="photo.sub_species"><br>
        Date Photographed <input type="date" v-model="photo.photographed_on"><br>
        <input type="button" @click="save" value="Create">
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
