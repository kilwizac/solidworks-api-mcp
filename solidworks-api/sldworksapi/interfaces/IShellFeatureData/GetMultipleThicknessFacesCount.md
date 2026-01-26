---
type: method
interface: IShellFeatureData
member: GetMultipleThicknessFacesCount
returns: System.Int32
parameters: []
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
  - getmultiplethicknessfacescount
  - feature
  - data
  - multiple
  - faces
  - count
  - int32
---

# IShellFeatureData.GetMultipleThicknessFacesCount

Gets the number of faces with multiple thickness in this shell feature.

## Signature

```csharp
System.Int32 GetMultipleThicknessFacesCount()
```
## Parameters

None.

## Return Value

Number of faces with multiple thickness

## Remarks

Call this method before calling
IShellFeatureData::IGetMultipleThicknessFaces
to get the size of the array for that method.

## Examples

- IShellFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IShellFeatureData)

## See Also

- `IShellFeatureData.GetMultipleThicknessAtIndex`
- `IShellFeatureData.ISetMultipleThicknessFaces`
- `IShellFeatureData.MultipleThicknessFaces`
- `IShellFeatureData.SetMultipleThicknessAtIndex`
- `IShellFeatureData.Thickness`