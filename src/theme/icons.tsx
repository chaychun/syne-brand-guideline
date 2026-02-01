import type { SVGProps } from "react";
import type { Icon as PhosphorIcon, IconWeight } from "@phosphor-icons/react";

// Phosphor Icons
import {
  House,
  MagnifyingGlass,
  Plus,
  Camera,
  Link,
  Hash,
  ArrowUp,
  Note,
  Graph,
  FolderOpen,
  CaretLeft,
  ArrowRight,
  DotsThree,
  Funnel,
  GridFour,
  List,
  Check,
  CheckCircle,
  Sun,
  Moon,
  Pencil,
  PaperPlaneTilt,
  Image,
  X,
  CaretRight,
  Tag,
  Clock,
  CalendarBlank,
  BookOpen,
  Sparkle,
  CircleNotch,
} from "@phosphor-icons/react";

export type IconName =
  | "home"
  | "search"
  | "plus"
  | "camera"
  | "link"
  | "hash"
  | "arrowUp"
  | "note"
  | "graph"
  | "folderOpen"
  | "caretLeft"
  | "arrowRight"
  | "dots"
  | "funnel"
  | "grid"
  | "list"
  | "check"
  | "checkCircle"
  | "sun"
  | "moon"
  | "pencil"
  | "send"
  | "image"
  | "x"
  | "caretRight"
  | "tag"
  | "clock"
  | "calendar"
  | "book"
  | "sparkle"
  | "loader";

const icons: Record<IconName, PhosphorIcon> = {
  home: House,
  search: MagnifyingGlass,
  plus: Plus,
  camera: Camera,
  link: Link,
  hash: Hash,
  arrowUp: ArrowUp,
  note: Note,
  graph: Graph,
  folderOpen: FolderOpen,
  caretLeft: CaretLeft,
  arrowRight: ArrowRight,
  dots: DotsThree,
  funnel: Funnel,
  grid: GridFour,
  list: List,
  check: Check,
  checkCircle: CheckCircle,
  sun: Sun,
  moon: Moon,
  pencil: Pencil,
  send: PaperPlaneTilt,
  image: Image,
  x: X,
  caretRight: CaretRight,
  tag: Tag,
  clock: Clock,
  calendar: CalendarBlank,
  book: BookOpen,
  sparkle: Sparkle,
  loader: CircleNotch,
};

// Icon component
interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number | string;
  weight?: IconWeight;
}

export function Icon({ name, size = 20, weight = "regular", ...props }: IconProps) {
  const IconComponent = icons[name];
  return <IconComponent size={size} weight={weight} {...props} />;
}

// Export icon names for documentation
export const ICON_NAMES: IconName[] = [
  "home",
  "search",
  "plus",
  "camera",
  "link",
  "hash",
  "arrowUp",
  "note",
  "graph",
  "folderOpen",
  "caretLeft",
  "arrowRight",
  "dots",
  "funnel",
  "grid",
  "list",
  "check",
  "checkCircle",
  "sun",
  "moon",
  "pencil",
  "send",
  "image",
  "x",
  "caretRight",
  "tag",
  "clock",
  "calendar",
  "book",
  "sparkle",
  "loader",
];
