---
type: method
interface: ICallout
member: SetTargetPoint
returns: void
parameters:
  -
    name: RowID
    type: System.Int32
    description: Row in callout
  -
    name: XPos
    type: System.Double
    description: x coordinate for this target point
  -
    name: YPos
    type: System.Double
    description: y coordinate for this target point
  -
    name: ZPos
    type: System.Double
    description: z coordinate for this target poi
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ICallout.GetTargetPoint
  - ICallout.UpdatePosition
keywords:
  - settargetpoint
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
  - create
  - multi
  - callouts
  - vba
  - independent
  - selection
  - vb
  - net
---

# ICallout.SetTargetPoint

Sets the target point for the specified row in this callout.

## Signature

```csharp
void SetTargetPoint( 
   System.Int32
RowID
,
   System.Double
XPos
,
   System.Double
YPos
,
   System.Double
ZPos
)
```
## Parameters

- `RowID` (System.Int32): Row in callout
- `XPos` (System.Double): x coordinate for this target point
- `YPos` (System.Double): y coordinate for this target point
- `ZPos` (System.Double): z coordinate for this target poi

## Return Value

Unknown.

## Examples

- Create Multi-row Callouts (VBA) (Create_Multi-row_Callouts_Example_VB.htm)
- Create a Callout Independent of a Selection (C#) (Create_a_Callout_Independent_of_a_Selection_Example_CSharp.htm)
- Create a Callout Independent of a Selection (VB.NET) (Create_a_Callout_Independent_of_a_Selection_Example_VBNET.htm)
- Create a Callout Independent of a Selection (VBA) (Create_a_Callout_Independent_of_a_Selection_Example_VB.htm)

## See Also

- `ICallout.GetTargetPoint`
- `ICallout.UpdatePosition`