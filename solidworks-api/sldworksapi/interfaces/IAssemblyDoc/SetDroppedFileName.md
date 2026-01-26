---
type: method
interface: IAssemblyDoc
member: SetDroppedFileName
returns: System.Boolean
parameters:
  -
    name: FileName
    type: System.String
    description: Name of the file to use for the rest of the drop process
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - file-io
  - ui
related:
  - DAssemblyDocEvents_FileDropPreNotifyEventHandler
  - IAssemblyDoc.GetDroppedAtEntity
  - IAssemblyDoc.SetDroppedFileConfigName
  - IAssemblyDoc.SetDroppedFileFeatureName
  - IPartDoc.SetDroppedFileName
keywords:
  - files
  - dropped
  - setdroppedfilename
  - iassemblydoc
  - assembly
  - doc
  - file
  - name
  - string
  - boolean
---

# IAssemblyDoc.SetDroppedFileName

Sets the new file name for a recently dropped file.

## Signature

```csharp
System.Boolean SetDroppedFileName( 
   System.String
FileName
)
```
## Parameters

- `FileName` (System.String): Name of the file to use for the rest of the drop process

## Return Value

True if name is set, false if not

## See Also

- `DAssemblyDocEvents_FileDropPreNotifyEventHandler`
- `IAssemblyDoc.GetDroppedAtEntity`
- `IAssemblyDoc.SetDroppedFileConfigName`
- `IAssemblyDoc.SetDroppedFileFeatureName`
- `IPartDoc.SetDroppedFileName`