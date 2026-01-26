---
type: method
interface: IComponent2
member: SaveVirtualComponent
returns: System.Boolean
parameters:
  -
    name: CompPathName
    type: System.String
    description: String containing full pathname of file to save component to
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - file-io
related:
  - IAssemblyDoc.InsertNewAssembly
  - IAssemblyDoc.InsertNewVirtualAssembly
  - IAssemblyDoc.InsertNewVirtualPart
  - IComponent2.IsVirtual
  - IComponent2.MakeVirtual
  - IModelDocExtension.IsVirtualComponent3
keywords:
  - components
  - see
  - also
  - icomponent2
  - virtual
  - component
  - savevirtualcomponent
  - component2
  - save
  - comp
  - path
  - name
  - string
  - boolean
  - insert
  - new
  - vb
  - net
  - vba
---

# IComponent2.SaveVirtualComponent

Saves a virtual component to an external file.

## Signature

```csharp
System.Boolean SaveVirtualComponent( 
   System.String
CompPathName
)
```
## Parameters

- `CompPathName` (System.String): String containing full pathname of file to save component to

## Return Value

True if successful, false if not

## Examples

- Insert New Virtual Component (C#) (Insert_New_Virtual_Component_Example_CSharp.htm)
- Insert New Virtual Component (VB.NET) (Insert_New_Virtual_Component_Example_VBNET.htm)
- Insert New Virtual Component (VBA) (Insert_New_Virtual_Component_Example_VB.htm)

## See Also

- `IAssemblyDoc.InsertNewAssembly`
- `IAssemblyDoc.InsertNewVirtualAssembly`
- `IAssemblyDoc.InsertNewVirtualPart`
- `IComponent2.IsVirtual`
- `IComponent2.MakeVirtual`
- `IModelDocExtension.IsVirtualComponent3`