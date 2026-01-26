---
type: method
interface: IPrimaryMemberRefPlaneFeatureData
member: GetReferenceLocations
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - getreferencelocations
  - iprimarymemberrefplanefeaturedata
  - primary
  - member
  - ref
  - plane
  - feature
  - data
  - reference
  - locations
  - object
---

# IPrimaryMemberRefPlaneFeatureData.GetReferenceLocations

Gets the position reference(s) used to create this structure system member.

## Signature

```csharp
System.Object GetReferenceLocations()
```
## Parameters

None.

## Return Value

Array of parallel IRefPlane s and/or IFace2 s

## Remarks

The parallel entities returned by this method can be parallel or non-parallel to the start and end reference entities.
The number of members created = (
IPrimaryMemberRefPlaneFeatureData::GetReferenceAxes
* IPrimaryMemberRefPlaneFeatureData::GetReferenceLocations)