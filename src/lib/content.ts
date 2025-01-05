import sarahdole from "@/assets/img/sarahdole.png"
import johnaseed from "@/assets/img/johnaseed.jpg"
import jeniic from "@/assets/img/jeniic.jpg"
import jakejohnshon from "@/assets/img/jakejohnshon.jpg"
import igorstrav from "@/assets/img/igorstrav.jpg"
import drice from "@/assets/img/drice.jpg"
import mthompson from "@/assets/img/mthompson.jpg"
import olivernever from "@/assets/img/olivernever.jpg"
import marked from "@/assets/img/marked.jpg"
import whiteBlocks from "@/assets/img/white-blocks.png"

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

export const featuresPage = {
	testimonialSectionContent: {
		eyebrow: "Testimonials",
		title: "Countless users, countless smiles",
		description:
			"Explore our community's journey and discover why satisfaction defines us.",
		testimonials: [
			{
				name: "Sarah Dole",
				handle: "sarahdole",
				image: { src: sarahdole, alt: "Sarah Dole" },
				quote:
					"I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!"
			},
			{
				name: "John Appleseed",
				handle: "johnaseed",
				image: { src: johnaseed, alt: "John Appleseed" },
				quote:
					"As an artist, finding inspiration is crucial. This platform has become my go-to source for unique abstract images that ignite my creativity like never before."
			},
			{
				name: "Jean Gray",
				handle: "jeniic",
				image: { src: jeniic, alt: "Jean Gray" },
				quote:
					"I never thought I'd find such stunning abstract images for free! This platform has exceeded my expectations in every way."
			},
			{
				name: "Jake Johnson",
				handle: "jakejohnshon",
				image: { src: jakejohnshon, alt: "Jake Johnson" },
				quote:
					"From corporate presentations to personal projects, the abstract images on this platform have added a touch of elegance and sophistication to everything I create."
			},
			{
				name: "Igor Stravinsky",
				handle: "igorstrav",
				image: { src: igorstrav, alt: "Igor Stravinsky" },
				quote:
					"The subscription plans are worth every penny. Having unlimited access to premium abstract images has transformed my design workflow and elevated the quality of my work"
			},
			{
				name: "Declan Rice",
				handle: "drice",
				image: { src: drice, alt: "Declan Rice" },
				quote:
					"I'm amazed by the attention to detail in every image on this platform. It's clear that a lot of thought and creativity goes into curating the collection."
			},
			{
				name: "Marcus Thompson",
				handle: "mthompson",
				image: { src: mthompson, alt: "Marcus Thompson" },
				quote:
					"Using abstract images from this platform has helped me convey complex concepts in a visually engaging way. My clients are always impressed!"
			},
			{
				name: "Oliver Neverloved",
				handle: "olivernever",
				image: { src: olivernever, alt: "Oliver Neverloved" },
				quote:
					"I appreciate how user-friendly the platform is. Browsing, downloading, and managing my image library couldn't be easier."
			},
			{
				name: "Mark Dennis",
				handle: "marked",
				image: { src: marked, alt: "Mark Dennis" },
				quote:
					"The customer support team went above and beyond to help me with a subscription issue. Their dedication to customer satisfaction is truly commendable"
			}
		]
	}
}

export const aboutPage = {
	statsSectionContent: {
		eyebrow: "Statistics",
		title: "More than premium abstract imagery",
		description:
			"Our platform is more than just as a service to us - it is a catalyst for enriching lives through premium abstract imagery.",
		image: {
			src: whiteBlocks,
			alt: "four white blocks stacked abstractly on each other with a blue background barely visible"
		},
		statHeading: "Our mission, in numbers",
		stats: [
			{ value: 25664890, label: "Downloads" },
			{ value: 17219, label: "Paid Users" },
			{ value: 190654321, label: "Images in library" }
		]
	}
}
