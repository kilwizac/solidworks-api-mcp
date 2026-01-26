---
type: method
interface: IAssemblyDoc
member: DissolveSubAssembly
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
  - components
  - see
  - also
  - icomponent2
  - patterns
  - dissolvesubassembly
  - iassemblydoc
  - assembly
  - doc
  - dissolve
  - sub
  - boolean
---

# IAssemblyDoc.DissolveSubAssembly

Dissolves the selected subassembly in this assembly.

## Signature

```csharp
System.Boolean DissolveSubAssembly()
```
## Parameters

None.

## Return Value

True if the subassembly was successfully dissolved, false if not

## Remarks

You must preselect the subassembly to dissolve when you run this method.
This method automatically deletes any features that need to be deleted as a result of the dissolve operation, without input from the user.
This method closes any component files when called in an assembly. If the components were modified, then those modifications are not automatically saved. You must save any modifications before the files are closed.