---
type: property
interface: IModelDocExtension
member: IncludeMassPropertiesOfHiddenBodies
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IAssemblyDoc.HasUnloadedComponents
  - IAssemblyDoc.HideComponent
  - IAssemblyDoc.ISetComponentVisibility
  - IAssemblyDoc.SetComponentVisibility
  - IComponent2.HasUnloadedComponents
  - IComponent2.IsHidden
  - IModelDoc2.HideComponent2
  - IModelDocExtension.CreateMassProperty
keywords:
  - mass
  - properties
  - see
  - imassproperty
  - components
  - also
  - icomponent2
  - hidden
  - includemasspropertiesofhiddenbodies
  - imodeldocextension
  - model
  - doc
  - extension
  - include
  - bodies
  - boolean
  - visible
  - vb
  - net
  - vba
readonly: null
---

# IModelDocExtension.IncludeMassPropertiesOfHiddenBodies

Gets or sets whether to include the mass properties of hidden components in the assembly.

## Signature

```csharp
System.Boolean IncludeMassPropertiesOfHiddenBodies {get; set;}
```
## Parameters

None.

## Return Value

True to include the mass properties of hidden components in the assembly, false to not

## Examples

- Get Mass Properties of Visible and Hidden Components (C#) (Get_Mass_Properties_of_Visible_and_Hidden_Components_Example_CSharp.htm)
- Get Mass Properties of Visible and Hidden Components (VB.NET) (Get_Mass_Properties_of_Visible_and_Hidden_Components_Example_VBNET.htm)
- Get Mass Properties of Visible and Hidden Components (VBA) (Get_Mass_Properties_of_Visible_and_Hidden_Components_Example_VB.htm)

## See Also

- `IAssemblyDoc.HasUnloadedComponents`
- `IAssemblyDoc.HideComponent`
- `IAssemblyDoc.ISetComponentVisibility`
- `IAssemblyDoc.SetComponentVisibility`
- `IComponent2.HasUnloadedComponents`
- `IComponent2.IsHidden`
- `IModelDoc2.HideComponent2`
- `IModelDocExtension.CreateMassProperty`