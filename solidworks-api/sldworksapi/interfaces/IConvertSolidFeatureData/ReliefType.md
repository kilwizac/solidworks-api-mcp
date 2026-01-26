---
type: property
interface: IConvertSolidFeatureData
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
  - iconvertsolidfeaturedata
  - convert
  - solid
  - feature
  - data
  - relief
  - type
  - int32
readonly: null
---

# IConvertSolidFeatureData.ReliefType

Gets or sets the bend relief type in this convert solid feature.

## Signature

```csharp
System.Int32 ReliefType {get; set;}
```
## Parameters

None.

## Return Value

Bend relief type as defined by swSheetMetalAutoReliefTypes_e

## Remarks

The setter of this property is valid only if
IConvertSolidFeatureData::OverrideDefaultAutoReliefParameters
is true.

## Examples

- IConvertSolidFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IConvertSolidFeatureData)