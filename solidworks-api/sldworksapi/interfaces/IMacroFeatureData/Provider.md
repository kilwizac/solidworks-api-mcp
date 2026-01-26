---
type: property
interface: IMacroFeatureData
member: Provider
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IMacroFeatureData.EmbedMacroFile
  - IMacroFeatureData.MacroFileEmbedded
  - IModelDocExtension.GetWhatsWrong
keywords:
  - what
  - wrong
  - provider
  - imacrofeaturedata
  - macro
  - feature
  - data
  - string
readonly: null
---

# IMacroFeatureData.Provider

Gets or sets the error message to display in the What's Wrong dialog when a non-embedded macro feature fails to rebuild due to missing files.

## Signature

```csharp
System.String Provider {get; set;}
```
## Parameters

None.

## Return Value

Error message

## Remarks

This property allows you to replace the generic error message that appears in the What's Wrong dialog with a more detailed error message when this non-embedded macro feature fails to load or rebuild due to missing files.
Possible causes of macro feature rebuild failure:
The model contains this COM-based macro feature, but the rebuild, edit, and security callbacks exist in an add-in that SOLIDWORKS cannot locate.
The model references this non-embedded macro feature which exists in a VBA macro that SOLIDWORKS cannot locate.
Third-party DLLs, add-in files, or other files associated with this non-embedded macro feature are missing.
NOTE:
All files required by embedded macro features are serialized with the model, so
File not found
errors do not occur for embedded macros, and this property need not be set for them.

## See Also

- `IMacroFeatureData.EmbedMacroFile`
- `IMacroFeatureData.MacroFileEmbedded`
- `IModelDocExtension.GetWhatsWrong`