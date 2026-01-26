---
type: property
interface: ICalloutVariable
member: FitUseTextScale
returns: System.Boolean
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
  - fitusetextscale
  - icalloutvariable
  - callout
  - variable
  - fit
  - use
  - text
  - scale
  - boolean
readonly: null
---

# ICalloutVariable.FitUseTextScale

Gets or sets whether to use the fit tolerance font scale value in a hole callout.

## Signature

```csharp
System.Boolean FitUseTextScale {get; set;}
```
## Parameters

None.

## Return Value

True to use the fit tolerance font scale value, false to not

## Remarks

Use
ICalloutVariable::FitTextScale
to get or set the fit tolerance font scale value in a hole callout.

## See Also

- `ICalloutVariable.HoleFit`
- `ICalloutVariable.ShaftFit`
- `ICalloutVariable.TextScale`
- `ICalloutVariable.UseTextScale`