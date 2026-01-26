---
type: method
interface: IPrimaryMemberRefPlaneFeatureData
member: SetReferenceAxes
returns: System.Boolean
parameters:
  -
    name: RetEntities
    type: System.Object
    description: Array of parallel IRefPlane s and/or IFace2 s
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - setreferenceaxes
  - iprimarymemberrefplanefeaturedata
  - primary
  - member
  - ref
  - plane
  - feature
  - data
  - reference
  - axes
  - ret
  - entities
  - object
  - boolean
---

# IPrimaryMemberRefPlaneFeatureData.SetReferenceAxes

Sets the direction reference(s) for this structure system member.

## Signature

```csharp
System.Boolean SetReferenceAxes( 
   System.Object
RetEntities
)
```
## Parameters

- `RetEntities` (System.Object): Array of parallel IRefPlane s and/or IFace2 s

## Return Value

True if reference axes successfully set, false if not

## Remarks

The number of members created = (
IPrimaryMemberRefPlaneFeatureData::GetReferenceAxes
*
IPrimaryMemberRefPlaneFeatureData::GetReferenceLocations
)
During:
creation, you can set any number of entities that are intersecting with the start and end reference (
IPrimaryMemberRefPlaneFeatureData::GetStartAndEndReferences
).
editing, you can set only one entity that intersects with the start and end reference.

## Examples

- IPrimaryMemberRefPlaneFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPrimaryMemberRefPlaneFeatureData)