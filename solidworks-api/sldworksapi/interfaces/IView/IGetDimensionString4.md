---
type: method
interface: IView
member: IGetDimensionString4
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - drawings
  - ui
related:
  - IView.GetDimensionDisplayInfo5
  - IView.GetDimensionDisplayInfoSize2
  - IView.GetDimensionDisplayString4
  - IView.GetDimensionIds4
  - IView.GetDimensionInfo6
  - IView.GetDimensionString4
  - IView.GetFirstDisplayDimension5
  - IView.IGetDimensionDisplayInfo5
  - IView.IGetDimensionDisplayString4
  - IView.IGetDimensionIds4
  - IView.IGetDimensionInfo6
  - IView.ProjectedDimensions
keywords:
  - dimension
  - see
  - also
  - idimension
  - drawing
  - sheets
  - views
  - view
  - iview
  - dimensions
  - sheet
  - isheet
  - igetdimensionstring4
  - string4
  - string
---

# IView.IGetDimensionString4

Gets the strings containing the text associated with each dimension in the current drawing sheet or the current drawing view.

## Signature

```csharp
System.String IGetDimensionString4()
```
## Parameters

None.

## Return Value

Array of strings containing the text associated with each dimension

## Remarks

Use
IView::GetDimensionCount4
to determine the number of strings to be returned.
This method does not support
hole callouts
.

## See Also

- `IView.GetDimensionDisplayInfo5`
- `IView.GetDimensionDisplayInfoSize2`
- `IView.GetDimensionDisplayString4`
- `IView.GetDimensionIds4`
- `IView.GetDimensionInfo6`
- `IView.GetDimensionString4`
- `IView.GetFirstDisplayDimension5`
- `IView.IGetDimensionDisplayInfo5`
- `IView.IGetDimensionDisplayString4`
- `IView.IGetDimensionIds4`
- `IView.IGetDimensionInfo6`
- `IView.ProjectedDimensions`