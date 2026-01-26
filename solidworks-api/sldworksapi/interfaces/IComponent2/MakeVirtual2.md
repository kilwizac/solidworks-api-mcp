---
type: method
interface: IComponent2
member: MakeVirtual2
returns: System.Boolean
parameters:
  -
    name: AlsoChildVirtual
    type: System.Boolean
    description: True to make child components of this component virtual, false to keep the child components linked to external files
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IAssemblyDoc.InsertNewVirtualAssembly
  - IAssemblyDoc.InsertNewVirtualPart
  - IComponent2.IsVirtual
  - IComponent2.SaveVirtualComponent
  - IModelDocExtension.IsVirtualComponent3
keywords:
  - virtual
  - component
  - components
  - see
  - also
  - icomponent2
  - makevirtual2
  - component2
  - make
  - virtual2
  - child
  - boolean
  - add
  - mate
  - vb
  - net
  - vba
---

# IComponent2.MakeVirtual2

Makes this component and optionally its child components virtual by saving them in the current assembly.

## Signature

```csharp
System.Boolean MakeVirtual2( 
   System.Boolean
AlsoChildVirtual
)
```
## Parameters

- `AlsoChildVirtual` (System.Boolean): True to make child components of this component virtual, false to keep the child components linked to external files

## Return Value

True if this component and optionally its child components are saved in an assembly, false if not

## Remarks

This method breaks the link to the external component file and optionally the links to any of its child component files. Existing references are ignored, and the component and optionally any of its child components are renamed.

## Examples

- Add Component and Mate (C#) (Add_Component_and_Mate_Example_CSharp.htm)
- Add Component and Mate (VB.NET) (Add_Component_and_Mate_Example_VBNET.htm)
- Add Component and Mate (VBA) (Add_Component_and_Mate_Example_VB.htm)

## See Also

- `IAssemblyDoc.InsertNewVirtualAssembly`
- `IAssemblyDoc.InsertNewVirtualPart`
- `IComponent2.IsVirtual`
- `IComponent2.SaveVirtualComponent`
- `IModelDocExtension.IsVirtualComponent3`