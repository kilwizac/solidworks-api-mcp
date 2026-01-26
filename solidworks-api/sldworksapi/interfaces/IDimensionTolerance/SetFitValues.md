---
type: method
interface: IDimensionTolerance
member: SetFitValues
returns: System.Boolean
parameters:
  -
    name: HoleFit
    type: System.String
    description: Tolerance hole fit value
  -
    name: ShaftFit
    type: System.String
    description: Tolerance shaft fit value
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ICalloutVariable.HoleFit
  - ICalloutVariable.ShaftFit
  - IDimensionTolerance.FitType
keywords:
  - fit
  - tolerances
  - setfitvalues
  - idimensiontolerance
  - dimension
  - tolerance
  - values
  - hole
  - string
  - shaft
  - boolean
---

# IDimensionTolerance.SetFitValues

Sets the tolerance hole fit and shaft fit values.

## Signature

```csharp
System.Boolean SetFitValues( 
   System.String
HoleFit
,
   System.String
ShaftFit
)
```
## Parameters

- `HoleFit` (System.String): Tolerance hole fit value
- `ShaftFit` (System.String): Tolerance shaft fit value

## Return Value

True if the setting of the fit values is successful, false if not

## Remarks

To get tolerance...
Use...
Hole fit value
IDimensionTolerance::GetHoleFitValue
Shaft fit value
IDimensionTolerance::GetShaftFitValue
To see the effects of changing the tolerance fit values, use
IModelDoc2::GraphicsRedraw2
.

## See Also

- `ICalloutVariable.HoleFit`
- `ICalloutVariable.ShaftFit`
- `IDimensionTolerance.FitType`