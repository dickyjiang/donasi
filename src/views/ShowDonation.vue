<template>
    <div v-if="error">{{error}}</div>
    <div v-if="donation">
        <h3>{{donation.amount}}</h3>
        <h2> {{donation.displayName}}</h2>
        <p>{{donation.pesan}}</p>
    </div>
    <div v-else>loading ...</div>

</template>

<script>
import getDonation from '../composables/getDonation'

export default {
    props: ['id'],
    setup(props) {
        const { error, donation, load} = getDonation(props.id)

        load()

        return { error, donation }
    },

}
</script>

<style>

</style>