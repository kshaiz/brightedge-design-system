# Slider — AI Instructions

## When to use
- Use `Slider` when the user needs to select a value (or range) along a continuous or stepped scale
- Good for: volume, price range, opacity, date range, threshold setting
- Avoid for: precise numeric entry — use a number input instead, or pair the slider with one

## Preferred: discrete sliders
**Always prefer discrete sliders** (fixed steps) over continuous ones. They give users clear stopping points and reduce input errors.

Discrete slider:
```tsx
<Slider min={0} max={100} step={10} marks />
```

If meaningful labels are needed at key breakpoints, pass a custom marks array:
```tsx
<Slider
  min={0}
  max={100}
  step={null}
  marks={[
    { value: 0, label: 'None' },
    { value: 50, label: 'Half' },
    { value: 100, label: 'Max' },
  ]}
/>
```
Using `step={null}` with a custom marks array restricts movement to only the mark values.

## End labels
Min/max values are shown below the track by default (`showEndLabels` defaults to `true`). Do not pass labels for min/max in the `marks` array — that would duplicate the end labels. Set `showEndLabels={false}` only when the range is obvious from context (e.g., 0–100 on a percentage field that already has a label).

## Continuous sliders — show current value
When a slider has no `marks` (continuous), the wrapper automatically displays the current value to the right of the track (0.5 spacing units). This makes the selected value legible without requiring the user to hover for the tooltip.

```tsx
<Slider min={0} max={1} step={0.01} />  {/* continuous — value shown to right */}
```

If you need `valueLabelDisplay="on"` for some other reason, pass it explicitly and it will override the wrapper default.

## Range sliders
Pass an array as `value` or `defaultValue` to activate two thumbs:
```tsx
<Slider defaultValue={[20, 80]} />
```
For range sliders, `disableSwap` prevents the thumbs from crossing each other — use it when the start must always be less than the end.

## Size
- `size="medium"` (default) — standard touch target, use in most layouts
- `size="small"` — use in dense/compact layouts (tables, toolbars, side panels)

## Color
Default is `primary`. Use `secondary` only when the slider is a secondary control on the page (not the primary interaction).

## Vertical sliders
Pass `orientation="vertical"` and set an explicit height on the parent container. End labels are not shown for vertical sliders (the track axis makes direction obvious).
```tsx
<Box sx={{ height: 200 }}>
  <Slider orientation="vertical" defaultValue={30} />
</Box>
```

## Labelling
Always place a `FormLabel` above the slider for screen readers and visual clarity:
```tsx
<FormControl fullWidth>
  <FormLabel>Confidence threshold</FormLabel>
  <Slider min={0} max={100} step={5} marks defaultValue={50} />
</FormControl>
```

## Do not
- Do not use `valueLabelDisplay="on"` on discrete sliders — `"auto"` (the wrapper default) is sufficient
- Do not pass labels for the min/max values in the `marks` array when `showEndLabels` is true
- Do not use a continuous slider when steps make semantic sense (e.g. number of seats, star rating)
- Do not use `orientation="vertical"` without setting a height on the parent
