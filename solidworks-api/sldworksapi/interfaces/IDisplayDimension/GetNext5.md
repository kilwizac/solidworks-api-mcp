---
type: method
interface: IDisplayDimension
member: GetNext5
returns: DisplayDimension
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IView.GetFirstDisplayDimension5
keywords:
  - getnext5
  - idisplaydimension
  - display
  - dimension
  - next5
  - values
  - drawing
  - vba
---

# IDisplayDimension.GetNext5

Gets the next display dimension.

## Signature

```csharp
DisplayDimension GetNext5()
```
## Parameters

None.

## Return Value

Pointer to the next IDisplayDimension object

## Remarks

A dimension can be displayed multiple times. For example, a base-extrude dimension can be brought into three different views on a drawing. These three dimensions are referred to as display dimensions and are represented by the DisplayDimension object in the SOLIDWORKS API. The original base-extrude dimension is represented by the
IDimension
object in the SOLIDWORKS API.
Call this method after calling
IView::GetFirstDisplayDimension5
.
This method displays:
dimensions on both the sheet and sheet format.
suppressed dimensions.

## Examples

- Get Dimension Values in Drawing (VBA) (Get_Dimension_Values_in_Drawing_Example_VB.htm)

## See Also

- `IView.GetFirstDisplayDimension5`