---
type: property
interface: IMacroFeatureData
member: MacroFileEmbedded
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - file-io
related: []
keywords:
  - macrofileembedded
  - imacrofeaturedata
  - macro
  - feature
  - data
  - file
  - embedded
  - boolean
readonly: true
---

# IMacroFeatureData.MacroFileEmbedded

Gets whether the macro file is embedded ini the model with the macro feature.

## Signature

```csharp
System.Boolean MacroFileEmbedded {get;}
```
## Parameters

None.

## Return Value

True if the macro file is embedded in the model with the macro feature, false if not

## Remarks

If this property is false, you should specify a detailed error message to display in the What's Wrong dialog when SOLIDWORKS fails to find files during macro feature load or rebuild. To specify this error message, use
IMacroFeatureData:Provider
.
Call
IMacroFeatureData::EmbedMacroFile
to set whether to embed the macro file with the macro feature.