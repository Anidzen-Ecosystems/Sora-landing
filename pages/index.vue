<script setup lang="ts">
</script>

<template>
    <PrimaryHeader />
    <UiPrismCode :code="'query anime {\n'+
'  anime(id: 48468) {\n'+
'    id\n'+
'    slug\n'+
'    malUrl\n'+
'    name\n'+
'    english\n'+
'    japanese\n'+
'    synonyms\n'+
'    images {\n'+
'      jpg {\n'+
'        imageUrl\n'+
'        smallImageUrl\n'+
'        largeImageUrl\n'+
'      }\n'+
'      webp {\n'+
'        imageUrl\n'+
'        smallImageUrl\n'+
'        largeImageUrl\n'+
'      }\n'+
'    }\n'+
'    type\n'+
'    genres'" language="graphql" show-mac-header show-copy-button />
<!--    <Playground/>-->
<!--    <p>Features</p>-->
<!--    <br />-->
<!--    <p>How It Works</p>-->
    <FrequentlyAskedQuestions />
<!--    <p>Contact</p>-->
    <CallToAction />
</template>
