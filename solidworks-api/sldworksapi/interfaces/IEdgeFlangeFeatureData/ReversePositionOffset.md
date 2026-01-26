---
type: property
interface: IEdgeFlangeFeatureData
member: ReversePositionOffset
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IEdgeFlangeFeatureData.PositionOffsetDistance
  - IEdgeFlangeFeatureData.PositionOffsetReference
  - IEdgeFlangeFeatureData.PositionOffsetType
  - IEdgeFlangeFeatureData.UsePositionOffset
keywords:
  - reversepositionoffset
  - iedgeflangefeaturedata
  - edge
  - flange
  - feature
  - data
  - reverse
  - position
  - offset
  - boolean
readonly: null
---

# IEdgeFlangeFeatureData.ReversePositionOffset

Gets or sets whether to reverse the flange position offset for this edge flange.

## Signature

```csharp
System.Boolean ReversePositionOffset {get; set;}
```
## Parameters

None.

## Return Value

True reverses the flange position offset, false does not (default)

## Remarks

This property is valid only if
IEdgeFlangeFeatureData::UsePositionOffset
is set to true.

## See Also

- `IEdgeFlangeFeatureData.PositionOffsetDistance`
- `IEdgeFlangeFeatureData.PositionOffsetReference`
- `IEdgeFlangeFeatureData.PositionOffsetType`
- `IEdgeFlangeFeatureData.UsePositionOffset`