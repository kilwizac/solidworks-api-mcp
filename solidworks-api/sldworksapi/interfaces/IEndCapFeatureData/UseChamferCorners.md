---
type: property
interface: IEndCapFeatureData
member: UseChamferCorners
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - usechamfercorners
  - iendcapfeaturedata
  - end
  - cap
  - feature
  - data
  - use
  - chamfer
  - corners
  - boolean
readonly: null
---

# IEndCapFeatureData.UseChamferCorners

Gets or sets whether to chamfer the corners of this end-cap feature.

## Signature

```csharp
System.Boolean UseChamferCorners {get; set;}
```
## Parameters

None.

## Return Value

True to chamfer corners, false to fillet corners

## Remarks

This property is valid only if
IEndCapFeatureData::UseCornerTreatment
is true.
Call
IEndCapFeatureData::ChamferDistance
to set the chamfer distance or fillet radius of the end cap corner.

## Examples

- IEndCapFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IEndCapFeatureData)