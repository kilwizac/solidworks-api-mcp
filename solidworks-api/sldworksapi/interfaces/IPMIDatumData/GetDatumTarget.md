---
type: method
interface: IPMIDatumData
member: GetDatumTarget
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - getdatumtarget
  - ipmidatumdata
  - ipmi
  - datum
  - data
  - target
  - object
  - iannotation
  - getpmidata
---

# IPMIDatumData.GetDatumTarget

Gets the PMI datum target.

## Signature

```csharp
System.Object GetDatumTarget()
```
## Parameters

None.

## Return Value

IPMIDatumTarget

## Remarks

This method is valid only if
IPMIDatumData::GetDatumType
returns
swPMIDatumType_e
.swPMIDatumType_DatumTarget.

## Examples

- IAnnotation::GetPMIData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAnnotation~GetPMIData)