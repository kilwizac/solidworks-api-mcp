---
type: method
interface: IPrimaryMemberFacePlaneIntersectionFeatureData
member: SetIntersectingPlanesAndFaces
returns: System.Boolean
parameters:
  -
    name: RefList
    type: System.Object
    description: Array of IRefPlane s, ISurface s, and/or IFace2 s that intersect with parameter faces
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related: []
keywords:
  - setintersectingplanesandfaces
  - iprimarymemberfaceplaneintersectionfeaturedata
  - primary
  - member
  - face
  - plane
  - intersection
  - feature
  - data
  - intersecting
  - planes
  - faces
  - ref
  - list
  - object
  - boolean
---

# IPrimaryMemberFacePlaneIntersectionFeatureData.SetIntersectingPlanesAndFaces

Sets the planes, surfaces, and faces that intersect with parameter faces of this structure system member.

## Signature

```csharp
System.Boolean SetIntersectingPlanesAndFaces( 
   System.Object
RefList
)
```
## Parameters

- `RefList` (System.Object): Array of IRefPlane s, ISurface s, and/or IFace2 s that intersect with parameter faces

## Return Value

True if intersecting objects successfully set, false if not

## Remarks

Entities passed should intersect with at least one entity returned by
IPrimaryMemberFacePlaneIntersectionFeatureData::GetParameterFaces
.
At edit time, you can set only one intersecting entity.

## Examples

- IPrimaryMemberFacePlaneIntersectionFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPrimaryMemberFacePlaneIntersectionFeatureData)