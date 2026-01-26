---
type: method
interface: IComponent2
member: GetID
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related: []
keywords:
  - id
  - component
  - components
  - see
  - also
  - icomponent2
  - getid
  - component2
  - int32
  - state
  - vb
  - net
  - vba
  - ids
  - top
  - level
  - using
---

# IComponent2.GetID

Gets the component ID for this component.

## Signature

```csharp
System.Int32 GetID()
```
## Parameters

None.

## Return Value

ID for this component

## Remarks

A component ID:
is unique within the context of the assembly to which it belongs.
NOTE:
A component ID might not be unique across subassemblies within the assembly. For example, a component in subassembly A might have a component ID of 1, and a component in subassembly B might also have a component ID of 1.
is persistent across SOLIDWORKS Design sessions and never changes, even if you
change the name of the component
.
can be used to identify a specific component in an assembly. Use the component ID returned by this method with
IAssemblyDoc::GetComponentByID
to get a top-level assembly component.
cannot be assigned by applications or users.
is not the same as a
persistent reference ID
. You can get any component using its persistent reference ID.

## Examples

- Get Component State (C#) (Get_Component_State_Example_CSharp.htm)
- Get Component State (VB.NET) (Get_Component_State_Example_VBNET.htm)
- Get Component State (VBA) (Get_Component_State_Example_VB.htm)
- Get Component IDs (C#) (Get_Component_IDs_Example_CSharp.htm)
- Get Component IDs (VB.NET) (Get_Component_IDs_Example_VBNET.htm)
- Get Component IDs (VBA) (Get_Component_IDs_Example_VB.htm)
- Get Top-level Components Using Component IDs (C#) (Get_Top-level_Component_Using_Component_IDs_Example_CSharp.htm)
- Get Top-level Components Using Component IDs (VB.NET) (Get_Top-level_Component_Using_Component_IDs_Example_VBNET.htm)
- Get Top-level Components Using Component IDs (VBA) (Get_Top-level_Component_Using_Component_IDs_Example_VB.htm)