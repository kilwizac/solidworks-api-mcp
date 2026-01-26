---
type: method
interface: IView
member: GetDatumTargetSyms
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetDatumTargetSymCount
  - IView.IGetDatumTargetSyms
keywords:
  - datum
  - targets
  - see
  - idatumtargetsym
  - annotation
  - also
  - iannotation
  - view
  - iview
  - getdatumtargetsyms
  - target
  - syms
  - object
  - annotations
  - arrays
  - vb
  - net
  - vba
---

# IView.GetDatumTargetSyms

Gets all of the datum target symbols on this drawing view.

## Signature

```csharp
System.Object GetDatumTargetSyms()
```
## Parameters

None.

## Return Value

Array of datum target symbols

## Remarks

Use this method to obtain the array of datum target symbols all at once instead of calling
IView::GetFirstDatumTargetSym
and then repeatedly calling
IDatumTargetSym::GetNext
to obtain the remaining datum target symbols on this drawing view.

## Examples

- Get Annotations Arrays (VB.NET) (Get_Annotations_Arrays_Example_VBNET.htm)
- Get Annotations Arrays (C#) (Get_Annotations_Arrays_Example_CSharp.htm)
- Get Annotations Arrays (VBA) (Get_Annotations_Array_Example_VB.htm)

## See Also

- `IView.GetDatumTargetSymCount`
- `IView.IGetDatumTargetSyms`