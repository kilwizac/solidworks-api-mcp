---
type: property
interface: IMirrorComponentFeatureData
member: ComponentsToInstanceAlignToSelection
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - features
  - selections
related: []
keywords:
  - componentstoinstancealigntoselection
  - imirrorcomponentfeaturedata
  - mirror
  - component
  - feature
  - data
  - components
  - instance
  - align
  - selection
  - object
readonly: null
---

# IMirrorComponentFeatureData.ComponentsToInstanceAlignToSelection

Gets or sets the array of components whose orientation axes align to selected references.

## Signature

```csharp
System.Object ComponentsToInstanceAlignToSelection {get; set;}
```
## Parameters

None.

## Return Value

Array of IComponent2

## Remarks

This property is valid only for components for which you are
not
creating opposite-hand versions. Use
IMirrorComponentFeatureData::OppositeHandComponents
to specify components for which you are creating opposite-hand versions.
Use
IMirrorComponentFeatureData::ComponentOrientationsAlignToSelection
to specify the orientation of each component in this property's array. There is a one-to-one mapping between this property's array and IMirrorComponentFeatureData::ComponentOrientationsAlignToSelection.
Use
IMirrorComponentFeatureData::AlignmentReferences
to specify alignment references. There is a one-to-one mapping between this property's array and IMirrorComponentFeatureData::AlignmentReferences. If this property's array contains more elements than IMirrorComponentFeatureData::AlignmentReferences, then the feature will fail to be created.

## Examples

- IMirrorComponentFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMirrorComponentFeatureData)