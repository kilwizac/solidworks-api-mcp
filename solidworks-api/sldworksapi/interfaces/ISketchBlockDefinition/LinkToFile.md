---
type: property
interface: ISketchBlockDefinition
member: LinkToFile
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - file-io
  - sketches
related:
  - ISketchManager.MakeSketchBlockFromFile
  - ISketchManager.MakeSketchBlockFromSelected
  - ISketchManager.MakeSketchBlockFromSketch
keywords:
  - blocks
  - see
  - also
  - isketchblockdefinition
  - isketchblockinstance
  - interfaces
  - file
  - files
  - linktofile
  - sketch
  - block
  - definition
  - link
  - boolean
  - any
  - document
  - vba
  - information
readonly: null
---

# ISketchBlockDefinition.LinkToFile

Gets or sets whether the block definition file is linked to a file.

## Signature

```csharp
System.Boolean LinkToFile {get; set;}
```
## Parameters

None.

## Return Value

True if the block definition is linked to a file, false if not

## Remarks

The file can be either a native SOLIDWORKS block file (.
sldblk
) or a non-native SOLIDWORKS file (.
dxf
or .
dwg
).
This property indicates whether the block definition is linked to an external file, which you can enable or disable on the block definition without destroying the file name. That is, the file name continues to be stored even if the link is disabled.
Use
ISketchBlockDefinition::FileName
to get the name of the file to which a block definition is linked.
You can link a block definition to a
.sldblk
file. However, you cannot save a block definition to a
.sldblk
file by only calling SketchBlockDefinition::FileName (True) and SketchBlockDefinition::LinkToFile (Filename). You must first either save the block by selecting it and calling
ISketchBlockDefinition::Save
, or you can assign the block to an already existing
.sldblk
file.

## Examples

- Get and Set Blocks in Any Document (VBA) (Get_and_Set_Blocks_Data_in_Any_Document_Example_VB.htm)
- Get Block Information (VBA) (Get_Block_Information_Example_VB.htm)

## See Also

- `ISketchManager.MakeSketchBlockFromFile`
- `ISketchManager.MakeSketchBlockFromSelected`
- `ISketchManager.MakeSketchBlockFromSketch`