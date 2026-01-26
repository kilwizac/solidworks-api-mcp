---
type: property
interface: IDerivedPartFeatureData
member: ImportSheetMetalInformation
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - file-io
  - parts
related: []
keywords:
  - importsheetmetalinformation
  - iderivedpartfeaturedata
  - derived
  - part
  - feature
  - data
  - import
  - sheet
  - metal
  - information
  - int32
readonly: null
---

# IDerivedPartFeatureData.ImportSheetMetalInformation

Gets or sets how to import sheet metal information with the derived part feature.

## Signature

```csharp
System.Int32 ImportSheetMetalInformation {get; set;}
```
## Parameters

None.

## Return Value

How to import sheet metal information as defined in swImportSheetMetalInformation_e

## Remarks

This property:
is valid only if the part being inserted is a sheet metal part.
is not valid if
IDerivedPartFeatureData::ImportCutListProperties
is set to true.