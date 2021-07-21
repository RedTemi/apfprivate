<template>
  <p>{{ $t('hello') }}</p>
</template>

<script>
export default {
  name: 'HelloI18n'
}
</script>

<i18n>
{
	"en": {
		"hello": "Hello i18n in SFC!"
	},
	"pt-PT": {
		"hello": ""
	},
	"fr-FR": {
		"hello": ""
	}
}
</i18n>
