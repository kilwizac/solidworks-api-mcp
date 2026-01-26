---
type: method
interface: IPrimaryMemberRefPlaneFeatureData
member: SetReferenceLocations
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
  - setreferencelocations
  - iprimarymemberrefplanefeaturedata
  - primary
  - member
  - ref
  - plane
  - feature
  - data
  - reference
  - locations
  - ret
  - entities
  - object
  - boolean
---

# IPrimaryMemberRefPlaneFeatureData.SetReferenceLocations

Gets the location reference(s) used to create this structure system member.

## Signature

```csharp
System.Boolean SetReferenceLocations( 
   System.Object
RetEntities
)
```
## Parameters

- `RetEntities` (System.Object): Array of parallel IRefPlane s and/or IFace2 s

## Return Value

True if location references successfully set, false if not

## Remarks

The number of members created = (
IPrimaryMemberRefPlaneFeatureData::GetReferenceAxes
*
IPrimaryMemberRefPlaneFeatureData::GetReferenceLocations
)
During:
creation, you can set any number of entities that are intersecting with the start and end references and at least one reference axis entity.
editing, you can set only one entity that is intersecting with the start and end refereces and one reference axis entity.

## Examples

- IPrimaryMemberRefPlaneFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPrimaryMemberRefPlaneFeatureData)