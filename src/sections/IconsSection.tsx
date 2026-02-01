import { COLORS, Icon, ICON_NAMES } from "../theme";
import { Section } from "../components";
import type { SectionProps } from "./types";

export function IconsSection({ t }: SectionProps) {
  return (
    <Section title="Icons" subtitle="Phosphor icons. Regular weight." t={t}>
      <div
        className="rounded-xl p-4 sm:p-6"
        style={{ background: t.surface, border: `1px solid ${t.border}` }}
      >
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-6 sm:gap-4 md:grid-cols-8">
          {ICON_NAMES.map((name) => (
            <div key={name} className="flex flex-col items-center gap-1.5 sm:gap-2">
              <div
                className="flex size-10 items-center justify-center rounded-xl sm:size-12"
                style={{ background: t.inputBg }}
              >
                <Icon name={name} size={24} style={{ color: t.fg }} />
              </div>
              <span
                className="max-w-full truncate font-mono text-[8px] sm:text-[9px]"
                style={{ color: t.fgTertiary }}
              >
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div
          className="rounded-xl p-5"
          style={{ background: t.surface, border: `1px solid ${t.border}` }}
        >
          <div className="text-overline mb-3" style={{ color: t.fgTertiary }}>
            Sizes
          </div>
          <div className="flex items-end gap-4">
            {[14, 18, 24, 32, 40].map((size) => (
              <div key={size} className="flex flex-col items-center gap-1.5">
                <Icon name="sparkle" size={size} style={{ color: t.accent }} />
                <span className="font-mono text-[9px]" style={{ color: t.fgTertiary }}>
                  {size}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div
          className="rounded-xl p-5"
          style={{ background: t.surface, border: `1px solid ${t.border}` }}
        >
          <div className="text-overline mb-3" style={{ color: t.fgTertiary }}>
            In Context
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              className="text-body-sm flex cursor-pointer items-center gap-2 rounded-full border-none px-4 py-2 font-medium text-white"
              style={{ background: COLORS.primary[500] }}
            >
              <Icon name="plus" size={16} />
              New Card
            </button>
            <button
              className="text-body-sm flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 font-medium"
              style={{ color: t.fg, background: t.inputBg }}
            >
              <Icon name="search" size={16} />
              Search
            </button>
            <button
              className="text-body-sm flex cursor-pointer items-center gap-1.5 rounded-full border-none bg-transparent px-3 py-2 font-medium"
              style={{ color: t.accent }}
            >
              <Icon name="link" size={16} />
              Connect
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
