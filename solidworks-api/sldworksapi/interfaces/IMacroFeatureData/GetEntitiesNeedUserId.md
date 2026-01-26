---
type: method
interface: IMacroFeatureData
member: GetEntitiesNeedUserId
returns: void
parameters:
  -
    name: Body
    type: System.Object
    description: Body containing the faces and edges
  -
    name: Faces
    type: System.Object
    description: Array of faces
  -
    name: Edges
    type: System.Object
    description: Array of edges
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - ui
related:
  - IMacroFeatureData.GetEdgeIdType
  - IMacroFeatureData.GetEdgeUserId
  - IMacroFeatureData.GetEntitiesNeedUserIdCount
  - IMacroFeatureData.GetFaceIdType
  - IMacroFeatureData.GetFaceUserId
  - IMacroFeatureData.SetEdgeUserId
  - IMacroFeatureData.SetFaceUserId
keywords:
  - getentitiesneeduserid
  - imacrofeaturedata
  - macro
  - feature
  - data
  - entities
  - need
  - user
  - id
  - body
  - object
  - faces
  - edges
  - void
  - cut
  - half
  - using
  - vba
---

# IMacroFeatureData.GetEntitiesNeedUserId

Gets a list of faces and edges that need be assigned user IDs for the macro feature.

## Signature

```csharp
void GetEntitiesNeedUserId( 
   System.Object
Body
,
   out System.Object
Faces
,
   out System.Object
Edges
)
```
## Parameters

- `Body` (System.Object): Body containing the faces and edges
- `Faces` (System.Object): Array of faces
- `Edges` (System.Object): Array of edges

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## Examples

- Cut Body in Half Using Macro Feature (VBA) (Cut_Body_in_Half_using_Macro_Feature_Example_VB.htm)

## See Also

- `IMacroFeatureData.GetEdgeIdType`
- `IMacroFeatureData.GetEdgeUserId`
- `IMacroFeatureData.GetEntitiesNeedUserIdCount`
- `IMacroFeatureData.GetFaceIdType`
- `IMacroFeatureData.GetFaceUserId`
- `IMacroFeatureData.SetEdgeUserId`
- `IMacroFeatureData.SetFaceUserId`