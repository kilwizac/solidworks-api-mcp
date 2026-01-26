---
type: method
interface: IPrimaryMemberRefPlaneFeatureData
member: GetReferenceAxes
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - getreferenceaxes
  - iprimarymemberrefplanefeaturedata
  - primary
  - member
  - ref
  - plane
  - feature
  - data
  - reference
  - axes
  - object
---

# IPrimaryMemberRefPlaneFeatureData.GetReferenceAxes

Gets the direction reference(s) used to create this structure system member.

## Signature

```csharp
System.Object GetReferenceAxes()
```
## Parameters

None.

## Return Value

Array of parallel IRefPlane s and/or IFace2 s

## Remarks

The parallel entities returned by this method must be perpendicular to and intersect the start and end references.
The number of members created = (IPrimaryMemberRefPlaneFeatureData::GetReferenceAxes *
IPrimaryMemberRefPlaneFeatureData::GetReferenceLocations
)