---
type: property
interface: IDerivedPartFeatureData
member: ImportCutListProperties
returns: System.Boolean
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
  - importcutlistproperties
  - iderivedpartfeaturedata
  - derived
  - part
  - feature
  - data
  - import
  - cut
  - list
  - properties
  - boolean
readonly: null
---

# IDerivedPartFeatureData.ImportCutListProperties

Gets or sets whether to import cut list properties with the derived part feature.

## Signature

```csharp
System.Boolean ImportCutListProperties {get; set;}
```
## Parameters

None.

## Return Value

True to import its cut list properties, false to not

## Remarks

This property is valid only if:
the derived part has cut list properties,
- and -
IDerivedPartFeatureData::ImportSheetMetalInformation
is not specified.