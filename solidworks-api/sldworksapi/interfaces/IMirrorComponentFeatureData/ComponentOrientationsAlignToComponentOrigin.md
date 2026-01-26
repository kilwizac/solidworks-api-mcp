---
type: property
interface: IMirrorComponentFeatureData
member: ComponentOrientationsAlignToComponentOrigin
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
  - componentorientationsaligntocomponentorigin
  - imirrorcomponentfeaturedata
  - mirror
  - component
  - feature
  - data
  - orientations
  - align
  - origin
  - object
readonly: null
---

# IMirrorComponentFeatureData.ComponentOrientationsAlignToComponentOrigin

Gets or sets the array of orientations for the components whose axes align to origins.

## Signature

```csharp
System.Object ComponentOrientationsAlignToComponentOrigin {get; set;}
```
## Parameters

None.

## Return Value

Array of swMirrorComponentOrientation2_e values

## Remarks

There is a one-to-one mapping between this array and
IMirrorComponentFeatureData::ComponentsToInstanceAlignToComponentOrigin
. If there are fewer elements in this array than are in IMirrorComponentFeatureData::ComponentsToInstanceAlignToComponentOrigin, then missing orientations default to swMirrorComponentOrientation2_e.swOrientation_MirroredX_MirroredY.

## Examples

- IMirrorComponentFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMirrorComponentFeatureData)