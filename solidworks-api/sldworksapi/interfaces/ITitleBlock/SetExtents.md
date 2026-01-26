---
type: method
interface: ITitleBlock
member: SetExtents
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
  - ITitleBlock.GetExtents
keywords:
  - setextents
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

# ITitleBlock.SetExtents

Sets the coordinates on the drawing sheet format that define the extens of the title blcok.

## Signature

```csharp
void SetExtents( 
   System.Double
XUpperLeft
,
   System.Double
YUpperLeft
,
   System.Double
XLowerRight
,
   System.Double
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

- `ITitleBlock.GetExtents`