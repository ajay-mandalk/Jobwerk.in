/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors: {
		  primary: {
			50: '#eff6ff',
			100: '#dbeafe',
			200: '#bfdbfe',
			300: '#93c5fd',
			400: '#60a5fa',
			500: '#3b82f6',
			600: '#2563eb',
			700: '#1d4ed8',
			800: '#1e40af',
			900: '#1e3a8a',
			950: '#172554',
		  },
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		  card: {
			DEFAULT: 'hsl(var(--card))',
			foreground: 'hsl(var(--card-foreground))',
		  },
		  popover: {
			DEFAULT: 'hsl(var(--popover))',
			foreground: 'hsl(var(--popover-foreground))',
		  },
		  primary: {
			DEFAULT: 'hsl(var(--primary))',
			foreground: 'hsl(var(--primary-foreground))',
		  },
		  secondary: {
			DEFAULT: 'hsl(var(--secondary))',
			foreground: 'hsl(var(--secondary-foreground))',
		  },
		  muted: {
			DEFAULT: 'hsl(var(--muted))',
			foreground: 'hsl(var(--muted-foreground))',
		  },
		  accent: {
			DEFAULT: 'hsl(var(--accent))',
			foreground: 'hsl(var(--accent-foreground))',
		  },
		  destructive: {
			DEFAULT: 'hsl(var(--destructive))',
			foreground: 'hsl(var(--destructive-foreground))',
		  },
		  border: 'hsl(var(--border))',
		  input: 'hsl(var(--input))',
		  ring: 'hsl(var(--ring))',
		  chart: {
			1: 'hsl(var(--chart-1))',
			2: 'hsl(var(--chart-2))',
			3: 'hsl(var(--chart-3))',
			4: 'hsl(var(--chart-4))',
			5: 'hsl(var(--chart-5))',
		  },
		  'color-1': 'hsl(var(--color-1))',
		  'color-2': 'hsl(var(--color-2))',
		  'color-3': 'hsl(var(--color-3))',
		  'color-4': 'hsl(var(--color-4))',
		  'color-5': 'hsl(var(--color-5))',
		},
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		},
		margin: {
		  0.25: '0.0625rem', // 1px
		},
		keyframes: {
		  marquee: {
			from: {
			  transform: 'translateX(0)',
			},
			to: {
			  transform: 'translateX(calc(-100% - var(--gap)))',
			},
		  },
		  'marquee-vertical': {
			from: {
			  transform: 'translateY(0)',
			},
			to: {
			  transform: 'translateY(calc(-100% - var(--gap)))',
			},
		  },
		  meteor: {
			'0%': {
			  transform: 'rotate(215deg) translateX(0)',
			  opacity: '1',
			},
			'70%': {
			  opacity: '1',
			},
			'100%': {
			  transform: 'rotate(215deg) translateX(-500px)',
			  opacity: '0',
			},
		  },
		  'shiny-text': {
			'0%, 90%, 100%': {
			  'background-position': 'calc(-100% - var(--shiny-width)) 0',
			},
			'30%, 60%': {
			  'background-position': 'calc(100% + var(--shiny-width)) 0',
			},
		  },
		  rainbow: {
			'0%': {
			  'background-position': '0%',
			},
			'100%': {
			  'background-position': '200%',
			},
		  },
		  shine: {
			'0%': {
			  'background-position': '0% 0%',
			},
			'50%': {
			  'background-position': '100% 100%',
			},
			to: {
			  'background-position': '0% 0%',
			},
		  },
		  pulse: {
			'0%, 100%': {
			  boxShadow: '0 0 0 0 var(--pulse-color)',
			},
			'50%': {
			  boxShadow: '0 0 0 8px var(--pulse-color)',
			},
		  },
		},
		animation: {
		  marquee: 'marquee var(--duration) infinite linear',
		  'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
		  meteor: 'meteor 5s linear infinite',
		  'shiny-text': 'shiny-text 8s infinite',
		  rainbow: 'rainbow var(--speed, 2s) infinite linear',
		  shine: 'shine var(--duration) infinite linear',
		  pulse: 'pulse var(--duration) ease-out infinite',
		},
		fontFamily: {
		  body: [
			'Inter',
			'ui-sans-serif',
			'system-ui',
			'-apple-system',
			'Segoe UI',
			'Roboto',
			'Helvetica Neue',
			'Arial',
			'Noto Sans',
			'sans-serif',
			'Apple Color Emoji',
			'Segoe UI Emoji',
			'Segoe UI Symbol',
			'Noto Color Emoji',
		  ],
		  sans: [
			'Inter',
			'ui-sans-serif',
			'system-ui',
			'-apple-system',
			'Segoe UI',
			'Roboto',
			'Helvetica Neue',
			'Arial',
			'Noto Sans',
			'sans-serif',
			'Apple Color Emoji',
			'Segoe UI Emoji',
			'Segoe UI Symbol',
			'Noto Color Emoji',
		  ],
		},
	  },
	},
	plugins: [require('tailwindcss-animate')],
  };