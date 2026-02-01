import { useState } from "react";
import { GRADIENTS, FONTS, useTheme, Icon } from "../theme";
import { GlassCard, GlassContainer, PhoneFrame, Logo } from "../components";

function QuickCapturePhone({ t, g }: { t: ReturnType<typeof useTheme>; g: typeof GRADIENTS }) {
  return (
    <PhoneFrame t={t} bg={g.mist}>
      <div className="flex h-full flex-col px-4 pb-8 pt-6">
        <div className="flex flex-1 flex-col items-center justify-center">
          <div
            className="mb-6 size-[140px] rounded-full blur-[16px]"
            style={{
              background:
                "radial-gradient(circle, rgba(242,140,62,0.2) 0%, rgba(196,184,217,0.1) 60%, transparent 100%)",
            }}
          />
          <div
            className="-mt-16 mb-1.5 text-center text-[17px] font-heading font-semibold"
            style={{ color: t.fg }}
          >
            What's on your mind?
          </div>
          <div className="text-center text-[13px]" style={{ color: t.fgSecondary }}>
            Capture a note, link, or image
          </div>
        </div>
        <GlassCard t={t} style={{ marginTop: "auto" }}>
          <div className="min-h-[36px] text-[14px]" style={{ color: t.fgTertiary }}>
            Start typing...
          </div>
          <div className="mt-2.5 flex items-center justify-between">
            <div className="flex gap-1.5">
              {(["camera", "link", "hash"] as const).map((icon) => (
                <div
                  key={icon}
                  className="flex size-7 items-center justify-center rounded-lg"
                  style={{ background: t.tagBg }}
                >
                  <Icon name={icon} size={15} style={{ color: t.fgSecondary }} />
                </div>
              ))}
            </div>
            <div
              className="flex size-8 items-center justify-center rounded-lg text-white"
              style={{ background: t.accent }}
            >
              <Icon name="arrowUp" size={16} />
            </div>
          </div>
        </GlassCard>
      </div>
    </PhoneFrame>
  );
}

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const t = useTheme(false);
  const g = GRADIENTS;

  return (
    <div
      className="fixed inset-0 flex overflow-hidden"
      style={{
        background: g.mist,
        fontFamily: FONTS.body,
      }}
    >
      {/* Gradient blob */}
      <div
        className="pointer-events-none absolute left-1/4 top-1/3 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(242,140,62,0.2) 0%, rgba(196,184,217,0.12) 60%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-1 items-center justify-center gap-16 px-12">
        {/* Phone mockup */}
        <div className="shrink-0">
          <QuickCapturePhone t={t} g={g} />
        </div>

        {/* Text and signup */}
        <div className="flex max-w-lg flex-col">
          {/* Logo */}
          <div className="mb-6" style={{ color: t.fg }}>
            <Logo width={140} />
          </div>

          {/* Tagline */}
          <p className="text-body mb-8" style={{ color: t.fgSecondary }}>
            A better way to think, create, and bring your ideas to life.
          </p>

          {/* Single-line email signup */}
          <GlassContainer t={t}>
            {/* TODO: Implement waitlist API integration */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log("Beta signup:", email);
              }}
              className="flex items-center gap-2"
            >
              <div
                className="flex flex-1 items-center overflow-hidden rounded-xl px-4 py-3"
                style={{
                  background: t.cardBg,
                  border: `1px solid ${t.border}`,
                }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email to join the waitlist"
                  aria-label="Email address"
                  className="text-body w-full border-none bg-transparent outline-none"
                  style={{ color: t.fg }}
                />
              </div>
              <button
                type="submit"
                className="flex size-12 shrink-0 cursor-pointer items-center justify-center rounded-xl border-none text-white"
                style={{ background: t.accent }}
              >
                <Icon name="arrowRight" size={20} />
              </button>
            </form>
          </GlassContainer>
        </div>
      </div>
    </div>
  );
}
