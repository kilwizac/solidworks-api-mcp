---
type: method
interface: IWeldSymbol
member: GetArrowHeadAtIndex
returns: System.Object
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the arrow head where the index begins at 0
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IWeldSymbol.GetArrowHeadCount
  - IWeldSymbol.GetArrowHeadInfo
  - IWeldSymbol.IGetArrowHeadAtIndex
  - IWeldSymbol.IGetArrowHeadInfo
keywords:
  - getarrowheadatindex
  - iweldsymbol
  - weld
  - symbol
  - arrow
  - head
  - index
  - int32
  - object
---

# IWeldSymbol.GetArrowHeadAtIndex

Gets information on the specified arrowhead in this weld symbol.

## Signature

```csharp
System.Object GetArrowHeadAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the arrow head where the index begins at 0

## Return Value

Array of doubles (see Remarks)

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

- `IWeldSymbol.GetArrowHeadCount`
- `IWeldSymbol.GetArrowHeadInfo`
- `IWeldSymbol.IGetArrowHeadAtIndex`
- `IWeldSymbol.IGetArrowHeadInfo`