---
type: method
interface: ISecondaryMemberSupportPlaneFeatureData
member: GetIntersectingPlanesAndFaces
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related: []
keywords:
  - getintersectingplanesandfaces
  - isecondarymembersupportplanefeaturedata
  - secondary
  - member
  - support
  - plane
  - feature
  - data
  - intersecting
  - planes
  - faces
  - object
---

# ISecondaryMemberSupportPlaneFeatureData.GetIntersectingPlanesAndFaces

Gets the planar entities that intersect the primary structure system member pairs used to create this secondary structure system member.

## Signature

```csharp
System.Object GetIntersectingPlanesAndFaces()
```
## Parameters

None.

## Return Value

Array of IRefPlane s, ISurface s, and/or IFace2 s