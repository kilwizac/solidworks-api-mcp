---
type: property
interface: IFeatureManager
member: GroupComponentInstances
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IAssemblyDoc.ReorderComponents
  - IAssemblyDoc.ReorganizeComponents
  - IAssemblyDoc.UngroupComponents
keywords:
  - components
  - see
  - also
  - icomponent2
  - group
  - featuremanager
  - design
  - tree
  - ifeaturemanager
  - ifeatmgrview
  - interfaces
  - folders
  - grouped
  - assemblies
  - iassemblydoc
  - groupcomponentinstances
  - feature
  - manager
  - component
  - instances
  - boolean
  - ungroup
  - vb
  - net
  - vba
readonly: null
---

# IFeatureManager.GroupComponentInstances

Gets or sets whether to group the same components in the same configuration in an assembly into a folder in the FeatureManager design tree.

## Signature

```csharp
System.Boolean GroupComponentInstances {get; set;}
```
## Parameters

None.

## Return Value

True to group the same components in the same configuration in an assembly into a folder in the FeatureManager design tree, false to ungroup them

## Examples

- Group and Ungroup Components (C#) (Group_Components_Example_CSharp.htm)
- Group and Ungroup Components (VB.NET) (Group_Components_Example_VBNET.htm)
- Group and Ungroup Components (VBA) (Group_Components_Example_VB.htm)

## See Also

- `IAssemblyDoc.ReorderComponents`
- `IAssemblyDoc.ReorganizeComponents`
- `IAssemblyDoc.UngroupComponents`