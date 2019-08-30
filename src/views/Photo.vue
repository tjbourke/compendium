<template>
    <div>
        <div class="bg-gray-900 flex pt-6 lg:pr-64 lg:pl-64 md:pr-32 md:pl-32 sm:pr-12 sm:pl-12">
            <div class="relative w-full p-10"> <!-- bg-gray-200 -->
                <img src="../assets/img/logo.png" class="logo absolute pl-4 top-0 right-0 md:h-64 sm:h-32">
                    <div class="photo bg-white p-6">
                        <router-link :to="{ path: '/photos/' + photo.id }">
                            <div class="photo-link p-2">
                                <img :src="photo.photo_url" class="photo-img">
                                <img class="crosshair" src="../assets/img/shutter.png">
                                <div class="number">{{ photo.id }}</div>
                            </div>

                            <div class="md:text-left">
                                <h1 class="name">
                                    {{ photo.name }}
                                </h1>
                                <div class="caption">{{ photo.caption }}</div>
                                <div class="species">{{ photo.species }}</div>
                                <div class="sub-species">{{ photo.sub_species }}</div>
                                <div>{{ photo.photographed_on }}</div>
                            </div>
                        </router-link>
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
			id: this.$route.params.id,
			photo:{}
		}
	},
	created() {
		this.loadPhoto();
	},
	methods: {
		loadPhoto() {
			window.axios.get(`http://capi.test/photos2/${this.id}`)
				.then((response) => {
					this.photo = response.data.data;
				}).catch((error) => {
			});
		}
	},
}
</script>
