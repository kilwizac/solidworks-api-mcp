---
type: method
interface: ISketchBlockDefinition
member: GetUserPointsCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
  - ui
related:
  - ISketchBlockDefinition.GetUserPoints
keywords:
  - points
  - blocks
  - see
  - also
  - isketchblockdefinition
  - isketchblockinstance
  - interfaces
  - getuserpointscount
  - sketch
  - block
  - definition
  - user
  - count
  - int32
---

# ISketchBlockDefinition.GetUserPointsCount

Gets the number of user points in this block definition.

## Signature

```csharp
System.Int32 GetUserPointsCount()
```
## Parameters

None.

## Return Value

Number of user points

## Remarks

Call this method before calling
ISketchBlockDefinition::IGetUserPoints
to get the size of the array for that method.

## See Also

- `ISketchBlockDefinition.GetUserPoints`