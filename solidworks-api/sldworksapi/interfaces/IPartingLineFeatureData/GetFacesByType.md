---
type: method
interface: IPartingLineFeatureData
member: GetFacesByType
returns: System.Object
parameters:
  -
    name: Type
    type: System.Int32
    description: Type of face as defined by swDraftAnalysisFaceType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
  - parts
related:
  - IPartingLineFeatureData.DraftAnalysis
  - IPartingLineFeatureData.GetFacesByTypeCount
  - IPartingLineFeatureData.IGetFacesByType
keywords:
  - getfacesbytype
  - ipartinglinefeaturedata
  - parting
  - line
  - feature
  - data
  - faces
  - type
  - int32
  - object
---

# IPartingLineFeatureData.GetFacesByType

Gets the specified faces after performing a draft analysis of the parting line feature.

## Signature

```csharp
System.Object GetFacesByType( 
   System.Int32
Type
)
```
## Parameters

- `Type` (System.Int32): Type of face as defined by swDraftAnalysisFaceType_e

## Return Value

Array of faces

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IPartingLineFeatureData.DraftAnalysis`
- `IPartingLineFeatureData.GetFacesByTypeCount`
- `IPartingLineFeatureData.IGetFacesByType`