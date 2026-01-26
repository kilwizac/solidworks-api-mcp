---
type: property
interface: ICalloutVariable
member: FitType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ICalloutVariable.HoleFit
  - ICalloutVariable.ShaftFit
keywords:
  - fittype
  - icalloutvariable
  - callout
  - variable
  - fit
  - type
  - int32
readonly: null
---

# ICalloutVariable.FitType

Gets or sets the fit type for this hole callout.

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

## See Also

- `ICalloutVariable.HoleFit`
- `ICalloutVariable.ShaftFit`