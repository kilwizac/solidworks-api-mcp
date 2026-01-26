---
type: property
interface: IMirrorComponentFeatureData
member: AlignmentReferences
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - features
related:
  - IMirrorComponentFeatureData.FlipDirections
keywords:
  - alignmentreferences
  - imirrorcomponentfeaturedata
  - mirror
  - component
  - feature
  - data
  - alignment
  - references
  - object
readonly: null
---

# IMirrorComponentFeatureData.AlignmentReferences

Gets or sets the alignment references for components whose orientation axes align to them.

## Signature

```csharp
System.Object AlignmentReferences {get; set;}
```
## Parameters

None.

## Return Value

Array of IEdge , IFace2 , IRefPlane , ISketchSegment (linear)

## Remarks

This property is valid only if
IMirrorComponentFeatureData::ComponentsToInstanceAlignToSelection
is not null or Nothing.
There is a one-to-one mapping between this property's array and IMirrorComponentFeatureData::ComponentsToInstanceAlignToSelection. If this array contains fewer elements than IMirrorComponentFeatureData::ComponentsToInstanceAlignToSelection, then the feature will fail to be created.

## Examples

- IMirrorComponentFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMirrorComponentFeatureData)

## See Also

- `IMirrorComponentFeatureData.FlipDirections`