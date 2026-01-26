---
type: method
interface: IComponent2
member: MakeVirtual
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - assemblies
related: []
keywords:
  - makevirtual
  - icomponent2
  - component2
  - make
  - virtual
  - boolean
---

# IComponent2.MakeVirtual

Obsolete. by Superseded by IComponent2::MakeVirtual2.

## Signature

```csharp
System.Boolean MakeVirtual()
```
## Parameters

None.

## Return Value

True if this component is saved in an assembly, false if not

## Remarks

This method breaks the link to the external component file. Existing references are ignored, and the component is renamed.