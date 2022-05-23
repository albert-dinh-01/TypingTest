module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			xxl: { max: "1535px" },
			// => @media (max-width: 1535px) { ... }

			xl: { max: "1279px" },
			// => @media (max-width: 1279px) { ... }

			lg: { max: "1023px" },
			// => @media (max-width: 1023px) { ... }

			md: { max: "767px" },
			// => @media (max-width: 767px) { ... }

			sm: { max: "639px" },
			// => @media (max-width: 639px) { ... }

			lgMin: "1024px",
			// => @media (min-width: 1024px) { ... }

			xsm: { max: "270px" }
			// => @media (max-width: 270px) { ... }
		},
		fontSize: {
			textLgMin: ["50px", "45px"],
			textXLgMin: ["100px", "80px"],
			textXSmMin: ["33px", "40px"]
		}
	},
	plugins: []
};
