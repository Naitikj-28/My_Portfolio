import './globals.css';

export const metadata = {
  title: 'Portfolio - Naitik Jain',
  description: 'Frontend Web Developer Portfolio - Naitik Jain',
  icons: {
    icon: '/webicon.svg',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/general-sans" />
      </head>
      <body className="bg-[#F8F7F2] text-[#1F2922] font-generalsans antialiased relative min-h-screen selection:bg-[#527A55]/20 selection:text-[#527A55]">
        {/* Subtle Warm Botanical Ambient Glows */}
        <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-[#D6C2A5]/25 rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="fixed top-1/3 right-10 w-[450px] h-[450px] bg-[#527A55]/10 rounded-full blur-[150px] pointer-events-none -z-10" />
        <div className="fixed bottom-10 left-10 w-[550px] h-[550px] bg-[#B8955A]/10 rounded-full blur-[160px] pointer-events-none -z-10" />
        {children}
      </body>
    </html>
  );
}
