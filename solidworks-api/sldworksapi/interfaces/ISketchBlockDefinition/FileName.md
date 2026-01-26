---
type: property
interface: ISketchBlockDefinition
member: FileName
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - file-io
  - sketches
related:
  - ISketchBlockDefinition.Save
keywords:
  - blocks
  - see
  - also
  - isketchblockdefinition
  - isketchblockinstance
  - interfaces
  - file
  - files
  - filename
  - sketch
  - block
  - definition
  - name
  - string
readonly: null
---

# ISketchBlockDefinition.FileName

Gets or sets the name of the file to which }}-->the block definition is linked.

## Signature

```csharp
System.String FileName {get; set;}
```
## Parameters

None.

## Return Value

Path and filename of the block definition file

## Remarks

The file can be either a native SOLIDWORKS block file (.
sldblk
) or a non-native SOLIDWORKS file (.
dxf
or .
dwg
).
This method gets the name of the file with which this block definition is associated, regardless of whether or not the link is enabled. SOLIDWORKS continues to store the name of the file if the link is disabled. Use
ISketchBlockDefintion::LinkToFile
to determine if the block definition is linked to a file.

## See Also

- `ISketchBlockDefinition.Save`