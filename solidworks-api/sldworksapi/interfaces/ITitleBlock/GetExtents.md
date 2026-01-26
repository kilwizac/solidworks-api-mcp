---
type: method
interface: ITitleBlock
member: GetExtents
returns: void
parameters:
  -
    name: XUpperLeft
    type: System.Double
    description: X upper-left coordinate
  -
    name: YUpperLeft
    type: System.Double
    description: Y upper-left coordinate
  -
    name: XLowerRight
    type: System.Double
    description: X lower-right coordinate
  -
    name: YLowerRight
    type: System.Double
    description: Y lower-right coordinate
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - ITitleBlock.SetExtents
keywords:
  - getextents
  - ititleblock
  - title
  - block
  - extents
  - upper
  - left
  - double
  - lower
  - right
  - void
---

# ITitleBlock.GetExtents

Gets the coordinates on the drawing sheet format that define the extents of the title block.

## Signature

```csharp
void GetExtents( 
   out System.Double
XUpperLeft
,
   out System.Double
YUpperLeft
,
   out System.Double
XLowerRight
,
   out System.Double
YLowerRight
)
```
## Parameters

- `XUpperLeft` (System.Double): X upper-left coordinate
- `YUpperLeft` (System.Double): Y upper-left coordinate
- `XLowerRight` (System.Double): X lower-right coordinate
- `YLowerRight` (System.Double): Y lower-right coordinate

## Return Value

Unknown.

## See Also

- `ITitleBlock.SetExtents`