import {
  AudioWaveform,
  Cable,
  Clock,
  Cpu,
  Gauge,
  Hash,
  Lightbulb,
  MemoryStick,
  MonitorSmartphone,
  Network,
  SlidersHorizontal,
  Timer,
  ToggleLeft,
  Waves,
  Zap,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Lightbulb,
  ToggleLeft,
  MonitorSmartphone,
  Hash,
  AudioWaveform,
  Gauge,
  SlidersHorizontal,
  Zap,
  Timer,
  Cable,
  MemoryStick,
  Clock,
  Network,
  Waves,
};

export function TopicIcon({ name, className }: { name: string; className?: string }) {
  const Icon = map[name] ?? Cpu;
  return <Icon className={className} aria-hidden="true" />;
}