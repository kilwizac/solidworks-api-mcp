---
type: method
interface: ICallout
member: GetTargetPoint
returns: void
parameters:
  -
    name: RowID
    type: System.Int32
    description: Row in callout
  -
    name: XPos
    type: System.Double
    description: x coordinate of target point
  -
    name: YPos
    type: System.Double
    description: y coordinate of target point
  -
    name: ZPos
    type: System.Double
    description: z coordinate of target point
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ICallout.SetTargetPoint
  - ICallout.UpdatePosition
keywords:
  - gettargetpoint
  - icallout
  - callout
  - target
  - point
  - row
  - id
  - int32
  - pos
  - double
  - void
---

# ICallout.GetTargetPoint

Gets the target point for the specified row in this callout.

## Signature

```csharp
void GetTargetPoint( 
   System.Int32
RowID
,
   out System.Double
XPos
,
   out System.Double
YPos
,
   out System.Double
ZPos
)
```
## Parameters

- `RowID` (System.Int32): Row in callout
- `XPos` (System.Double): x coordinate of target point
- `YPos` (System.Double): y coordinate of target point
- `ZPos` (System.Double): z coordinate of target point

## Return Value

Unknown.

## See Also

- `ICallout.SetTargetPoint`
- `ICallout.UpdatePosition`