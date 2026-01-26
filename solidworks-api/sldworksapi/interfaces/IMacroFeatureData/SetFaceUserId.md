---
type: method
interface: IMacroFeatureData
member: SetFaceUserId
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
  - IMacroFeatureData.GetFaceUserId
  - IMacroFeatureData.IGetEntitiesNeedUserId
  - IMacroFeatureData.SetEdgeUserId
keywords:
  - setfaceuserid
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
  - create
  - multibody
  - vba
  - vb
  - net
---

# IMacroFeatureData.SetFaceUserId

Sets user-defined IDs for the face for the macro feature.

## Signature

```csharp
System.Boolean SetFaceUserId( 
   Face2
Face
,
   System.Int32
Id1
,
   System.Int32
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

## Examples

- Create Multibody Macro Feature (VBA) (Create_Multibody_Macro_Feature_Example_VB.htm)
- Create Multibody Macro Feature (VB.NET) (Create_Multibody_Macro_Feature_Example_VBNET.htm)
- Create Multibody Macro Feature (C#) (Create_Multibody_Macro_Feature_Example_CSharp.htm)

## See Also

- `IMacroFeatureData.GetEdgeIdType`
- `IMacroFeatureData.GetEdgeUserId`
- `IMacroFeatureData.GetEntitiesNeedUserId`
- `IMacroFeatureData.GetEntitiesNeedUserIdCount`
- `IMacroFeatureData.GetFaceIdType`
- `IMacroFeatureData.GetFaceUserId`
- `IMacroFeatureData.IGetEntitiesNeedUserId`
- `IMacroFeatureData.SetEdgeUserId`