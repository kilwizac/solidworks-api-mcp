---
type: method
interface: IView
member: GetDimensionDisplayInfoSize2
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - drawings
  - ui
related:
  - IView.GetDimensionCount4
  - IView.GetDimensionDisplayInfo5
  - IView.GetDimensionDisplayString4
  - IView.GetDimensionIds4
  - IView.GetDimensionInfo6
  - IView.GetDimensionString4
  - IView.GetFirstDisplayDimension5
  - IView.IGetDimensionDisplayInfo5
  - IView.IGetDimensionDisplayString4
  - IView.IGetDimensionIds4
  - IView.IGetDimensionInfo6
  - IView.IGetDimensionString4
keywords:
  - sheet
  - see
  - also
  - isheet
  - dimensions
  - dimension
  - idimension
  - drawing
  - sheets
  - views
  - view
  - iview
  - getdimensiondisplayinfosize2
  - display
  - info
  - size2
  - int32
---

# IView.GetDimensionDisplayInfoSize2

Gets the number of the dimension lines n the current drawing sheet or the current drawing view.

## Signature

```csharp
System.Int32 GetDimensionDisplayInfoSize2()
```
## Parameters

None.

## Return Value

Number of dimension lines

## Remarks

Call this method before calling
IView::IGetDimensionDisplayInfo5
to get the size of the array for that method.

## See Also

- `IView.GetDimensionCount4`
- `IView.GetDimensionDisplayInfo5`
- `IView.GetDimensionDisplayString4`
- `IView.GetDimensionIds4`
- `IView.GetDimensionInfo6`
- `IView.GetDimensionString4`
- `IView.GetFirstDisplayDimension5`
- `IView.IGetDimensionDisplayInfo5`
- `IView.IGetDimensionDisplayString4`
- `IView.IGetDimensionIds4`
- `IView.IGetDimensionInfo6`
- `IView.IGetDimensionString4`