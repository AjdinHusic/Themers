export interface SliderProps {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
  step?: number;
}
const Slider: React.FC<SliderProps> = ({
  min,
  max,
  value,
  onChange,
  step = 1,
}) => {
  return (
    <>
      <input
        type="number"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(+e.target.value)}
      />
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(+e.target.value)}
      />
    </>
  );
};
export default Slider;
