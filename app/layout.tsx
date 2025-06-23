import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Iglu-Car - Proteção Completa para seu Veículo",
  description:
    "Proteja seu veículo do clima com o Iglu-Car. Garagem externa resistente contra chuva, sol e granizo. Instalação em Brasília e Goiânia.",
  keywords: "iglu car, proteção veículo, garagem externa, cobertura carro, proteção clima, Brasília, Goiânia",
  openGraph: {
    title: "Iglu-Car - Proteção Completa para seu Veículo",
    description: "Proteja seu veículo do clima com o Iglu-Car. Garagem externa resistente contra chuva, sol e granizo.",
    type: "website",
    locale: "pt_BR",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Analytics - Substitua GA_MEASUREMENT_ID pelo seu ID */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        /> */}

        {/* Meta Pixel (Facebook) - Substitua PIXEL_ID pelo seu ID */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'PIXEL_ID');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img height="1" width="1" style={{display: 'none'}}
               src="https://www.facebook.com/tr?id=PIXEL_ID&ev=PageView&noscript=1"
          />
        </noscript> */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
