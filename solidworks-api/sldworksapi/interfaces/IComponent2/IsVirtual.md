---
type: property
interface: IComponent2
member: IsVirtual
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IAssemblyDoc.InsertNewAssembly
  - IAssemblyDoc.InsertNewVirtualAssembly
  - IComponent2.MakeVirtual
  - IComponent2.SaveVirtualComponent
keywords:
  - components
  - see
  - also
  - icomponent2
  - virtual
  - component
  - isvirtual
  - component2
  - boolean
  - insert
  - new
  - vb
  - net
  - vba
readonly: null
---

# IComponent2.IsVirtual

Gets whether this component is a virtual component.

## Signature

```csharp
System.Boolean IsVirtual {get; set;}
```
## Parameters

None.

## Return Value

True if the component is a virtual component, false if not

## Remarks

When you create components in the context of an assembly, the software can save them inside the assembly file, and you can immediately begin modeling. Later, you can save the components to external files or delete them. Also, no
In-Place
mate is created, so you can position and constrain the component however you want.

## Examples

- Insert New Virtual Component (VB.NET) (Insert_New_Virtual_Component_Example_VBNET.htm)
- Insert New Virtual Component (C#) (Insert_New_Virtual_Component_Example_CSharp.htm)
- Insert New Virtual Component (VBA) (Insert_New_Virtual_Component_Example_VB.htm)

## See Also

- `IAssemblyDoc.InsertNewAssembly`
- `IAssemblyDoc.InsertNewVirtualAssembly`
- `IComponent2.MakeVirtual`
- `IComponent2.SaveVirtualComponent`