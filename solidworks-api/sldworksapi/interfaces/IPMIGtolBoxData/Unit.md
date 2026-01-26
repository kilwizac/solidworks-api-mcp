---
type: property
interface: IPMIGtolBoxData
member: Unit
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IPMIGtolBoxData.GetTolTypeValues
  - IPMIGtolBoxData.TolValue
  - IPMIGtolBoxData.TolerancePerUnitValue1
  - IPMIGtolBoxData.TolerancePerUnitValue2
keywords:
  - unit
  - ipmigtolboxdata
  - ipmi
  - gtol
  - box
  - data
  - int32
  - iannotation
  - getpmidata
readonly: null
---

# IPMIGtolBoxData.Unit

Gets the units of tolerance for this PMI Gtol frame box.

## Signature

```csharp
System.Int32 Unit {get; set;}
```
## Parameters

None.

## Return Value

Units of tolerance as defined in swPMIUnit_e

## Examples

- IAnnotation::GetPMIData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAnnotation~GetPMIData)

## See Also

- `IPMIGtolBoxData.GetTolTypeValues`
- `IPMIGtolBoxData.TolValue`
- `IPMIGtolBoxData.TolerancePerUnitValue1`
- `IPMIGtolBoxData.TolerancePerUnitValue2`