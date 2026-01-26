---
type: method
interface: IShellFeatureData
member: SetMultipleThicknessAtIndex
returns: void
parameters:
  -
    name: Index
    type: System.Int32
    description: 0-based index for new thickness
  -
    name: Thickness
    type: System.Double
    description: New thickness
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IShellFeatureData.GetMultipleThicknessAtIndex
  - IShellFeatureData.GetMultipleThicknessFacesCount
  - IShellFeatureData.IGetMultipleThicknessFaces
  - IShellFeatureData.ISetMultipleThicknessFaces
  - IShellFeatureData.MultipleThicknessFaces
  - IShellFeatureData.Thickness
keywords:
  - shell
  - see
  - also
  - ishellfeaturedata
  - thickness
  - setmultiplethicknessatindex
  - feature
  - data
  - multiple
  - index
  - int32
  - double
  - void
---

# IShellFeatureData.SetMultipleThicknessAtIndex

Sets the thickness of the shell at this index in this shell feature.

## Signature

```csharp
void SetMultipleThicknessAtIndex( 
   System.Int32
Index
,
   System.Double
Thickness
)
```
## Parameters

- `Index` (System.Int32): 0-based index for new thickness
- `Thickness` (System.Double): New thickness

## Return Value

Unknown.

## See Also

- `IShellFeatureData.GetMultipleThicknessAtIndex`
- `IShellFeatureData.GetMultipleThicknessFacesCount`
- `IShellFeatureData.IGetMultipleThicknessFaces`
- `IShellFeatureData.ISetMultipleThicknessFaces`
- `IShellFeatureData.MultipleThicknessFaces`
- `IShellFeatureData.Thickness`