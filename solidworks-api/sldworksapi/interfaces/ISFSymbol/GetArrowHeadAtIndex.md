---
type: method
interface: ISFSymbol
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
  - ISFSymbol.GetArrowHeadCount
  - ISFSymbol.GetArrowHeadInfo
  - ISFSymbol.IGetArrowHeadInfo
keywords:
  - getarrowheadatindex
  - isfsymbol
  - isf
  - symbol
  - arrow
  - head
  - index
  - int32
  - object
---

# ISFSymbol.GetArrowHeadAtIndex

Gets information on the specified arrow head in this surface finish symbol.

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

Array of doubles (see Remarks )

## Remarks

Call
ISFSymbol::GetArrowHeadCount
before calling this method to get the number of arrow heads for this surface finish symbol.
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
= XYZ arrow head tip location
arrowHeadDir
[3]
= XYZ arrow head direction
arrowHeadWidth
= Arrow head width where the width is measured along the arrow head direction
arrowHeadHeight
= Arrow head height
arrowHeadStyle
= Arrow head style (for example, open or closed) as defined in
swArrowStyle_e

## See Also

- `ISFSymbol.GetArrowHeadCount`
- `ISFSymbol.GetArrowHeadInfo`
- `ISFSymbol.IGetArrowHeadInfo`