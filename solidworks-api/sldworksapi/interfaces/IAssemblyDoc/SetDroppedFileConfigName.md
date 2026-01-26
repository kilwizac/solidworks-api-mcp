---
type: method
interface: IAssemblyDoc
member: SetDroppedFileConfigName
returns: System.Boolean
parameters:
  -
    name: ConfigName
    type: System.String
    description: Name of the configuration to set
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - file-io
  - ui
related:
  - IAssemblyDoc.GetDroppedAtEntity
  - IAssemblyDoc.SetDroppedFileName
keywords:
  - assemblies
  - see
  - also
  - iassemblydoc
  - configurations
  - configuration
  - iconfiguration
  - files
  - dropped
  - setdroppedfileconfigname
  - assembly
  - doc
  - file
  - config
  - name
  - string
  - boolean
---

# IAssemblyDoc.SetDroppedFileConfigName

Sets the configuration name for the recently dropped file.

## Signature

```csharp
System.Boolean SetDroppedFileConfigName( 
   System.String
ConfigName
)
```
## Parameters

- `ConfigName` (System.String): Name of the configuration to set

## Return Value

True if the name is successfully set, false if not

## Remarks

If the configuration name is set in response to the
FileDropNotify
event, SOLIDWORKS does not display the dialog for the selected configuration names when a file is dropped in an assembly.

## See Also

- `IAssemblyDoc.GetDroppedAtEntity`
- `IAssemblyDoc.SetDroppedFileName`