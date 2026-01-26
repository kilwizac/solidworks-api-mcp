---
type: property
interface: IEdgeFlangeFeatureData
member: OffsetReference
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IEdgeFlangeFeatureData.OffsetDimType
  - IEdgeFlangeFeatureData.OffsetDistance
  - IEdgeFlangeFeatureData.ReverseOffset
keywords:
  - offsetreference
  - iedgeflangefeaturedata
  - edge
  - flange
  - feature
  - data
  - offset
  - reference
  - object
readonly: null
---

# IEdgeFlangeFeatureData.OffsetReference

Gets or sets the flange length reference for this edge flange.

## Signature

```csharp
System.Object OffsetReference {get; set;}
```
## Parameters

None.

## Return Value

Flange length reference for this edge flange

## Remarks

This property is valid for all settings of
IEdgeFlangeFeatureData::OffsetType
except
swFlangeOffsetTypes_e
.swFlangeOffsetBlind.

## See Also

- `IEdgeFlangeFeatureData.OffsetDimType`
- `IEdgeFlangeFeatureData.OffsetDistance`
- `IEdgeFlangeFeatureData.ReverseOffset`