---
type: method
interface: IDisplayDimension
member: GetRoundToFraction
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.GetFractionBase
  - IDisplayDimension.GetFractionValue
  - IDisplayDimension.GetUnits
  - IDisplayDimension.GetUseDocUnits
  - IDisplayDimension.SetUnits
keywords:
  - getroundtofraction
  - idisplaydimension
  - display
  - dimension
  - round
  - fraction
  - boolean
---

# IDisplayDimension.GetRoundToFraction

Gets whether the displayed dimension value is rounded off so that SOLIDWORKS can display it as a fraction.

## Signature

```csharp
System.Boolean GetRoundToFraction()
```
## Parameters

None.

## Return Value

True rounds off the displayed dimension value to a fraction, false does not (see Remarks )

## Remarks

The unit display settings of a display dimension are controlled by a value that SOLIDWORKS stores in one of two places: on the owning document or on the individual display dimension. Use
IDisplayDimension::GetUseDocUnits
to determine whether this IDisplayDimension uses the document default or a specific value set for this IDisplayDimension.
If this display dimension uses local unit information, then the return value indicates whether the displayed value of this dimension is rounded off to a value that SOLIDWORKS can represent as a fraction.
Fraction display is valid only for unit types swINCHES or swFEETINCHES. In all other cases, this method returns -1. Use
IDisplayDimension::SetUnits
to set the units settings of a display dimension.

## See Also

- `IDisplayDimension.GetFractionBase`
- `IDisplayDimension.GetFractionValue`
- `IDisplayDimension.GetUnits`
- `IDisplayDimension.GetUseDocUnits`
- `IDisplayDimension.SetUnits`