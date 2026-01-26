---
type: property
interface: ISymmetricMateFeatureData
member: MateAlignment
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
  - matealignment
  - isymmetricmatefeaturedata
  - symmetric
  - mate
  - feature
  - data
  - alignment
  - int32
readonly: null
---

# ISymmetricMateFeatureData.MateAlignment

Gets or sets the alignment of this symmetry mate.

## Signature

```csharp
System.Int32 MateAlignment {get; set;}
```
## Parameters

None.

## Return Value

Mate alignment as defined in swMateAlign_e

## Remarks

If this property is set to swMateAlign_e:
swMateAlignALIGNED, then vectors normal to the selected entities point in the same direction.
swMateAlignANTI_ALIGNED, then vectors normal to the selected entities point in opposite directions.

## Examples

- ISymmetricMateFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISymmetricMateFeatureData)