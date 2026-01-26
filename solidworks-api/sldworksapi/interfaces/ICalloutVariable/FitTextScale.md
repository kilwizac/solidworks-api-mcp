---
type: property
interface: ICalloutVariable
member: FitTextScale
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ICalloutVariable.HoleFit
  - ICalloutVariable.ShaftFit
  - ICalloutVariable.TextScale
  - ICalloutVariable.UseTextScale
keywords:
  - fittextscale
  - icalloutvariable
  - callout
  - variable
  - fit
  - text
  - scale
  - double
readonly: null
---

# ICalloutVariable.FitTextScale

Gets or sets the value with which to scale the fit tolerance font in a hole callout.

## Signature

```csharp
System.Double FitTextScale {get; set;}
```
## Parameters

None.

## Return Value

0.0 <= value with which to scale the fit tolerance font <= 10.0

## Remarks

This property supports fit and fit-with-tolerance types only.
Set
ICalloutVariable::FitUseTextScale
to true to enable setting this property.

## See Also

- `ICalloutVariable.HoleFit`
- `ICalloutVariable.ShaftFit`
- `ICalloutVariable.TextScale`
- `ICalloutVariable.UseTextScale`