---
type: method
interface: IMultiJogLeader
member: IGetArrowHeadAtIndex
returns: System.Double
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
  - IMultiJogLeader.GetArrowHeadAtIndex
  - IMultiJogLeader.GetArrowHeadCount
keywords:
  - arrows
  - multi
  - jog
  - leaders
  - igetarrowheadatindex
  - imultijogleader
  - leader
  - arrow
  - head
  - index
  - int32
  - double
---

# IMultiJogLeader.IGetArrowHeadAtIndex

Gets the information for the specified arrow head.

## Signature

```csharp
System.Double IGetArrowHeadAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the arrow head where the index begins at 0

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

- `IMultiJogLeader.GetArrowHeadAtIndex`
- `IMultiJogLeader.GetArrowHeadCount`