---
type: method
interface: IPrimaryMemberFacePlaneIntersectionFeatureData
member: GetIntersectingObjectTypes
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
  - getintersectingobjecttypes
  - iprimarymemberfaceplaneintersectionfeaturedata
  - primary
  - member
  - face
  - plane
  - intersection
  - feature
  - data
  - intersecting
  - object
  - types
---

# IPrimaryMemberFacePlaneIntersectionFeatureData.GetIntersectingObjectTypes

Gets the types of entities that intersect with parameter faces of this structure system member.

## Signature

```csharp
System.Object GetIntersectingObjectTypes()
```
## Parameters

None.

## Return Value

Array of intersecting object types as defined by swSelectType_e : swSelFACES swSelREFFACES swSelDATUMPLANES