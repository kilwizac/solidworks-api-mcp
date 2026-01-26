---
type: property
interface: IFeatureManager
member: ViewFeatures
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
  - viewfeatures
  - ifeaturemanager
  - feature
  - manager
  - view
  - features
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

# IFeatureManager.ViewFeatures

Gets or sets whether to view the FeatureManager design tree by its features.

## Signature

```csharp
System.Boolean ViewFeatures {get; set;}
```
## Parameters

None.

## Return Value

True to view the FeatureManager design tree by its features, false to not (see Remarks )

## Remarks

Setting IFeatureManager::ViewFeatures to true sets
IFeatureManager::ViewDependencies
to false, and vice versa.

## Examples

- Get and Set FeatureManager Design Tree Display (C#) (Get_and_Set_FeatureManager_Design_Tree_Display_Example_CSharp.htm)
- Get and Set FeatureManager Design Tree Display (VB.NET) (Get_and_Set_FeatureManager_Design_Tree_Display_Example_VBNET.htm)
- Get and Set FeatureManager Design Tree Display (VBA) (Get_and_Set_FeatureManager_Design_Tree_Display_Example_VB.htm)

## See Also

- `IFeatureManager.ShowFeatureDetails`
- `IFeatureManager.ShowHierarchyOnly`