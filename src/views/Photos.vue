<template>
    <div>
        <div class="bg-gray-900 flex pt-6 lg:pr-64 lg:pl-64 md:pr-32 md:pl-32 sm:pr-12 sm:pl-12">
            <div class="relative w-full p-10"> <!-- bg-gray-200 -->
                <img src="../assets/img/logo.png" class="logo absolute pl-4 top-0 right-0 md:h-64 sm:h-32">
                <div class="w-full grid p-10 mt-32">
                    <div v-for="photo in photos">
                        <div class="bg-white p-2">
                            <photo-card :photo="photo"></photo-card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
	data() {
		return {
			photos:{}
		}
	},
	created() {
		this.loadPhotos();
	},
	methods: {
		loadPhotos() {
			window.axios.get(process.env.VUE_APP_ROOT_API + '/photos2')
				.then((response) => {
					this.photos = response.data.data;
				}).catch((error) => {
                    //console.log(error);
                });
		}
	}
}
</script>
