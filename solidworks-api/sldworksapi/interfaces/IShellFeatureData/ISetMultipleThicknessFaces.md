---
type: method
interface: IShellFeatureData
member: ISetMultipleThicknessFaces
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of faces
  -
    name: FaceArray
    type: System.Object
    description: in-process, unmanaged C++: Pointer to an array of faces to set to multiple thickness of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IShellFeatureData.GetMultipleThicknessAtIndex
  - IShellFeatureData.GetMultipleThicknessFacesCount
  - IShellFeatureData.IGetMultipleThicknessFaces
  - IShellFeatureData.MultipleThicknessFaces
  - IShellFeatureData.SetMultipleThicknessAtIndex
  - IShellFeatureData.Thickness
keywords:
  - shell
  - see
  - also
  - ishellfeaturedata
  - thickness
  - isetmultiplethicknessfaces
  - feature
  - data
  - multiple
  - faces
  - count
  - int32
  - face
  - array
  - object
  - void
---

# IShellFeatureData.ISetMultipleThicknessFaces

Sets the multiple-thickness faces in this shell feature.

## Signature

```csharp
void ISetMultipleThicknessFaces( 
   System.Int32
Count
,
   ref System.Object
FaceArray
)
```
## Parameters

- `Count` (System.Int32): Number of faces
- `FaceArray` (System.Object): in-process, unmanaged C++: Pointer to an array of faces to set to multiple thickness of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details.

## See Also

- `IShellFeatureData.GetMultipleThicknessAtIndex`
- `IShellFeatureData.GetMultipleThicknessFacesCount`
- `IShellFeatureData.IGetMultipleThicknessFaces`
- `IShellFeatureData.MultipleThicknessFaces`
- `IShellFeatureData.SetMultipleThicknessAtIndex`
- `IShellFeatureData.Thickness`