export type OfferLinks = {
  premiumUrl: string;
  basicUrl: string;
};

export const defaultOffer: OfferLinks = {
  premiumUrl: "https://go.segurosiste.com.br/PPU38CQFDJ5",
  basicUrl: "https://go.segurosiste.com.br/PPU38CQFDJ6",
};

// Cada chave vira uma URL: livecashtiktok.com/<chave>. Uma entrada nova aqui
// já cria a página, sem precisar mexer em mais nada.
export const influencerOffers: Record<string, OfferLinks> = {
  tay: {
    premiumUrl: "https://go.segurosiste.com.br/PPU38CQF745",
    basicUrl: "https://go.segurosiste.com.br/PPU38CQF746",
  },
  ka: {
    premiumUrl: "https://go.segurosiste.com.br/PPU38CQF7NH",
    basicUrl: "https://go.segurosiste.com.br/PPU38CQF7NI",
  },
  vander: {
    premiumUrl: "https://go.segurosiste.com.br/PPU38CQF62C",
    basicUrl: "https://go.segurosiste.com.br/PPU38CQF62D",
  },
  magavi: {
    premiumUrl: "https://go.segurosiste.com.br/PPU38CQFAH2",
    basicUrl: "https://go.segurosiste.com.br/PPU38CQFAH3",
  },
  Asfg2ggd: {
    premiumUrl: "https://go.perfectpay.com.br/PPU38CQFDJJ",
    basicUrl: "https://go.perfectpay.com.br/PPU38CQFDJI",
  },
  monetizaai: {
    premiumUrl: "https://go.segurosiste.com.br/PPU38CQFDMJ",
    basicUrl: "https://go.segurosiste.com.br/PPU38CQFDMK",
  },
};
