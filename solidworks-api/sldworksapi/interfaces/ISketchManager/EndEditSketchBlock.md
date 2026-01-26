---
type: method
interface: ISketchManager
member: EndEditSketchBlock
returns: void
parameters:
  -
    name: AcceptChanges
    type: System.Boolean
    description: True to save your edits, false to discard them
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchBlockDefinition
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
  - endeditsketchblock
  - isketchmanager
  - manager
  - end
  - edit
  - block
  - accept
  - changes
  - boolean
  - void
---

# ISketchManager.EndEditSketchBlock

Saves or discards your edits of the block and then ends the current editing session of this block.

## Signature

```csharp
void EndEditSketchBlock( 
   System.Boolean
AcceptChanges
)
```
## Parameters

- `AcceptChanges` (System.Boolean): True to save your edits, false to discard them

## Return Value

Unknown.

## Remarks

Use
ISketchManager::EditSketchBlock
to put the block in edit mode.
See
Block Definitions and Block Instances
for details.

## See Also

- `ISketchBlockDefinition`