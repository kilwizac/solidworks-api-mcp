---
type: method
interface: IMacroFeatureData
member: GetEdgeIdType
returns: System.Int32
parameters:
  -
    name: Edge
    type: Edge
    description: Edge in the feature
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IMacroFeatureData.GetEdgeUserId
  - IMacroFeatureData.GetEntitiesNeedUserId
  - IMacroFeatureData.GetEntitiesNeedUserIdCount
  - IMacroFeatureData.GetFaceIdType
  - IMacroFeatureData.GetFaceUserId
  - IMacroFeatureData.SetEdgeUserId
  - IMacroFeatureData.SetFaceUserId
keywords:
  - getedgeidtype
  - imacrofeaturedata
  - macro
  - feature
  - data
  - edge
  - id
  - type
  - int32
---

# IMacroFeatureData.GetEdgeIdType

Gets the ID type of the specified edge for the macro feature.

## Signature

```csharp
System.Int32 GetEdgeIdType( 
   Edge
Edge
)
```
## Parameters

- `Edge` (Edge): Edge in the feature

## Return Value

ID type as defined in swMacroFeatureEntityIdType_e

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IMacroFeatureData.GetEdgeUserId`
- `IMacroFeatureData.GetEntitiesNeedUserId`
- `IMacroFeatureData.GetEntitiesNeedUserIdCount`
- `IMacroFeatureData.GetFaceIdType`
- `IMacroFeatureData.GetFaceUserId`
- `IMacroFeatureData.SetEdgeUserId`
- `IMacroFeatureData.SetFaceUserId`