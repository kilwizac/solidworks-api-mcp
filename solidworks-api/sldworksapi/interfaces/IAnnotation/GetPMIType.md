---
type: method
interface: IAnnotation
member: GetPMIType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IAnnotation.GetPMIData
keywords:
  - pmi
  - getpmitype
  - iannotation
  - annotation
  - type
  - int32
  - getpmidata
---

# IAnnotation.GetPMIType

Gets the type of Product and Manufacturing Information (PMI) associated with this STEP 242 annotation.

## Signature

```csharp
System.Int32 GetPMIType()
```
## Parameters

None.

## Return Value

PMI type for this annotation as defined in swPMIType_e

## Remarks

This API does not yet support note annotations.

## Examples

- IAnnotation::GetPMIData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAnnotation~GetPMIData)

## See Also

- `IAnnotation.GetPMIData`