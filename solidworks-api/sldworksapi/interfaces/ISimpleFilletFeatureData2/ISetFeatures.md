---
type: method
interface: ISimpleFilletFeatureData2
member: ISetFeatures
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of features
  -
    name: FeatList
    type: Feature
    description: in-process, unmanaged C++: Pointer to an array of features of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISimpleFilletFeatureData2.Features
  - ISimpleFilletFeatureData2.GetFeatureCount
  - ISimpleFilletFeatureData2.IGetFeatures
keywords:
  - isetfeatures
  - isimplefilletfeaturedata2
  - simple
  - fillet
  - feature
  - data2
  - features
  - count
  - int32
  - feat
  - list
  - void
---

# ISimpleFilletFeatureData2.ISetFeatures

Sets the features on which to create a simple radius fillet.

## Signature

```csharp
void ISetFeatures( 
   System.Int32
Count
,
   ref Feature
FeatList
)
```
## Parameters

- `Count` (System.Int32): Number of features
- `FeatList` (Feature): in-process, unmanaged C++: Pointer to an array of features of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISimpleFilletFeatureData2.Features`
- `ISimpleFilletFeatureData2.GetFeatureCount`
- `ISimpleFilletFeatureData2.IGetFeatures`