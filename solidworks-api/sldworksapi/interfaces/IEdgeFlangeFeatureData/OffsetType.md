---
type: property
interface: IEdgeFlangeFeatureData
member: OffsetType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IEdgeFlangeFeatureData.BendAngle
  - IEdgeFlangeFeatureData.OffsetDimType
  - IEdgeFlangeFeatureData.OffsetDistance
  - IEdgeFlangeFeatureData.OffsetReference
  - IEdgeFlangeFeatureData.ReverseOffset
keywords:
  - offsettype
  - iedgeflangefeaturedata
  - edge
  - flange
  - feature
  - data
  - offset
  - type
  - int32
readonly: null
---

# IEdgeFlangeFeatureData.OffsetType

Gets or sets the flange length end condition for this edge flange.

## Signature

```csharp
System.Int32 OffsetType {get; set;}
```
## Parameters

None.

## Return Value

Flange length end condition as defined in swFlangeOffsetTypes_e

## Remarks

This property can have one of the following values in swFlangeOffsetTypes_e:
swFlangeOffsetBlind (default)
swFlangeOffsetUptoEdgeAndMerge
swFlangeOffsetUpToVertex

## Examples

- IEdgeFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IEdgeFlangeFeatureData)

## See Also

- `IEdgeFlangeFeatureData.BendAngle`
- `IEdgeFlangeFeatureData.OffsetDimType`
- `IEdgeFlangeFeatureData.OffsetDistance`
- `IEdgeFlangeFeatureData.OffsetReference`
- `IEdgeFlangeFeatureData.ReverseOffset`