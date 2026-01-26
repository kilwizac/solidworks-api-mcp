---
type: method
interface: IAssemblyDoc
member: InsertNewVirtualPart
returns: System.Int32
parameters:
  -
    name: FaceOrPlaneToSelect
    type: System.Object
    description: Plane or planar face
  -
    name: InsertedComponent
    type: Component2
    description: New part inserted as virtual component
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - parts
  - ui
related:
  - IAssemblyDoc.InsertNewAssembly
  - IAssemblyDoc.InsertNewVirtualAssembly
  - IComponent2.IsVirtual
  - IComponent2.MakeVirtual
  - IModelDocExtension.IsVirtualComponent3
keywords:
  - virtual
  - component
  - components
  - see
  - also
  - icomponent2
  - insertnewvirtualpart
  - iassemblydoc
  - assembly
  - doc
  - insert
  - new
  - part
  - face
  - plane
  - select
  - object
  - inserted
  - component2
  - int32
  - vb
  - net
  - vba
  - instance
---

# IAssemblyDoc.InsertNewVirtualPart

Creates a new part in the context of an assembly and saves the part internally in the assembly file as a virtual component.

## Signature

```csharp
System.Int32 InsertNewVirtualPart( 
   System.Object
FaceOrPlaneToSelect
,
   out Component2
InsertedComponent
)
```
## Parameters

- `FaceOrPlaneToSelect` (System.Object): Plane or planar face
- `InsertedComponent` (Component2): New part inserted as virtual component

## Return Value

Error as defined by swInsertNewPartErrorCode_e

## Examples

- Insert New Virtual Component (VB.NET) (Insert_New_Virtual_Component_Example_VBNET.htm)
- Insert New Virtual Component (VBA) (Insert_New_Virtual_Component_Example_VB.htm)
- Insert New Virtual Component (C#) (Insert_New_Virtual_Component_Example_CSharp.htm)
- Insert New Instance of Virtual Component (VBA) (Insert_New_Instance_of_Virtual_Component_Example_VB.htm)
- Insert New Instance of Virtual Component (VB.NET) (Insert_New_Instance_of_Virtual_Component_Example_VBNET.htm)
- Insert New Instance of Virtual Component (C#) (Insert_New_Instance_of_Virtual_Component_Example_CSharp.htm)

## See Also

- `IAssemblyDoc.InsertNewAssembly`
- `IAssemblyDoc.InsertNewVirtualAssembly`
- `IComponent2.IsVirtual`
- `IComponent2.MakeVirtual`
- `IModelDocExtension.IsVirtualComponent3`