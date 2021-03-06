export default {
	title: 'Content',
	name: 'content',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'contentImage',
			title: 'Content Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			name: 'contentHeader',
			title: 'Content Header',
			type: 'string',
		},
		{
			name: 'wistiaUrl',
			title: 'Wistia URL',
			type: 'string',
		},
		{
			name: 'contentText',
			title: 'Content Text',
			type: 'text',
		},
		{
			name: 'ctaText',
			title: 'CTA Text',
			type: 'string',
		},
		{
			name: 'ctaLink',
			title: 'CTA Link',
			type: 'string',
		},
	],
};
