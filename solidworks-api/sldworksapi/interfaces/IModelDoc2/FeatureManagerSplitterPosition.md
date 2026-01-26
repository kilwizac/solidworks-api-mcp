---
type: property
interface: IModelDoc2
member: FeatureManagerSplitterPosition
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - features
  - ui
related: []
keywords:
  - featuremanager
  - design
  - tree
  - see
  - also
  - ifeaturemanager
  - ifeatmgrview
  - interfaces
  - split
  - panel
  - bar
  - featuremanagersplitterposition
  - imodeldoc2
  - model
  - doc2
  - feature
  - manager
  - splitter
  - position
  - double
  - add
  - activex
  - tabs
  - vb
  - net
  - vba
readonly: null
---

# IModelDoc2.FeatureManagerSplitterPosition

Splits the FeatureManager design tree and gets or sets the location of the split bar in the FeatureManager design tree panel.

## Signature

```csharp
System.Double FeatureManagerSplitterPosition {get; set;}
```
## Parameters

None.

## Return Value

Percentage value between 0 and 1, which sets the location of the split bar in the FeatureManager design tree panel and the size of each split FeatureManager design tree (see Remarks )

## Remarks

Setting this property to...
Results in the split panel bar..
.
0
Remaining above the FeatureManager design tree.
1
Moving below the FeatureManager design tree.
>0 and <1
Setting the size of the split FeatureManager design trees within the FeatureManager design tree panel.
For example, if you specify:
0.5, then each FeatureManager design tree takes up 50 percent of the panel, and the split bar is located between them.
0.8, then the bottom FeatureManager design tree takes up 80 percent of the panel, the top FeatureManager design tree takes up 20 percent of the panel, and the split bar is located between them.

## Examples

- Add ActiveX Tabs to FeatureManager Design Tree (C#) (Add_ActiveX_Tabs_to_FeatureManager_Design_Tree_Example_CSharp.htm)
- Add ActiveX Tabs to FeatureManager Design Tree (VB.NET) (Add_ActiveX_Tabs_to_FeatureManager_Design_Tree_Example_VBNET.htm)
- Add ActiveX Tabs to FeatureManager Design Tree (VBA) (Add_ActiveX_Tabs_to_FeatureManager_Design_Tree_Example_VB.htm)
- Split FeatureManager Design Tree and Position Splitter (C#) (Split_FeatureManager_Design_Tree_and_Position_Splitter_Example_CSharp.htm)
- Split FeatureManager Design Tree and Position Splitter (VB.NET) (Split_FeatureManager_Design_Tree_and_Position_Splitter_Example_VBNET.htm)
- Split FeatureManager Design Tree and Position Splitter (VBA) (Split_FeatureManager_Design_Tree_and_Position_Splitter_Example_VB.htm)