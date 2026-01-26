---
type: method
interface: IView
member: GetDatumTargetSymCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetDatumTargetSyms
keywords:
  - datum
  - targets
  - see
  - idatumtargetsym
  - getdatumtargetsymcount
  - iview
  - view
  - target
  - sym
  - count
  - int32
  - annotations
  - arrays
  - vb
  - net
  - vba
---

# IView.GetDatumTargetSymCount

Gets the number of datum target symbols on this drawing view.

## Signature

```csharp
System.Int32 GetDatumTargetSymCount()
```
## Parameters

None.

## Return Value

Number of datum target symbols

## Remarks

Call this method before calling
IView::IGetDatumTargetSyms
to determine the size of the array for that method.

## Examples

- Get Annotations Arrays (C#) (Get_Annotations_Arrays_Example_CSharp.htm)
- Get Annotations Arrays (VB.NET) (Get_Annotations_Arrays_Example_VBNET.htm)
- Get Annotations Arrays (VBA) (Get_Annotations_Array_Example_VB.htm)

## See Also

- `IView.GetDatumTargetSyms`