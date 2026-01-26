---
type: property
interface: IBaseFlangeFeatureData
member: ReliefType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - relieftype
  - ibaseflangefeaturedata
  - base
  - flange
  - feature
  - data
  - relief
  - type
  - int32
readonly: true
---

# IBaseFlangeFeatureData.ReliefType

Gets the bend relief type for this base flange feature.

## Signature

```csharp
System.Int32 ReliefType {get;}
```
## Parameters

None.

## Return Value

Bend relief type as defined by swSheetMetalReliefTypes_e

## Remarks

The relief type is set during the
initialization
of this base flange and cannot be changed.

## Examples

- IBaseFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBaseFlangeFeatureData)