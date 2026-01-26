---
type: property
interface: IEdgeFlangeFeatureData
member: LockAngle
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related: []
keywords:
  - lockangle
  - iedgeflangefeaturedata
  - edge
  - flange
  - feature
  - data
  - lock
  - angle
  - boolean
readonly: null
---

# IEdgeFlangeFeatureData.LockAngle

Gets or sets whether to lock the flange angle for the Up To Edge and Merge option of this edge flange.

## Signature

```csharp
System.Boolean LockAngle {get; set;}
```
## Parameters

None.

## Return Value

True to lock the flange angle (default), false to not

## Remarks

This property is valid only when:
merging two bodies in a multibody part,
- and -
IEdgeFlangeFeatureData::OffsetType
is set to
swFlangeOffsetTypes_e
.swFlangeOffsetUptoEdgeAndMerge.

## Examples

- IEdgeFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IEdgeFlangeFeatureData)