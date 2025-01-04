export const faqSectionContent = {
	title: "Frequently asked questions",
	description: "Choose any questions you need",
	faqs: [
		{
			q: "What types of images are available on your platform?",
			a: "Our platform offers a diverse range of abstract images to suit various preferences and needs. From vibrant geometric patterns to soothing landscapes, we strive to provide a wide selection to cater to different tastes."
		},
		{
			q: "How can I access and download images from your platform?",
			a: "Accessing and downloading images from our platform is simple. Upon signing up and logging in, users can browse through our curated collection and download their chosen images directly to their devices with just a few clicks."
		},
		{
			q: "Do you offer free images, or is there a subscription required?",
			a: "We provide both free and premium images on our platform. Users can explore a selection of free images without any subscription. For access to our entire library and additional features, we offer subscription plans tailored to different user needs."
		},
		{
			q: "What payment methods do you accept for subscriptions?",
			a: "We accept a variety of payment methods, including credit/debit cards and online payment gateways, to make the subscription process convenient for our users."
		},
		{
			q: "Can I cancel or modify my subscription at any time?",
			a: "Yes, absolutely. You have the flexibility to cancel or modify your subscription at any time through your account settings. Changes will take effect immediately, ensuring you have full control over your subscription preferences."
		},
		{
			q: "How frequently do you update your image collection?",
			a: "We regularly update our image collection with fresh and captivating content to keep our users inspired and engaged. New images are added consistently to ensure there's always something new to discover on our platform."
		}
	],
	cta: {
		title: "Can't find the answer you're looking for?",
		description: "Reach out to our customer support team.",
		link: {
			href: "/contact",
			text: "Get in touch"
		}
	}
}

export const contactSectionContent = {
	title: "Talk to our team",
	description:
		"We're committed to delivering the support you require to make your experience as smooth as possible.",
	address: "123 Maple Street, Springfield, IL, USA",
	phone: "+1 (650) 555-0198",
	email: "hello@abstractly.com"
}

export const pricingSectionContent = {
	eyebrow: "Pricing Tiers",
	title: "Fit for all your needs",
	description:
		"Pick the plan that suits you today and step up as your demands grow - our flexible options have your journey mapped out.",
	plans: [
		{
			name: "Basic Plan",
			description: "Access to a curated selection of abstract images",
			price: { month: "$9.99", annual: "6.99" },
			features: [
				"Standard quality images",
				"Limited to personal use",
				"Email support"
			]
		},
		{
			name: "Standard Plan",
			description: "Next-level Integrations, priced economically",
			price: { month: "$19.99", annual: "15.99" },
			features: [
				"Expanded library with more diverse abstract images",
				"High-resolution images available",
				"Suitable for commercial use",
				"Priority email support",
				"Advanced analytics"
			]
		},
		{
			name: "Premium Plan",
			description: "Experience limitless living for power users",
			price: { month: "$29.99", annual: "25.99" },
			features: [
				"Full access to the entire image library, including exclusive content",
				"Highest quality images, including premium collections",
				"Commercial and resale rights",
				"Dedicated customer support line",
				"24/7 support response time",
				"Advanced analytics and insights"
			]
		}
	]
}
