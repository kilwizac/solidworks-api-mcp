---
type: method
interface: ISketchBlockDefinition
member: Save
returns: System.Boolean
parameters:
  -
    name: FileName
    type: System.String
    description: Path, filename, and filename extension of .sldblk to which to save the block definition
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - file-io
  - sketches
related:
  - ISketchBlockDefinition.FileName
  - ISketchBlockDefinition.LinkToFile
  - ISketchManager.MakeSketchBlockFromFile
  - ISketchManager.MakeSketchBlockFromSelected
  - ISketchManager.MakeSketchBlockFromSketch
keywords:
  - save
  - block
  - definition
  - blocks
  - see
  - also
  - isketchblockdefinition
  - isketchblockinstance
  - interfaces
  - sketch
  - file
  - name
  - string
  - boolean
---

# ISketchBlockDefinition.Save

Saves the block definition.

## Signature

```csharp
System.Boolean Save( 
   System.String
FileName
)
```
## Parameters

- `FileName` (System.String): Path, filename, and filename extension of .sldblk to which to save the block definition

## Return Value

True if the block definition is saved, false if not

## See Also

- `ISketchBlockDefinition.FileName`
- `ISketchBlockDefinition.LinkToFile`
- `ISketchManager.MakeSketchBlockFromFile`
- `ISketchManager.MakeSketchBlockFromSelected`
- `ISketchManager.MakeSketchBlockFromSketch`