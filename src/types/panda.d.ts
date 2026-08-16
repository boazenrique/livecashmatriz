export {};

declare global {
  interface Window {
    pandascripttag: Array<() => void>;
  }

  class PandaPlayer {
    constructor(id: string, options: { onReady?: () => void });
    loadWindowScreen(options: { panda_id_player: string }): void;
  }
}
