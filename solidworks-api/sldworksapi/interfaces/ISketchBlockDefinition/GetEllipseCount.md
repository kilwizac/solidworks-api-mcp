---
type: method
interface: ISketchBlockDefinition
member: GetEllipseCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchBlockDefinition.GetEllipses
keywords:
  - blocks
  - see
  - also
  - isketchblockdefinition
  - isketchblockinstance
  - interfaces
  - ellipses
  - getellipsecount
  - sketch
  - block
  - definition
  - ellipse
  - count
  - int32
---

# ISketchBlockDefinition.GetEllipseCount

Gets the number of ellipses in this block definition.

## Signature

```csharp
System.Int32 GetEllipseCount()
```
## Parameters

None.

## Return Value

Number of ellipses

## Remarks

Call this method before calling
ISketchBlockDefinition::IGetEllipses
to get the size of the array for that method.

## See Also

- `ISketchBlockDefinition.GetEllipses`