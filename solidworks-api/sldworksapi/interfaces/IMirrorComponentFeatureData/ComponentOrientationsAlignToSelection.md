---
type: property
interface: IMirrorComponentFeatureData
member: ComponentOrientationsAlignToSelection
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
  - componentorientationsaligntoselection
  - imirrorcomponentfeaturedata
  - mirror
  - component
  - feature
  - data
  - orientations
  - align
  - selection
  - object
readonly: null
---

# IMirrorComponentFeatureData.ComponentOrientationsAlignToSelection

Gets or sets the array of orientations for the components whose axes align to a selected reference.

## Signature

```csharp
System.Object ComponentOrientationsAlignToSelection {get; set;}
```
## Parameters

None.

## Return Value

Array of swMirrorComponentOrientation2_e values

## Remarks

There is a one-to-one mapping between this array and
IMirrorComponentFeatureData::ComponentsToInstanceAlignToSelection
. If there are fewer elements in this array than are in IMirrorComponentFeatureData::ComponentsToInstanceAlignToSelection, then missing orientations default to swMirrorComponentOrientation2_e.swOrientation_MirroredX_MirroredY.

## Examples

- IMirrorComponentFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMirrorComponentFeatureData)