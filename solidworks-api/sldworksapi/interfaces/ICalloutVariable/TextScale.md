---
type: property
interface: ICalloutVariable
member: TextScale
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ICalloutVariable.FitTextScale
  - ICalloutVariable.FitUseTextScale
keywords:
  - textscale
  - icalloutvariable
  - callout
  - variable
  - text
  - scale
  - double
readonly: null
---

# ICalloutVariable.TextScale

Gets or sets the value with which to scale the tolerance font for a hole callout.

## Signature

```csharp
System.Double TextScale {get; set;}
```
## Parameters

None.

## Return Value

0.0 <= value with which to scale the tolerance font <= 10.0

## Remarks

Set
ICalloutVariable::UseTextScale
to true to enable setting this property.

## See Also

- `ICalloutVariable.FitTextScale`
- `ICalloutVariable.FitUseTextScale`