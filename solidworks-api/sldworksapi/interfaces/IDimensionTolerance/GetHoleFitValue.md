---
type: method
interface: IDimensionTolerance
member: GetHoleFitValue
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ICalloutVariable.HoleFit
  - IDimensionTolerance.FitType
keywords:
  - getholefitvalue
  - idimensiontolerance
  - dimension
  - tolerance
  - hole
  - fit
  - value
  - string
---

# IDimensionTolerance.GetHoleFitValue

Gets the tolerance hole fit value.

## Signature

```csharp
System.String GetHoleFitValue()
```
## Parameters

None.

## Return Value

Tolerance hole fit value

## Remarks

Depending on the
type of fit tolerance
, to:
get the tolerance shaft fit value, use
IDimensionTolerance::GetShaftFitValue
.
set the tolerance fit values, use
IDimensionTolerance::SetFitValues
.

## See Also

- `ICalloutVariable.HoleFit`
- `IDimensionTolerance.FitType`