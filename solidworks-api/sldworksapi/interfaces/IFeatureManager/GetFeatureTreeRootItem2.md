---
type: method
interface: IFeatureManager
member: GetFeatureTreeRootItem2
returns: TreeControlItem
parameters:
  -
    name: WhichPane
    type: System.Int32
    description: FeatureManager design tree pane as defined in swFeatMgrPane_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
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
  - root
  - getfeaturetreerootitem2
  - feature
  - manager
  - item2
  - which
  - pane
  - int32
  - control
  - item
  - expand
  - collapse
  - nodes
  - vba
  - vb
  - net
---

# IFeatureManager.GetFeatureTreeRootItem2

Gets the root item of the FeatureManager design tree in the specified pane.

## Signature

```csharp
TreeControlItem GetFeatureTreeRootItem2( 
   System.Int32
WhichPane
)
```
## Parameters

- `WhichPane` (System.Int32): FeatureManager design tree pane as defined in swFeatMgrPane_e

## Return Value

ITreeControlItem

## Examples

- Expand or Collapse FeatureManager Design Tree Nodes (VBA) (Expand_and_Collapse_FeatureManager_Design_Tree_Nodes_VB.htm)
- Expand or Collapse FeatureManager Design Tree Nodes (VB.NET) (Expand_and_Collapse_FeatureManager_Design_Tree_Nodes_Example_VBNET.htm)
- Expand or Collapse FeatureManager Design Tree Nodes (C#) (Expand_and_Collapse_FeatureManager_Design_Tree_Nodes_Example_CSharp.htm)