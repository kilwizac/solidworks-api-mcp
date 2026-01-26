---
type: method
interface: IAssemblyDoc
member: ShowExploded
returns: System.Boolean
parameters:
  -
    name: ShowIt
    type: System.Boolean
    description: True if you want to show the existing exploded state for the current assembly configuration, false if you want to show the assembly in the collapsed state
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.AutoExplode
  - IAssemblyDoc.ViewCollapseAssembly
  - IAssemblyDoc.ViewExplodeAssembly
keywords:
  - showexploded
  - iassemblydoc
  - assembly
  - doc
  - show
  - exploded
  - it
  - boolean
---

# IAssemblyDoc.ShowExploded

Obsolete. Superseded by IAssemblyDoc::ShowExploded2.

## Signature

```csharp
System.Boolean ShowExploded( 
   System.Boolean
ShowIt
)
```
## Parameters

- `ShowIt` (System.Boolean): True if you want to show the existing exploded state for the current assembly configuration, false if you want to show the assembly in the collapsed state

## Return Value

True if successful in displaying the existing exploded assembly state, false if not

## See Also

- `IAssemblyDoc.AutoExplode`
- `IAssemblyDoc.ViewCollapseAssembly`
- `IAssemblyDoc.ViewExplodeAssembly`