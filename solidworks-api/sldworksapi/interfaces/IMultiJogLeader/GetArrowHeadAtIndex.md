---
type: method
interface: IMultiJogLeader
member: GetArrowHeadAtIndex
returns: System.Object
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the arrow head
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IMultiJogLeader.GetArrowHeadCount
  - IMultiJogLeader.IGetArrowHeadAtIndex
keywords:
  - arrows
  - multi
  - jog
  - leaders
  - getarrowheadatindex
  - imultijogleader
  - leader
  - arrow
  - head
  - index
  - int32
  - object
---

# IMultiJogLeader.GetArrowHeadAtIndex

Gets information for the specified arrow head.

## Signature

```csharp
System.Object GetArrowHeadAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the arrow head

## Return Value

Array of doubles (see Remarks )

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
[3] = XYZ arrow head tip location.
arrowHeadDir
[3] = XYZ arrow head direction.
arrowHeadWidth
= arrow head width where the width is measured along the arrow head direction.
arrowHeadHeight
= arrow head height.
arrowHeadStyle
= arrow head style; for example, open, closed, and so on. See
swArrowStyle_e
.

## See Also

- `IMultiJogLeader.GetArrowHeadCount`
- `IMultiJogLeader.IGetArrowHeadAtIndex`