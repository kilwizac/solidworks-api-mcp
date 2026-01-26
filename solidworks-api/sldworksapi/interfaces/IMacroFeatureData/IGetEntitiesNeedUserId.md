---
type: method
interface: IMacroFeatureData
member: IGetEntitiesNeedUserId
returns: void
parameters:
  -
    name: Body
    type: Body2
    description: Body containing the faces and edges
  -
    name: FaceCount
    type: System.Int32
    description: Number of faces
  -
    name: Faces
    type: Face2
    description: in-process, unmanaged C++: Pointer to an array of faces VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: EdgeCount
    type: System.Int32
    description: Number of edges
  -
    name: Edges
    type: Edge
    description: in-process, unmanaged C++: Pointer to an array of edges VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - ui
related:
  - IMacroFeatureData.GetEdgeIdType
  - IMacroFeatureData.GetEdgeUserId
  - IMacroFeatureData.GetEntitiesNeedUserId
  - IMacroFeatureData.GetFaceIdType
  - IMacroFeatureData.GetFaceUserId
  - IMacroFeatureData.SetEdgeUserId
  - IMacroFeatureData.SetFaceUserId
keywords:
  - igetentitiesneeduserid
  - imacrofeaturedata
  - macro
  - feature
  - data
  - entities
  - need
  - user
  - id
  - body
  - body2
  - face
  - count
  - int32
  - faces
  - face2
  - edge
  - edges
  - void
---

# IMacroFeatureData.IGetEntitiesNeedUserId

Gets a list of faces and edges that need be assigned user IDs for the macro feature.

## Signature

```csharp
void IGetEntitiesNeedUserId( 
   Body2
Body
,
   System.Int32
FaceCount
,
   out Face2
Faces
,
   System.Int32
EdgeCount
,
   out Edge
Edges
)
```
## Parameters

- `Body` (Body2): Body containing the faces and edges
- `FaceCount` (System.Int32): Number of faces
- `Faces` (Face2): in-process, unmanaged C++: Pointer to an array of faces VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `EdgeCount` (System.Int32): Number of edges
- `Edges` (Edge): in-process, unmanaged C++: Pointer to an array of edges VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

Before calling this method, call
IMacroFeatureData::GetEntitiesNeedUserIdCount
to determine the size of the arrays.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IMacroFeatureData.GetEdgeIdType`
- `IMacroFeatureData.GetEdgeUserId`
- `IMacroFeatureData.GetEntitiesNeedUserId`
- `IMacroFeatureData.GetFaceIdType`
- `IMacroFeatureData.GetFaceUserId`
- `IMacroFeatureData.SetEdgeUserId`
- `IMacroFeatureData.SetFaceUserId`