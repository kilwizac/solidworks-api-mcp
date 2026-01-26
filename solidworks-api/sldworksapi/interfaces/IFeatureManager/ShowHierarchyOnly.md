---
type: property
interface: IFeatureManager
member: ShowHierarchyOnly
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeatureManager.ShowDisplayStateNames
  - IFeatureManager.ViewDependencies
  - IFeatureManager.ViewFeatures
keywords:
  - showhierarchyonly
  - ifeaturemanager
  - feature
  - manager
  - show
  - hierarchy
  - only
  - boolean
  - featuremanager
  - design
  - tree
  - display
  - vb
  - net
  - vba
readonly: null
---

# IFeatureManager.ShowHierarchyOnly

Gets or sets whether to show only the hierarchy in the FeatureManager design tree.

## Signature

```csharp
System.Boolean ShowHierarchyOnly {get; set;}
```
## Parameters

None.

## Return Value

True to only show the hierarchy in the FeatureManager design tree, false to not (see Remarks )

## Remarks

Setting IFeatureManager::ShowHierarchyOnly to true sets
IFeatureManager::ShowFeatureDetails
to false, and vice versa.

## Examples

- Get and Set FeatureManager Design Tree Display (C#) (Get_and_Set_FeatureManager_Design_Tree_Display_Example_CSharp.htm)
- Get and Set FeatureManager Design Tree Display (VB.NET) (Get_and_Set_FeatureManager_Design_Tree_Display_Example_VBNET.htm)
- Get and Set FeatureManager Design Tree Display (VBA) (Get_and_Set_FeatureManager_Design_Tree_Display_Example_VB.htm)

## See Also

- `IFeatureManager.ShowDisplayStateNames`
- `IFeatureManager.ViewDependencies`
- `IFeatureManager.ViewFeatures`