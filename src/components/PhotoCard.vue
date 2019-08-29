<template>
    <div class="photo bg-white" :class="{'photo-current':currentPhoto.id == photo.id}">
        <router-link :to="{ path: 'photos/' + photo.id }">
            <div class="photo-link">
                <img :src="photo.photo_url" class="photo-img">
                <img class="crosshair" src="../assets/img/shutter.png">
                <div class="number">{{ photo.id }}</div>
            </div>

            <div class="bg-white h-full text-grey-darkest no-underline">
                <div class="text-3xl pt-6">
                    {{ photo.name }}
                </div>
            </div>

          <!--<div class="md:text-left">
            <h2 class="name">
              {{ photo.name }}
            </h2>
            <div class="caption">{{ photo.caption }}</div>
            <div class="species">{{ photo.species }}</div>
            <div class="sub-species">{{ photo.sub_species }}</div>
          </div> -->
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'PhotoCard',
    props: {
        photo: Object
    },
    data() {
        return {
            currentPhoto: {
                id: null
            }
        }
    },
    methods: {
    }
}
</script>