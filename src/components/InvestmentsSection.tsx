import { Card, CardContent } from "@/components/ui/card";
import { Building2, Warehouse, TrendingUp } from "lucide-react";
import galleryShowroomExterior from "@/assets/gallery-showroom-exterior.jpg";
import new_warehouse from "@/assets/new-warehouse.jpg";
import carwheel from "@/assets/carwheel.jpg";
import magusauzun from "@/assets/magusauzun.jpg";
import { SalesChart } from "@/components/SalesChart";
const investments = [
	{
		id: 1,
		title: "Famagusta Branch",
		subtitle: "The biggest of its kind",
		description:
			"Offering the widest selection of products in the industry and redefining the shopping experience.",
		image: magusauzun,
		icon: Building2,
		hasImage: true,
	},
	{
		id: 2,
		title: "New Warehouse is Under Construction",
		description:
			"We are building a new warehouse in Yerolakkos. Expanding our storage capacity to better serve our growing customer base",
		image: new_warehouse,
		icon: Warehouse,
		hasImage: true,
	},
	{
		id: 3,
		title: "Adding New Sector to Our Business",
		description:
			"We are getting ready to import and wholesale car tires. Diversifying our product	range to meet evolving market demands.",
		image: carwheel,
		icon: TrendingUp,
		hasImage: true,
	},
];

export const InvestmentsSection = () => {
	return (
		<section id="investments" className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
			{/* Decorative Background Elements */}
			<div className="absolute inset-0 bg-grid-pattern opacity-5" />
			<div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
			<div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

			<div className="container mx-auto px-4 relative z-10">
				{/* Section Header */}
				<div className="text-center mb-16 animate-fade-in">
					<div className="inline-block mb-4">
						<span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
							Growing Non-Stop
						</span>
					</div>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
						<span className="bg-gradient-accent bg-clip-text text-transparent">
							Our Investments
						</span>
						<br />
						<span className="text-foreground">
							Continue at Full Speed
						</span>
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Constantly expanding and innovating to provide better services
					</p>
				</div>

				{/* Two Column Layout */}
				<div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
					{/* Left Column - Investment Cards */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						{investments.map((investment, index) => {
						const Icon = investment.icon;
						return (
							<Card
								key={investment.id}
								className="group relative overflow-hidden border-2 border-transparent hover:border-primary/20 transition-all duration-500 hover:shadow-elegant h-64 sm:h-72"
								style={{
									animationDelay: `${index * 100}ms`,
								}}
							>
								{/* Gradient Overlay on Hover */}
								<div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none z-10" />

								{investment.hasImage && investment.image ? (
									<>
										{/* Image Card with Overlay */}
										<div className="relative h-full overflow-hidden">
											<img
												src={investment.image}
												alt={investment.title}
												className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />

											{/* Icon Badge */}
											<div className="absolute top-4 right-4 bg-accent text-accent-foreground p-3 rounded-lg shadow-lg">
												<Icon className="w-6 h-6" />
											</div>

											{/* Content Overlay - Starts at bottom, moves up on hover */}
											<div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground transition-all duration-500 translate-y-0 group-hover:-translate-y-4">
												<h3 className="text-2xl font-bold mb-2">
													{investment.title}
												</h3>
												{investment.subtitle && (
													<p className="text-accent font-semibold text-lg mb-3">
														{investment.subtitle}
													</p>
												)}
												<p className="text-sm text-primary-foreground/90 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-24 transition-all duration-500">
													{investment.description}
												</p>
											</div>
										</div>
										</>
									) : (
										<>
											{/* Text Card */}
											<div className="p-8 relative h-full flex flex-col justify-center">
												{/* Decorative Corner */}
												<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-10 rounded-bl-full" />

												{/* Icon */}
												<div className="relative mb-6 inline-block">
													<div className="bg-gradient-primary p-4 rounded-xl text-primary-foreground shadow-card group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
														<Icon className="w-8 h-8" />
													</div>
												</div>

												{/* Content */}
												<h3 className="text-2xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors duration-300">
													{investment.title}
												</h3>
												<p className="text-muted-foreground leading-relaxed">
													{investment.description}
												</p>

												{/* Hover Arrow */}
												<div className="mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
													<span className="text-sm font-semibold">
														Learn more
													</span>
													<svg
														className="w-4 h-4 ml-2"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M9 5l7 7-7 7"
														/>
													</svg>
												</div>
											</div>
										</>
									)}
							</Card>
						);
					})}
					</div>

					{/* Right Column - Sales Chart */}
					<div className="lg:col-span-1">
						<SalesChart />
					</div>
				</div>

			{/*	Bottom CTA
				<div className="text-center mt-16 animate-fade-in">
					<p className="text-muted-foreground text-lg">
						Want to learn more about our growth plans?{" "}
						<a
							href="#contact"
							className="text-primary hover:text-primary-light font-semibold underline-offset-4 hover:underline transition-all"
						>
							Get in touch
						</a>
					</p>
				</div>
				*/}	
			</div>
			
		</section>
	);
};
