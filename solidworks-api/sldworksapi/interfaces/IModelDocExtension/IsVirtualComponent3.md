---
type: method
interface: IModelDocExtension
member: IsVirtualComponent3
returns: System.Boolean
parameters:
  -
    name: PathChain
    type: System.Object
    description: Array of fully qualified paths to parent assembly components, up to and including the first non-virtual parent assembly component, if the model is a virtual component
  -
    name: TitleChain
    type: System.Object
    description: Array of document titles; each document title corresponds to a fully qualified path in PathChain
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IAssemblyDoc.InsertNewVirtualAssembly
  - IComponent2.IsVirtual
  - IComponent2.MakeVirtual
keywords:
  - components
  - see
  - also
  - icomponent2
  - virtual
  - component
  - isvirtualcomponent3
  - imodeldocextension
  - model
  - doc
  - extension
  - component3
  - path
  - chain
  - object
  - title
  - boolean
  - paths
  - titles
  - parent
  - virutal
  - vb
  - net
  - vba
---

# IModelDocExtension.IsVirtualComponent3

Gets the paths to parent assembly components, up to and including the first non-virtual parent, if the model is a virtual component.

## Signature

```csharp
System.Boolean IsVirtualComponent3( 
   out System.Object
PathChain
,
   out System.Object
TitleChain
)
```
## Parameters

- `PathChain` (System.Object): Array of fully qualified paths to parent assembly components, up to and including the first non-virtual parent assembly component, if the model is a virtual component
- `TitleChain` (System.Object): Array of document titles; each document title corresponds to a fully qualified path in PathChain

## Return Value

True if the component is virtual, false if not

## Examples

- Get Paths and Titles of Parent of Virtual Component (C#) (Get_Paths_and_Titles_of_Parents_of_Virtual_Component_Example_CSharp.htm)
- Get Paths and Titles of Parent of Virutal Component (VB.NET) (Get_Paths_and_Titles_of_Parents_of_Virtual_Component_Example_VBNET.htm)
- Get Paths and Titles of Parent of Virtual Component (VBA) (Get_Paths_and_Titles_of_Parents_of_Virtual_Component_Example_VB.htm)

## See Also

- `IAssemblyDoc.InsertNewVirtualAssembly`
- `IComponent2.IsVirtual`
- `IComponent2.MakeVirtual`