---
type: property
interface: IEdgeFlangeFeatureData
member: NormalToFlangePlane
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related: []
keywords:
  - normaltoflangeplane
  - iedgeflangefeaturedata
  - edge
  - flange
  - feature
  - data
  - normal
  - plane
  - boolean
readonly: null
---

# IEdgeFlangeFeatureData.NormalToFlangePlane

Gets or sets whether the Up To Vertex is on a plane that is normal to the end face of this edge flange.

## Signature

```csharp
System.Boolean NormalToFlangePlane {get; set;}
```
## Parameters

None.

## Return Value

True if the Up To Vertex is on a plane that is normal to the end face of the edge flange (default), false if the Up To Vertex passes through a plane that is parallel to the face of the base flange

## Remarks

This property is valid only if
IEdgeFlangeFeatureData::OffsetType
is set to
swFlangeOffsetTypes_e
.swFlangeOffsetUpToVertex.