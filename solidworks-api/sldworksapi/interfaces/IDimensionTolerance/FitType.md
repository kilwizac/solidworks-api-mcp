---
type: property
interface: IDimensionTolerance
member: FitType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDimensionTolerance.FitDisplayStyle
  - IDimensionTolerance.GetFitFontHeight
  - IDimensionTolerance.GetFitFontScale
  - IDimensionTolerance.GetFitFontUseDimension
  - IDimensionTolerance.GetFitFontUseScale
  - IDimensionTolerance.GetHoleFitValue
  - IDimensionTolerance.GetShaftFitValue
  - IDimensionTolerance.SetFitFont
  - IDimensionTolerance.SetFitValues
keywords:
  - fit
  - tolerances
  - fittype
  - idimensiontolerance
  - dimension
  - tolerance
  - type
  - int32
  - vb
  - net
  - vba
readonly: null
---

# IDimensionTolerance.FitType

Gets or sets the fit type for this dimension fit tolerance.

## Signature

```csharp
System.Int32 FitType {get; set;}
```
## Parameters

None.

## Return Value

Fit type as defined in swFitType_e

## Remarks

This property is only available when the
type of tolerance
is
swTolType_e
:
swTolFIT,
swTolFITTOLONLY, or
swTolFITWITHTOL.

## Examples

- Get Dimension Tolerance (C#) (Get_Dimension_Tolerance_Example_CSharp.htm)
- Get Dimension Tolerance (VB.NET) (Get_Dimension_Tolerance_Example_VBNET.htm)
- Get Dimension Tolerance (VBA) (Get_Dimension_Tolerance_Example_VB.htm)

## See Also

- `IDimensionTolerance.FitDisplayStyle`
- `IDimensionTolerance.GetFitFontHeight`
- `IDimensionTolerance.GetFitFontScale`
- `IDimensionTolerance.GetFitFontUseDimension`
- `IDimensionTolerance.GetFitFontUseScale`
- `IDimensionTolerance.GetHoleFitValue`
- `IDimensionTolerance.GetShaftFitValue`
- `IDimensionTolerance.SetFitFont`
- `IDimensionTolerance.SetFitValues`