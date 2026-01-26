---
type: method
interface: IMacroFeatureData
member: GetProgId
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IMacroFeatureData.IsCOMFeature
  - IMacroFeatureData.SetProgId
keywords:
  - getprogid
  - imacrofeaturedata
  - macro
  - feature
  - data
  - prog
  - id
  - string
---

# IMacroFeatureData.GetProgId

Gets the version-independent program ID that is valid for this COM feature.

## Signature

```csharp
System.String GetProgId()
```
## Parameters

None.

## Return Value

Name of the program ID for the component that implements the COM feature handler

## See Also

- `IMacroFeatureData.IsCOMFeature`
- `IMacroFeatureData.SetProgId`