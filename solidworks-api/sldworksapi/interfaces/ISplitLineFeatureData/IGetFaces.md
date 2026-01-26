---
type: method
interface: ISplitLineFeatureData
member: IGetFaces
returns: Face2
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of faces to split
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - ISplitLineFeatureData.Faces
  - ISplitLineFeatureData.ISetFaces
keywords:
  - igetfaces
  - isplitlinefeaturedata
  - split
  - line
  - feature
  - data
  - faces
  - count
  - int32
  - face2
---

# ISplitLineFeatureData.IGetFaces

Gets the faces split by the split line.

## Signature

```csharp
Face2 IGetFaces( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of faces to split

## Return Value

in-process, unmanaged C++: Pointer to an array of split faces VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
ISplitLineFeatureData::GetFacesCount
to determine the size of the array for this method.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISplitLineFeatureData.Faces`
- `ISplitLineFeatureData.ISetFaces`