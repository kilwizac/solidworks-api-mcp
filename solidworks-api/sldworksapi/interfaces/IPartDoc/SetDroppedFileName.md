---
type: method
interface: IPartDoc
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
  - core
  - file-io
  - parts
  - ui
related:
  - DPartDocEvents_FileDropPreNotifyEventHandler
  - IAssemblyDoc.SetDroppedFileName
keywords:
  - setdroppedfilename
  - ipartdoc
  - part
  - doc
  - dropped
  - file
  - name
  - string
  - boolean
---

# IPartDoc.SetDroppedFileName

Sets the filename for a recently dropped file.

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

- `DPartDocEvents_FileDropPreNotifyEventHandler`
- `IAssemblyDoc.SetDroppedFileName`