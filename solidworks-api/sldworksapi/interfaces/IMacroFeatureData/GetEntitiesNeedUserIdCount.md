---
type: method
interface: IMacroFeatureData
member: GetEntitiesNeedUserIdCount
returns: void
parameters:
  -
    name: Body
    type: Body2
    description: Body
  -
    name: FaceCount
    type: System.Int32
    description: Number of faces
  -
    name: EdgeCount
    type: System.Int32
    description: Number of edges
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - ui
related:
  - IMacroFeatureData.GetEntitiesNeedUserId
  - IMacroFeatureData.GetFaceIdType
  - IMacroFeatureData.GetFaceUserId
  - IMacroFeatureData.SetEdgeUserId
  - IMacroFeatureData.SetFaceUserId
keywords:
  - getentitiesneeduseridcount
  - imacrofeaturedata
  - macro
  - feature
  - data
  - entities
  - need
  - user
  - id
  - count
  - body
  - body2
  - face
  - int32
  - edge
  - void
---

# IMacroFeatureData.GetEntitiesNeedUserIdCount

Gets the number of faces and edges that need to be assigned user IDs for the macro feature.

## Signature

```csharp
void GetEntitiesNeedUserIdCount( 
   Body2
Body
,
   out System.Int32
FaceCount
,
   out System.Int32
EdgeCount
)
```
## Parameters

- `Body` (Body2): Body
- `FaceCount` (System.Int32): Number of faces
- `EdgeCount` (System.Int32): Number of edges

## Return Value

Unknown.

## Remarks

Call this method before calling
IMacroFeatureData::IGetEntitiesNeedUserId
to determine the size of the array for that method.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IMacroFeatureData.GetEntitiesNeedUserId`
- `IMacroFeatureData.GetFaceIdType`
- `IMacroFeatureData.GetFaceUserId`
- `IMacroFeatureData.SetEdgeUserId`
- `IMacroFeatureData.SetFaceUserId`