---
type: method
interface: IDimensionTolerance
member: GetFontUseDimension
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - getfontusedimension
  - idimensiontolerance
  - dimension
  - tolerance
  - font
  - use
  - boolean
---

# IDimensionTolerance.GetFontUseDimension

Gets whether the tolerance font is the same size as the dimension font.

## Signature

```csharp
System.Boolean GetFontUseDimension()
```
## Parameters

None.

## Return Value

True if the tolerance font is the same size as the dimension font, false if not

## Remarks

To get other tolerance font information, use
IDimensionTolerance::GetFontUseScale
,
IDimensionTolerance::GetFontScale
, and
IDimensionTolerance::GetFontHeight
.
To set the tolerance font information, use
IDimensionTolerance::SetFont
.
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