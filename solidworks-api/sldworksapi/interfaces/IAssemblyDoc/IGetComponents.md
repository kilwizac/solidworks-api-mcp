---
type: method
interface: IAssemblyDoc
member: IGetComponents
returns: Component2
parameters:
  -
    name: ToplevelOnly
    type: System.Boolean
    description: True to get only the number of components at the top level of the FeatureManager design tree, false to get the number of top level and all child components in the FeatureManager design tree
  -
    name: Count
    type: System.Int32
    description: Number of components
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
  - igetcomponents
  - assembly
  - doc
  - toplevel
  - only
  - boolean
  - count
  - int32
  - component2
---

# IAssemblyDoc.IGetComponents

Gets all of the components in the active configuration of this assembly.

## Signature

```csharp
Component2 IGetComponents( 
   System.Boolean
ToplevelOnly
,
   System.Int32
Count
)
```
## Parameters

- `ToplevelOnly` (System.Boolean): True to get only the number of components at the top level of the FeatureManager design tree, false to get the number of top level and all child components in the FeatureManager design tree
- `Count` (System.Int32): Number of components

## Return Value

in-process, unmanaged C++: Pointer to an array of IComponent2 VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before using this method, use
IAssemblyDoc::GetComponentCount
to determine the size of the array to pass to this method.
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

## See Also

- `IAssemblyDoc.GetComponentByID`
- `IAssemblyDoc.GetComponents`
- `IComponent2.GetChildren`
- `IComponent2.GetParent`
- `IConfiguration.GetRootComponent3`
- `IConfiguration.IGetRootComponent2`
- `IConfigurationManager.ActiveConfiguration`