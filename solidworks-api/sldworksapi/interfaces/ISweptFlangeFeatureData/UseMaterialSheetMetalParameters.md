---
type: property
interface: ISweptFlangeFeatureData
member: UseMaterialSheetMetalParameters
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - usematerialsheetmetalparameters
  - isweptflangefeaturedata
  - swept
  - flange
  - feature
  - data
  - use
  - material
  - sheet
  - metal
  - parameters
  - boolean
readonly: null
---

# ISweptFlangeFeatureData.UseMaterialSheetMetalParameters

Gets or sets whether to use the material sheet metal parameters in this swept flange feature.

## Signature

```csharp
System.Boolean UseMaterialSheetMetalParameters {get; set;}
```
## Parameters

None.

## Return Value

True to use the material sheet metal parameters, false to not

## Remarks

This property is valid only:
when not creating the swept flange on an existing sheet metal feature,
- and -
when
ISweptFlangeFeatureData::UseGaugeTable
is false.

## Examples

- ISweptFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISweptFlangeFeatureData)