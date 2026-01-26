---
type: property
interface: IEdgeFlangeFeatureData
member: PositionOffsetDistance
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IEdgeFlangeFeatureData.PositionOffsetReference
  - IEdgeFlangeFeatureData.ReversePositionOffset
keywords:
  - positionoffsetdistance
  - iedgeflangefeaturedata
  - edge
  - flange
  - feature
  - data
  - position
  - offset
  - distance
  - double
readonly: null
---

# IEdgeFlangeFeatureData.PositionOffsetDistance

Gets or sets the flange position offset for this edge flange.

## Signature

```csharp
System.Double PositionOffsetDistance {get; set;}
```
## Parameters

None.

## Return Value

Flange position offset value; default value is 0.01 m

## Remarks

This property is valid only if:
IEdgeFlangeFeatureData::UsePositionOffset
is set to true,
- and -
IEdgeflangeFeatureData::PostionOffsetType
is set to either
swFlangeOffsetTypes_e
.swFlangeOffsetFromSurface or swFlangeOffsetTypes_e.swFlangeOffsetBlind.

## Examples

- IEdgeFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IEdgeFlangeFeatureData)

## See Also

- `IEdgeFlangeFeatureData.PositionOffsetReference`
- `IEdgeFlangeFeatureData.ReversePositionOffset`