---
type: property
interface: IEdgeFlangeFeatureData
member: UsePositionOffset
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
  - IEdgeFlangeFeatureData.ReversePositionOffset
keywords:
  - usepositionoffset
  - iedgeflangefeaturedata
  - edge
  - flange
  - feature
  - data
  - use
  - position
  - offset
  - boolean
readonly: null
---

# IEdgeFlangeFeatureData.UsePositionOffset

Gets or sets whether to offset this edge flange from the sheet metal body.

## Signature

```csharp
System.Boolean UsePositionOffset {get; set;}
```
## Parameters

None.

## Return Value

True offsets the flange position, false does not (default)

## Examples

- IEdgeFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IEdgeFlangeFeatureData)

## See Also

- `IEdgeFlangeFeatureData.PositionOffsetDistance`
- `IEdgeFlangeFeatureData.PositionOffsetReference`
- `IEdgeFlangeFeatureData.PositionOffsetType`
- `IEdgeFlangeFeatureData.ReversePositionOffset`