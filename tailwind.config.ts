import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    DEFAULT: "#2563eb",
                    hover: "#1d4ed8",
                },
                border: "#e2e8f0",
            },
            fontFamily: {
                heading: ["var(--font-heading)"],
                body: ["var(--font-body)"],
            },
            animation: {
                "fade-in": "fadeIn 0.8s ease-out forwards",
                "slide-up": "slideUp 0.8s ease-out forwards",
                "slow-fade": "fadeIn 1.5s ease-out forwards",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { transform: "translateY(20px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
