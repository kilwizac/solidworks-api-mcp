---
type: property
interface: IFeatureManager
member: ViewDependencies
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - ui
related:
  - IFeatureManager.ShowFeatureDetails
  - IFeatureManager.ShowHierarchyOnly
keywords:
  - viewdependencies
  - ifeaturemanager
  - feature
  - manager
  - view
  - dependencies
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

# IFeatureManager.ViewDependencies

Gets or sets whether to view the FeatureManager design tree by its dependencies.

## Signature

```csharp
System.Boolean ViewDependencies {get; set;}
```
## Parameters

None.

## Return Value

True to view the FeatureManager design tree by its dependencies, false to not (see Remarks )

## Remarks

Setting IFeatureManager::ViewDependencies to true sets
IFeatureManager::ViewFeatures
to false, and vice versa.

## Examples

- Get and Set FeatureManager Design Tree Display (C#) (Get_and_Set_FeatureManager_Design_Tree_Display_Example_CSharp.htm)
- Get and Set FeatureManager Design Tree Display (VB.NET) (Get_and_Set_FeatureManager_Design_Tree_Display_Example_VBNET.htm)
- Get and Set FeatureManager Design Tree Display (VBA) (Get_and_Set_FeatureManager_Design_Tree_Display_Example_VB.htm)

## See Also

- `IFeatureManager.ShowFeatureDetails`
- `IFeatureManager.ShowHierarchyOnly`