---
type: method
interface: IShellFeatureData
member: IGetMultipleThicknessFaces
returns: System.Object
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of multiple-thickness faces
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IShellFeatureData.GetMultipleThicknessAtIndex
  - IShellFeatureData.ISetMultipleThicknessFaces
  - IShellFeatureData.MultipleThicknessFaces
  - IShellFeatureData.SetMultipleThicknessAtIndex
  - IShellFeatureData.Thickness
keywords:
  - shell
  - see
  - also
  - ishellfeaturedata
  - thickness
  - igetmultiplethicknessfaces
  - feature
  - data
  - multiple
  - faces
  - count
  - int32
  - object
---

# IShellFeatureData.IGetMultipleThicknessFaces

Gets the multiple-thickness faces in this shell feature.

## Signature

```csharp
System.Object IGetMultipleThicknessFaces( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of multiple-thickness faces

## Return Value

in-process, unmanaged C++: Pointer to an array of multiple-thickness faces of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IShellFeatureData::GetMultipleThicknessFacesCount
before calling this method to get the size of the array for this method.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IShellFeatureData.GetMultipleThicknessAtIndex`
- `IShellFeatureData.ISetMultipleThicknessFaces`
- `IShellFeatureData.MultipleThicknessFaces`
- `IShellFeatureData.SetMultipleThicknessAtIndex`
- `IShellFeatureData.Thickness`