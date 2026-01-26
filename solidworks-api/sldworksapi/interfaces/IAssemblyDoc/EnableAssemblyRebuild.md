---
type: property
interface: IAssemblyDoc
member: EnableAssemblyRebuild
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related: []
keywords:
  - rebuild
  - assembly
  - assemblies
  - see
  - also
  - iassemblydoc
  - suspend
  - automatic
  - rebuilds
  - enableassemblyrebuild
  - doc
  - enable
  - boolean
  - vba
readonly: null
---

# IAssemblyDoc.EnableAssemblyRebuild

Gets or sets whether to suspend the rebuild of the assembly.

## Signature

```csharp
System.Boolean EnableAssemblyRebuild {get; set;}
```
## Parameters

None.

## Return Value

True to suspend rebuilding the assembly, false to rebuild the assembly (false is the default)

## Examples

- Suspend Automatic Rebuilds (VBA) (Suspend_Automatic_Rebuilds_of_an_Assembly_Example_VB.htm)