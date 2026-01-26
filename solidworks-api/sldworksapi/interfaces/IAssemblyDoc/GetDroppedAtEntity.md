---
type: method
interface: IAssemblyDoc
member: GetDroppedAtEntity
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.SetDroppedFileConfigName
  - IAssemblyDoc.SetDroppedFileName
keywords:
  - getdroppedatentity
  - iassemblydoc
  - assembly
  - doc
  - dropped
  - entity
  - object
---

# IAssemblyDoc.GetDroppedAtEntity

Gets a pointer to the entity where a file is dropped into this assembly.

## Signature

```csharp
System.Object GetDroppedAtEntity()
```
## Parameters

None.

## Return Value

Object for the entity

## Remarks

Use this method in the handler for the
FileDropNotify
event.

## See Also

- `IAssemblyDoc.SetDroppedFileConfigName`
- `IAssemblyDoc.SetDroppedFileName`