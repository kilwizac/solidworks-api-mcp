---
type: method
interface: IView
member: GetCenterLines
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetCenterLineCount
  - IView.IGetCenterLines
keywords:
  - centerlines
  - see
  - also
  - icenterline
  - annotations
  - annotation
  - iannotation
  - view
  - iview
  - getcenterlines
  - center
  - lines
  - object
  - arrays
  - vba
  - vb
  - net
---

# IView.GetCenterLines

Gets all of the centerline annotations on this drawing view.

## Signature

```csharp
System.Object GetCenterLines()
```
## Parameters

None.

## Return Value

Array of centerlines

## Remarks

Use this method to obtain the array of centerlines all at once instead of calling
IView::GetFirstCenterLine
and then repeatedly calling
ICenterLine::GetNext
to obtain the remaining centerlines in the drawing view.

## Examples

- Get Annotations Arrays (VBA) (Get_Annotations_Array_Example_VB.htm)
- Get Annotations Arrays (VB.NET) (Get_Annotations_Arrays_Example_VBNET.htm)
- Get Annotations Arrays (C#) (Get_Annotations_Arrays_Example_CSharp.htm)

## See Also

- `IView.GetCenterLineCount`
- `IView.IGetCenterLines`