---
type: method
interface: IPartingLineFeatureData
member: IGetFacesByType
returns: Face2
parameters:
  -
    name: Type
    type: System.Int32
    description: Type of face as defined by swDraftAnalysisFaceType_e
  -
    name: Count
    type: System.Int32
    description: Number of faces
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
  - parts
related:
  - IPartingLineFeatureData.DraftAnalysis
  - IPartingLineFeatureData.GetFacesByType
keywords:
  - igetfacesbytype
  - ipartinglinefeaturedata
  - parting
  - line
  - feature
  - data
  - faces
  - type
  - int32
  - count
  - face2
---

# IPartingLineFeatureData.IGetFacesByType

Gets the specified faces after performing a draft analysis of the parting line feature.

## Signature

```csharp
Face2 IGetFacesByType( 
   System.Int32
Type
,
   System.Int32
Count
)
```
## Parameters

- `Type` (System.Int32): Type of face as defined by swDraftAnalysisFaceType_e
- `Count` (System.Int32): Number of faces

## Return Value

in-process, unmanaged C++: Pointer to an array of faces VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IPartingLineFeatureData::GetFacesByTypeCount
before calling this method.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IPartingLineFeatureData.DraftAnalysis`
- `IPartingLineFeatureData.GetFacesByType`