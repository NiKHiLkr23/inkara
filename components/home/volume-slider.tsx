import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";

type SliderProps = React.ComponentProps<typeof Slider>;

export function VolumeSlider({ className, ...props }: SliderProps) {
  return (
    <Slider
      min={0}
      max={1}
      defaultValue={[0.5]}
      step={0.01}
      className={cn(" w-[90%]", className)}
      {...props}
    />
  );
}
