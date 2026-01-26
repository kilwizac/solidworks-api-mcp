---
type: method
interface: IView
member: GetSFSymbolCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetSFSymbols
keywords:
  - surface
  - finish
  - symbols
  - see
  - isfsymbol
  - getsfsymbolcount
  - iview
  - view
  - sf
  - symbol
  - count
  - int32
  - annotations
  - arrays
  - vb
  - net
  - vba
---

# IView.GetSFSymbolCount

Gets the number of surface finish symbols on this drawing view.

## Signature

```csharp
System.Int32 GetSFSymbolCount()
```
## Parameters

None.

## Return Value

Total number of surface finish symbols on this drawing view

## Remarks

Call this method before calling
IView::IGetSFSymbols
to determine the size of the array for that method.

## Examples

- Get Annotations Arrays (C#) (Get_Annotations_Arrays_Example_CSharp.htm)
- Get Annotations Arrays (VB.NET) (Get_Annotations_Arrays_Example_VBNET.htm)
- Get Annotations Arrays (VBA) (Get_Annotations_Array_Example_VB.htm)

## See Also

- `IView.GetSFSymbols`