---
type: method
interface: IShellFeatureData
member: GetMultipleThicknessAtIndex
returns: System.Double
parameters:
  -
    name: Index
    type: System.Int32
    description: 0-based index for the thickness
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IShellFeatureData.GetMultipleThicknessFacesCount
  - IShellFeatureData.IGetMultipleThicknessFaces
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
  - getmultiplethicknessatindex
  - feature
  - data
  - multiple
  - index
  - int32
  - double
---

# IShellFeatureData.GetMultipleThicknessAtIndex

Gets the thickness of the shell at the specified index in this shell feature.

## Signature

```csharp
System.Double GetMultipleThicknessAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): 0-based index for the thickness

## Return Value

Shell thickness

## Examples

- IShellFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IShellFeatureData)

## See Also

- `IShellFeatureData.GetMultipleThicknessFacesCount`
- `IShellFeatureData.IGetMultipleThicknessFaces`
- `IShellFeatureData.ISetMultipleThicknessFaces`
- `IShellFeatureData.MultipleThicknessFaces`
- `IShellFeatureData.SetMultipleThicknessAtIndex`
- `IShellFeatureData.Thickness`