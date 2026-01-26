---
type: method
interface: IPrimaryMemberRefPlaneFeatureData
member: GetStartAndEndReferences
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - getstartandendreferences
  - iprimarymemberrefplanefeaturedata
  - primary
  - member
  - ref
  - plane
  - feature
  - data
  - start
  - end
  - references
  - object
---

# IPrimaryMemberRefPlaneFeatureData.GetStartAndEndReferences

Gets the start and end reference entities that are used to define the length of this structure system member.

## Signature

```csharp
System.Object GetStartAndEndReferences()
```
## Parameters

None.

## Return Value

Array of two parallel entities ( IRefPlane s and/or IFace2 s)

## Remarks

The parallel entities returned by this method must be perpendicular and intersect the reference axes.