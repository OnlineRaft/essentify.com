import type { SVGAttributes } from "react";
import { getTranslations } from "@/i18n/server";
import StoreConfig from "@/store.config";
import { Newsletter } from "@/ui/footer/newsletter.client";
import { YnsLink } from "@/ui/yns-link";

const sections = [
	{
		header: "Продукти",
		links: StoreConfig.categories.map(({ name, slug }) => ({
			label: name,
			href: `/category/${slug}`,
		})),
	},
	{
		header: "За Есентифай",
		links: [
			{
				label: "Контакти",
				href: "mailto:hi@yournextstore.com",
			},
			{
				label: "Австралийски цветни Буш Есенции",
				href: "https://yournextstore.com/#pricing",
			},
			{
				label: "Начало",
				href: "",
			},
		],
	},	
	{
		header: "Поддръжка",
		links: [
			{
				label: "Help Center",
				href: "https://yournextstore.com/#features",
			},
			{
				label: "Returns and Refunds",
				href: "https://yournextstore.com/#pricing",
			},
			{
				label: "Terms of Service",
				href: "mailto:hi@yournextstore.com",
			},
			{
				label: "Privacy Policy",
				href: "mailto:hi@yournextstore.com",
			},
		],
	},
];

export async function Footer() {
	const t = await getTranslations("Global.footer");

	return (
		<footer className="w-full bg-neutral-50 p-6 text-neutral-800 md:py-12">
			<div className="container flex max-w-7xl flex-row flex-wrap justify-center gap-16 text-sm sm:justify-between">
				<div className="">
					<div className="flex w-full max-w-sm flex-col gap-2">
						<h3 className="font-semibold">{t("newsletterTitle")}</h3>
						<Newsletter />
					</div>
				</div>

				<nav className="grid grid-cols-2 gap-16">
					{sections.map((section) => (
						<section key={section.header}>
							<h3 className="mb-2 font-semibold">{section.header}</h3>
							<ul role="list" className="grid gap-1">
								{section.links.map((link) => (
									<li key={link.label}>
										<YnsLink className="underline-offset-4 hover:underline" href={link.href}>
											{link.label}
										</YnsLink>
									</li>
								))}
							</ul>
						</section>
					))}
				</nav>
			</div>
			<div className="container mt-8 flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-neutral-500 md:flex-row">
				<div>
					<p>© Есентифай 2025. Всички права запазени.</p>
				</div>
				<div className="flex items-center gap-4">
					<YnsLink
						className="inline-flex items-center gap-1 transition-colors hover:text-neutral-700"
						href="https://x.com/zaiste"
					>
						<TwitterIcon className="h-4 w-4" />https://facebook.com/essentify
						<span className="sr-only">Facebook</span>
					</YnsLink>
				</div>
			</div>
		</footer>
	);
}

function TwitterIcon(props: SVGAttributes<SVGSVGElement>) {
	return (
		<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 596 596" fill="none">
			<path
				fill="#fff"
				d="m1 19 230 307L0 577h52l203-219 164 219h177L353 252 568 19h-52L329 221 179 19H1Zm77 38h82l359 481h-81L78 57Z"
			/>
		</svg>
	);
}
