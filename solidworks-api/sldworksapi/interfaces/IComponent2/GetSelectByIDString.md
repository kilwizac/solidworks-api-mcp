---
type: method
interface: IComponent2
member: GetSelectByIDString
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - selections
related:
  - IAssemblyDoc.GetComponentByName
  - IAssemblyDoc.GetUnloadedComponentNames
  - IComponent2.Name2
keywords:
  - components
  - see
  - also
  - icomponent2
  - names
  - name
  - selective
  - open
  - getselectbyidstring
  - component2
  - select
  - id
  - string
  - component
  - selected
  - entity
  - vb
  - net
  - vba
---

# IComponent2.GetSelectByIDString

Gets the name of the component for possible use with IModelDocExtension::SelectByID2, for selectively opening a document using ISldWorks::OpenDoc7 and IDocumentSpecification, etc.

## Signature

```csharp
System.String GetSelectByIDString()
```
## Parameters

None.

## Return Value

Name of component

## Examples

- Get Component Name from Selected Entity (VB.NET) (Get_Component_Name_From_Selected_Entity_Example_VBNET.htm)
- Get Component Name From Selected Entity (VBA) (Get_Component_Name_From_Selected_Entity_Example_VB.htm)
- Get Component Name from Selected Entity (C#) (Get_Component_Name_From_Selected_Entity_Example_CSharp.htm)

## See Also

- `IAssemblyDoc.GetComponentByName`
- `IAssemblyDoc.GetUnloadedComponentNames`
- `IComponent2.Name2`