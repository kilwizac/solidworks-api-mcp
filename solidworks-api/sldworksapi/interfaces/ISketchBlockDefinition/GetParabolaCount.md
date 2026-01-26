---
type: method
interface: ISketchBlockDefinition
member: GetParabolaCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchBlockDefinition.GetParabolas
keywords:
  - blocks
  - see
  - also
  - isketchblockdefinition
  - isketchblockinstance
  - interfaces
  - parabolas
  - getparabolacount
  - sketch
  - block
  - definition
  - parabola
  - count
  - int32
---

# ISketchBlockDefinition.GetParabolaCount

Gets the number of parabolas in this block definition.

## Signature

```csharp
System.Int32 GetParabolaCount()
```
## Parameters

None.

## Return Value

Number of parabolas

## Remarks

Call this method before calling
ISketchBlockDefinition::IGetParabolas
to get the size of the array for that method.

## See Also

- `ISketchBlockDefinition.GetParabolas`