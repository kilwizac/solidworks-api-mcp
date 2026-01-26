---
type: property
interface: ITreeControlItem
member: Object
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - object
  - itreecontrolitem
  - tree
  - control
  - item
  - traverse
  - featuremanager
  - design
  - vba
  - expand
  - collapse
  - nodes
  - vb
  - net
readonly: true
---

# ITreeControlItem.Object

Gets the SOLIDWORKS object associated with this item in the FeatureManager design tree.

## Signature

```csharp
System.Object Object {get;}
```
## Parameters

None.

## Return Value

SOLIDWORKS object associated with this item in the FeatureManager design tree (see R emarks )

## Remarks

Currently only
features
and
components
are supported. Null is returned for sub-components of an assembly loaded hidden with a selective open.
Use
ITreeControlItem::ObjectType
to determine the SOLIDWORKS object type.

## Examples

- Traverse FeatureManager Design Tree (VBA) (Traverse_FeatureManager_Design_Tree_VB.htm)
- Expand or Collapse FeatureManager Design Tree Nodes (VBA) (Expand_and_Collapse_FeatureManager_Design_Tree_Nodes_VB.htm)
- Expand or Collapse FeatureManager Design Tree Nodes (VB.NET) (Expand_and_Collapse_FeatureManager_Design_Tree_Nodes_Example_VBNET.htm)
- Expand or Collapse FeatureManager Design Tree Nodes (C#) (Expand_and_Collapse_FeatureManager_Design_Tree_Nodes_Example_CSharp.htm)