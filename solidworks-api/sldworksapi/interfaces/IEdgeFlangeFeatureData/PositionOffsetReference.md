---
type: property
interface: IEdgeFlangeFeatureData
member: PositionOffsetReference
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IEdgeFlangeFeatureData.PositionOffsetDistance
  - IEdgeFlangeFeatureData.ReversePositionOffset
keywords:
  - positionoffsetreference
  - iedgeflangefeaturedata
  - edge
  - flange
  - feature
  - data
  - position
  - offset
  - reference
  - object
readonly: null
---

# IEdgeFlangeFeatureData.PositionOffsetReference

Gets or sets the flange position offset reference for this edge flange.

## Signature

```csharp
System.Object PositionOffsetReference {get; set;}
```
## Parameters

None.

## Return Value

Flange position offset reference for this edge flange

## Remarks

This property is valid only if:
IEdgeFlangeFeatureData::UsePositionOffset
is set to true,
- and -
IEdgeFlangeFeatureData::PositionOffsetType
is set to
swFlangeOffsetTypes_e
.:
swFlangeOffsetUpToVertex
swFlangeOffsetUpToSurface
swFlangeOffsetFromSurface

## See Also

- `IEdgeFlangeFeatureData.PositionOffsetDistance`
- `IEdgeFlangeFeatureData.ReversePositionOffset`