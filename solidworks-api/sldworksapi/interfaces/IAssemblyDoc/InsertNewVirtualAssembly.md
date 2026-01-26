---
type: method
interface: IAssemblyDoc
member: InsertNewVirtualAssembly
returns: System.Int32
parameters:
  -
    name: InsertedComponent
    type: Component2
    description: New assembly inserted as virtual component
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.InsertNewAssembly
  - IAssemblyDoc.InsertNewVirtualPart
  - IComponent2.IsVirtual
  - IComponent2.MakeVirtual
  - IModelDocExtension.IsVirtualComponent3
keywords:
  - virtual
  - assembly
  - assemblies
  - see
  - also
  - iassemblydoc
  - insertnewvirtualassembly
  - doc
  - insert
  - new
  - inserted
  - component
  - component2
  - int32
  - vba
  - vb
  - net
---

# IAssemblyDoc.InsertNewVirtualAssembly

Creates a new assembly from this assembly and saves it internally as a virtual component.

## Signature

```csharp
System.Int32 InsertNewVirtualAssembly( 
   out Component2
InsertedComponent
)
```
## Parameters

- `InsertedComponent` (Component2): New assembly inserted as virtual component

## Return Value

Error code as defined by swInsertNewPartErrorCode_e

## Remarks

If nothing is pre-selected, this method inserts the virtual assembly into the main assembly. If a sub-assembly is pre-selected, it inserts the virtual assembly into the sub-assembly.

## Examples

- Insert New Virtual Assembly (VBA) (Insert_New_Virtual_Assembly_Example_VB.htm)
- Insert New Virtual Assembly (VB.NET) (Insert_New_Virtual_Assembly_Example_VBNET.htm)
- Insert New Virtual Assembly (C#) (Insert_New_Virtual_Assembly_Example_CSharp.htm)

## See Also

- `IAssemblyDoc.InsertNewAssembly`
- `IAssemblyDoc.InsertNewVirtualPart`
- `IComponent2.IsVirtual`
- `IComponent2.MakeVirtual`
- `IModelDocExtension.IsVirtualComponent3`