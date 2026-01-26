---
type: property
interface: ISplitBodyFeatureData
member: TemplatePath
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related: []
keywords:
  - templatepath
  - isplitbodyfeaturedata
  - split
  - body
  - feature
  - data
  - template
  - path
  - string
readonly: null
---

# ISplitBodyFeatureData.TemplatePath

Gets or sets the template to use to make this Split feature.

## Signature

```csharp
System.String TemplatePath {get; set;}
```
## Parameters

None.

## Return Value

Path and file name of the template

## Remarks

Set this property only if
ISplitBodyFeatureData::OverrideDefaultTemplateSettings
is set to true.