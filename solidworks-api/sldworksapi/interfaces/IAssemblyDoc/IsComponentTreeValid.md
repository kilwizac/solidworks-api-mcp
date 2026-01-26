---
type: method
interface: IAssemblyDoc
member: IsComponentTreeValid
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
  - tree
  - iscomponenttreevalid
  - iassemblydoc
  - assembly
  - doc
  - component
  - valid
  - boolean
---

# IAssemblyDoc.IsComponentTreeValid

Checks the validity of the component tree for this assembly.

## Signature

```csharp
System.Boolean IsComponentTreeValid()
```
## Parameters

None.

## Return Value

True if the component tree is currently valid, false if the tree is currently invalid

## Remarks

In certain cases, the current assembly component tree is invalid.
You cannot query the assembly for a list of components
(IComponent2::GetChildren
) or use existing IComponent2 objects to make function calls.
If you use the IComponent2 object's methods, then this method returns a NULL or empty value.