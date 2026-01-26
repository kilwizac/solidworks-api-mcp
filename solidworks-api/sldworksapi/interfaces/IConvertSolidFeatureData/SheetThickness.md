---
type: property
interface: IConvertSolidFeatureData
member: SheetThickness
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - sheetthickness
  - iconvertsolidfeaturedata
  - convert
  - solid
  - feature
  - data
  - sheet
  - thickness
  - double
readonly: null
---

# IConvertSolidFeatureData.SheetThickness

Gets or sets the sheet thickness of this convert solid feature.

## Signature

```csharp
System.Double SheetThickness {get; set;}
```
## Parameters

None.

## Return Value

Sheet thickness

## Remarks

The setter of this property is valid only if
IConvertSolidFeatureData::OverrideDefaultSheetMetalParameters
is true.

## Examples

- IConvertSolidFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IConvertSolidFeatureData)