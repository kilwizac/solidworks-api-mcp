---
type: property
interface: IDrSection
member: RandomizeScale
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IDrSection.ScaleHatchPattern
keywords:
  - randomizescale
  - idrsection
  - dr
  - section
  - randomize
  - scale
  - boolean
readonly: null
---

# IDrSection.RandomizeScale

Gets or sets whether to randomize the scale when auto hatching this section view.

## Signature

```csharp
System.Boolean RandomizeScale {get; set;}
```
## Parameters

None.

## Return Value

True to randomize the scale when auto hatching, false to not

## Remarks

This property is valid only if
IDrSectionView::GetAutoHatch
is true.

## See Also

- `IDrSection.ScaleHatchPattern`