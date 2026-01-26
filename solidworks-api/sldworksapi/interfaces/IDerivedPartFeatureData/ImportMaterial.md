---
type: property
interface: IDerivedPartFeatureData
member: ImportMaterial
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
  - importmaterial
  - iderivedpartfeaturedata
  - derived
  - part
  - feature
  - data
  - import
  - material
  - boolean
readonly: null
---

# IDerivedPartFeatureData.ImportMaterial

Gets or sets whether to import material with the derived part feature.

## Signature

```csharp
System.Boolean ImportMaterial {get; set;}
```
## Parameters

None.

## Return Value

True to import its material, false to not

## Remarks

This property is valid only while the derived part is being inserted. It is not valid while it is being edited.