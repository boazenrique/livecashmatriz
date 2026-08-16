import { useEffect, useRef, useState } from "react";
import {
  Crown,
  Flame,
  Globe,
  PartyPopper,
  Plus,
  Sparkles,
  Swords,
  Trophy,
  Zap,
} from "lucide-react";

import type { OfferLinks } from "@/lib/offers";

export const pageTitle = "LiveCash TikTok — Ganhe R$150 a R$500 por dia com Lives Interativas";
export const pageDescription =
  "Plataforma de jogos para TikTok LIVE: escolha um jogo, conecte sua conta e monetize no automático, sem seguidores, sem câmera e sem aparecer.";

const rankingMedals = ["🥇", "🥈", "🥉"];

const ranking = [
  {
    name: "Camila Rocha",
    photo: "/rank/user1.jpg",
    location: "SP",
    days: 114,
    accounts: 3,
    lives: 74,
    hours: "1847h",
    diamonds: "2.841.937",
    followers: "+31.420",
    revenue: "R$ 15.861",
  },
  {
    name: "Roberto Lima",
    photo: "/rank/user2.jpg",
    location: "RJ",
    days: 112,
    accounts: 4,
    lives: 82,
    hours: "1505h",
    diamonds: "2.658.492",
    followers: "+28.740",
    revenue: "R$ 14.838",
  },
  {
    name: "Fernanda Alves",
    photo: "/rank/user3.jpg",
    location: "MG",
    days: 105,
    accounts: 4,
    lives: 59,
    hours: "1680h",
    diamonds: "2.481.751",
    followers: "+26.190",
    revenue: "R$ 13.849",
  },
  {
    name: "Mateus Costa",
    photo: "/rank/user4.jpg",
    location: "SP",
    days: 102,
    accounts: 4,
    lives: 92,
    hours: "1509h",
    diamonds: "2.310.214",
    followers: "+24.580",
    revenue: "R$ 12.900",
  },
  {
    name: "Maria de Lourdes",
    photo: "/rank/user5.jpg",
    location: "BA",
    days: 98,
    accounts: 3,
    lives: 106,
    hours: "1684h",
    diamonds: "2.124.638",
    followers: "+22.310",
    revenue: "R$ 11.857",
  },
  {
    name: "Bruna Ferreira",
    photo: "/rank/user6.jpg",
    location: "PR",
    days: 92,
    accounts: 4,
    lives: 105,
    hours: "1642h",
    diamonds: "1.965.409",
    followers: "+20.870",
    revenue: "R$ 10.972",
  },
  {
    name: "Thayna Neto",
    photo: "/rank/user7.jpg",
    location: "RS",
    days: 94,
    accounts: 4,
    lives: 99,
    hours: "1186h",
    diamonds: "1.834.853",
    followers: "+19.240",
    revenue: "R$ 10.237",
  },
  {
    name: "Rafael Silva",
    photo: "/rank/user8.jpg",
    location: "CE",
    days: 97,
    accounts: 4,
    lives: 115,
    hours: "1662h",
    diamonds: "1.728.247",
    followers: "+18.030",
    revenue: "R$ 9.648",
  },
  {
    name: "Patricia Torres",
    photo: "/rank/user9.avif",
    location: "GO",
    days: 96,
    accounts: 4,
    lives: 66,
    hours: "1290h",
    diamonds: "1.634.918",
    followers: "+17.120",
    revenue: "R$ 9.123",
  },
  {
    name: "Paulo Gomes",
    photo: "/rank/user10.jpg",
    location: "SC",
    days: 95,
    accounts: 4,
    lives: 89,
    hours: "1260h",
    diamonds: "1.549.372",
    followers: "+16.280",
    revenue: "R$ 8.647",
  },
];

const games = [
  {
    logo: "/Batalha%20dos%20Craques.png",
    preview: "/batalhadoscraques1.png",
    title: "Batalha dos Craques",
    description:
      "Craques do futebol se enfrentam na tela e cada presente dá força pro seu favorito avançar. O público escolhe um lado e briga pra ver quem vira o campeão da rodada.",
    badge: "DUELO DE CRAQUES",
    icon: Zap,
    badgeClass: "border-violet-500/30 bg-violet-500/15 text-violet-400",
  },
  {
    logo: "/Jump%20Pou.png",
    preview: "/jumppou1.png",
    title: "Jump Pou",
    description:
      "O bichinho salta de plataforma em plataforma e cada presente dá um pulo extra rumo ao topo. Simples, fofo e viciante — o público não larga a tela até ver até onde ele chega.",
    badge: "SUPER FOFO",
    icon: Sparkles,
    badgeClass: "border-pink-500/30 bg-pink-500/15 text-pink-400",
  },
  {
    logo: "/Salve%20o%20Rei.png",
    preview: "/Salveorei1.png",
    title: "Salve o Rei",
    description:
      "O Rei está sob ataque e só os presentes do público conseguem protegê-lo. Cada envio reforça a defesa — e todo mundo quer ser lembrado como quem salvou o trono.",
    badge: "DEFENDA O TRONO",
    icon: Crown,
    badgeClass: "border-indigo-500/30 bg-indigo-500/15 text-indigo-400",
  },
  {
    logo: "/Plinko%20de%20usuarios.png",
    preview: "/jogoplinkousuarios1.jpg",
    title: "Plinko de Usuários",
    description:
      "A mesma emoção do Plinko, mas a disputa é entre os espectadores. Cada presente solta uma bolinha no nome de quem enviou, e o público briga pra ver quem chega primeiro no prêmio.",
    badge: "RANKING AO VIVO",
    icon: Trophy,
    badgeClass: "border-emerald-500/30 bg-emerald-500/15 text-emerald-400",
  },
  {
    logo: "/campeonato%20de%20curtidas.png",
    preview: "/jogocampeonatocurtidas1.jpg",
    title: "X1 de Curtidas e Presentes",
    description:
      "Curtida = ponto no ranking de curtidas, presente = ponto no ranking de presentes. Duas disputas rolando ao mesmo tempo, dobrando o motivo pra interagir.",
    badge: "DISPUTA DUPLA",
    icon: Swords,
    badgeClass: "border-primary/30 bg-primary/15 text-brand-soft",
  },
  {
    logo: "/guerra%20de%20times.png",
    preview: "/jogoguerratimes1.jpg",
    title: "Guerra Territorial de Times",
    description:
      "A mesma pegada da guerra de países, mas com times de futebol. A rivalidade da torcida faz o público defender seu time à base de presentes.",
    badge: "RIVALIDADE DE TORCIDA",
    icon: Flame,
    badgeClass: "border-orange-500/30 bg-orange-500/15 text-orange-400",
  },
  {
    logo: "/plink%20de%20futebol.png",
    preview: "/jogoplinkofut1.jpg",
    title: "Plinko de Times",
    description:
      "A dinâmica viciante do Plinko com a paixão do futebol. Cada presente solta uma bolinha pelo time escolhido e o público não para de jogar pra ver quem vence.",
    badge: "MUITO DIVERTIDO",
    icon: PartyPopper,
    badgeClass: "border-fuchsia-500/30 bg-fuchsia-500/15 text-fuchsia-400",
  },
  {
    logo: "/guerra%20de%20paises.png",
    preview: "/jogoguerrapaises1.jpg",
    title: "Guerra Territorial de Países",
    description:
      "Espectadores escolhem um país e mandam presentes para conquistar o mapa. Público de vários lugares briga pelo território — caos, torcida e presentes sem parar.",
    badge: "VIRAL / GLOBAL",
    icon: Globe,
    badgeClass: "border-sky-500/30 bg-sky-500/15 text-sky-400",
  },
  {
    logo: "/Copa%20do%20Brasil.png",
    preview: "/jogocopadobrasil1.jpg",
    title: "Copa do Brasil de Times",
    description:
      "Um mata-mata em tempo real entre os times do coração da audiência. Cada presente vale um gol e só sobra um campeão a cada rodada.",
    badge: "MATA-MATA AO VIVO",
    icon: Trophy,
    badgeClass: "border-amber-500/30 bg-amber-500/15 text-amber-400",
  },
];

const premiumFeatures = [
  "Contas ilimitadas no TikTok",
  "+de 26 jogos Premium desbloqueados",
  "Novos jogos adicionados todos os meses",
  "Atualizações automáticas da plataforma",
  "Suporte prioritário",
  "Acesso antecipado a novos recursos",
  "Biblioteca completa de jogos interativos",
  "Retorno estimado de R$300 até R$500,00 por dia.",
];

const basicFeatures = [
  "1 conta TikTok",
  "Acesso aos 3 jogos",
  "Atualizações da plataforma",
  "Tutoriais completos",
  "Suporte",
  "Retorno estimado de R$180,00 por dia.",
];

const faqs = [
  {
    question: "Preciso aparecer nas lives ou gravar vídeo?",
    answer:
      "Não. O jogo fica na tela e roda sozinho. Você pode estar fazendo outra coisa, dormindo, trabalhando — a live continua e os presentes chegam.",
  },
  {
    question: "Funciona no celular?",
    answer:
      "Depende do jogo. A maioria funciona via PC com TikTok Live Studio. Alguns jogos simples funcionam direto pelo celular. O suporte te ajuda a configurar tudo.",
  },
  {
    question: "Preciso de muitos seguidores?",
    answer:
      "Qualquer quantidade de seguidores. O TikTok libera a função de live para contas com seguidores suficientes — e a maioria das pessoas já tem. Você provavelmente pode começar agora mesmo.",
  },
  {
    question: "Quanto dá em média por live?",
    answer:
      "A média é de 5.000 diamantes por dia, o equivalente a ~R$140. Uma renda real que chega enquanto o jogo roda sozinho — sem você fazer absolutamente nada.",
  },
  {
    question: "Como recebo meus pagamentos do TikTok?",
    answer:
      "Direto pelo próprio TikTok. Os presentes viram diamantes, você troca por saldo dentro do app e o PIX cai na hora, na sua conta. A LiveCash não chega perto desse dinheiro em nenhum momento.",
  },
  {
    question: "A LiveCash ganha algo em cima dos meus presentes?",
    answer:
      "Não. 100% dos presentes e diamantes são seus — o TikTok já desconta a taxa dele antes de cair na sua conta, igual em qualquer live normal. A LiveCash só cobra o valor do plano, nunca uma porcentagem do que você fatura.",
  },
  {
    question: "Eu tenho que pagar algo além dos planos para começar?",
    answer:
      "Não. O valor do plano já dá acesso completo à plataforma, aos jogos e ao suporte — sem taxa de configuração, mensalidade escondida ou letra miúda. Você paga uma vez e já pode rodar sua primeira live no mesmo dia.",
  },
  {
    question: "O acesso é liberado na hora?",
    answer:
      "Sim. Logo após a confirmação do pagamento você recebe o acesso no e-mail que cadastrou. O acesso é enviado junto com as instruções de configuração.",
  },
  {
    question: "Tenho garantia?",
    answer:
      "Sim, e é vitalícia: enquanto você for cliente, acesso, suporte e atualizações estão garantidos. Não gostou ou quer parar por qualquer motivo? Cancela quando quiser, sem multa e sem burocracia.",
  },
];

const MARQUEE_LOOP_MS = 32000;

function useDraggableMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const interaction = useRef({ paused: false, dragging: false, startX: 0, startScroll: 0 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let rafId: number;
    let lastTime: number | null = null;

    const step = (time: number) => {
      const half = el.scrollWidth / 2;
      if (lastTime !== null && half > 0 && !interaction.current.paused && !interaction.current.dragging) {
        const next = el.scrollLeft + (half / MARQUEE_LOOP_MS) * (time - lastTime);
        el.scrollLeft = next >= half ? next - half : next;
      }
      lastTime = time;
      rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const wrapScroll = (value: number) => {
    const el = containerRef.current;
    if (!el) return value;
    const half = el.scrollWidth / 2;
    if (half <= 0) return value;
    let v = value;
    while (v < 0) v += half;
    while (v >= half) v -= half;
    return v;
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const el = containerRef.current;
    if (!el) return;
    interaction.current.dragging = true;
    interaction.current.startX = e.clientX;
    interaction.current.startScroll = el.scrollLeft;
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!interaction.current.dragging) return;
    const el = containerRef.current;
    if (!el) return;
    const dx = e.clientX - interaction.current.startX;
    el.scrollLeft = wrapScroll(interaction.current.startScroll - dx);
  };

  const endDrag = () => {
    interaction.current.dragging = false;
  };

  return {
    containerRef,
    pause: () => {
      interaction.current.paused = true;
    },
    resume: () => {
      interaction.current.paused = false;
    },
    onPointerDown,
    onPointerMove,
    onPointerUp: endDrag,
    onPointerCancel: endDrag,
  };
}

const DRAG_THRESHOLD_PX = 6;

function useDragScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const state = useRef({ active: false, dragging: false, startX: 0, startScroll: 0, pointerId: 0 });

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const el = containerRef.current;
    if (!el) return;
    state.current = {
      active: true,
      dragging: false,
      startX: e.clientX,
      startScroll: el.scrollLeft,
      pointerId: e.pointerId,
    };
    // Capture immediately so move events keep reaching us even while the
    // cursor is over a video iframe (iframes otherwise swallow them).
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const el = containerRef.current;
    if (!el || !state.current.active) return;
    const dx = e.clientX - state.current.startX;

    if (!state.current.dragging) {
      if (Math.abs(dx) < DRAG_THRESHOLD_PX) return;
      state.current.dragging = true;
    }

    el.scrollLeft = state.current.startScroll - dx;
  };

  const endDrag = (e: React.PointerEvent) => {
    const el = containerRef.current;
    if (el && state.current.active && !state.current.dragging) {
      // Never actually dragged: release capture so the click that follows
      // hits whatever is under the cursor (e.g. the video's play button)
      // instead of being swallowed by the carousel container.
      el.releasePointerCapture(e.pointerId);
    }
    state.current.active = false;
    state.current.dragging = false;
  };

  return {
    containerRef,
    onPointerDown,
    onPointerMove,
    onPointerUp: endDrag,
    onPointerCancel: endDrag,
  };
}

const videoTestimonials = [
  { id: "262f4ca4-33e3-43f9-b4d2-5555ad9e9759", paddingTop: 179.31034482758622 },
  { id: "f8e3a06d-edb9-41b4-88d8-28a9ba014346", paddingTop: 177.77777777777777 },
  { id: "4d17e0bc-5ccb-4d0a-b205-ba3f92c93c7b", paddingTop: 177.77777777777777 },
  { id: "9afd00dc-0a9a-4050-9e92-03d313a9e07a", paddingTop: 179.25925925925924 },
];

const PANDA_SCRIPT_SRC = "https://player.pandavideo.com.br/api.v2.js";

function PandaVideoEmbed({ id, paddingTop }: { id: string; paddingTop: number }) {
  const playerId = `panda-${id}`;

  useEffect(() => {
    if (!document.querySelector(`script[src="${PANDA_SCRIPT_SRC}"]`)) {
      const script = document.createElement("script");
      script.src = PANDA_SCRIPT_SRC;
      script.async = true;
      document.head.appendChild(script);
    }

    window.pandascripttag = window.pandascripttag || [];
    window.pandascripttag.push(() => {
      const player = new PandaPlayer(playerId, {
        onReady() {
          player.loadWindowScreen({ panda_id_player: playerId });
        },
      });
    });
  }, [playerId]);

  return (
    <div style={{ position: "relative", paddingTop: `${paddingTop}%` }}>
      <iframe
        id={playerId}
        title="Depoimento em vídeo"
        src={`https://player-vz-796cc82c-715.tv.pandavideo.com.br/embed/?v=${id}&iosFakeFullscreen=true`}
        style={{ border: "none", position: "absolute", top: 0, left: 0 }}
        allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
        allowFullScreen
        width="100%"
        height="100%"
      />
    </div>
  );
}

const HOSTVSL_SCRIPT_SRC = "https://script-prod.b-cdn.net/V0.700/hostvsl-player.js";

export function LandingPage({ offers }: { offers: OfferLinks }) {
  const gamesMarquee = useDraggableMarquee();
  const testimonialsScroll = useDragScroll();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    if (document.querySelector(`script[src="${HOSTVSL_SCRIPT_SRC}"]`)) return;
    const script = document.createElement("script");
    script.src = HOSTVSL_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <main className="min-h-screen bg-background bg-glow-top">
      <div className="mx-auto max-w-3xl px-5 pb-24 pt-8">
        {/* Logo */}
        <header className="flex justify-center">
          <img src="/logo%20live%2001.png" alt="LiveCash TikTok" className="h-14 w-auto" />
        </header>

        {/* Hero */}
        <section className="pt-20 text-center sm:pt-28">
          <h1 className="mx-auto max-w-2xl text-4xl font-bold leading-[1.06] sm:text-5xl">
            Ganhe de <span className="text-brand-gradient">R$150 a R$500 por dia</span> com Lives
            Interativas no TikTok
            <br className="hidden sm:block" /> no automático e sem aparecer.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Veja como é fácil ganhar dinheiro no automático hoje em dia. Você escolhe um dos
            nossos jogos, conecte sua conta e comece a monetizar em poucos minutos.
          </p>
        </section>

        {/* Vídeo de vendas */}
        <section className="mt-14">
          <div className="frame-glow overflow-hidden rounded-2xl border border-primary/30 bg-card">
            <div className="aspect-video w-full">
              <hostvsl-player
                id="vid-0c045169-f4ca-450d-8941-76d93875d73c"
                data-video="https://prod-hostvsl.b-cdn.net/c9c47c1c-97f0-4a3e-9412-13a2040e173a/0c045169-f4ca-450d-8941-76d93875d73c/videoInformations.js?VIDEO_ORIGIN=ORIGINAL"
                className="block h-full w-full"
              />
            </div>
            <div className="flex items-center gap-3 border-t border-border px-4 py-3">
              <span className="size-2 animate-pulse rounded-full bg-primary" />
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                Assista à demonstração completa
              </p>
            </div>
          </div>
        </section>

        {/* Explicação */}
        <section className="mt-12 space-y-5 text-center">
          <p className="mx-auto max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            A <strong className="font-semibold text-foreground">LiveCash TIKTOK</strong> é uma
            plataforma parceira do Tiktok que reúne jogos interativos desenvolvidos especialmente
            para TikTok LIVE. Você escolhe um jogo, conecta sua conta e inicia a transmissão.
            Enquanto o público interage enviando presentes, comentários e curtidas, o jogo acontece
            automaticamente na tela, mantendo a audiência engajada durante toda a live.
          </p>

          <div className="mx-auto max-w-2xl rounded-2xl border border-primary/25 bg-primary/[0.07] p-6">
            <p className="text-[15px] leading-relaxed text-foreground">
              Não precisa de seguidores, não precisa de câmera, não precisa de roteiro e{" "}
              <strong className="text-brand-gradient font-bold">não precisa aparecer.</strong> Se
              você tem um TikTok, você pode começar hoje.
            </p>
          </div>
        </section>

        {/* Veja como fica na prática */}
        <section className="mt-20 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              Veja como fica <br />
              <span className="text-brand-gradient">na prática</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              Exatamente assim que aparece na sua live. O público vê o jogo, interage e os presentes
              chegam.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="frame-glow aspect-[9/19] overflow-hidden rounded-2xl border border-border bg-card/50">
              <video
                src="/video3.mp4"
                playsInline
                muted
                loop
                autoPlay
                className="h-full w-full object-cover"
              />
            </div>

            <div className="frame-glow aspect-[9/19] overflow-hidden rounded-2xl border border-border bg-card/50">
              <video
                src="/video2.mp4"
                playsInline
                muted
                loop
                autoPlay
                className="h-full w-full object-cover"
              />
            </div>

            <div className="frame-glow aspect-[9/19] overflow-hidden rounded-2xl border border-border bg-card/50">
              <video
                src="/video1.mp4"
                playsInline
                muted
                loop
                autoPlay
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Depoimentos em vídeo */}
        <section className="mt-20 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              Depoimentos de quem <br />
              <span className="text-brand-gradient">já está usando</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              Pessoas reais, usando a LiveCash agora, contando como está sendo a experiência.
            </p>
          </div>

          <div
            ref={testimonialsScroll.containerRef}
            className="relative mt-10 -mx-5 flex cursor-grab touch-pan-x select-none snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 pl-5 pr-5 scrollbar-none active:cursor-grabbing [mask-image:linear-gradient(to_right,transparent,black_16px,black_calc(100%-16px),transparent)]"
            onPointerDown={testimonialsScroll.onPointerDown}
            onPointerMove={testimonialsScroll.onPointerMove}
            onPointerUp={testimonialsScroll.onPointerUp}
            onPointerCancel={testimonialsScroll.onPointerCancel}
            onDragStart={(e) => e.preventDefault()}
          >
            {videoTestimonials.map((video) => (
              <div
                key={video.id}
                className="frame-glow w-[220px] shrink-0 snap-start overflow-hidden rounded-2xl border border-border bg-card/50 sm:w-[260px] lg:w-[300px]"
              >
                <PandaVideoEmbed id={video.id} paddingTop={video.paddingTop} />
              </div>
            ))}
          </div>
        </section>

        {/* Qualquer pessoa pode */}
        <section className="mt-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mx-auto max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
              Qualquer pessoa pode abrir uma live interativa no TikTok e receber moedas enquanto o
              jogo roda sozinho.
            </p>

            <div className="mt-8 rounded-2xl border border-primary/30 bg-card/60 p-6 sm:p-8">
              <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
                Veja o valor real de cada moeda dentro da plataforma
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
                O próprio TikTok estimula esses valores para conversão de moedas em dinheiro real.
              </p>

              <div className="frame-glow mt-8 overflow-hidden rounded-2xl border border-primary/20">
                <img
                  src="/moedas.png"
                  alt="Tabela de valores reais das moedas do TikTok estimulados pela plataforma"
                  width={1440}
                  height={810}
                  className="w-full"
                />
              </div>

              <p className="mt-6 text-3xl font-bold leading-tight sm:text-4xl">
                Média de{" "}
                <span className="text-brand-gradient">5.000 moedas por dia</span>
              </p>
              <p className="mt-2 text-lg font-medium text-foreground">
                podem gerar até{" "}
                <span className="text-brand-gradient">R$300 diários</span>.
              </p>
              <p className="mt-4 text-sm font-medium uppercase tracking-[0.12em] text-muted-foreground">
                Sem fazer nada. Literalmente.
              </p>
            </div>
          </div>
        </section>

        {/* Mar azul */}
        <section className="mt-20">
          <div className="frame-glow mx-auto max-w-2xl overflow-hidden rounded-2xl border border-border bg-card/60">
            <div className="p-8">
              <span className="text-3xl">🌊</span>
              <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
                Mar azul - quase ninguém está fazendo isso
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                Enquanto milhares de pessoas brigam por atenção criando conteúdo, uma minoria
                silenciosa abre a live, liga o jogo e vai dormir, e acorda com dinheiro na conta.
              </p>
            </div>
            <img
              src="/saldo.png"
              alt="Saldo acumulado com presentes do TikTok Live"
              className="w-full object-cover"
            />
          </div>
        </section>

        {/* Quanto você pode ganhar */}
        <section className="mt-20 text-center">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Quanto você pode ganhar <br />
            <span className="text-brand-gradient">começando ainda hoje?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            Cada presente enviado durante sua Live vira dinheiro real na sua conta. Os espectadores
            enviam presentes para interagir com o jogo. Depois, você converte esses presentes em
            saldo conforme as regras do TikTok. Veja alguns exemplos:
          </p>

          {/* Tabela de presentes */}
          <div className="frame-glow overflow-hidden rounded-2xl border border-primary/30 bg-card">
            <img
              src="/presentes.png"
              alt="Tabela com os principais presentes do TikTok Live e seus valores em reais"
              width={1080}
              height={1440}
              className="w-full"
            />
          </div>
        </section>

        {/* Projeção de evolução */}
        <section className="mt-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              Veja uma projeção de evolução de quem utiliza a plataforma de forma consistente e monetiza com presentes.
            </h2>

            <div className="mt-8 overflow-hidden rounded-3xl border border-primary/20 bg-card/70 p-6 sm:p-8">
              <div className="grid gap-4 rounded-2xl border border-border bg-background/80 p-4 text-sm uppercase tracking-[0.12em] text-muted-foreground sm:grid-cols-3">
                <div className="font-semibold text-foreground">Período</div>
                <div className="font-semibold text-foreground">Média de presentes</div>
                <div className="font-semibold text-foreground">Ganho estimado</div>
              </div>

              <div className="mt-4 grid gap-3 text-sm sm:grid-cols-1">
                <div className="rounded-2xl border border-primary/10 bg-primary/5 p-4 shadow-sm">
                  <p className="text-base font-bold">Semana 1</p>
                  <p className="mt-2 text-muted-foreground">~1.000 presentes/dia</p>
                  <p className="mt-1 text-lg font-semibold text-brand">R$120+/dia</p>
                </div>
                <div className="rounded-2xl border border-primary/10 bg-primary/5 p-4 shadow-sm">
                  <p className="text-base font-bold">Semana 2</p>
                  <p className="mt-2 text-muted-foreground">~2.500 presentes/dia</p>
                  <p className="mt-1 text-lg font-semibold text-brand">R$150+/dia</p>
                </div>
                <div className="rounded-2xl border border-primary/10 bg-primary/5 p-4 shadow-sm">
                  <p className="text-base font-bold">Semana 3</p>
                  <p className="mt-2 text-muted-foreground">~4.000 presentes/dia</p>
                  <p className="mt-1 text-lg font-semibold text-brand">R$280+/dia</p>
                </div>
                <div className="rounded-2xl border border-primary/10 bg-primary/5 p-4 shadow-sm">
                  <p className="text-base font-bold">Semana 4</p>
                  <p className="mt-2 text-muted-foreground">~5.000 presentes/dia</p>
                  <p className="mt-1 text-lg font-semibold text-brand">R$540+/dia</p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-[2.25rem] border border-primary/30 bg-gradient-to-r from-primary/10 via-transparent to-brand/10 p-5 text-center shadow-[0_20px_60px_rgba(59,130,246,0.08)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand sm:text-sm sm:tracking-[0.24em]">
                Potencial de faturamento no primeiro mês
              </p>
              <p className="mt-4 text-4xl font-bold leading-none text-foreground sm:text-6xl">
                +R$5.867,90
              </p>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                podendo Ultrapassar +de R$12.000/mês conforme o crescimento das suas lives.
              </p>
            </div>
          </div>
        </section>

        {/* Catálogo de jogos */}
        <section className="mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-soft">
              Catálogo de jogos
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              +de 26 jogos que fazem o{" "}
              <span className="text-brand-gradient">público ficar e presentear</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              Cada interação do espectador acontece dentro do jogo em tempo real, curtir,
              comentar, seguir e mandar presente viram jogadas. Isso prende a atenção e multiplica
              os presentes.
            </p>
          </div>

          <div
            ref={gamesMarquee.containerRef}
            className="relative mt-10 -mx-5 cursor-grab select-none overflow-x-auto scrollbar-none active:cursor-grabbing [mask-image:linear-gradient(to_right,transparent,black_16px,black_calc(100%-16px),transparent)]"
            onMouseEnter={gamesMarquee.pause}
            onMouseLeave={gamesMarquee.resume}
            onPointerDown={gamesMarquee.onPointerDown}
            onPointerMove={gamesMarquee.onPointerMove}
            onPointerUp={gamesMarquee.onPointerUp}
            onPointerCancel={gamesMarquee.onPointerCancel}
            onDragStart={(e) => e.preventDefault()}
          >
            <div className="flex w-max gap-4 pb-4 pl-5">
              {[...games, ...games].map((game, i) => (
                <article
                  key={`${game.title}-${i}`}
                  className="frame-glow w-[168px] shrink-0 overflow-hidden rounded-2xl border border-border bg-card sm:w-[200px]"
                >
                  <div className="relative h-28 overflow-hidden sm:h-32">
                    <img
                      src={game.logo}
                      alt={game.title}
                      className="h-full w-full scale-[1.12] object-cover"
                    />
                    <span className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-400 backdrop-blur">
                      <span className="size-1.5 rounded-full bg-emerald-400" />
                      Ativo
                    </span>
                  </div>

                  <div className="space-y-3 p-3 sm:p-4">
                    <h3 className="text-sm font-bold leading-snug sm:text-base">{game.title}</h3>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {game.description}
                    </p>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${game.badgeClass}`}
                    >
                      <game.icon className="size-3" />
                      {game.badge}
                    </span>
                  </div>

                  <div className="relative border-t border-border">
                    <img
                      src={game.preview}
                      alt={`${game.title} rodando ao vivo`}
                      className="aspect-9/16 w-full object-cover"
                    />
                    <span className="absolute bottom-2 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-primary/30 bg-background/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-foreground backdrop-blur">
                      <span className="size-1.5 animate-pulse rounded-full bg-primary" />
                      Funcionando na live
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Ranking de usuários */}
        <section className="mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-soft">
              🏆 Ranking — Junho 2026
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              Top 10 usuários que fizeram mais{" "}
              <span className="text-brand-gradient">diamantes em tempo real</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              Resultados reais de usuários LiveCash. Ranking em tempo real.
            </p>
          </div>

          <div className="frame-glow scrollbar-theme mt-10 -mx-5 overflow-x-auto rounded-2xl border border-border bg-card px-5 sm:mx-0 sm:px-0">
            <table className="w-full min-w-[880px] border-collapse text-left">
              <thead>
                <tr className="border-b border-border bg-white/[0.04] text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                  <th className="px-5 py-3">#</th>
                  <th className="px-5 py-3">Cliente</th>
                  <th className="px-5 py-3">Contas</th>
                  <th className="px-5 py-3">Lives</th>
                  <th className="px-5 py-3">Horas Live</th>
                  <th className="px-5 py-3">💎 Diamantes</th>
                  <th className="px-5 py-3">👥 Seguidores</th>
                  <th className="px-5 py-3">💰 Faturamento</th>
                  <th className="px-5 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {ranking.map((user, i) => (
                  <tr
                    key={user.name}
                    className={`border-b border-border/60 last:border-0 hover:bg-white/[0.02] ${
                      i === 0 ? "bg-primary/[0.04]" : ""
                    }`}
                  >
                    <td className="px-5 py-3.5 text-center">
                      {rankingMedals[i] ? (
                        <span className="text-xl leading-none">{rankingMedals[i]}</span>
                      ) : (
                        <span className="text-base font-extrabold text-muted-foreground">
                          {i + 1}
                        </span>
                      )}
                    </td>
                    <td className="whitespace-nowrap px-5 py-3.5">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={user.photo}
                          alt={user.name}
                          className="size-8 shrink-0 rounded-full border border-border object-cover"
                        />
                        <div>
                          <p className="text-sm font-bold text-foreground">{user.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {user.location} · {user.days} dias
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3.5 text-sm font-medium text-foreground">
                      {user.accounts}
                    </td>
                    <td className="px-5 py-3.5 text-sm font-medium text-foreground">
                      {user.lives}
                    </td>
                    <td className="px-5 py-3.5 text-sm font-medium text-foreground">
                      {user.hours}
                    </td>
                    <td className="whitespace-nowrap px-5 py-3.5 text-sm font-extrabold text-primary">
                      💎 {user.diamonds}
                    </td>
                    <td className="whitespace-nowrap px-5 py-3.5 text-sm font-semibold text-[#4D9FFF]">
                      {user.followers}
                    </td>
                    <td className="whitespace-nowrap px-5 py-3.5 text-sm font-bold text-[#28C840]">
                      {user.revenue}
                    </td>
                    <td className="whitespace-nowrap px-5 py-3.5">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4D9FFF]">
                        <span className="size-1.5 rounded-full bg-[#4D9FFF]" />
                        Ativo
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Oferta / Vagas limitadas */}
        <section className="mt-20 text-center">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Pare de deixar <br />
            <span className="text-brand-gradient">dinheiro na mesa</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            Acesso imediato. Resultados Garantidos. Enquanto você hesita, outros já
            estão lucrando com Lives no automático sem aparecer.
          </p>

        </section>

        {/* Planos */}
        <section id="planos" className="mt-20 text-center">
          <div className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:items-start sm:gap-6">
            {/* Plano Premium */}
            <div className="relative rounded-[1.75rem] border-2 border-amber-400/40 bg-card p-6 pt-9 sm:p-7 sm:pt-9">
              <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-[1.75rem] bg-gradient-to-r from-amber-400 to-primary" />
              <div className="absolute inset-x-0 -top-3.5 flex justify-center">
                <span className="rounded-full bg-amber-400 px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-wide text-black shadow-[0_2px_12px_rgba(255,184,0,0.4)]">
                  ⭐ Mais Escolhido
                </span>
              </div>
              <div className="pointer-events-none absolute -right-14 -top-14 size-48 rounded-full bg-amber-400/10 blur-2xl" />

              <div className="relative text-left">
                <h3 className="font-display text-2xl font-extrabold">Plano Premium</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Ideal para quem quer escalar e lucrar com vários jogos.
                </p>

                <div className="mt-4 font-display text-5xl font-extrabold tracking-tight">
                  <span className="mr-1 align-super text-xl text-amber-400">R$</span>
                  96
                  <span className="ml-1 align-super text-lg font-semibold text-muted-foreground">
                    /mês
                  </span>
                </div>

                <p className="mt-5 text-sm font-bold text-amber-400">Tudo do plano Básico +</p>

                <ul className="mt-3 space-y-3 text-sm text-foreground/80">
                  {premiumFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <span className="mt-0.5">✅</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="relative mt-6 overflow-hidden rounded-2xl border border-amber-400/35 bg-gradient-to-br from-amber-400/[0.08] to-primary/[0.06] p-5">
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-amber-400 to-primary" />
                  <p className="text-[11px] font-bold uppercase tracking-wide text-amber-400">
                    🎁 Bônus Exclusivo
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-snug text-foreground">
                    Concorra a uma conta TikTok com{" "}
                    <span className="text-amber-400">1.000.000</span> de seguidores.
                  </p>
                </div>

                <a
                  href={offers.premiumUrl}
                  className="mt-6 block rounded-full bg-gradient-to-r from-amber-400 to-orange-500 py-4 text-center text-[15px] font-bold text-black shadow-[0_0_40px_rgba(255,184,0,0.3)] transition-transform hover:-translate-y-0.5"
                >
                  Quero o Plano Premium
                </a>
              </div>
            </div>

            {/* Plano Básico */}
            <div className="relative rounded-[1.75rem] border border-primary/30 bg-card p-6 sm:p-7">
              <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-[1.75rem] bg-gradient-to-r from-primary to-brand-soft" />
              <div className="pointer-events-none absolute -right-14 -top-14 size-48 rounded-full bg-primary/10 blur-2xl" />

              <div className="relative text-left">
                <h3 className="font-display text-2xl font-extrabold">Plano Básico</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Perfeito para quem está começando.
                </p>

                <div className="mt-4 font-display text-5xl font-extrabold tracking-tight">
                  <span className="mr-1 align-super text-xl text-primary">R$</span>
                  68
                  <span className="ml-1 align-super text-lg font-semibold text-muted-foreground">
                    /mês
                  </span>
                </div>

                <ul className="mt-6 space-y-3 text-sm text-foreground/80">
                  {basicFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <span className="mt-0.5">✅</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={offers.basicUrl}
                  className="btn-brand mt-6 block rounded-full py-4 text-center text-[15px] font-bold"
                >
                  Quero o Plano Básico
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-20 text-center">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Perguntas <span className="text-brand-gradient">frequentes</span>
          </h2>

          <div className="mx-auto mt-8 max-w-2xl space-y-3 text-left">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/25"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-sm font-bold">{faq.question}</span>
                    <Plus
                      className={`size-4 shrink-0 text-primary transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                  <div
                    className="grid transition-all duration-300 ease-in-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA final */}
        <section className="mt-20 text-center">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Qualquer pessoa. 5 minutos. <br />
            <span className="text-brand-gradient">Já tá Lucrando com Lives Interativas.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            Sem muitos seguidores. Sem aparecer. Sem conteúdo. Sem desculpa. A partir de R$67/mês e
            o jogo trabalha por você.
          </p>
          <a
            href="#planos"
            className="btn-brand mt-8 inline-flex items-center justify-center gap-2 rounded-full px-11 py-4 text-[15px] font-bold"
          >
            🚀 Quero o LiveCash
          </a>
        </section>
      </div>

      <footer className="border-t border-border px-5 py-10 text-center">
        <img
          src="/logo%20live%2001.png"
          alt="LiveCash TikTok"
          className="mx-auto h-9 w-auto opacity-90"
        />
        <p className="mx-auto mt-4 max-w-sm text-xs leading-relaxed text-muted-foreground">
          Jogos interativos para TikTok Live · Plataforma autorizada pelo TikTok
        </p>
      </footer>
    </main>
  );
}
