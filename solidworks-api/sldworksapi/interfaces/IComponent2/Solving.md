---
type: property
interface: IComponent2
member: Solving
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IAssemblyDoc.CompConfigProperties5
keywords:
  - components
  - see
  - also
  - icomponent2
  - properties
  - rigid
  - sub
  - assemblies
  - solving
  - component2
  - int32
  - component
  - state
  - vb
  - net
  - vba
readonly: true
---

# IComponent2.Solving

Gets the Solve as option (rigid or flexible) of this component.

## Signature

```csharp
System.Int32 Solving {get;}
```
## Parameters

None.

## Return Value

Solve as option as defined in swComponentSolvingOption_e

## Remarks

You can also use
IAssemblyDoc::CompConfigProperties4
to set the
Solve as
state of a component.
This property only applies to subassembly components, not part components. If you try to get the
Solve as
option of a part component, this property returns -1.

## Examples

- Get Component State (C#) (Get_Component_State_Example_CSharp.htm)
- Get Component State (VB.NET) (Get_Component_State_Example_VBNET.htm)
- Get Component State (VBA) (Get_Component_State_Example_VB.htm)

## See Also

- `IAssemblyDoc.CompConfigProperties5`