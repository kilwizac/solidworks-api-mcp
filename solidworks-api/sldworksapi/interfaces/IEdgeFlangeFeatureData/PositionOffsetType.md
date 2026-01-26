---
type: property
interface: IEdgeFlangeFeatureData
member: PositionOffsetType
returns: System.Int32
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
  - IEdgeFlangeFeatureData.ReversePositionOffset
  - IEdgeFlangeFeatureData.UsePositionTrimSideBends
keywords:
  - positionoffsettype
  - iedgeflangefeaturedata
  - edge
  - flange
  - feature
  - data
  - position
  - offset
  - type
  - int32
readonly: null
---

# IEdgeFlangeFeatureData.PositionOffsetType

Gets or sets the flange position offset end condition of this edge flange.

## Signature

```csharp
System.Int32 PositionOffsetType {get; set;}
```
## Parameters

None.

## Return Value

Flange position offset end condition as defined in swFlangeOffsetTypes_e

## Remarks

This property is valid only if
IEdgeFlangeFeatureData::UsePositionOffset
is set to true.
The default value of this property is swFlangeOffsetTypes_e.swFlangeOffsetBlind.

## Examples

- IEdgeFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IEdgeFlangeFeatureData)

## See Also

- `IEdgeFlangeFeatureData.PositionOffsetDistance`
- `IEdgeFlangeFeatureData.PositionOffsetReference`
- `IEdgeFlangeFeatureData.ReversePositionOffset`
- `IEdgeFlangeFeatureData.UsePositionTrimSideBends`