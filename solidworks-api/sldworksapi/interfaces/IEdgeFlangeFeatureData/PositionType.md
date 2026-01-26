---
type: property
interface: IEdgeFlangeFeatureData
member: PositionType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IEdgeFlangeFeatureData.GetPositionReferenceType
  - IEdgeFlangeFeatureData.PositionOffsetDistance
  - IEdgeFlangeFeatureData.PositionOffsetReference
  - IEdgeFlangeFeatureData.PositionOffsetType
  - IEdgeFlangeFeatureData.ReversePositionOffset
  - IEdgeFlangeFeatureData.UsePositionOffset
  - IEdgeFlangeFeatureData.UsePositionTrimSideBends
keywords:
  - positiontype
  - iedgeflangefeaturedata
  - edge
  - flange
  - feature
  - data
  - position
  - type
  - int32
readonly: null
---

# IEdgeFlangeFeatureData.PositionType

Gets or sets the flange position of this edge flange.

## Signature

```csharp
System.Int32 PositionType {get; set;}
```
## Parameters

None.

## Return Value

Position type as defined in swFlangePositionTypes_e

## Remarks

The default value of this property is swFlangePositionTypes_e.swFlangePositionTypeMaterialInside.

## Examples

- IEdgeFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IEdgeFlangeFeatureData)

## See Also

- `IEdgeFlangeFeatureData.GetPositionReferenceType`
- `IEdgeFlangeFeatureData.PositionOffsetDistance`
- `IEdgeFlangeFeatureData.PositionOffsetReference`
- `IEdgeFlangeFeatureData.PositionOffsetType`
- `IEdgeFlangeFeatureData.ReversePositionOffset`
- `IEdgeFlangeFeatureData.UsePositionOffset`
- `IEdgeFlangeFeatureData.UsePositionTrimSideBends`