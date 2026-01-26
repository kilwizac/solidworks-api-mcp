---
type: method
interface: ISketchBlockInstance
member: GetLeaderStyle
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchBlockInstance.GetLeaderPoints
  - ISketchBlockInstance.IGetLeaderPoints
keywords:
  - leaders
  - blocks
  - see
  - also
  - isketchblockdefinition
  - isketchblockinstance
  - interfaces
  - getleaderstyle
  - sketch
  - block
  - instance
  - leader
  - style
  - int32
---

# ISketchBlockInstance.GetLeaderStyle

Gets the leader style of this block instance.

## Signature

```csharp
System.Int32 GetLeaderStyle()
```
## Parameters

None.

## Return Value

Leader style as defined in swLeaderStyle_e

## Remarks

Use
ISketchBlockInstance::SetLeader
to set the leader style.

## See Also

- `ISketchBlockInstance.GetLeaderPoints`
- `ISketchBlockInstance.IGetLeaderPoints`