---
type: method
interface: IDimensionTolerance
member: GetFontUseScale
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - getfontusescale
  - idimensiontolerance
  - dimension
  - tolerance
  - font
  - use
  - scale
  - boolean
---

# IDimensionTolerance.GetFontUseScale

Gets whether the tolerance font size is scaled based on the dimension font size, or if it is an absolute height value.

## Signature

```csharp
System.Boolean GetFontUseScale()
```
## Parameters

None.

## Return Value

True if the tolerance font size is scaled based on the dimension font size, false if the tolerance font size is an absolute height value

## Remarks

If
IDimensionTolerance::GetFontUseDimension
is true, then the value returned by this
IDimensionTolerance::GetFontUseScale is True and the value returned by
IDimensionTolerance::GetFontScale
is 1.0.
To get other tolerance font information, use the
IDimensionTolerance::GetFontHeight
.
To set the tolerance font information, use the
IDimensionTolerance::SetFont
method.
This method deals with the tolerance font information, not the fit tolerance font information. To get or set fit tolerance information, use
IDimensionTolerance::GetFitFontUseDimension
,
IDimensionTolerance::GetFitFontUseScale
,
IDimensionTolerance::GetFitFontScale
,
IDimensionTolerance::GetFitFontHeight
, and
IDimensionTolerance::SetFitFont
.