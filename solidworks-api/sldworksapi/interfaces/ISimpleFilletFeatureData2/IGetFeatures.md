---
type: method
interface: ISimpleFilletFeatureData2
member: IGetFeatures
returns: Feature
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of features
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISimpleFilletFeatureData2.Features
  - ISimpleFilletFeatureData2.ISetFeatures
keywords:
  - igetfeatures
  - isimplefilletfeaturedata2
  - simple
  - fillet
  - feature
  - data2
  - features
  - count
  - int32
---

# ISimpleFilletFeatureData2.IGetFeatures

Gets the features on which to create a simple radius fillet.

## Signature

```csharp
Feature IGetFeatures( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of features

## Return Value

in-process, unmanaged C++: Pointer to an array of features of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
ISimpleFilletFeatureData2::GetFeatureCount
before calling this method to get the value for Count.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISimpleFilletFeatureData2.Features`
- `ISimpleFilletFeatureData2.ISetFeatures`