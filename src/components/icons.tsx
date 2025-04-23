import { LucideIcon } from "lucide-react";
import {
  Bitcoin,
  Building2,
  Cards,
  FileCode2,
  ScrollText,
  TrendingUp,
} from "lucide-react";

export const AssetTypeIcon: Record<string, LucideIcon> = {
  stock: TrendingUp,
  crypto: Bitcoin,
};

export const ActionIcon: Record<string, LucideIcon> = {
  view: ScrollText,
  company: Building2,
  card: Cards,
  code: FileCode2,
};
