---
type: method
interface: IDimensionTolerance
member: GetShaftFitValue
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ICalloutVariable.ShaftFit
  - IDimensionTolerance.FitType
keywords:
  - fit
  - tolerances
  - getshaftfitvalue
  - idimensiontolerance
  - dimension
  - tolerance
  - shaft
  - value
  - string
---

# IDimensionTolerance.GetShaftFitValue

Gets the tolerance shaft fit value.

## Signature

```csharp
System.String GetShaftFitValue()
```
## Parameters

None.

## Return Value

Tolerance shaft fit value

## Remarks

Depending on the
type of fit tolerance
, to:
get the tolerance hole fit value, use
IDimensionTolerance::GetHoleFitValue
.
set the tolerance fit values, use
IDimensionTolerance::SetFitValues
.

## See Also

- `ICalloutVariable.ShaftFit`
- `IDimensionTolerance.FitType`