---
type: method
interface: IView
member: GetWeldBeads
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetFirstWeldBead
  - IView.GetWeldBeadCount
  - IView.IGetWeldBeads
  - IWeldBead.GetNext
keywords:
  - weld
  - beads
  - see
  - iweldmentbeadfeaturedata
  - iweldbead
  - interfaces
  - annotation
  - also
  - iannotation
  - view
  - iview
  - getweldbeads
  - object
  - annotations
  - arrays
  - vba
  - vb
  - net
---

# IView.GetWeldBeads

Gets all of the weld beads on this drawing view.

## Signature

```csharp
System.Object GetWeldBeads()
```
## Parameters

None.

## Return Value

Array of weld beads

## Remarks

Use this method to obtain the array of weld beads all at once instead of calling
IView::GetFirstWeldBead
and then repeatedly calling
IWeldBead::GetNext
to obtain the weld beads.

## Examples

- Get Annotations Arrays (VBA) (Get_Annotations_Array_Example_VB.htm)
- Get Annotations Arrays (VB.NET) (Get_Annotations_Arrays_Example_VBNET.htm)
- Get Annotations Arrays (C#) (Get_Annotations_Arrays_Example_CSharp.htm)

## See Also

- `IView.GetFirstWeldBead`
- `IView.GetWeldBeadCount`
- `IView.IGetWeldBeads`
- `IWeldBead.GetNext`