---
type: property
interface: IPMIGtolBoxData
member: TolerancePerUnitValue1
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IPMIGtolBoxData.Unit
keywords:
  - toleranceperunitvalue1
  - ipmigtolboxdata
  - ipmi
  - gtol
  - box
  - data
  - tolerance
  - per
  - unit
  - value1
  - double
  - iannotation
  - getpmidata
readonly: null
---

# IPMIGtolBoxData.TolerancePerUnitValue1

Gets the tolerance 1 per unit area value in this PMI Gtol frame box.

## Signature

```csharp
System.Double TolerancePerUnitValue1 {get; set;}
```
## Parameters

None.

## Return Value

Tolerance 1 per unit area

## Remarks

This property is valid only if
IPMIFrameData::GeometricCharacteristic
returns
swGeometricCharacteristic_e
:
swGeometricCharacteristic_Flatness
swGeometricCharacteristic_Straightness
Use this property to calculate the unit square or circular area. If
IPMIGtolBoxData::TolerancePerUnitType
returns
swPMITolPerUnitAreaType_e
.swPMITolPerUnitType_Rectangular, use this property and
IPMIGtolBoxData::TolerancePerUnitValue2
to calculate the unit area value. Then divide
IPMIGtolBoxData::TolValue
by the unit area value to get the tolerance per unit area value.

## Examples

- IAnnotation::GetPMIData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAnnotation~GetPMIData)

## See Also

- `IPMIGtolBoxData.Unit`