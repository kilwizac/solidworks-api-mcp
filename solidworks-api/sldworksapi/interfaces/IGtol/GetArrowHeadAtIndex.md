---
type: method
interface: IGtol
member: GetArrowHeadAtIndex
returns: System.Object
parameters:
  -
    name: Index
    type: System.Int32
    description: 0-based index of the arrow head
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IGtol.GetArrowHeadCount
  - IGtol.GetArrowHeadInfo
  - IGtol.IGetArrowHeadAtIndex
  - IGtol.IGetArrowHeadInfo
keywords:
  - arrows
  - geometric
  - tolerancing
  - getarrowheadatindex
  - igtol
  - gtol
  - arrow
  - head
  - index
  - int32
  - object
---

# IGtol.GetArrowHeadAtIndex

Gets information on the specified arrow head in this GTol.

## Signature

```csharp
System.Object GetArrowHeadAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): 0-based index of the arrow head

## Return Value

Array of doubles (see Remarks )

## Remarks

The return value is an array of doubles in the following format:
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
XYZ arrow head tip location
arrowHeadDir
[3]
XYZ arrow head direction
arrowHeadWidth
Arrow head width where the width is measured along the arrow head direction
arrowHeadHeight
Arrow head height
arrowHeadStyle
Arrow head style as defined in
swArrowStyle_e

## See Also

- `IGtol.GetArrowHeadCount`
- `IGtol.GetArrowHeadInfo`
- `IGtol.IGetArrowHeadAtIndex`
- `IGtol.IGetArrowHeadInfo`