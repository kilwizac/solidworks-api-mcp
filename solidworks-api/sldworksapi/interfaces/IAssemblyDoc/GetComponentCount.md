---
type: method
interface: IAssemblyDoc
member: GetComponentCount
returns: System.Int32
parameters:
  -
    name: ToplevelOnly
    type: System.Boolean
    description: True to get only the number of components at the top level of the FeatureManager design tree, false to get the number of top level and all child components in the FeatureManager design tree
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IComponent2.GetChildren
  - IComponent2.GetParent
  - IConfiguration.GetRootComponent3
  - IConfiguration.IGetRootComponent2
  - IConfigurationManager.AddConfiguration
keywords:
  - getcomponentcount
  - iassemblydoc
  - assembly
  - doc
  - component
  - count
  - toplevel
  - only
  - boolean
  - int32
---

# IAssemblyDoc.GetComponentCount

Gets the number of components in the active configuration of this assembly.

## Signature

```csharp
System.Int32 GetComponentCount( 
   System.Boolean
ToplevelOnly
)
```
## Parameters

- `ToplevelOnly` (System.Boolean): True to get only the number of components at the top level of the FeatureManager design tree, false to get the number of top level and all child components in the FeatureManager design tree

## Return Value

Number of components

## Remarks

Use this method before using
IAssemblyDoc::IGetComponents
to determine the size of the array to pass into that method.

## See Also

- `IComponent2.GetChildren`
- `IComponent2.GetParent`
- `IConfiguration.GetRootComponent3`
- `IConfiguration.IGetRootComponent2`
- `IConfigurationManager.AddConfiguration`