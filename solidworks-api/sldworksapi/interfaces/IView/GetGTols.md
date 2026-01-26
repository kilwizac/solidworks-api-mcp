---
type: method
interface: IView
member: GetGTols
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetGTolCount
  - IView.IGetGTols
keywords:
  - gtol
  - see
  - also
  - igtol
  - drawing
  - views
  - annotation
  - iannotation
  - view
  - iview
  - gtols
  - getgtols
  - tols
  - object
  - annotations
  - arrays
  - vba
  - vb
  - net
---

# IView.GetGTols

Gets all of the geometric tolerances on this drawing view.

## Signature

```csharp
System.Object GetGTols()
```
## Parameters

None.

## Return Value

Array of geometric tolerances

## Remarks

Use this method to obtain the array of geometric tolerances all at once instead of calling
IView::GetFirstGTOL
and then repeatedly calling
IGtol::GetNextGTOL
to obtain the remaining geometric tolerances in the drawing view.

## Examples

- Get Annotations Arrays (VBA) (Get_Annotations_Array_Example_VB.htm)
- Get Annotations Arrays (VB.NET) (Get_Annotations_Arrays_Example_VBNET.htm)
- Get Annotations Arrays (C#) (Get_Annotations_Arrays_Example_CSharp.htm)

## See Also

- `IView.GetGTolCount`
- `IView.IGetGTols`