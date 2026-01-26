---
type: method
interface: ISplitLineFeatureData
member: ISetFaces
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of faces
  -
    name: EntIn
    type: Face2
    description: in-process, unmanaged C++: Pointer to an array of split faces VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - ISplitLineFeatureData.Faces
  - ISplitLineFeatureData.GetFacesCount
  - ISplitLineFeatureData.IGetFaces
keywords:
  - isetfaces
  - isplitlinefeaturedata
  - split
  - line
  - feature
  - data
  - faces
  - count
  - int32
  - ent
  - face2
  - void
---

# ISplitLineFeatureData.ISetFaces

Sets the faces split by the split line.

## Signature

```csharp
void ISetFaces( 
   System.Int32
Count
,
   ref Face2
EntIn
)
```
## Parameters

- `Count` (System.Int32): Number of faces
- `EntIn` (Face2): in-process, unmanaged C++: Pointer to an array of split faces VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISplitLineFeatureData.Faces`
- `ISplitLineFeatureData.GetFacesCount`
- `ISplitLineFeatureData.IGetFaces`