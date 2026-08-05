import { createFileRoute } from "@tanstack/react-router";
import { Gamepad2, Play, Sparkles } from "lucide-react";

import dashboardImg from "@/assets/live-dashboard.jpg";
import presentesAsset from "@/assets/presentes.png.asset.json";

const title = "LiveCash TikTok — Ganhe R$150 a R$500 por dia com Lives Interativas";
const description =
  "Plataforma de jogos para TikTok LIVE: escolha um jogo, conecte sua conta e monetize no automático, sem seguidores, sem câmera e sem aparecer.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://id-preview--c2324dcd-d51c-4ba0-b5b2-0e86ba825941.lovable.app" + presentesAsset.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://id-preview--c2324dcd-d51c-4ba0-b5b2-0e86ba825941.lovable.app" + presentesAsset.url },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background bg-glow-top">
      <div className="mx-auto max-w-3xl px-5 pb-24 pt-8">
        {/* Logo */}
        <header className="flex justify-center">
          <div className="flex items-center gap-2.5 rounded-full border border-border bg-card/70 px-5 py-2.5 backdrop-blur">
            <span className="btn-brand flex size-7 items-center justify-center rounded-lg">
              <Gamepad2 className="size-4" />
            </span>
            <span className="font-display text-base font-bold tracking-tight">
              LiveCash <span className="text-brand-gradient">TikTok</span>
            </span>
          </div>
        </header>

        {/* Hero */}
        <section className="pt-20 text-center sm:pt-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-soft">
            <Sparkles className="size-3.5" />
            Plataforma parceira do TikTok
          </span>

          <h1 className="mx-auto mt-7 max-w-2xl text-4xl font-bold leading-[1.06] sm:text-5xl">
            Ganhe de <span className="text-brand-gradient">R$150 a R$500 por dia</span> com Lives
            Interativas no TikTok
            <br className="hidden sm:block" /> 100% no automático e sem aparecer.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Tenha acesso à maior plataforma de jogos para TikTok Live do Brasil. Escolha um dos
            nossos jogos, conecte sua conta e comece a monetizar em poucos minutos.
          </p>
        </section>

        {/* Vídeo de vendas */}
        <section className="mt-14">
          <div className="frame-glow overflow-hidden rounded-2xl border border-primary/30 bg-card">
            <div className="relative">
              <img
                src={dashboardImg}
                alt="Painel da LiveCash TikTok com jogo interativo rodando durante uma live"
                width={1600}
                height={912}
                className="w-full"
              />
              <button
                type="button"
                className="absolute inset-0 flex items-center justify-center bg-background/40 transition-colors hover:bg-background/25"
                aria-label="Assistir o vídeo de apresentação"
              >
                <span className="btn-brand flex size-16 items-center justify-center rounded-full">
                  <Play className="size-6 translate-x-0.5 fill-current" />
                </span>
              </button>
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
        <section className="mt-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              Veja como fica <br />
              <span className="text-brand-gradient">na prática</span>
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              Exatamente assim que aparece na sua live. O público vê o jogo, interage e os diamantes
              chegam.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* Placeholder vídeo 1 */}
            <div className="frame-glow aspect-[9/19] overflow-hidden rounded-2xl border border-border bg-card/50">
              <div className="flex h-full items-center justify-center">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  LIVE INTERATIVA AO VIVO
                </p>
              </div>
            </div>

            {/* Placeholder vídeo 2 */}
            <div className="frame-glow aspect-[9/19] overflow-hidden rounded-2xl border border-border bg-card/50">
              <div className="flex h-full items-center justify-center">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  PÚBLICO INTERAGINDO EM TEMPO REAL
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Qualquer pessoa pode */}
        <section className="mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              Qualquer pessoa pode abrir uma live interativa no TikTok e receber moedas enquanto o
              jogo roda sozinho.
            </p>
            <div className="mt-6 rounded-2xl border border-primary/25 bg-primary/[0.07] p-6">
              <p className="text-3xl font-bold leading-tight sm:text-4xl">
                Média de{" "}
                <span className="text-brand-gradient">5.000 moedas por dia</span>
              </p>
              <p className="mt-2 text-lg font-medium text-foreground">
                são equivalente a ~<span className="text-brand-gradient">R$180 diários</span>.
              </p>
              <p className="mt-4 text-sm font-medium uppercase tracking-[0.12em] text-muted-foreground">
                Sem fazer nada. Literalmente.
              </p>
            </div>
          </div>
        </section>

        {/* Mar azul */}
        <section className="mt-20">
          <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card/60 p-8">
            <span className="text-3xl">🌊</span>
            <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
              Mar azul - quase ninguém está fazendo isso
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Enquanto milhares de pessoas brigam por atenção criando conteúdo, uma minoria
              silenciosa abre a live, liga o jogo e vai dormir, e acorda com dinheiro na conta.
            </p>
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
              src={presentesAsset.url}
              alt="Tabela com os principais presentes do TikTok Live e seus valores em reais"
              width={1080}
              height={1440}
              className="w-full"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
