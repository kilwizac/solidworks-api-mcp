---
type: method
interface: IMacroFeatureData
member: GetIconFileCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - file-io
related:
  - IMacroFeatureData.IGetIconFiles
  - IMacroFeatureData.ISetIconFiles
  - IMacroFeatureData.IconFiles
keywords:
  - geticonfilecount
  - imacrofeaturedata
  - macro
  - feature
  - data
  - icon
  - file
  - count
  - int32
---

# IMacroFeatureData.GetIconFileCount

Gets the number of the files for the icons for this macro feature.

## Signature

```csharp
System.Int32 GetIconFileCount()
```
## Parameters

None.

## Return Value

Number of files for the icons

## Remarks

Call this method before calling
IMacroFeatureData::IGetIconFiles
to determine the size of the array for that method.

## See Also

- `IMacroFeatureData.IGetIconFiles`
- `IMacroFeatureData.ISetIconFiles`
- `IMacroFeatureData.IconFiles`