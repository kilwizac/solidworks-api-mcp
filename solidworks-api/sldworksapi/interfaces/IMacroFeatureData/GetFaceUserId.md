---
type: method
interface: IMacroFeatureData
member: GetFaceUserId
returns: System.Boolean
parameters:
  -
    name: Face
    type: Face2
    description: Face
  -
    name: Id1
    type: System.Int32
    description: First ID
  -
    name: Id2
    type: System.Int32
    description: Second ID
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
  - ui
related:
  - IMacroFeatureData.GetEdgeIdType
  - IMacroFeatureData.GetEdgeUserId
  - IMacroFeatureData.GetEntitiesNeedUserId
  - IMacroFeatureData.GetEntitiesNeedUserIdCount
  - IMacroFeatureData.GetFaceIdType
  - IMacroFeatureData.SetEdgeUserId
  - IMacroFeatureData.SetFaceUserId
keywords:
  - getfaceuserid
  - imacrofeaturedata
  - macro
  - feature
  - data
  - face
  - user
  - id
  - face2
  - id1
  - int32
  - id2
  - boolean
---

# IMacroFeatureData.GetFaceUserId

Gets the user-defined IDs for the specified face.

## Signature

```csharp
System.Boolean GetFaceUserId( 
   Face2
Face
,
   out System.Int32
Id1
,
   out System.Int32
Id2
)
```
## Parameters

- `Face` (Face2): Face
- `Id1` (System.Int32): First ID
- `Id2` (System.Int32): Second ID

## Return Value

True if the IDs are valid, false if not

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IMacroFeatureData.GetEdgeIdType`
- `IMacroFeatureData.GetEdgeUserId`
- `IMacroFeatureData.GetEntitiesNeedUserId`
- `IMacroFeatureData.GetEntitiesNeedUserIdCount`
- `IMacroFeatureData.GetFaceIdType`
- `IMacroFeatureData.SetEdgeUserId`
- `IMacroFeatureData.SetFaceUserId`