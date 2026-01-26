---
type: property
interface: IEndCapFeatureData
member: ChamferDistance
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - chamferdistance
  - iendcapfeaturedata
  - end
  - cap
  - feature
  - data
  - chamfer
  - distance
  - double
readonly: null
---

# IEndCapFeatureData.ChamferDistance

Gets or sets the chamfer distance or fillet radius of the corner of this end-cap feature.

## Signature

```csharp
System.Double ChamferDistance {get; set;}
```
## Parameters

None.

## Return Value

Chamfer distance if IEndCapFeatureData::UseChamferCorners is true; fillet radius if IEndCapFeatureData::UseChamferCorners is false

## Remarks

This property is valid only if
IEndCapFeatureData::UseCornerTreatment
is true.

## Examples

- IEndCapFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IEndCapFeatureData)