---
type: method
interface: IBodyFolder
member: GetTopLevelFeatures
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related: []
keywords:
  - gettoplevelfeatures
  - ibodyfolder
  - body
  - folder
  - top
  - level
  - features
  - object
---

# IBodyFolder.GetTopLevelFeatures

Gets the top-level features in this body folder.

## Signature

```csharp
System.Object GetTopLevelFeatures()
```
## Parameters

None.

## Return Value

Array of top-level IFeature s

## Remarks

Use
IBodyFolder::GetTopLevelFeatureCount
to determine the size of this method's returned array.