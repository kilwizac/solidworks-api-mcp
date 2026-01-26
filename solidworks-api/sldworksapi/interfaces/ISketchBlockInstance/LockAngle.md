---
type: property
interface: ISketchBlockInstance
member: LockAngle
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchBlockDefinition.InsertionPoint
  - ISketchBlockInstance.Angle
  - ISketchBlockInstance.InstancePosition
keywords:
  - blocks
  - see
  - also
  - isketchblockdefinition
  - isketchblockinstance
  - interfaces
  - angle
  - lockangle
  - sketch
  - block
  - instance
  - lock
  - boolean
readonly: null
---

# ISketchBlockInstance.LockAngle

Gets or sets whether the angle around the insertion point which to rotate this block instance is locked.

## Signature

```csharp
System.Boolean LockAngle {get; set;}
```
## Parameters

None.

## Return Value

True to lock the angle of this block instance, false to not

## See Also

- `ISketchBlockDefinition.InsertionPoint`
- `ISketchBlockInstance.Angle`
- `ISketchBlockInstance.InstancePosition`