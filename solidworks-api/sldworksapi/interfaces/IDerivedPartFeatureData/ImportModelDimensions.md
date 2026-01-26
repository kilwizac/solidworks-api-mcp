---
type: property
interface: IDerivedPartFeatureData
member: ImportModelDimensions
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - features
  - file-io
  - parts
related: []
keywords:
  - importmodeldimensions
  - iderivedpartfeaturedata
  - derived
  - part
  - feature
  - data
  - import
  - model
  - dimensions
  - boolean
readonly: null
---

# IDerivedPartFeatureData.ImportModelDimensions

Gets or sets whether to import model dimensions with the derived part feature.

## Signature

```csharp
System.Boolean ImportModelDimensions {get; set;}
```
## Parameters

None.

## Return Value

True to import its model dimensions, false to not

## Remarks

This property is valid onlty if
IDerivedPartFeatureData::ImportSolidBodies
is true.