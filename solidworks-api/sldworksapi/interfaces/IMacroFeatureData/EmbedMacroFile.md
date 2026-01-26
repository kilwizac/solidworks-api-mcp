---
type: method
interface: IMacroFeatureData
member: EmbedMacroFile
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
  - embedmacrofile
  - imacrofeaturedata
  - macro
  - feature
  - data
  - embed
  - file
  - boolean
---

# IMacroFeatureData.EmbedMacroFile

Sets whether to embed the macro file in the model with the macro feature.

## Signature

```csharp
System.Boolean EmbedMacroFile()
```
## Parameters

None.

## Return Value

True to embed the macro file in the model with the macro feature, false to not

## Remarks

Call
IMacroFeatureData::MacroFileEmbedded
to determine if the macro file is embedded with the macro feature.
If this property is set to false, you should specify a detailed error message to display in the What's Wrong dialog when SOLIDWORKS fails to find files during macro feature load or rebuild. Specify this error message using
IMacroFeatureData:Provider
.