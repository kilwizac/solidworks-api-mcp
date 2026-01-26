---
type: property
interface: IMirrorComponentFeatureData
member: MirrorType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - features
related: []
keywords:
  - mirrortype
  - imirrorcomponentfeaturedata
  - mirror
  - component
  - feature
  - data
  - type
  - int32
readonly: null
---

# IMirrorComponentFeatureData.MirrorType

Gets or sets the mirror position.

## Signature

```csharp
System.Int32 MirrorType {get; set;}
```
## Parameters

None.

## Return Value

Type of mirror as defined by swMirrorComponentMirrorType_e

## Remarks

If not explicitly set, this property defaults to swMirrorComponentMirrorType_e.swMirrorType_CenterOfBoundingBox.

## Examples

- IMirrorComponentFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMirrorComponentFeatureData)