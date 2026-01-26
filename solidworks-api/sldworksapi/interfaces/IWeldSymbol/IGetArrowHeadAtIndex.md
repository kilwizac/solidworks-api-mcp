---
type: method
interface: IWeldSymbol
member: IGetArrowHeadAtIndex
returns: System.Double
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the arrow head where the index begins at
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IWeldSymbol.GetArrowHeadAtIndex
  - IWeldSymbol.GetArrowHeadCount
  - IWeldSymbol.GetArrowHeadInfo
  - IWeldSymbol.IGetArrowHeadInfo
keywords:
  - igetarrowheadatindex
  - iweldsymbol
  - weld
  - symbol
  - arrow
  - head
  - index
  - int32
  - double
---

# IWeldSymbol.IGetArrowHeadAtIndex

Gets information on the specified arrowhead in this weld symbol.

## Signature

```csharp
System.Double IGetArrowHeadAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the arrow head where the index begins at

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

The return value is the following array of doubles :
[
arrowHeadPt
[3],
arrowHeadDir
[3],
arrowHeadWidth
,
arrowHeadHeight
,
arrowHeadStyle
]
where:
arrowHeadPt
[3]
= XYZ arrow head tip location.
arrowHeadDir
[3]
= XYZ arrow head direction.
arrowHeadWidth
= arrow head width where the width is measured along the arrow head direction.
arrowHeadHeight
= arrow head height.
arrowHeadStyle
= arrow head style (that is, open, closed, and so on) as defined in
swArrowStyle_e
.

## See Also

- `IWeldSymbol.GetArrowHeadAtIndex`
- `IWeldSymbol.GetArrowHeadCount`
- `IWeldSymbol.GetArrowHeadInfo`
- `IWeldSymbol.IGetArrowHeadInfo`