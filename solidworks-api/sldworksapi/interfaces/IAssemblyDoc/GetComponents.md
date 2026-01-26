---
type: method
interface: IAssemblyDoc
member: GetComponents
returns: System.Object
parameters:
  -
    name: ToplevelOnly
    type: System.Boolean
    description: True to get only the top-level components of the FeatureManager design tree, false to get both the top-level and child components in the FeatureManager design tree
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.GetComponentByID
  - IAssemblyDoc.GetComponentCount
  - IAssemblyDoc.IGetComponents
  - IAssemblyDoc.SelectiveOpen
  - IComponent2.GetChildren
  - IComponent2.GetParent
  - IConfiguration.GetRootComponent3
  - IConfiguration.IGetRootComponent2
  - IConfigurationManager.ActiveConfiguration
keywords:
  - components
  - see
  - also
  - icomponent2
  - assemblies
  - iassemblydoc
  - getcomponents
  - assembly
  - doc
  - toplevel
  - only
  - boolean
  - object
  - insert
  - midsurface
  - component
  - vb
  - net
  - vba
  - mates
---

# IAssemblyDoc.GetComponents

Gets all of the components in the active configuration of this assembly.

## Signature

```csharp
System.Object GetComponents( 
   System.Boolean
ToplevelOnly
)
```
## Parameters

- `ToplevelOnly` (System.Boolean): True to get only the top-level components of the FeatureManager design tree, false to get both the top-level and child components in the FeatureManager design tree

## Return Value

Array of IComponent2 s (see Remarks )

## Remarks

The components returned by this method can be in any order. You should not rely on the order to indicate anything about children or parents. If the hierarchy and order are important, then use
IModelDoc2::FirstFeature
,
IFeature::GetTypeName2
,
IFeature::GetSpecificFeature2
,
IComponent2::FirstFeature
, and
IFeature::GetNextFeature
to retrieve your information.

## Examples

- Insert MidSurface in Components (C#) (Insert_MidSurface_in_Component_Example_CSharp.htm)
- Insert MidSurface in Component (VB.NET) (Insert_MidSurface_in_Component_Example_VBNET.htm)
- Insert MidSurface in Component (VBA) (Insert_MidSurface_in_Component_Example_VB.htm)
- Get Mates (VB.NET) (Get_Mates_Example_VBNET.htm)
- Get Mates (C#) (Get_Mates_Example_CSharp.htm)

## See Also

- `IAssemblyDoc.GetComponentByID`
- `IAssemblyDoc.GetComponentCount`
- `IAssemblyDoc.IGetComponents`
- `IAssemblyDoc.SelectiveOpen`
- `IComponent2.GetChildren`
- `IComponent2.GetParent`
- `IConfiguration.GetRootComponent3`
- `IConfiguration.IGetRootComponent2`
- `IConfigurationManager.ActiveConfiguration`