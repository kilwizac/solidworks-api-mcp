---
type: method
interface: IDisplayDimension
member: GetFractionBase
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDisplayDimension.GetFractionValue
  - IDisplayDimension.GetRoundToFraction
  - IDisplayDimension.GetUnits
  - IDisplayDimension.GetUseDocUnits
  - IDisplayDimension.SetUnits
keywords:
  - getfractionbase
  - idisplaydimension
  - display
  - dimension
  - fraction
  - base
  - int32
---

# IDisplayDimension.GetFractionBase

Gets whether this display dimension is displayed as a decimal value or a fraction.

## Signature

```csharp
System.Int32 GetFractionBase()
```
## Parameters

None.

## Return Value

Value indicating decimal or fractional display as defined in swFractionDisplay_e

## Remarks

The unit display settings of a display dimension are controlled by a value that SOLIDWORKS stores in one of two places: on the owning document or on the individual display dimension. Use
IDisplayDimension::GetUseDocUnits
to determine whether this IDisplayDimension uses the document default or a specific value set for this IDisplayDimension.
If this display dimension is using the unit information stored locally on the DisplayDimension, this method returns a value defined in
swFractionDisplay_e
. If this display dimension uses settings from the document, then this method returns -1.
Use
IDisplayDimension::SetUnits
to set the units settings of a display dimension.

## See Also

- `IDisplayDimension.GetFractionValue`
- `IDisplayDimension.GetRoundToFraction`
- `IDisplayDimension.GetUnits`
- `IDisplayDimension.GetUseDocUnits`
- `IDisplayDimension.SetUnits`