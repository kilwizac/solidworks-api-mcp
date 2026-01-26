---
type: method
interface: IView
member: GetGTolCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetGTols
keywords:
  - gtol
  - see
  - also
  - igtol
  - drawing
  - views
  - getgtolcount
  - iview
  - view
  - tol
  - count
  - int32
  - annotations
  - arrays
  - vb
  - net
  - vba
---

# IView.GetGTolCount

Gets the number of geometric tolerances in this drawing view.

## Signature

```csharp
System.Int32 GetGTolCount()
```
## Parameters

None.

## Return Value

Number of geometric tolerances

## Remarks

Call this method before calling
IView::IGetGTols
to determine the size of the array for that method.

## Examples

- Get Annotations Arrays (C#) (Get_Annotations_Arrays_Example_CSharp.htm)
- Get Annotations Arrays (VB.NET) (Get_Annotations_Arrays_Example_VBNET.htm)
- Get Annotations Arrays (VBA) (Get_Annotations_Array_Example_VB.htm)

## See Also

- `IView.GetGTols`