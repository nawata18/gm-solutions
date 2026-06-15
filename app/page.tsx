"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Mail, Menu, X as XIcon, ChevronDown, Building2, Users, BarChart3, Sparkles } from "lucide-react";

// ── Intersection-observer helper ──────────────────────────────────────────────
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

// ── Nav ───────────────────────────────────────────────────────────────────────
function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "サービス", href: "#service" },
    { label: "おしぼりメディア", href: "#oshibori" },
    { label: "特徴", href: "#features" },
    { label: "お問い合わせ", href: "#contact" },
  ];
  return (
    <nav>
      <div className="max-w-5xl mx-auto px-5 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Global Market and Solutions" width={160} height={48} style={{ objectFit: "contain", height: 40, width: "auto" }} />
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="text-xs tracking-widest uppercase transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.7)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}>
              {l.label}
            </a>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2" style={{ color: "#fff" }}>
          {open ? <XIcon size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden px-5 pb-6 flex flex-col gap-5 border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-sm tracking-widest uppercase py-1"
              style={{ color: "rgba(255,255,255,0.75)" }}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

// ── Profile Hero (TOP) ────────────────────────────────────────────────────────
function ProfileHero() {
  return (
    <section className="pt-28 pb-16 px-5" style={{ background: "linear-gradient(160deg, #0d2a4e 0%, #1a3a6b 40%, #1e5fa8 100%)" }}>
      <div className="max-w-xl mx-auto text-center">
        {/* Label */}
        <p className="text-xs tracking-widest uppercase mb-8" style={{ color: "rgba(255,255,255,0.5)", letterSpacing: "0.25em" }}>
          Representative
        </p>

        {/* Avatar */}
        <div className="w-28 h-28 rounded-full mx-auto mb-6 flex items-center justify-center font-cormorant text-3xl font-light"
          style={{ background: "rgba(255,255,255,0.12)", border: "2px solid rgba(255,255,255,0.25)", color: "#fff", backdropFilter: "blur(8px)" }}>
          NA
        </div>

        {/* Name */}
        <h1 className="font-cormorant text-4xl font-light mb-1" style={{ color: "#ffffff" }}>
          Naofumi Awata
        </h1>
        <p className="text-sm tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.6)" }}>粟田直史</p>
        <p className="text-xs tracking-widest mb-8" style={{ color: "rgba(255,255,255,0.45)" }}>
          Representative / Global Market and Solutions
        </p>

        <div className="blue-line w-20 mx-auto mb-7" style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)" }} />

        {/* Bio */}
        <p className="text-sm leading-loose mb-10" style={{ color: "rgba(255,255,255,0.72)" }}>
          飲食店のコスト削減と地域企業のPRを両立する<br />
          スポンサー協賛モデルを展開しています。
        </p>

        {/* Quick contact icons */}
        <div className="flex items-center justify-center gap-5">
          {/* Email */}
          <a href="mailto:u19123099@gmail.com"
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)" }}
            title="メール">
            <Mail size={18} />
          </a>
          {/* Instagram */}
          <a href="https://instagram.com/globalmarket_solutions" target="_blank" rel="noopener noreferrer"
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)" }}
            title="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
          {/* X */}
          <a href="https://x.com/naofumi_awata" target="_blank" rel="noopener noreferrer"
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)" }}
            title="X (Twitter)">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          {/* Eight */}
          <a href="https://8card.net" target="_blank" rel="noopener noreferrer"
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)" }}
            title="Eight">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="6" width="20" height="14" rx="2"/>
              <circle cx="12" cy="13" r="2.5"/>
              <path d="M9 6V5a3 3 0 0 1 6 0v1"/>
            </svg>
          </a>
        </div>

        <div className="mt-8">
          <a href="#contact"
            className="btn-navy inline-block px-8 py-3 rounded-full text-sm tracking-widest uppercase"
            style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", fontWeight: 500 }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.25)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; }}>
            面談を予約する
          </a>
        </div>

        {/* Scroll */}
        <div className="mt-12 flex flex-col items-center gap-1 opacity-40">
          <span className="text-xs tracking-widest" style={{ color: "#fff", fontSize: "0.6rem" }}>Scroll</span>
          <ChevronDown size={14} style={{ color: "#fff" }} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
}

// ── Main Slogan / Brand Hero ──────────────────────────────────────────────────
function BrandHero() {
  const { ref, visible } = useInView();
  return (
    <section ref={ref} className="py-24 px-5 text-center" style={{ background: "var(--bg)" }}>
      <div className="max-w-2xl mx-auto">
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-10"
            style={{ background: "rgba(30,95,168,0.1)", border: "1px solid rgba(30,95,168,0.2)" }}>
            <Sparkles size={12} style={{ color: "var(--blue)" }} />
            <span className="text-xs tracking-widest uppercase" style={{ color: "var(--blue)" }}>Oshibori Media</span>
          </div>

          {/* Logo */}
          <div className="flex justify-center mb-10">
            <Image src="/logo.png" alt="Global Market and Solutions" width={320} height={100} style={{ objectFit: "contain", maxWidth: "80vw" }} />
          </div>

          <h2 className="font-noto mb-4 leading-tight" style={{ fontSize: "clamp(2rem,7vw,3.8rem)", color: "var(--navy)", fontWeight: 300, letterSpacing: "0.04em" }}>
            広告の無駄打ちは<br />
            <span style={{ color: "var(--blue)", fontWeight: 400 }}>終わりました。</span>
          </h2>

          <div className="blue-line w-20 mx-auto my-7" />

          <p className="font-noto text-xl md:text-2xl font-light mb-8" style={{ color: "var(--text-secondary)", letterSpacing: "0.12em", lineHeight: 2 }}>
            届けたい人に、<br />届けたい場所で。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-8">
            <a href="#contact" className="btn-navy px-8 py-3.5 rounded-full text-sm tracking-widest uppercase">
              お問い合わせ
            </a>
            <a href="#oshibori" className="btn-outline-navy px-8 py-3.5 rounded-full text-sm tracking-widest uppercase">
              サービス詳細
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── NFC Card / Digital Business Card section ──────────────────────────────────
function DigitalCard() {
  const { ref, visible } = useInView();
  return (
    <section ref={ref} className="py-20 px-5 section-bg">
      <div className="max-w-5xl mx-auto">
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex justify-center mb-10">
            <Image
              src="/nfc-card.png"
              alt="NFCデジタル名刺"
              width={900}
              height={500}
              className="rounded-2xl"
              style={{ objectFit: "cover", maxWidth: "100%", boxShadow: "0 12px 48px rgba(13,42,78,0.18)" }}
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { icon: "🌿", title: "ペーパーレス対応", body: "紙資源削減に貢献します。" },
              { icon: "🔄", title: "情報をいつでも更新", body: "常に最新の情報を表示。" },
              { icon: "📊", title: "アクセス解析が可能", body: "タップ数・状況を確認。" },
              { icon: "🔒", title: "高いセキュリティ", body: "安心して情報を共有。" },
            ].map((item, i) => (
              <div key={i} className="card-white rounded-xl p-5 text-center"
                style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="text-2xl mb-2">{item.icon}</div>
                <p className="text-xs font-semibold mb-1" style={{ color: "var(--navy)" }}>{item.title}</p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Service Model ─────────────────────────────────────────────────────────────
function ServiceOverview() {
  const { ref, visible } = useInView();
  const cards = [
    { icon: <Building2 size={20} />, title: "飲食店", body: "おしぼりを無料〜低コストで提供。スポンサー企業が費用を負担します。" },
    { icon: <BarChart3 size={20} />, title: "スポンサー企業", body: "ターゲットが確実に手にする広告媒体。無駄のないピンポイントPR。" },
    { icon: <Users size={20} />, title: "来店客", body: "清潔で高品質なおしぼり体験。地域の優良企業情報とともに。" },
  ];
  return (
    <section id="service" className="py-24 px-5" style={{ background: "var(--bg)" }} ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "var(--blue)" }}>Service Model</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-4" style={{ color: "var(--navy)" }}>
            三者がともに得をする、<br />
            <span style={{ color: "var(--blue)" }}>新しい仕組み</span>
          </h2>
          <div className="blue-line w-20 mx-auto mt-5" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <div key={i}
              className={`card-white rounded-2xl p-7 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 120}ms` }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "rgba(30,95,168,0.1)", color: "var(--blue)" }}>
                {c.icon}
              </div>
              <h3 className="font-cormorant text-2xl mb-3 font-light" style={{ color: "var(--navy)" }}>{c.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{c.body}</p>
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
    <section id="oshibori" className="py-24 px-5 section-bg" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "var(--blue)" }}>Oshibori Media</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light leading-tight mb-6" style={{ color: "var(--navy)" }}>
              おしぼりが、<br />
              <span style={{ color: "var(--blue)", fontStyle: "italic" }}>最高の広告媒体</span><br />
              になる理由。
            </h2>
            <div className="blue-line w-16 mb-7" />
            <p className="text-sm leading-loose mb-8" style={{ color: "var(--text-muted)" }}>
              来店客が必ず手にするおしぼりに、スポンサー企業のブランドメッセージを掲載。
              飲食店・スポンサー・来店客の三者が価値を受け取る革新的な協賛モデルです。
            </p>
            <a href="#contact" className="btn-navy inline-block px-7 py-3 rounded-full text-sm tracking-widest uppercase">
              ヒアリングを申し込む
            </a>
          </div>
          <div className={`flex flex-col gap-4 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            {points.map((p, i) => (
              <div key={i} className="card-white rounded-xl px-5 py-4 flex items-start gap-4">
                <span className="font-cormorant text-2xl font-light shrink-0" style={{ color: "var(--blue-light)", lineHeight: 1 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{p}</p>
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
    <section id="features" className="py-24 px-5" style={{ background: "var(--bg)" }} ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "var(--blue)" }}>Why Us</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light" style={{ color: "var(--navy)" }}>
            選ばれる<span style={{ color: "var(--blue)" }}>理由</span>
          </h2>
          <div className="blue-line w-20 mx-auto mt-5" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {feats.map((f, i) => (
            <div key={i}
              className={`card-white rounded-2xl p-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="font-cormorant text-5xl font-light mb-3" style={{ color: "rgba(30,95,168,0.15)" }}>{f.num}</div>
              <h3 className="font-cormorant text-2xl mb-3" style={{ color: "var(--navy)" }}>{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{f.body}</p>
            </div>
          ))}
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
      sub: "u19123099@gmail.com",
      href: "mailto:u19123099@gmail.com",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      ),
      label: "Instagram",
      sub: "@globalmarket_solutions",
      href: "https://instagram.com/globalmarket_solutions",
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      label: "X (Twitter)",
      sub: "@naofumi_awata",
      href: "https://x.com/naofumi_awata",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="6" width="20" height="14" rx="2"/>
          <circle cx="12" cy="13" r="2.5"/>
          <path d="M9 6V5a3 3 0 0 1 6 0v1"/>
        </svg>
      ),
      label: "Eight",
      sub: "名刺アプリで繋がる",
      href: "https://8card.net",
    },
  ];
  return (
    <section id="contact" className="py-24 px-5 section-bg" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "var(--blue)" }}>Contact</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-2" style={{ color: "var(--navy)" }}>
            お気軽に<span style={{ color: "var(--blue)" }}>ご連絡</span>ください
          </h2>
          <div className="blue-line w-20 mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {links.map((l, i) => (
            <a key={i} href={l.href} target="_blank" rel="noopener noreferrer"
              className={`card-white rounded-2xl p-5 flex items-center gap-4 group transition-all duration-300 hover:-translate-y-0.5 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 80}ms` }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 8px 28px rgba(13,42,78,0.14)")}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = "")}>
              <div className="icon-box">
                {l.icon}
              </div>
              <div>
                <p className="font-semibold text-sm" style={{ color: "var(--navy)" }}>{l.label}</p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>{l.sub}</p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA card */}
        <div className={`card-white rounded-2xl p-8 text-center transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-noto text-lg mb-2" style={{ color: "var(--navy)" }}>ヒアリング・面談のご予約</p>
          <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
            飲食店オーナー様・スポンサー企業様、まずはオンラインでご説明いたします。
          </p>
          <a href="mailto:u19123099@gmail.com?subject=ヒアリングのご予約"
            className="btn-navy inline-block px-10 py-3.5 rounded-full text-sm tracking-widest uppercase">
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
    <footer className="border-t py-10 px-5 text-center" style={{ borderColor: "rgba(30,95,168,0.1)", background: "var(--bg)" }}>
      <Image src="/logo.png" alt="Global Market and Solutions" width={160} height={48}
        style={{ objectFit: "contain", height: 36, width: "auto", margin: "0 auto 12px", opacity: 0.7 }} />
      <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>Representative: Naofumi Awata（粟田直史）</p>
      <div className="blue-line w-20 mx-auto my-4" />
      <p className="text-xs" style={{ color: "rgba(90,122,154,0.6)" }}>
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
      <ProfileHero />
      <BrandHero />
      <DigitalCard />
      <ServiceOverview />
      <OshiboriMedia />
      <Features />
      <Contact />
      <Footer />
    </>
  );
}
