---
type: method
interface: IView
member: GetDisplayDimensions
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - drawings
  - ui
related:
  - IView.GetDisplayDimensionCount
  - IView.IGetDisplayDimensions
keywords:
  - display
  - dimensions
  - see
  - also
  - idisplaydimension
  - annotations
  - annotation
  - iannotation
  - view
  - iview
  - getdisplaydimensions
  - object
  - arrays
  - vb
  - net
  - vba
---

# IView.GetDisplayDimensions

Gets all of the display dimension on this drawing view.

## Signature

```csharp
System.Object GetDisplayDimensions()
```
## Parameters

None.

## Return Value

Array of display dimensions

## Remarks

Use this method to obtain the array of display dimensions all at once instead of calling
IView::GetFirstDisplayDimension5
and then repeatedly calling
IDisplayDimension::GetNext5
to obtain the remaining display dimensions on this drawing view.
NOTE:
Display dimensions are not the same as
actual model dimensions
.

## Examples

- Get Annotations Arrays (C#) (Get_Annotations_Arrays_Example_CSharp.htm)
- Get Annotations Arrays (VB.NET) (Get_Annotations_Arrays_Example_VBNET.htm)
- Get Annotations Arrays (VBA) (Get_Annotations_Array_Example_VB.htm)

## See Also

- `IView.GetDisplayDimensionCount`
- `IView.IGetDisplayDimensions`