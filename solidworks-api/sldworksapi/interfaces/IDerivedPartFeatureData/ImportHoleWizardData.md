---
type: property
interface: IDerivedPartFeatureData
member: ImportHoleWizardData
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
  - importholewizarddata
  - iderivedpartfeaturedata
  - derived
  - part
  - feature
  - data
  - import
  - hole
  - wizard
  - boolean
readonly: null
---

# IDerivedPartFeatureData.ImportHoleWizardData

Gets or sets whether to import Hole Wizard data with the derived part feature.

## Signature

```csharp
System.Boolean ImportHoleWizardData {get; set;}
```
## Parameters

None.

## Return Value

True to import its Hole Wizard data, false to not

## Remarks

This property is valid only if
IDerivedPartFeatureData::ImportSolidBodies
is true.