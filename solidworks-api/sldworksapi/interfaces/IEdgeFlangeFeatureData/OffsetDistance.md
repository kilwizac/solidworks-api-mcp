---
type: property
interface: IEdgeFlangeFeatureData
member: OffsetDistance
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IEdgeFlangeFeatureData.OffsetDimType
  - IEdgeFlangeFeatureData.OffsetReference
  - IEdgeFlangeFeatureData.ReverseOffset
keywords:
  - offsetdistance
  - iedgeflangefeaturedata
  - edge
  - flange
  - feature
  - data
  - offset
  - distance
  - double
readonly: null
---

# IEdgeFlangeFeatureData.OffsetDistance

Gets or sets the flange length for this edge flange.

## Signature

```csharp
System.Double OffsetDistance {get; set;}
```
## Parameters

None.

## Return Value

Value of the flange length; default is 0.0022098 m

## Remarks

This property is valid for all settings of
IEdgeFlangeFeatureData::OffsetType
except
swFlangeOffsetTypes_e
.swFlangeOffsetUpToVertex.

## Examples

- IEdgeFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IEdgeFlangeFeatureData)

## See Also

- `IEdgeFlangeFeatureData.OffsetDimType`
- `IEdgeFlangeFeatureData.OffsetReference`
- `IEdgeFlangeFeatureData.ReverseOffset`