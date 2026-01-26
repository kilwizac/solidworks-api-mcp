---
type: method
interface: IPMIDatumData
member: GetDatumType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IPMIDatumData.GetDatumFeature
  - IPMIDatumData.GetDatumTarget
keywords:
  - getdatumtype
  - ipmidatumdata
  - ipmi
  - datum
  - data
  - type
  - int32
  - iannotation
  - getpmidata
---

# IPMIDatumData.GetDatumType

Gets the PMI datum type.

## Signature

```csharp
System.Int32 GetDatumType()
```
## Parameters

None.

## Return Value

PMI datum type as defined in swPMIDatumType_e

## Examples

- IAnnotation::GetPMIData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAnnotation~GetPMIData)

## See Also

- `IPMIDatumData.GetDatumFeature`
- `IPMIDatumData.GetDatumTarget`