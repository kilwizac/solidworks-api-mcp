---
type: property
interface: IMirrorComponentFeatureData
member: FlipDirections
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
  - flipdirections
  - imirrorcomponentfeaturedata
  - mirror
  - component
  - feature
  - data
  - flip
  - directions
  - object
readonly: null
---

# IMirrorComponentFeatureData.FlipDirections

Gets or sets whether to reverse the direction of alignment for selected alignment references.

## Signature

```csharp
System.Object FlipDirections {get; set;}
```
## Parameters

None.

## Return Value

Array of Boolean values; true to flip alignment directions, false to not

## Remarks

This property is valid only if
IMirrorComponentFeatureData::AlignmentReferences
is not Nothing or null.
If this property is not explicitly set, it defaults to false.

## Examples

- IMirrorComponentFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMirrorComponentFeatureData)