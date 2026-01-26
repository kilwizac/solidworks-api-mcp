---
type: method
interface: ISketchManager
member: GetSketchBlockDefinitionCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchManager.GetSketchBlockDefinitions
keywords:
  - blocks
  - see
  - also
  - isketchblockdefinition
  - isketchblockinstance
  - interfaces
  - definitions
  - sketch
  - isketch
  - getsketchblockdefinitioncount
  - isketchmanager
  - manager
  - block
  - definition
  - count
  - int32
---

# ISketchManager.GetSketchBlockDefinitionCount

Gets the number of block definitions in the model.

## Signature

```csharp
System.Int32 GetSketchBlockDefinitionCount()
```
## Parameters

None.

## Return Value

Number of block definitions in the model

## Remarks

Call this method before calling
ISketchManager::IGetSketchBlockDefinitions
to get the size of the array for that method.
See
Block Definitions and Block Instances
for details.

## See Also

- `ISketchManager.GetSketchBlockDefinitions`