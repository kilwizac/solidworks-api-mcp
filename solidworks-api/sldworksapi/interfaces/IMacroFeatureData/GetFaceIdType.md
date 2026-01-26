---
type: method
interface: IMacroFeatureData
member: GetFaceIdType
returns: System.Int32
parameters:
  -
    name: Face
    type: Face2
    description: Face
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IMacroFeatureData.GetEdgeIdType
  - IMacroFeatureData.GetEdgeUserId
  - IMacroFeatureData.GetEntitiesNeedUserId
  - IMacroFeatureData.GetEntitiesNeedUserIdCount
  - IMacroFeatureData.GetFaceUserId
  - IMacroFeatureData.SetEdgeUserId
  - IMacroFeatureData.SetFaceUserId
keywords:
  - getfaceidtype
  - imacrofeaturedata
  - macro
  - feature
  - data
  - face
  - id
  - type
  - face2
  - int32
---

# IMacroFeatureData.GetFaceIdType

Gets the ID type from the face for the macro feature.

## Signature

```csharp
System.Int32 GetFaceIdType( 
   Face2
Face
)
```
## Parameters

- `Face` (Face2): Face

## Return Value

ID type as defined in swMacroFeatureEntityIdType_e

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IMacroFeatureData.GetEdgeIdType`
- `IMacroFeatureData.GetEdgeUserId`
- `IMacroFeatureData.GetEntitiesNeedUserId`
- `IMacroFeatureData.GetEntitiesNeedUserIdCount`
- `IMacroFeatureData.GetFaceUserId`
- `IMacroFeatureData.SetEdgeUserId`
- `IMacroFeatureData.SetFaceUserId`