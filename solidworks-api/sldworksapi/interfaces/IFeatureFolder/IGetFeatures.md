---
type: method
interface: IFeatureFolder
member: IGetFeatures
returns: Feature
parameters:
  -
    name: NumOfFeatures
    type: System.Int32
    description: Number of features in the folder
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeatureFolder.GetFeatures
keywords:
  - igetfeatures
  - ifeaturefolder
  - feature
  - folder
  - features
  - num
  - int32
---

# IFeatureFolder.IGetFeatures

Gets the features in this feature folder.

## Signature

```csharp
Feature IGetFeatures( 
   System.Int32
NumOfFeatures
)
```
## Parameters

- `NumOfFeatures` (System.Int32): Number of features in the folder

## Return Value

in-process, unmanaged C++: Pointer to an array of features VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IFeatureFolder::GetFeatureCount
to populate NumOfFeatures.

## See Also

- `IFeatureFolder.GetFeatures`