export default {
	name: 'loginContent',
	title: 'Login Content',
	type: 'document',
	i18n: {
		base: 'en',
		languages: ['en', 'es', 'no'],
		messages: {
			loading: 'Loading languages...',
			missing: 'Missing',
			draft: 'Draft',
			publishing: 'Publishing...',
			publish: 'Publish',
			deleteAll: {
				buttonTitle: 'Delete (incl. translations)',
				deleting: 'Deleting...',
			},
			translationsMaintenance: {
				title: 'Translation Maintenance',
				selectSchemaPlaceholder: 'Select schema type',
				idStructureMismatch: 'document(s) with mismatched ID structures',
				missingLanguageField: 'document(s) are missing the language field',
				missingDocumentRefs: 'document(s) have missing translation references',
				orphanDocuments: 'orphaned translation document(s)',
				referenceBehaviorMismatch:
					'document(s) with mismatched reference behaviors',
				fix: 'Fix',
			},
		},
		fieldNames: {
			lang: '__i18n_lang',
			references: '__i18n_refs',
		},
	},
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
		},
		{
			name: 'metaTitle',
			title: 'Meta Title',
			type: 'string',
		},
		{
			name: 'metaDescription',
			title: 'Meta Description',
			type: 'text',
		},
		{
			name: 'content',
			title: 'Content',
			type: 'array',
			of: [
				{
					title: 'Content',
					type: 'content',
				},
			],
		},
	],
};
