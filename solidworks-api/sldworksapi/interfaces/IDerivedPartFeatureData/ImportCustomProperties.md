---
type: property
interface: IDerivedPartFeatureData
member: ImportCustomProperties
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
  - importcustomproperties
  - iderivedpartfeaturedata
  - derived
  - part
  - feature
  - data
  - import
  - custom
  - properties
  - int32
readonly: null
---

# IDerivedPartFeatureData.ImportCustomProperties

Gets or sets which custom properties to import with the derived part feature.

## Signature

```csharp
System.Int32 ImportCustomProperties {get; set;}
```
## Parameters

None.

## Return Value

Custom properties to import as defined in swImportPartCustomPropertiesToOptions_e

## Remarks

This property is valid when:
the derived part has custom properties,
- and -
IDerivedPartFeatureData::ImportSolidBodies
is set to true.