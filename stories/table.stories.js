/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import {
	storiesOf
} from '@storybook/vue';
import {
	action
} from '@storybook/addon-actions';

import {
	WPTable,
	WPTableColumn
} from '../src/components/wp-table'

storiesOf('Table', module)
	.add('Table example', () => ({
		components: {
			WPTable,
			WPTableColumn
		},
		data() {
            return {
                data: [
                    { 'id': 1, 'first_name': 'Jesse', 'last_name': 'Simmons', 'date': '2016-10-15 13:43:27', 'gender': 'Male' },
                    { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs', 'date': '2016-12-15 06:00:53', 'gender': 'Male' },
                    { 'id': 3, 'first_name': 'Tina', 'last_name': 'Gilbert', 'date': '2016-04-26 06:26:28', 'gender': 'Female' },
                    { 'id': 4, 'first_name': 'Clarence', 'last_name': 'Flores', 'date': '2016-04-10 10:28:46', 'gender': 'Male' },
                    { 'id': 5, 'first_name': 'Anne', 'last_name': 'Lee', 'date': '2016-12-06 14:38:38', 'gender': 'Female' }
				],
				isPaginated: true,
                isPaginationSimple: false,
                defaultSortDirection: 'asc',
                currentPage: 1,
				perPage: 5,
				defaultOpenedDetails: [1],
                showDetailIcon: true,
                columns: [
                    {
                        field: 'id',
                        label: 'ID',
                        width: '40',
                        numeric: true
                    },
                    {
                        field: 'first_name',
                        label: 'First Name',
                    },
                    {
                        field: 'last_name',
                        label: 'Last Name',
                    },
                    {
                        field: 'date',
                        label: 'Date',
                        centered: true
                    },
                    {
                        field: 'gender',
                        label: 'Gender',
                    }
                ]
            }
		},
		methods: {
            toggle(row) {
                this.$refs.table.toggleDetails(row)
            }
        },
		template:
		`
		<div style="padding:50px;">
			<WPTable :data="data"
			ref="table"
            paginated
            per-page="5"
            :opened-detailed="defaultOpenedDetails"
            detailed
            detail-key="id"
            :show-detail-icon="showDetailIcon"
            aria-next-label="Next page"
            aria-previous-label="Previous page"
            aria-page-label="Page"
            aria-current-label="Current page">

				<template slot-scope="props">
					<WPTableColumn field="id" label="ID" width="40" numeric>
						{{ props.row.id }}
					</WPTableColumn>

					<WPTableColumn field="first_name" label="First Name" sortable>
						<template v-if="showDetailIcon">
							{{ props.row.first_name }}
						</template>
						<template v-else>
							<a @click="toggle(props.row)">
								{{ props.row.first_name }}
							</a>
						</template>
					</WPTableColumn>

				</template>

				<template slot="detail" slot-scope="props">
					<p>
						<strong>{{ props.row.first_name }} {{ props.row.last_name }}</strong>
						<small>@{{ props.row.first_name }}</small>
						<small>31m</small>
						<br>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
						Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
					</p>
				</template>

			</WPTable>
		</div>
		`,
	}))
	;

/* eslint-enable react/react-in-jsx-scope */
