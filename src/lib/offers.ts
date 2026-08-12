export type OfferLinks = {
  premiumUrl: string;
  basicUrl: string;
  finalCtaUrl: string;
};

export const defaultOffer: OfferLinks = {
  premiumUrl: "https://go.segurosiste.com.br/PPU38CQF39G",
  basicUrl: "https://go.segurosiste.com.br/PPU38CQF3F2",
  finalCtaUrl: "https://checkout.perfectpay.com.br/pay/PPU38CQCA28",
};

// Cada chave vira uma URL: livecashtiktok.com/<chave>. Troque a chave pelo slug
// definitivo do influenciador (ex: "joao") e os 3 links pelos links de checkout
// dele. Uma nova entrada aqui já cria a página, sem precisar mexer em mais nada.
export const influencerOffers: Record<string, OfferLinks> = {
  influencer1: { ...defaultOffer },
  influencer2: { ...defaultOffer },
  influencer3: { ...defaultOffer },
  influencer4: { ...defaultOffer },
  influencer5: { ...defaultOffer },
  influencer6: { ...defaultOffer },
};
