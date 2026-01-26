---
type: property
interface: ISimpleFilletFeatureData2
member: ReverseFaceNormal
returns: System.Boolean
parameters:
  -
    name: WhichFaceList
    type: System.Int32
    description: Face for Reverse Face Normal option as defined in swSimpleFilletWhichFaces_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related: []
keywords:
  - reversefacenormal
  - isimplefilletfeaturedata2
  - simple
  - fillet
  - feature
  - data2
  - reverse
  - face
  - normal
  - which
  - list
  - int32
  - boolean
readonly: null
---

# ISimpleFilletFeatureData2.ReverseFaceNormal

Gets or sets the Reverse Face Normal option when creating a face fillet between surface bodies.

## Signature

```csharp
System.Boolean ReverseFaceNormal( 
   System.Int32
WhichFaceList
) {get; set;}
```
## Parameters

- `WhichFaceList` (System.Int32): Face for Reverse Face Normal option as defined in swSimpleFilletWhichFaces_e

## Return Value

True if the Reverse Face Normal option is enabled, false if not EndOLEPropertyRow

## Examples

- ISimpleFilletFeatureData2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISimpleHoleFeatureData2)