---
type: method
interface: IFeatureFolder
member: GetFeatures
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeatureFolder.IGetFeatures
keywords:
  - getfeatures
  - ifeaturefolder
  - feature
  - folder
  - features
  - object
  - contents
  - featurefolder
  - vb
  - net
  - vba
---

# IFeatureFolder.GetFeatures

Gets the features in this feature folder.

## Signature

```csharp
System.Object GetFeatures()
```
## Parameters

None.

## Return Value

Array of IFeature objects

## Remarks

Before calling this method, call
IFeatureFolder::GetFeatureCount
to get the size of the array returned by this method.

## Examples

- Get Contents of FeatureFolder (C#) (Get_Contents_of_FeatureFolder_Example_CSharp.htm)
- Get Contents of FeatureFolder (VB.NET) (Get_Contents_of_FeatureFolder_Example_VBNET.htm)
- Get Contents of FeatureFolder (VBA) (Get_Contents_of_FeatureFolder_Example_VB.htm)

## See Also

- `IFeatureFolder.IGetFeatures`