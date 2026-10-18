import "./globals.css";

export const metadata = { title: "HRB Apexa Learning | Online Mathematics Classes for 9th & 10th" };

export default function RootLayout({ children }) {
return (<html lang="en"><head>

<meta name="viewport" content="width=device-width, initial-scale=1" />

<meta name="description" content="Concept-first online Mathematics coaching for Karnataka State Board Classes 9 and 10. Small batches, scheduled classes and doubt-clearing support. Admissions open." />
<meta property="og:title" content="HRB Apexa Learning | Online Mathematics Classes for 9th & 10th" />
<meta property="og:description" content="Concept-first online Mathematics coaching for Karnataka State Board Classes 9 and 10. Small batches, personal attention, doubt-clearing support." />
<meta property="og:type" content="website" />
<meta name="theme-color" content="#141643" />
<link rel="icon" type="image/jpeg" href="/assests/Apexa_logo.jpeg" />
<link rel="apple-touch-icon" href="/assests/Apexa_logo.jpeg" />
<meta property="og:image" content="assests/Apexa_logo.jpeg" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet" />
</head><body>{children}</body></html>);
}
