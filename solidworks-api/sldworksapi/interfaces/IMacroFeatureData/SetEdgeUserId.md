---
type: method
interface: IMacroFeatureData
member: SetEdgeUserId
returns: System.Boolean
parameters:
  -
    name: Edge
    type: Edge
    description: Edge
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
  - IMacroFeatureData.SetFaceUserId
keywords:
  - setedgeuserid
  - imacrofeaturedata
  - macro
  - feature
  - data
  - edge
  - user
  - id
  - id1
  - int32
  - id2
  - boolean
  - cut
  - body
  - half
  - using
  - vba
  - create
  - multibody
  - vb
  - net
---

# IMacroFeatureData.SetEdgeUserId

Sets the user-defined IDs for the specified edge for the macro feature.

## Signature

```csharp
System.Boolean SetEdgeUserId( 
   Edge
Edge
,
   System.Int32
Id1
,
   System.Int32
Id2
)
```
## Parameters

- `Edge` (Edge): Edge
- `Id1` (System.Int32): First ID
- `Id2` (System.Int32): Second ID

## Return Value

True if the IDs are valid, false if not

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## Examples

- Cut Body in Half Using Macro Feature (VBA) (Cut_Body_in_Half_using_Macro_Feature_Example_VB.htm)
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
- `IMacroFeatureData.SetFaceUserId`