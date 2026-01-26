---
type: method
interface: IMacroFeatureData
member: GetEdgeUserId
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
  - IMacroFeatureData.GetEntitiesNeedUserId
  - IMacroFeatureData.GetEntitiesNeedUserIdCount
  - IMacroFeatureData.GetFaceIdType
  - IMacroFeatureData.GetFaceUserId
  - IMacroFeatureData.SetEdgeUserId
  - IMacroFeatureData.SetFaceUserId
keywords:
  - getedgeuserid
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
---

# IMacroFeatureData.GetEdgeUserId

Gets the user-defined IDs for the specified edge for the macro feature.

## Signature

```csharp
System.Boolean GetEdgeUserId( 
   Edge
Edge
,
   out System.Int32
Id1
,
   out System.Int32
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

## See Also

- `IMacroFeatureData.GetEdgeIdType`
- `IMacroFeatureData.GetEntitiesNeedUserId`
- `IMacroFeatureData.GetEntitiesNeedUserIdCount`
- `IMacroFeatureData.GetFaceIdType`
- `IMacroFeatureData.GetFaceUserId`
- `IMacroFeatureData.SetEdgeUserId`
- `IMacroFeatureData.SetFaceUserId`