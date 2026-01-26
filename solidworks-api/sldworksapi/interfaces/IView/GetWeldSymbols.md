---
type: method
interface: IView
member: GetWeldSymbols
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetWeldSymbolCount
  - IView.IGetWeldSymbols
keywords:
  - weld
  - symbols
  - see
  - iweldsymbol
  - annotation
  - also
  - iannotation
  - view
  - iview
  - getweldsymbols
  - object
  - annotations
  - arrays
  - vba
  - vb
  - net
---

# IView.GetWeldSymbols

Gets all of the weld symbols on this drawing view.

## Signature

```csharp
System.Object GetWeldSymbols()
```
## Parameters

None.

## Return Value

Array of weld symbols

## Remarks

This method can be used to obtain the array of annotations all at once instead of calling
IView::GetFirstWeldSymbol
and then repeatedly calling
IWeldSymbol::GetNext
to obtain the annotations.

## Examples

- Get Annotations Arrays (VBA) (Get_Annotations_Array_Example_VB.htm)
- Get Annotations Arrays (VB.NET) (Get_Annotations_Arrays_Example_VBNET.htm)
- Get Annotations Arrays (C#) (Get_Annotations_Arrays_Example_CSharp.htm)

## See Also

- `IView.GetWeldSymbolCount`
- `IView.IGetWeldSymbols`