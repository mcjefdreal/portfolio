import { Github, Linkedin, Mail } from '@lucide/svelte';
import type { Component } from 'svelte';

export interface SocialLink {
	id: string;
	label: string;
	href: string;
	icon: Component;
}

export const socials: SocialLink[] = [
	{
		id: 'github',
		label: 'GitHub',
		href: 'https://github.com/mcjefdreal',
		icon: Github
	},
	{
		id: 'linkedin',
		label: 'LinkedIn',
		href: 'https://linkedin.com/in/michael-jeffrey-real',
		icon: Linkedin
	},
	{
		id: 'email',
		label: 'Email',
		href: 'mailto:michaeljeffreyreal@gmail.com',
		icon: Mail
	}
];
