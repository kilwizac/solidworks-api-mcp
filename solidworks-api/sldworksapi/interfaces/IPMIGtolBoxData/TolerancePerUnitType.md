---
type: property
interface: IPMIGtolBoxData
member: TolerancePerUnitType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IPMIGtolBoxData.TolValue
  - IPMIGtolBoxData.TolerancePerUnitValue1
  - IPMIGtolBoxData.TolerancePerUnitValue2
keywords:
  - toleranceperunittype
  - ipmigtolboxdata
  - ipmi
  - gtol
  - box
  - data
  - tolerance
  - per
  - unit
  - type
  - int32
  - iannotation
  - getpmidata
readonly: null
---

# IPMIGtolBoxData.TolerancePerUnitType

Gets the tolerance per unit area type in this PMI Gtol frame box.

## Signature

```csharp
System.Int32 TolerancePerUnitType {get; set;}
```
## Parameters

None.

## Return Value

Tolerance per unit area type as defined in swPMITolPerUnitAreaType_e

## Remarks

This property is valid only if
IPMIFrameData::GeometricCharacteristic
returns
swGeometricCharacteristic_e
:
swGeometricCharacteristic_Flatness
swGeometricCharacteristic_Straightness

## Examples

- IAnnotation::GetPMIData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAnnotation~GetPMIData)

## See Also

- `IPMIGtolBoxData.TolValue`
- `IPMIGtolBoxData.TolerancePerUnitValue1`
- `IPMIGtolBoxData.TolerancePerUnitValue2`