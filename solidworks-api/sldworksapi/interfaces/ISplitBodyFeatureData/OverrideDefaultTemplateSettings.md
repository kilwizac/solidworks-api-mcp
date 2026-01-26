---
type: property
interface: ISplitBodyFeatureData
member: OverrideDefaultTemplateSettings
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related: []
keywords:
  - overridedefaulttemplatesettings
  - isplitbodyfeaturedata
  - split
  - body
  - feature
  - data
  - override
  - default
  - template
  - settings
  - boolean
readonly: null
---

# ISplitBodyFeatureData.OverrideDefaultTemplateSettings

Gets or sets whether to use an alternate template to apply to all new part or assembly files created during the split operation.

## Signature

```csharp
System.Boolean OverrideDefaultTemplateSettings {get; set;}
```
## Parameters

None.

## Return Value

True to use an alternate template, false to use the default template

## Remarks

Use
ISplitBodyFeatureData::TemplatePath
to specify the alternate template.