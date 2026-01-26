---
type: property
interface: IMirrorComponentFeatureData
member: ComponentsToInstanceAlignToComponentOrigin
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - features
related: []
keywords:
  - componentstoinstancealigntocomponentorigin
  - imirrorcomponentfeaturedata
  - mirror
  - component
  - feature
  - data
  - components
  - instance
  - align
  - origin
  - object
readonly: null
---

# IMirrorComponentFeatureData.ComponentsToInstanceAlignToComponentOrigin

Gets or sets the array of components whose orientation axes align to origins.

## Signature

```csharp
System.Object ComponentsToInstanceAlignToComponentOrigin {get; set;}
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
IMirrorComponentFeatureData::ComponentOrientationsAlignToComponentOrigin
to specify the orientation of each component in this array.

## Examples

- IMirrorComponentFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMirrorComponentFeatureData)