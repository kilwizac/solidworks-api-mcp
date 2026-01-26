---
type: method
interface: IView
member: GetDisplayDimensionCount
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
  - IView.GetDisplayDimensions
keywords:
  - display
  - dimensions
  - see
  - also
  - idisplaydimension
  - number
  - getdisplaydimensioncount
  - iview
  - view
  - dimension
  - count
  - int32
  - annotations
  - arrays
  - vb
  - net
  - vba
---

# IView.GetDisplayDimensionCount

Gets the number of display dimensions in this drawing view.

## Signature

```csharp
System.Int32 GetDisplayDimensionCount()
```
## Parameters

None.

## Return Value

Number of display dimensions

## Remarks

Call this method before calling
IView::IGetDisplayDimensions
to determine the size of the array for that method.

## Examples

- Get Annotations Arrays (C#) (Get_Annotations_Arrays_Example_CSharp.htm)
- Get Annotations Arrays (VB.NET) (Get_Annotations_Arrays_Example_VBNET.htm)
- Get Annotations Arrays (VBA) (Get_Annotations_Array_Example_VB.htm)

## See Also

- `IView.GetDisplayDimensions`