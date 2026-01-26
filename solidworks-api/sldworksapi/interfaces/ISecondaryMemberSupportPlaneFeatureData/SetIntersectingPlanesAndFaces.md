---
type: method
interface: ISecondaryMemberSupportPlaneFeatureData
member: SetIntersectingPlanesAndFaces
returns: System.Boolean
parameters:
  -
    name: RefArray
    type: System.Object
    description: Array of IRefPlane s, ISurface s, and/or IFace2 s
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related: []
keywords:
  - setintersectingplanesandfaces
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
  - ref
  - array
  - object
  - boolean
  - isecondarymemberbetweenpointsfeaturedata
---

# ISecondaryMemberSupportPlaneFeatureData.SetIntersectingPlanesAndFaces

Sets the planar entities that intersect the primary structure system member pairs used to create this secondary structure system member.

## Signature

```csharp
System.Boolean SetIntersectingPlanesAndFaces( 
   System.Object
RefArray
)
```
## Parameters

- `RefArray` (System.Object): Array of IRefPlane s, ISurface s, and/or IFace2 s

## Return Value

True if intersecting planes and faces successfully set, false if not

## Remarks

During editing, RefArray can hold only one entity.

## Examples

- ISecondaryMemberBetweenPointsFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISecondaryMemberBetweenPointsFeatureData)