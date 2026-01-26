---
type: method
interface: IView
member: GetMultiJogLeaders
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetMultiJogLeaderCount
  - IView.IGetMultiJogLeaders
keywords:
  - multi
  - jog
  - leaders
  - see
  - also
  - imultijogleader
  - drawing
  - views
  - view
  - iview
  - annotation
  - iannotation
  - getmultijogleaders
  - object
  - annotations
  - arrays
  - vba
  - vb
  - net
---

# IView.GetMultiJogLeaders

Gets all of the multi-jog leaders in this drawing view.

## Signature

```csharp
System.Object GetMultiJogLeaders()
```
## Parameters

None.

## Return Value

Array of multi-jog leaders

## Remarks

Use this method to obtain the array of multi-jog leaders all at once instead of calling
IView::GetFirstMultiJogLeader
and then repeatedly calling
IMultiJogLeader::GetNext
to obtain the remaining multi-jog leaders in the drawing view.

## Examples

- Get Annotations Arrays (VBA) (Get_Annotations_Array_Example_VB.htm)
- Get Annotations Arrays (VB.NET) (Get_Annotations_Arrays_Example_VBNET.htm)
- Get Annotations Arrays (C#) (Get_Annotations_Arrays_Example_CSharp.htm)

## See Also

- `IView.GetMultiJogLeaderCount`
- `IView.IGetMultiJogLeaders`