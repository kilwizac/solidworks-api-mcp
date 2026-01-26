---
type: property
interface: IPMIGtolBoxData
member: TolerancePerUnitValue2
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
  - toleranceperunitvalue2
  - ipmigtolboxdata
  - ipmi
  - gtol
  - box
  - data
  - tolerance
  - per
  - unit
  - value2
  - double
  - iannotation
  - getpmidata
readonly: null
---

# IPMIGtolBoxData.TolerancePerUnitValue2

Gets the tolerance 2 per unit area in this PMI Gtol frame box.

## Signature

```csharp
System.Double TolerancePerUnitValue2 {get; set;}
```
## Parameters

None.

## Return Value

Tolerance 2 per unit area

## Remarks

This property is valid only if:
IPMIFrameData::GeometricCharacteristic
returns
swGeometricCharacteristic_e
swGeometricCharacteristic_Flatness
swGeometricCharacteristic_Straightness
IPMIGtolBoxData::TolerancePerUnitType
returns
swPMITolPerUnitAreaType_e
.swPMITolPerUnitType_Rectangular.
If IPMIGtolBoxData::TolerancePerUnitType returns swPMITolPerUnitAreaType_e.swPMITolPerUnitType_Rectangular, use this property and
IPMIGtolBoxData::TolerancePerUnitValue1
to calculate the unit area value. Then divide
IPMIGtolBoxData::TolValue
by the unit area value to get the tolerance per unit area value.

## Examples

- IAnnotation::GetPMIData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAnnotation~GetPMIData)

## See Also

- `IPMIGtolBoxData.Unit`