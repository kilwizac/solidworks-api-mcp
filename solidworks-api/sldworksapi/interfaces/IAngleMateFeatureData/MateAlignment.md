---
type: property
interface: IAngleMateFeatureData
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
  - ianglematefeaturedata
  - angle
  - mate
  - feature
  - data
  - alignment
  - int32
readonly: null
---

# IAngleMateFeatureData.MateAlignment

Gets or sets the alignment of this angle mate.

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

- IAngleMateFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAngleMateFeatureData)