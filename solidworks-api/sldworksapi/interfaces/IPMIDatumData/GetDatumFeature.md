---
type: method
interface: IPMIDatumData
member: GetDatumFeature
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - features
related: []
keywords:
  - getdatumfeature
  - ipmidatumdata
  - ipmi
  - datum
  - data
  - feature
  - object
  - iannotation
  - getpmidata
---

# IPMIDatumData.GetDatumFeature

Gets the PMI datum feature.

## Signature

```csharp
System.Object GetDatumFeature()
```
## Parameters

None.

## Return Value

IPMIDatumFeature

## Remarks

This method is valid only if
IPMIDatumData::GetDatumType
returns
swPMIDatumType_e
.swPMIDatumType_DatumFeature.

## Examples

- IAnnotation::GetPMIData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAnnotation~GetPMIData)