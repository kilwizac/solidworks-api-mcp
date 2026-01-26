---
type: property
interface: IFeatureManager
member: ShowFeatureDetails
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
  - showfeaturedetails
  - ifeaturemanager
  - feature
  - manager
  - show
  - details
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

# IFeatureManager.ShowFeatureDetails

Gets or sets whether to show the feature details in the FeatureManager design tree.

## Signature

```csharp
System.Boolean ShowFeatureDetails {get; set;}
```
## Parameters

None.

## Return Value

True to show the feature details in the FeatureManager design tree, false to hide them (see Remarks )

## Remarks

Setting IFeatureManager::ShowFeatureDetails to true sets
IFeatureManager::ShowHierarchyOnly
to false, and vice versa.
This property affects the FeatureManager design tree view of the current configuration of an assembly. It does not affect other configurations.

## Examples

- Get and Set FeatureManager Design Tree Display (C#) (Get_and_Set_FeatureManager_Design_Tree_Display_Example_CSharp.htm)
- Get and Set FeatureManager Design Tree Display (VB.NET) (Get_and_Set_FeatureManager_Design_Tree_Display_Example_VBNET.htm)
- Get and Set FeatureManager Design Tree Display (VBA) (Get_and_Set_FeatureManager_Design_Tree_Display_Example_VB.htm)

## See Also

- `IFeatureManager.ShowDisplayStateNames`
- `IFeatureManager.ViewDependencies`
- `IFeatureManager.ViewFeatures`