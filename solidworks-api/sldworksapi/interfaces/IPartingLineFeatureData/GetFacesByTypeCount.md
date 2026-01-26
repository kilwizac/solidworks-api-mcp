---
type: method
interface: IPartingLineFeatureData
member: GetFacesByTypeCount
returns: System.Int32
parameters:
  -
    name: Type
    type: System.Int32
    description: Type of faces as defined by swDraftAnalysisFaceType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
  - parts
related:
  - IPartingLineFeatureData.GetFacesByType
keywords:
  - getfacesbytypecount
  - ipartinglinefeaturedata
  - parting
  - line
  - feature
  - data
  - faces
  - type
  - count
  - int32
---

# IPartingLineFeatureData.GetFacesByTypeCount

Gets the number of faces of the specified type for this parting line.

## Signature

```csharp
System.Int32 GetFacesByTypeCount( 
   System.Int32
Type
)
```
## Parameters

- `Type` (System.Int32): Type of faces as defined by swDraftAnalysisFaceType_e

## Return Value

Number of faces

## Remarks

Call this method before calling
IPartingLineFeatureData::IGetFacesbyType
.

## See Also

- `IPartingLineFeatureData.GetFacesByType`