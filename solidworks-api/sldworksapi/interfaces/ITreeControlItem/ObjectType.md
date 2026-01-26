---
type: property
interface: ITreeControlItem
member: ObjectType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - objecttype
  - itreecontrolitem
  - tree
  - control
  - item
  - object
  - type
  - int32
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

# ITreeControlItem.ObjectType

Gets the type of SOLIDWORKS object for this item in the FeatureManager design tree.

## Signature

```csharp
System.Int32 ObjectType {get;}
```
## Parameters

None.

## Return Value

Type of SOLIDWORKS object for this item in the FeatureManager design tree as defined by swTreeControlItemType_e

## Remarks

Currently only
features
and
components
are supported. Null is returned for sub-components of an assembly loaded hidden with a selective open.
Use
ITreeControlItem::Object
to get the SOLIDWORKS object associated with this item.

## Examples

- Traverse FeatureManager Design Tree (VBA) (Traverse_FeatureManager_Design_Tree_VB.htm)
- Expand or Collapse FeatureManager Design Tree Nodes (VBA) (Expand_and_Collapse_FeatureManager_Design_Tree_Nodes_VB.htm)
- Expand or Collapse FeatureManager Design Tree Nodes (VB.NET) (Expand_and_Collapse_FeatureManager_Design_Tree_Nodes_Example_VBNET.htm)
- Expand or Collapse FeatureManager Design Tree Nodes (C#) (Expand_and_Collapse_FeatureManager_Design_Tree_Nodes_Example_CSharp.htm)