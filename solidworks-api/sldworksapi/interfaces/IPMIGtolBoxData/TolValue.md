---
type: property
interface: IPMIGtolBoxData
member: TolValue
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IPMIGtolBoxData.TolerancePerUnitType
  - IPMIGtolBoxData.TolerancePerUnitValue1
  - IPMIGtolBoxData.TolerancePerUnitValue2
  - IPMIGtolBoxData.Unit
keywords:
  - tolvalue
  - ipmigtolboxdata
  - ipmi
  - gtol
  - box
  - data
  - tol
  - value
  - double
  - iannotation
  - getpmidata
readonly: null
---

# IPMIGtolBoxData.TolValue

Gets the tolerance value in this PMI Gtol frame box.

## Signature

```csharp
System.Double TolValue {get; set;}
```
## Parameters

None.

## Return Value

Tolerance value

## Examples

- IAnnotation::GetPMIData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAnnotation~GetPMIData)

## See Also

- `IPMIGtolBoxData.TolerancePerUnitType`
- `IPMIGtolBoxData.TolerancePerUnitValue1`
- `IPMIGtolBoxData.TolerancePerUnitValue2`
- `IPMIGtolBoxData.Unit`