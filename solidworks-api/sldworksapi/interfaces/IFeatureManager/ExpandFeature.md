---
type: method
interface: IFeatureManager
member: ExpandFeature
returns: System.Boolean
parameters:
  -
    name: Component
    type: System.Object
    description: Component
  -
    name: FeatureName
    type: System.String
    description: Name of a feature in Component
  -
    name: WhichPane
    type: System.Int32
    description: FeatureManager design tree pane in which to expand Component as defined in swFeatMgrPane_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ITreeControlItem.Expanded
keywords:
  - featuremanager
  - design
  - tree
  - see
  - also
  - ifeaturemanager
  - ifeatmgrview
  - interfaces
  - expand
  - components
  - icomponent2
  - expandfeature
  - feature
  - manager
  - component
  - object
  - name
  - string
  - which
  - pane
  - int32
  - boolean
  - specified
  - vb
  - net
  - vba
---

# IFeatureManager.ExpandFeature

Expands the specified component in the specified FeatureManager design tree pane.

## Signature

```csharp
System.Boolean ExpandFeature( 
   System.Object
Component
,
   System.String
FeatureName
,
   System.Int32
WhichPane
)
```
## Parameters

- `Component` (System.Object): Component
- `FeatureName` (System.String): Name of a feature in Component
- `WhichPane` (System.Int32): FeatureManager design tree pane in which to expand Component as defined in swFeatMgrPane_e

## Return Value

True if the specified component is expanded in the specified FeatureManager design tree pane, false if not

## Examples

- Expand Component in Specified FeatureManager Design Tree Pane (C#) (Expand_Component_in_Specified_FeatureManager_Design_Tree_Pane_Example_CSharp.htm)
- Expand Component in Specified FeatureManager Design Tree Pane (VB.NET) (Expand_Component_in_Specified_FeatureManager_Design_Tree_Pane_Example_VBNET.htm)
- Expand Component in Specified FeatureManager Design Tree Pane (VBA) (Expand_Component_in_Specified_FeatureManager_Design_Tree_Pane_Example_VB.htm)

## See Also

- `ITreeControlItem.Expanded`