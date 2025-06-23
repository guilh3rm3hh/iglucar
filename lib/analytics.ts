// Funções para rastreamento de eventos

// Google Analytics
export const trackGoogleAnalyticsEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    ;(window as any).gtag("event", eventName, parameters)
  }
}

// Meta Pixel (Facebook)
export const trackFacebookPixelEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== "undefined" && (window as any).fbq) {
    ;(window as any).fbq("track", eventName, parameters)
  }
}

// Eventos específicos para o negócio
export const trackWhatsAppClick = (productName?: string) => {
  trackGoogleAnalyticsEvent("whatsapp_click", {
    product_name: productName || "general",
    event_category: "engagement",
    event_label: "whatsapp_contact",
  })

  trackFacebookPixelEvent("Contact", {
    content_name: productName || "WhatsApp Contact",
    content_category: "Contact",
  })
}

export const trackProductView = (productName: string, productCategory: string) => {
  trackGoogleAnalyticsEvent("view_item", {
    item_name: productName,
    item_category: productCategory,
    currency: "BRL",
  })

  trackFacebookPixelEvent("ViewContent", {
    content_name: productName,
    content_category: productCategory,
    content_type: "product",
  })
}

export const trackQuoteRequest = (productName: string) => {
  trackGoogleAnalyticsEvent("generate_lead", {
    item_name: productName,
    event_category: "conversion",
    event_label: "quote_request",
  })

  trackFacebookPixelEvent("Lead", {
    content_name: productName,
    content_category: "Quote Request",
  })
}
