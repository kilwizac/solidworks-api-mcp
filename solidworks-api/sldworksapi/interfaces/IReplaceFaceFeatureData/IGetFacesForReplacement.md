---
type: method
interface: IReplaceFaceFeatureData
member: IGetFacesForReplacement
returns: Face2
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of faces to replace
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IReplaceFaceFeatureData.FacesForReplacement
  - IReplaceFaceFeatureData.ISetFacesForReplacement
keywords:
  - igetfacesforreplacement
  - ireplacefacefeaturedata
  - replace
  - face
  - feature
  - data
  - faces
  - replacement
  - count
  - int32
  - face2
---

# IReplaceFaceFeatureData.IGetFacesForReplacement

Gets the faces to replace in this feature.

## Signature

```csharp
Face2 IGetFacesForReplacement( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of faces to replace

## Return Value

in-process, unmanaged C++: Pointer to an array of faces to replace of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IReplaceFaceFeatureData::GetFacesForReplacementCount
before calling this method to get the value for Count.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IReplaceFaceFeatureData.FacesForReplacement`
- `IReplaceFaceFeatureData.ISetFacesForReplacement`