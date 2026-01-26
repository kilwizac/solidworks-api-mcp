---
type: method
interface: ISketchManager
member: IGetSketchBlockDefinitions
returns: SketchBlockDefinition
parameters:
  -
    name: BlockDefCount
    type: System.Int32
    description: Number of block definitions
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
  - igetsketchblockdefinitions
  - isketchmanager
  - manager
  - block
  - def
  - count
  - int32
  - definition
---

# ISketchManager.IGetSketchBlockDefinitions

Gets all of the block definitions.

## Signature

```csharp
SketchBlockDefinition IGetSketchBlockDefinitions( 
   System.Int32
BlockDefCount
)
```
## Parameters

- `BlockDefCount` (System.Int32): Number of block definitions

## Return Value

in-process, unmanaged C++: Pointer to an array of block definitions VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
ISketchManager::GetSketchBlockDefinitionCount
to get the value of BlockDefCount.
See
Block Definitions and Block Instances
for details.

## See Also

- `ISketchManager.GetSketchBlockDefinitions`