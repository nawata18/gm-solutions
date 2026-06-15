"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Menu, ChevronDown, Globe2, Sparkles, Building2, Users, BarChart3 } from "lucide-react";

// ── Intersection-observer helper ──────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

// ── Nav ───────────────────────────────────────────────────────────────────────
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const links = [
    { label: "サービス", href: "#service" },
    { label: "おしぼりメディア", href: "#oshibori" },
    { label: "特徴", href: "#features" },
    { label: "お問い合わせ", href: "#contact" },
  ];
  return (
    <nav style={{ background: scrolled ? "rgba(10,14,26,0.97)" : "rgba(10,14,26,0.7)" }}>
      <div className="max-w-5xl mx-auto px-5 flex items-center justify-between h-16">
        {/* Logo text */}
        <a href="#" className="flex items-center gap-2 group">
          <Globe2 size={20} style={{ color: "var(--gold)" }} />
          <span className="font-cormorant text-lg tracking-widest" style={{ color: "var(--white)" }}>
            Global Market
            <span className="text-xs tracking-wide ml-1 opacity-60 font-montserrat">& Solutions</span>
          </span>
        </a>
        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="text-xs tracking-widest uppercase transition-colors duration-300"
              style={{ color: "var(--white-dim)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--gold-light)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--white-dim)")}>
              {l.label}
            </a>
          ))}
        </div>
        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2" style={{ color: "var(--gold)" }}>
          <Menu size={22} />
        </button>
      </div>
      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden px-5 pb-6 flex flex-col gap-5 border-t" style={{ borderColor: "rgba(201,168,76,0.1)" }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-sm tracking-widest uppercase py-1"
              style={{ color: "var(--white-dim)" }}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero-bg relative min-h-screen flex flex-col justify-center items-center text-center px-5 pt-24 pb-16 overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(201,168,76,0.3),transparent)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(201,168,76,0.3),transparent)" }} />
        {/* Vertical accent */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px opacity-10" style={{ background: "linear-gradient(180deg,transparent,var(--gold),transparent)" }} />
      </div>

      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-10 gold-border"
        style={{ background: "rgba(201,168,76,0.06)" }}>
        <Sparkles size={12} style={{ color: "var(--gold)" }} />
        <span className="text-xs tracking-widest uppercase" style={{ color: "var(--gold)" }}>Oshibori Media</span>
      </div>

      {/* Main slogan */}
      <h1 className="font-cormorant mb-6 leading-none" style={{ fontSize: "clamp(2.8rem,9vw,6rem)", color: "var(--white)" }}>
        <span className="block font-light italic" style={{ color: "var(--white-dim)", fontSize: "0.55em", letterSpacing: "0.2em", marginBottom: "0.3em" }}>
          Global Market and Solutions
        </span>
        <span className="font-noto block" style={{ fontSize: "0.65em", letterSpacing: "0.05em", lineHeight: 1.4 }}>
          広告の無駄打ちは
          <br />
          <span className="text-gold-gradient">終わりました。</span>
        </span>
      </h1>

      <div className="gold-line w-24 mx-auto my-7" />

      {/* Sub slogan */}
      <p className="font-noto text-xl md:text-2xl font-light leading-loose mb-10"
        style={{ color: "var(--white-dim)", letterSpacing: "0.15em" }}>
        届けたい人に、<br />
        届けたい場所で。
      </p>

      <p className="text-sm tracking-wide max-w-sm mb-12" style={{ color: "var(--white-dim)", lineHeight: 1.9 }}>
        飲食店のコスト削減と地域企業のPRを両立する<br />
        スポンサー協賛モデル——それが<span style={{ color: "var(--gold-light)" }}>おしぼりメディア</span>です。
      </p>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <a href="#contact" className="btn-gold px-8 py-3.5 rounded-full text-sm tracking-widest uppercase">
          お問い合わせ
        </a>
        <a href="#oshibori" className="btn-outline px-8 py-3.5 rounded-full text-sm tracking-widest uppercase">
          サービス詳細
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
        <span className="text-xs tracking-widest uppercase" style={{ color: "var(--gold)", fontSize: "0.6rem" }}>Scroll</span>
        <ChevronDown size={14} style={{ color: "var(--gold)" }} className="animate-bounce" />
      </div>
    </section>
  );
}

// ── Service Overview ──────────────────────────────────────────────────────────
function ServiceOverview() {
  const { ref, visible } = useInView();
  const cards = [
    { icon: <Building2 size={20} />, title: "飲食店", body: "おしぼりを無料〜低コストで提供。スポンサー企業が費用を負担します。" },
    { icon: <BarChart3 size={20} />, title: "スポンサー企業", body: "ターゲットが確実に手にする広告媒体。無駄のないピンポイントPR。" },
    { icon: <Users size={20} />, title: "来店客", body: "清潔で高品質なおしぼり体験。地域の優良企業情報とともに。" },
  ];
  return (
    <section id="service" className="section-alt py-28 px-5" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "var(--gold)" }}>Service Model</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-4" style={{ color: "var(--white)" }}>
            三者がともに得をする、<br />
            <span className="text-gold-gradient">新しい仕組み</span>
          </h2>
          <div className="gold-line w-20 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <div key={i}
              className={`card-glass rounded-2xl p-7 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 120}ms` }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "rgba(201,168,76,0.12)", color: "var(--gold)" }}>
                {c.icon}
              </div>
              <h3 className="font-cormorant text-2xl mb-3 font-light" style={{ color: "var(--white)" }}>{c.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--white-dim)" }}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Oshibori Media ────────────────────────────────────────────────────────────
function OshiboriMedia() {
  const { ref, visible } = useInView();
  const points = [
    "スポンサー企業が費用を負担——飲食店の導入コストほぼゼロ",
    "おしぼりという「必ず手に取る」媒体で確実に届く広告",
    "地域密着型ターゲティングで無駄打ちゼロのPR",
    "衛生・品質にこだわったプレミアムおしぼりを提供",
    "アクセス解析・効果測定レポートで透明性を確保",
  ];
  return (
    <section id="oshibori" className="py-28 px-5" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "var(--gold)" }}>Oshibori Media</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light leading-tight mb-6" style={{ color: "var(--white)" }}>
              おしぼりが、<br />
              <span className="text-gold-gradient italic">最高の広告媒体</span><br />
              になる理由。
            </h2>
            <div className="gold-line w-16 mb-7" />
            <p className="text-sm leading-loose mb-8" style={{ color: "var(--white-dim)" }}>
              来店客が必ず手にするおしぼりに、スポンサー企業のブランドメッセージを掲載。
              飲食店・スポンサー・来店客の三者が価値を受け取る革新的な協賛モデルです。
            </p>
            <a href="#contact" className="btn-gold inline-block px-7 py-3 rounded-full text-sm tracking-widest uppercase">
              ヒアリングを申し込む
            </a>
          </div>

          {/* Right – feature list */}
          <div className={`flex flex-col gap-4 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            {points.map((p, i) => (
              <div key={i} className="flex items-start gap-4 card-glass rounded-xl px-5 py-4">
                <span className="font-cormorant text-2xl font-light shrink-0" style={{ color: "var(--gold)", lineHeight: 1 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed" style={{ color: "var(--white-dim)" }}>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Features ──────────────────────────────────────────────────────────────────
function Features() {
  const { ref, visible } = useInView();
  const feats = [
    { num: "01", title: "ペーパーレス対応", body: "デジタル管理でコスト削減と環境貢献を両立。" },
    { num: "02", title: "リアルタイム更新", body: "情報はいつでも最新状態に。鮮度の高い広告を届けます。" },
    { num: "03", title: "アクセス解析", body: "タップ数・接触数を可視化し、効果測定を透明化。" },
    { num: "04", title: "高いセキュリティ", body: "個人情報の取り扱いに細心の注意を払ったシステム設計。" },
  ];
  return (
    <section id="features" className="section-alt py-28 px-5" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "var(--gold)" }}>Why Us</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light" style={{ color: "var(--white)" }}>
            選ばれる<span className="text-gold-gradient">理由</span>
          </h2>
          <div className="gold-line w-20 mx-auto mt-6" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {feats.map((f, i) => (
            <div key={i}
              className={`card-glass rounded-2xl p-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="font-cormorant text-5xl font-light mb-3" style={{ color: "rgba(201,168,76,0.2)" }}>{f.num}</div>
              <h3 className="font-cormorant text-2xl mb-3" style={{ color: "var(--white)" }}>{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--white-dim)" }}>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Profile ───────────────────────────────────────────────────────────────────
function Profile() {
  const { ref, visible } = useInView();
  return (
    <section className="py-28 px-5" ref={ref}>
      <div className="max-w-xl mx-auto text-center">
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--gold)" }}>Representative</p>
          {/* Avatar placeholder */}
          <div className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center font-cormorant text-3xl"
            style={{ background: "linear-gradient(135deg,var(--accent),var(--navy-light))", border: "2px solid rgba(201,168,76,0.3)", color: "var(--gold-light)" }}>
            NA
          </div>
          <h2 className="font-cormorant text-3xl font-light mb-1" style={{ color: "var(--white)" }}>Naofumi Awata</h2>
          <p className="text-sm tracking-widest mb-1" style={{ color: "var(--gold)" }}>粟田 直文</p>
          <p className="text-xs tracking-widest mb-6" style={{ color: "var(--white-dim)" }}>Representative / Global Market and Solutions</p>
          <div className="gold-line w-16 mx-auto mb-6" />
          <p className="text-sm leading-loose" style={{ color: "var(--white-dim)" }}>
            日系メーカーの海外営業として、インド市場を中心に事業開発に従事。
            飲食店のコスト削減と地域企業のPRを両立するスポンサー協賛モデル
            「おしぼりメディア」を展開しています。
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Contact ───────────────────────────────────────────────────────────────────
function Contact() {
  const { ref, visible } = useInView();
  const links = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      sub: "メールで問い合わせ",
      href: "mailto:info@globalmarket-solutions.com",
      color: "rgba(201,168,76,0.12)",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      ),
      label: "Instagram",
      sub: "@globalmarket_solutions",
      href: "https://instagram.com/globalmarket_solutions",
      color: "rgba(131,58,180,0.12)",
    },
    {
      // X / Twitter
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      label: "X (Twitter)",
      sub: "@naofumi_awata",
      href: "https://x.com/naofumi_awata",
      color: "rgba(29,155,240,0.1)",
    },
    {
      icon: (
        // Eight card icon
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="2" y="6" width="20" height="14" rx="2"/>
          <path d="M8 6V4a2 2 0 0 1 4 0v2"/>
          <circle cx="12" cy="13" r="2"/>
        </svg>
      ),
      label: "Eight",
      sub: "名刺アプリで繋がる",
      href: "https://8card.net",
      color: "rgba(201,168,76,0.08)",
    },
  ];
  return (
    <section id="contact" className="section-alt py-28 px-5" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "var(--gold)" }}>Contact</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-4" style={{ color: "var(--white)" }}>
            お気軽に<span className="text-gold-gradient">ご連絡</span>ください
          </h2>
          <div className="gold-line w-20 mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {links.map((l, i) => (
            <a key={i} href={l.href} target="_blank" rel="noopener noreferrer"
              className={`card-glass rounded-2xl p-6 flex items-center gap-5 group transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 80}ms`, boxShadow: "0 0 0 transparent" }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 8px 30px rgba(201,168,76,0.12)")}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 0 0 transparent")}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300"
                style={{ background: l.color, color: "var(--gold-light)" }}>
                {l.icon}
              </div>
              <div>
                <p className="font-cormorant text-lg" style={{ color: "var(--white)" }}>{l.label}</p>
                <p className="text-xs" style={{ color: "var(--white-dim)" }}>{l.sub}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Inquiry CTA */}
        <div className={`mt-10 card-glass rounded-2xl p-8 text-center transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-noto text-lg mb-2" style={{ color: "var(--white)" }}>ヒアリング・面談のご予約</p>
          <p className="text-sm mb-6" style={{ color: "var(--white-dim)" }}>
            飲食店オーナー様・スポンサー企業様、まずはオンラインでご説明いたします。
          </p>
          <a href="mailto:info@globalmarket-solutions.com?subject=ヒアリングのご予約"
            className="btn-gold inline-block px-10 py-3.5 rounded-full text-sm tracking-widest uppercase">
            面談を予約する
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="border-t py-10 px-5 text-center" style={{ borderColor: "rgba(201,168,76,0.1)" }}>
      <Globe2 size={18} style={{ color: "var(--gold)", margin: "0 auto 10px" }} />
      <p className="font-cormorant text-lg tracking-widest mb-1" style={{ color: "var(--white-dim)" }}>Global Market and Solutions</p>
      <p className="text-xs" style={{ color: "rgba(168,164,156,0.5)" }}>Representative: Naofumi Awata</p>
      <div className="gold-line w-24 mx-auto my-5" />
      <p className="text-xs" style={{ color: "rgba(168,164,156,0.4)" }}>
        © {new Date().getFullYear()} Global Market and Solutions. All rights reserved.
      </p>
    </footer>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <ServiceOverview />
      <OshiboriMedia />
      <Features />
      <Profile />
      <Contact />
      <Footer />
    </>
  );
}
