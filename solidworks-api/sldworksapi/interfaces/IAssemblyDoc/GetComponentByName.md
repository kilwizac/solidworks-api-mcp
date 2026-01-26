---
type: method
interface: IAssemblyDoc
member: GetComponentByName
returns: Component2
parameters:
  -
    name: CompName
    type: System.String
    description: Name of the top-level assembly component to get
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.GetComponentByID
  - IAssemblyDoc.GetComponents
  - IAssemblyDoc.GetUnloadedComponentNames
  - IAssemblyDoc.IGetComponents
  - IComponent2.GetSelectByIDString
  - IComponent2.Name2
keywords:
  - components
  - see
  - also
  - icomponent2
  - assemblies
  - iassemblydoc
  - name
  - names
  - getcomponentbyname
  - assembly
  - doc
  - component
  - comp
  - string
  - component2
  - vb
  - net
  - vba
---

# IAssemblyDoc.GetComponentByName

Gets the specified top-level assembly component.

## Signature

```csharp
Component2 GetComponentByName( 
   System.String
CompName
)
```
## Parameters

- `CompName` (System.String): Name of the top-level assembly component to get

## Return Value

Component

## Examples

- Get Component by Name (C#) (Get_Component_by_Name_Example_CSharp.htm)
- Get Component by Name (VB.NET) (Get_Component_by_Name_Example_VBNET.htm)
- Get Component by Name (VBA) (Get_Component_by_Name_Example_VB.htm)

## See Also

- `IAssemblyDoc.GetComponentByID`
- `IAssemblyDoc.GetComponents`
- `IAssemblyDoc.GetUnloadedComponentNames`
- `IAssemblyDoc.IGetComponents`
- `IComponent2.GetSelectByIDString`
- `IComponent2.Name2`