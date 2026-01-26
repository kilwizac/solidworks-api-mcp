---
type: property
interface: IEdgeFlangeFeatureData
member: OffsetDimType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IEdgeFlangeFeatureData.OffsetDistance
  - IEdgeFlangeFeatureData.OffsetType
  - IEdgeFlangeFeatureData.ReverseOffset
  - IEdgeFlangeFeatureData.UsePositionOffset
keywords:
  - offsetdimtype
  - iedgeflangefeaturedata
  - edge
  - flange
  - feature
  - data
  - offset
  - dim
  - type
  - int32
readonly: null
---

# IEdgeFlangeFeatureData.OffsetDimType

Gets or sets the flange length origin type for dimensioning this edge flange.

## Signature

```csharp
System.Int32 OffsetDimType {get; set;}
```
## Parameters

None.

## Return Value

Dimensioning origin type as defined in swFlangeDimTypes_e

## Remarks

This property is valid only if
IEdgeFlangeFeatureData::OffsetType
is not set to
swFlangeOffsetTypes_e
.swFlangeOffsetUpToVertex.
The default value of this property is swFlangeDimTypes_e.swFlangeDimTypeInnerVirtualSharp.

## Examples

- IEdgeFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IEdgeFlangeFeatureData)

## See Also

- `IEdgeFlangeFeatureData.OffsetDistance`
- `IEdgeFlangeFeatureData.OffsetType`
- `IEdgeFlangeFeatureData.ReverseOffset`
- `IEdgeFlangeFeatureData.UsePositionOffset`