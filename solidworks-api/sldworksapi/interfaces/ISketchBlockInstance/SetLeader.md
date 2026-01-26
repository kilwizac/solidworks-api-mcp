---
type: method
interface: ISketchBlockInstance
member: SetLeader
returns: System.Boolean
parameters:
  -
    name: LeaderStyle
    type: System.Int32
    description: Leader style as defined in swLeaderStyle_e
  -
    name: ArrowHeadStyle
    type: System.Int32
    description: Arrowhead style as defined in swArrowStyle_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchBlockInstance.GetArrowHeadStyle
  - ISketchBlockInstance.GetLeaderPoints
  - ISketchBlockInstance.GetLeaderStyle
  - ISketchBlockInstance.IGetLeaderPoints
keywords:
  - leaders
  - blocks
  - see
  - also
  - isketchblockdefinition
  - isketchblockinstance
  - interfaces
  - setleader
  - sketch
  - block
  - instance
  - leader
  - style
  - int32
  - arrow
  - head
  - boolean
---

# ISketchBlockInstance.SetLeader

Sets the leader style for this block instance.

## Signature

```csharp
System.Boolean SetLeader( 
   System.Int32
LeaderStyle
,
   System.Int32
ArrowHeadStyle
)
```
## Parameters

- `LeaderStyle` (System.Int32): Leader style as defined in swLeaderStyle_e
- `ArrowHeadStyle` (System.Int32): Arrowhead style as defined in swArrowStyle_e

## Return Value

True if the leader style is set, false if not

## See Also

- `ISketchBlockInstance.GetArrowHeadStyle`
- `ISketchBlockInstance.GetLeaderPoints`
- `ISketchBlockInstance.GetLeaderStyle`
- `ISketchBlockInstance.IGetLeaderPoints`