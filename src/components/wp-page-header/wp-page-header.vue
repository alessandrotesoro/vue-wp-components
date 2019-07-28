<template>
	<wp-container class="vue-wp-components-header-wrapper">
		<wp-header height="auto" class="admin-title-area">
			<wp-row :gutter="0" class="wrap">
				<wp-col :span="16">
					<h3>
						<slot></slot>
					</h3>
					<ul class="title-links hidden-sm-and-down" v-if="links.length > 0">
						<li v-for="(item, index) in links" :key="index">
							<a :href="item.url" class="page-title-action" target="_blank">{{item.title}}</a>
						</li>
					</ul>
				</wp-col>
				<wp-col :span="8">
					<slot name="side"></slot>
				</wp-col>
			</wp-row>
		</wp-header>
	</wp-container>
</template>

<script>
import Container from '../wp-container'
import Header from '../wp-header'
import Row from '../wp-row'
import Col from '../wp-col'

export default {
	name: 'wp-page-header',
	components: {
		'wp-container' : Container,
		'wp-header' : Header,
		'wp-row' : Row,
		'wp-col' : Col,
	},
	props: {
		links: {},
	}
}
</script>

<style lang="scss" scoped>
.admin-title-area {
	background-color: #fff;
	box-shadow: 0 1px 0 rgba(200,215,225,0.5), 0 1px 2px #DDD;
	margin-bottom: 40px;
	padding: 15px 20px;

	.wrap {
		margin:0;
	}

	h1, h3 {
		display: inline-block;
		padding: 0;
		font-size: 20px;
		color: #000;
		font-weight: 500;
	}

	li {
		margin-bottom: 0;
		display: inline-block;
	}

	.title-links {
		display: inline-block;
		margin: 0 0 0 20px;
	}

}
</style>
