---
type: method
interface: IDatumTag
member: GetArrowHeadAtIndex
returns: System.Object
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the arrow head; index begins at 0
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDatumTag.GetArrowHeadCount
  - IDatumTag.IGetArrowHeadAtIndex
keywords:
  - getarrowheadatindex
  - idatumtag
  - datum
  - tag
  - arrow
  - head
  - index
  - int32
  - object
---

# IDatumTag.GetArrowHeadAtIndex

Gets information on the specified arrow head in this datum tag.

## Signature

```csharp
System.Object GetArrowHeadAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the arrow head; index begins at 0

## Return Value

Array of doubles (see Remarks )

## Remarks

The return value is the following array of doubles :
[
arrowHeadPt[3], arrowHeadDir[3], arrowHeadWidth, arrowHeadHeight, arrowHeadStyle
]
where:
arrowHeadPt[3]
XYZ arrow head tip location
arrowHeadDir[3]
XYZ arrow head direction
arrowHeadWidth
Arrow head width where the width is measured along the arrow head direction
arrowHeadHeight
Arrow head height
arrowHeadStyle
Arrow head style as defined in
swArrowStyle_e

## See Also

- `IDatumTag.GetArrowHeadCount`
- `IDatumTag.IGetArrowHeadAtIndex`